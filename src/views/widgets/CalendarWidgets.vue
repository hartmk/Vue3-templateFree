<template>
  <div class="container-fluid px-5 py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="mb-2">Calendar Widgets</h2>
        <p class="text-muted">วิดเจ็ตปฏิทินและการจัดการกิจกรรม</p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
          <li class="breadcrumb-item">Widgets</li>
          <li class="breadcrumb-item active">Calendar Widgets</li>
        </ol>
      </nav>
    </div>

    <!-- Main Calendar -->
    <div class="row mb-5">
      <div class="col-lg-8 mb-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">{{ monthNames[currentMonth] }} {{ currentYear }}</h5>
            <div class="calendar-controls">
              <button class="btn btn-outline-primary btn-sm me-2" @click="previousMonth">
                <i class="fas fa-chevron-left"></i>
              </button>
              <button class="btn btn-outline-primary btn-sm me-2" @click="goToToday">วันนี้</button>
              <button class="btn btn-outline-primary btn-sm" @click="nextMonth">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="calendar-grid">
              <div class="calendar-header">
                <div v-for="day in dayNames" :key="day" class="day-header">{{ day }}</div>
              </div>
              <div class="calendar-body">
                <div v-for="week in calendarWeeks" :key="week.weekNumber" class="calendar-week">
                  <div v-for="day in week.days" :key="day.date" 
                       class="calendar-day" 
                       :class="getDayClass(day)"
                       @click="selectDate(day)">
                    <span class="day-number">{{ day.day }}</span>
                    <div class="day-events">
                      <div v-for="event in day.events" :key="event.id" 
                           class="day-event" :class="getEventClass(event.type)">
                        {{ event.title }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">กิจกรรมวันนี้</h5>
          </div>
          <div class="card-body">
            <div class="today-events">
              <div v-for="event in todayEvents" :key="event.id" class="event-item">
                <div class="event-time">{{ event.time }}</div>
                <div class="event-content">
                  <h6 class="event-title">{{ event.title }}</h6>
                  <p class="event-description">{{ event.description }}</p>
                  <span class="event-type-badge" :class="getEventClass(event.type)">
                    {{ getEventTypeName(event.type) }}
                  </span>
                </div>
              </div>
              
              <div v-if="todayEvents.length === 0" class="no-events">
                <i class="fas fa-calendar-check fa-3x text-muted mb-3"></i>
                <p class="text-muted">ไม่มีกิจกรรมในวันนี้</p>
              </div>
            </div>
            
            <button class="btn btn-primary w-100 mt-3" @click="showAddEventModal = true">
              <i class="fas fa-plus me-2"></i>เพิ่มกิจกรรม
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Calendar Statistics -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Calendar Statistics</h4>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-center">
          <div class="card-body">
            <div class="stat-icon bg-primary">
              <i class="fas fa-calendar-alt text-white"></i>
            </div>
            <h3 class="mt-3">{{ totalEvents }}</h3>
            <p class="text-muted">กิจกรรมทั้งหมด</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-center">
          <div class="card-body">
            <div class="stat-icon bg-success">
              <i class="fas fa-check text-white"></i>
            </div>
            <h3 class="mt-3">{{ completedEvents }}</h3>
            <p class="text-muted">เสร็จแล้ว</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-center">
          <div class="card-body">
            <div class="stat-icon bg-warning">
              <i class="fas fa-clock text-white"></i>
            </div>
            <h3 class="mt-3">{{ upcomingEvents }}</h3>
            <p class="text-muted">กำลังจะมาถึง</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-center">
          <div class="card-body">
            <div class="stat-icon bg-info">
              <i class="fas fa-users text-white"></i>
            </div>
            <h3 class="mt-3">{{ meetingEvents }}</h3>
            <p class="text-muted">ประชุม</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Upcoming Events -->
    <div class="row mb-5">
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">กิจกรรมที่กำลังจะมาถึง</h5>
          </div>
          <div class="card-body">
            <div class="upcoming-events">
              <div v-for="event in upcomingEventsData" :key="event.id" class="upcoming-event">
                <div class="event-date">
                  <div class="date-day">{{ event.date.getDate() }}</div>
                  <div class="date-month">{{ monthAbbr[event.date.getMonth()] }}</div>
                </div>
                <div class="event-details">
                  <h6 class="event-title">{{ event.title }}</h6>
                  <p class="event-time">
                    <i class="fas fa-clock me-1"></i>{{ event.time }}
                  </p>
                  <p class="event-location" v-if="event.location">
                    <i class="fas fa-map-marker-alt me-1"></i>{{ event.location }}
                  </p>
                </div>
                <div class="event-type">
                  <span class="badge" :class="getEventClass(event.type)">
                    {{ getEventTypeName(event.type) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">ประเภทกิจกรรม</h5>
          </div>
          <div class="card-body">
            <div class="event-types-chart">
              <div v-for="type in eventTypesStats" :key="type.name" class="type-stat">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <div class="type-info">
                    <span class="type-color" :class="getEventClass(type.type)"></span>
                    <span class="type-name">{{ type.name }}</span>
                  </div>
                  <span class="type-count">{{ type.count }}</span>
                </div>
                <div class="progress" style="height: 8px;">
                  <div class="progress-bar" :class="getEventProgressClass(type.type)"
                       :style="{ width: (type.count / totalEvents * 100) + '%' }"></div>
                </div>
              </div>
            </div>
            
            <div class="event-summary mt-4">
              <h6>สรุปรายเดือน</h6>
              <div class="summary-grid">
                <div class="summary-item">
                  <span class="summary-label">ประชุม</span>
                  <span class="summary-value">{{ getMonthlySummary('meeting') }}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">งาน</span>
                  <span class="summary-value">{{ getMonthlySummary('task') }}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">ส่วนตัว</span>
                  <span class="summary-value">{{ getMonthlySummary('personal') }}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">อื่นๆ</span>
                  <span class="summary-value">{{ getMonthlySummary('other') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mini Calendar Widgets -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Mini Calendar Widgets</h4>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="mini-calendar">
              <h6 class="text-center mb-3">{{ monthNames[currentMonth] }}</h6>
              <div class="mini-calendar-grid">
                <div class="mini-day-header" v-for="day in dayAbbr" :key="day">{{ day }}</div>
                <div v-for="day in getMiniCalendarDays()" :key="day.date" 
                     class="mini-day" :class="getMiniDayClass(day)">
                  {{ day.day }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="quick-add-event">
              <h6 class="mb-3">เพิ่มกิจกรรมด่วน</h6>
              <div class="mb-2">
                <input type="text" class="form-control form-control-sm" 
                       v-model="quickEvent.title" placeholder="ชื่อกิจกรรม">
              </div>
              <div class="mb-2">
                <input type="time" class="form-control form-control-sm" v-model="quickEvent.time">
              </div>
              <div class="mb-2">
                <select class="form-select form-select-sm" v-model="quickEvent.type">
                  <option value="meeting">ประชุม</option>
                  <option value="task">งาน</option>
                  <option value="personal">ส่วนตัว</option>
                  <option value="other">อื่นๆ</option>
                </select>
              </div>
              <button class="btn btn-primary btn-sm w-100" @click="addQuickEvent">
                <i class="fas fa-plus me-1"></i>เพิ่ม
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="calendar-reminders">
              <h6 class="mb-3">การแจ้งเตือน</h6>
              <div class="reminder-list">
                <div v-for="reminder in reminders" :key="reminder.id" class="reminder-item">
                  <div class="reminder-time">{{ reminder.time }}</div>
                  <div class="reminder-text">{{ reminder.text }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="calendar-weather">
              <h6 class="mb-3">สภาพอากาศ</h6>
              <div class="weather-today">
                <div class="weather-icon">
                  <i class="fas fa-sun text-warning fa-2x"></i>
                </div>
                <div class="weather-info">
                  <div class="temperature">32°C</div>
                  <div class="condition">แดดจัด</div>
                </div>
              </div>
              <div class="weather-forecast">
                <div class="forecast-day">
                  <span>พรุ่งนี้</span>
                  <span>30°C <i class="fas fa-cloud text-info"></i></span>
                </div>
                <div class="forecast-day">
                  <span>มะรืนนี้</span>
                  <span>28°C <i class="fas fa-cloud-rain text-primary"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Event Modal -->
    <div class="modal fade" :class="{ 'show d-block': showAddEventModal }" v-if="showAddEventModal" @click.self="showAddEventModal = false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">เพิ่มกิจกรรมใหม่</h5>
            <button type="button" class="btn-close" @click="showAddEventModal = false"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">ชื่อกิจกรรม</label>
              <input type="text" class="form-control" v-model="newEvent.title" placeholder="กรอกชื่อกิจกรรม">
            </div>
            <div class="mb-3">
              <label class="form-label">วันที่</label>
              <input type="date" class="form-control" v-model="newEvent.date">
            </div>
            <div class="mb-3">
              <label class="form-label">เวลา</label>
              <input type="time" class="form-control" v-model="newEvent.time">
            </div>
            <div class="mb-3">
              <label class="form-label">ประเภท</label>
              <select class="form-select" v-model="newEvent.type">
                <option value="meeting">ประชุม</option>
                <option value="task">งาน</option>
                <option value="personal">ส่วนตัว</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">รายละเอียด</label>
              <textarea class="form-control" v-model="newEvent.description" rows="3" placeholder="รายละเอียดเพิ่มเติม"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="showAddEventModal = false">ยกเลิก</button>
            <button type="button" class="btn btn-primary" @click="addEvent">เพิ่มกิจกรรม</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentDate = new Date()
const currentMonth = ref(currentDate.getMonth())
const currentYear = ref(currentDate.getFullYear())
const selectedDate = ref(null)
const showAddEventModal = ref(false)

const monthNames = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
]

const monthAbbr = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']

const dayNames = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
const dayAbbr = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส']

const events = ref([
  {
    id: 1,
    title: 'ประชุมทีม',
    date: new Date(2024, currentMonth.value, 15),
    time: '09:00',
    type: 'meeting',
    description: 'ประชุมทีมพัฒนาระบบ',
    location: 'ห้องประชุม A'
  },
  {
    id: 2,
    title: 'นำเสนอโครงการ',
    date: new Date(2024, currentMonth.value, 18),
    time: '14:00',
    type: 'task',
    description: 'นำเสนอโครงการใหม่',
    location: 'ห้องประชุมใหญ่'
  },
  {
    id: 3,
    title: 'งานเลี้ยงบริษัท',
    date: new Date(2024, currentMonth.value, 25),
    time: '18:00',
    type: 'personal',
    description: 'งานเลี้ยงประจำปี'
  }
])

const newEvent = ref({
  title: '',
  date: '',
  time: '',
  type: 'meeting',
  description: ''
})

const quickEvent = ref({
  title: '',
  time: '',
  type: 'meeting'
})

const reminders = ref([
  { id: 1, time: '09:00', text: 'ประชุมทีม' },
  { id: 2, time: '14:00', text: 'นำเสนอโครงการ' },
  { id: 3, time: '16:00', text: 'ติดต่อลูกค้า' }
])

const calendarWeeks = computed(() => {
  const weeks = []
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())

  let weekNumber = 0
  while (startDate <= lastDay || startDate.getDay() !== 0) {
    const week = { weekNumber: weekNumber++, days: [] }
    
    for (let i = 0; i < 7; i++) {
      const dayEvents = events.value.filter(event => 
        event.date.toDateString() === startDate.toDateString()
      )
      
      week.days.push({
        date: new Date(startDate),
        day: startDate.getDate(),
        isCurrentMonth: startDate.getMonth() === currentMonth.value,
        isToday: startDate.toDateString() === currentDate.toDateString(),
        events: dayEvents
      })
      
      startDate.setDate(startDate.getDate() + 1)
    }
    
    weeks.push(week)
    
    if (startDate > lastDay && startDate.getDay() === 0) break
  }
  
  return weeks
})

const todayEvents = computed(() => {
  return events.value.filter(event => 
    event.date.toDateString() === currentDate.toDateString()
  )
})

const upcomingEventsData = computed(() => {
  const today = new Date()
  return events.value
    .filter(event => event.date >= today)
    .sort((a, b) => a.date - b.date)
    .slice(0, 5)
})

const totalEvents = computed(() => events.value.length)
const completedEvents = computed(() => events.value.filter(e => e.date < new Date()).length)
const upcomingEvents = computed(() => events.value.filter(e => e.date >= new Date()).length)
const meetingEvents = computed(() => events.value.filter(e => e.type === 'meeting').length)

const eventTypesStats = computed(() => {
  const types = {}
  events.value.forEach(event => {
    if (!types[event.type]) {
      types[event.type] = { type: event.type, name: getEventTypeName(event.type), count: 0 }
    }
    types[event.type].count++
  })
  return Object.values(types)
})

const getDayClass = (day) => {
  const classes = []
  if (!day.isCurrentMonth) classes.push('other-month')
  if (day.isToday) classes.push('today')
  if (day.events.length > 0) classes.push('has-events')
  return classes.join(' ')
}

const getMiniDayClass = (day) => {
  const classes = []
  if (!day.isCurrentMonth) classes.push('other-month')
  if (day.isToday) classes.push('today')
  return classes.join(' ')
}

const getEventClass = (type) => {
  const classes = {
    'meeting': 'bg-primary',
    'task': 'bg-success',
    'personal': 'bg-warning',
    'other': 'bg-secondary'
  }
  return classes[type] || 'bg-secondary'
}

const getEventProgressClass = (type) => {
  const classes = {
    'meeting': 'bg-primary',
    'task': 'bg-success',
    'personal': 'bg-warning',
    'other': 'bg-secondary'
  }
  return classes[type] || 'bg-secondary'
}

const getEventTypeName = (type) => {
  const names = {
    'meeting': 'ประชุม',
    'task': 'งาน',
    'personal': 'ส่วนตัว',
    'other': 'อื่นๆ'
  }
  return names[type] || 'อื่นๆ'
}

const getMiniCalendarDays = () => {
  const days = []
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())

  for (let i = 0; i < 42; i++) {
    days.push({
      date: new Date(startDate),
      day: startDate.getDate(),
      isCurrentMonth: startDate.getMonth() === currentMonth.value,
      isToday: startDate.toDateString() === currentDate.toDateString()
    })
    startDate.setDate(startDate.getDate() + 1)
  }

  return days
}

const getMonthlySummary = (type) => {
  return events.value.filter(event => 
    event.type === type && 
    event.date.getMonth() === currentMonth.value && 
    event.date.getFullYear() === currentYear.value
  ).length
}

const previousMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

const goToToday = () => {
  currentMonth.value = currentDate.getMonth()
  currentYear.value = currentDate.getFullYear()
}

const selectDate = (day) => {
  selectedDate.value = day.date
}

const addEvent = () => {
  if (newEvent.value.title && newEvent.value.date && newEvent.value.time) {
    const event = {
      id: Date.now(),
      title: newEvent.value.title,
      date: new Date(newEvent.value.date),
      time: newEvent.value.time,
      type: newEvent.value.type,
      description: newEvent.value.description
    }
    events.value.push(event)
    
    // Reset form
    newEvent.value = {
      title: '',
      date: '',
      time: '',
      type: 'meeting',
      description: ''
    }
    showAddEventModal.value = false
  }
}

const addQuickEvent = () => {
  if (quickEvent.value.title && quickEvent.value.time) {
    const event = {
      id: Date.now(),
      title: quickEvent.value.title,
      date: new Date(),
      time: quickEvent.value.time,
      type: quickEvent.value.type,
      description: ''
    }
    events.value.push(event)
    
    // Reset form
    quickEvent.value = {
      title: '',
      time: '',
      type: 'meeting'
    }
  }
}
</script>

<style scoped>
.calendar-grid {
  display: flex;
  flex-direction: column;
}

.calendar-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f8f9fa;
}

.day-header {
  padding: 15px;
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid #dee2e6;
}

.calendar-body {
  display: flex;
  flex-direction: column;
}

.calendar-week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-day {
  min-height: 120px;
  padding: 8px;
  border-bottom: 1px solid #f8f9fa;
  border-right: 1px solid #f8f9fa;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.calendar-day:hover {
  background-color: #f8f9fa;
}

.calendar-day.other-month {
  background-color: #fafafa;
  color: #ccc;
}

.calendar-day.today {
  background-color: #e3f2fd;
}

.calendar-day.today .day-number {
  background-color: #2196f3;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calendar-day.has-events {
  background-color: #f0f8ff;
}

.day-number {
  font-weight: 600;
  margin-bottom: 4px;
}

.day-events {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.day-event {
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.75rem;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.today-events {
  max-height: 400px;
  overflow-y: auto;
}

.event-item {
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f8f9fa;
}

.event-time {
  width: 60px;
  font-weight: 600;
  color: #007bff;
  font-size: 0.9rem;
}

.event-content {
  flex: 1;
  margin-left: 15px;
}

.event-title {
  margin-bottom: 5px;
  font-size: 1rem;
}

.event-description {
  margin-bottom: 8px;
  color: #6c757d;
  font-size: 0.9rem;
}

.event-type-badge {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  color: white;
}

.no-events {
  text-align: center;
  padding: 40px 20px;
}

.upcoming-event {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.event-date {
  width: 60px;
  text-align: center;
  margin-right: 15px;
}

.date-day {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
}

.date-month {
  font-size: 0.8rem;
  color: #6c757d;
}

.event-details {
  flex: 1;
}

.event-location {
  color: #6c757d;
  font-size: 0.85rem;
  margin-bottom: 0;
}

.type-stat {
  margin-bottom: 15px;
}

.type-info {
  display: flex;
  align-items: center;
}

.type-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.summary-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 6px;
}

.summary-label {
  font-size: 0.9rem;
  color: #6c757d;
}

.summary-value {
  font-weight: bold;
  color: #007bff;
}

.mini-calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.mini-day-header {
  padding: 5px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6c757d;
}

.mini-day {
  padding: 5px;
  text-align: center;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.mini-day:hover {
  background-color: #e3f2fd;
}

.mini-day.other-month {
  color: #ccc;
}

.mini-day.today {
  background-color: #2196f3;
  color: white;
}

.quick-add-event .form-control,
.quick-add-event .form-select {
  margin-bottom: 8px;
}

.reminder-item {
  display: flex;
  margin-bottom: 10px;
  font-size: 0.85rem;
}

.reminder-time {
  width: 50px;
  font-weight: 600;
  color: #007bff;
}

.reminder-text {
  flex: 1;
  margin-left: 10px;
  color: #495057;
}

.weather-today {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.weather-icon {
  margin-right: 15px;
}

.temperature {
  font-size: 1.5rem;
  font-weight: bold;
}

.condition {
  color: #6c757d;
  font-size: 0.9rem;
}

.forecast-day {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.85rem;
}

.modal.show {
  background: rgba(0, 0, 0, 0.5);
}
</style>
