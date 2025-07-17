<template>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="mb-0">
            <i class="fas fa-calendar-alt text-primary me-2"></i>
            Calendar
          </h2>
          <div class="d-flex gap-2">
            <div class="btn-group" role="group">
              <button 
                v-for="view in views"
                :key="view.value"
                type="button" 
                class="btn"
                :class="currentView === view.value ? 'btn-primary' : 'btn-outline-primary'"
                @click="currentView = view.value"
              >
                {{ view.label }}
              </button>
            </div>
            <button class="btn btn-success" @click="showEventModal = true">
              <i class="fas fa-plus me-2"></i>New Event
            </button>
          </div>
        </div>
        
        <!-- Calendar Navigation -->
        <div class="card mb-4">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-3">
                <button class="btn btn-outline-secondary" @click="previousPeriod">
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button class="btn btn-outline-secondary" @click="nextPeriod">
                  <i class="fas fa-chevron-right"></i>
                </button>
                <button class="btn btn-outline-primary" @click="goToToday">
                  Today
                </button>
              </div>
              
              <h4 class="mb-0">{{ currentPeriodText }}</h4>
              
              <div class="d-flex align-items-center gap-2">
                <span class="text-muted">{{ currentDate.toLocaleDateString('th-TH') }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Calendar Grid -->
        <div class="row g-4">
          <!-- Mini Calendar & Events -->
          <div class="col-lg-3">
            <!-- Mini Calendar -->
            <div class="card mb-4">
              <div class="card-header bg-primary text-white">
                <h6 class="mb-0">
                  <i class="fas fa-calendar me-2"></i>{{ currentDate.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' }) }}
                </h6>
              </div>
              <div class="card-body p-2">
                <div class="mini-calendar">
                  <div class="row g-0 text-center mb-2">
                    <div v-for="day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']" :key="day" class="col">
                      <small class="text-muted fw-semibold">{{ day }}</small>
                    </div>
                  </div>
                  <div v-for="week in miniCalendarWeeks" :key="week[0]?.date" class="row g-0 text-center">
                    <div v-for="day in week" :key="day?.date || Math.random()" class="col">
                      <button 
                        v-if="day"
                        class="btn btn-sm w-100 mini-day"
                        :class="{
                          'btn-primary': isToday(day.date),
                          'btn-outline-secondary': !isToday(day.date) && isCurrentMonth(day.date),
                          'text-muted': !isCurrentMonth(day.date),
                          'has-events': hasEvents(day.date)
                        }"
                        @click="selectDate(day.date)"
                      >
                        {{ day.date.getDate() }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Upcoming Events -->
            <div class="card">
              <div class="card-header bg-success text-white">
                <h6 class="mb-0">
                  <i class="fas fa-clock me-2"></i>Upcoming Events
                </h6>
              </div>
              <div class="card-body p-0">
                <div class="list-group list-group-flush">
                  <div 
                    v-for="event in upcomingEvents" 
                    :key="event.id"
                    class="list-group-item d-flex align-items-center"
                  >
                    <div 
                      class="rounded-circle me-3"
                      :style="{ backgroundColor: event.color, width: '12px', height: '12px' }"
                    ></div>
                    <div class="flex-grow-1">
                      <div class="fw-semibold">{{ event.title }}</div>
                      <small class="text-muted">
                        {{ event.date.toLocaleDateString('th-TH') }} at {{ event.time }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Main Calendar -->
          <div class="col-lg-9">
            <div class="card">
              <div class="card-body p-0">
                <!-- Month View -->
                <div v-if="currentView === 'month'" class="calendar-grid">
                  <div class="row g-0 bg-light">
                    <div v-for="day in weekDays" :key="day" class="col text-center py-2 border-end">
                      <strong>{{ day }}</strong>
                    </div>
                  </div>
                  <div v-for="week in calendarWeeks" :key="week[0]?.date" class="row g-0">
                    <div 
                      v-for="day in week" 
                      :key="day?.date || Math.random()" 
                      class="col calendar-day border-end border-bottom"
                      :class="{
                        'bg-light text-muted': day && !isCurrentMonth(day.date),
                        'bg-primary bg-opacity-10': day && isToday(day.date)
                      }"
                    >
                      <div v-if="day" class="p-2 h-100" style="min-height: 120px;">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                          <span 
                            class="fw-semibold"
                            :class="{ 'text-primary': isToday(day.date) }"
                          >
                            {{ day.date.getDate() }}
                          </span>
                        </div>
                        <div class="events">
                          <div 
                            v-for="event in getEventsForDate(day.date)" 
                            :key="event.id"
                            class="event-item rounded px-2 py-1 mb-1 small text-white"
                            :style="{ backgroundColor: event.color }"
                            @click="viewEvent(event)"
                            style="cursor: pointer;"
                          >
                            {{ event.title }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Week View -->
                <div v-else-if="currentView === 'week'" class="week-view">
                  <div class="row g-0 bg-light">
                    <div class="col-1 text-center py-2 border-end">
                      <strong>Time</strong>
                    </div>
                    <div v-for="day in currentWeekDays" :key="day.date" class="col text-center py-2 border-end">
                      <div>
                        <strong>{{ day.dayName }}</strong>
                      </div>
                      <div :class="{ 'text-primary fw-bold': isToday(day.date) }">
                        {{ day.date.getDate() }}
                      </div>
                    </div>
                  </div>
                  <div v-for="hour in hours" :key="hour" class="row g-0 border-bottom">
                    <div class="col-1 text-center py-2 border-end bg-light">
                      <small>{{ hour }}:00</small>
                    </div>
                    <div v-for="day in currentWeekDays" :key="`${day.date}-${hour}`" class="col border-end" style="height: 60px;">
                      <!-- Week view events would go here -->
                    </div>
                  </div>
                </div>
                
                <!-- Day View -->
                <div v-else-if="currentView === 'day'" class="day-view">
                  <div class="bg-light p-3 border-bottom">
                    <h5 class="mb-0">
                      {{ selectedDate.toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}
                    </h5>
                  </div>
                  <div class="p-3">
                    <div v-for="event in getEventsForDate(selectedDate)" :key="event.id" class="mb-3">
                      <div 
                        class="card border-start border-4"
                        :style="{ borderColor: event.color + ' !important' }"
                      >
                        <div class="card-body py-2">
                          <div class="d-flex justify-content-between align-items-start">
                            <div>
                              <h6 class="mb-1">{{ event.title }}</h6>
                              <small class="text-muted">{{ event.time }}</small>
                            </div>
                            <button class="btn btn-sm btn-outline-primary" @click="viewEvent(event)">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="getEventsForDate(selectedDate).length === 0" class="text-center text-muted py-5">
                      <i class="fas fa-calendar-plus fa-3x mb-3"></i>
                      <h5>No events for this day</h5>
                      <button class="btn btn-primary" @click="showEventModal = true">
                        <i class="fas fa-plus me-2"></i>Add Event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Event Modal -->
    <div v-if="showEventModal" class="modal d-block" style="background: rgba(0,0,0,0.5);">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-plus me-2"></i>New Event
            </h5>
            <button type="button" class="btn-close" @click="showEventModal = false"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addEvent">
              <div class="mb-3">
                <label class="form-label">Event Title</label>
                <input v-model="newEvent.title" type="text" class="form-control" required>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Date</label>
                  <input v-model="newEvent.date" type="date" class="form-control" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Time</label>
                  <input v-model="newEvent.time" type="time" class="form-control" required>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Color</label>
                <div class="d-flex gap-2">
                  <button 
                    v-for="color in eventColors"
                    :key="color"
                    type="button"
                    class="btn rounded-circle"
                    :class="newEvent.color === color ? 'border border-dark border-3' : 'border'"
                    :style="{ backgroundColor: color, width: '40px', height: '40px' }"
                    @click="newEvent.color = color"
                  ></button>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea v-model="newEvent.description" class="form-control" rows="3"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="showEventModal = false">Cancel</button>
            <button type="submit" class="btn btn-primary" @click="addEvent">Add Event</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const currentDate = ref(new Date())
const selectedDate = ref(new Date())
const currentView = ref('month')
const showEventModal = ref(false)

const views = [
  { value: 'month', label: 'Month' },
  { value: 'week', label: 'Week' },
  { value: 'day', label: 'Day' }
]

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const hours = Array.from({ length: 24 }, (_, i) => i)

const eventColors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#6f42c1', '#20c997', '#fd7e14']

const newEvent = ref({
  title: '',
  date: '',
  time: '',
  color: '#007bff',
  description: ''
})

// Sample events
const events = ref([
  {
    id: 1,
    title: 'Team Meeting',
    date: new Date(2025, 6, 16), // July 16, 2025
    time: '09:00',
    color: '#007bff',
    description: 'Weekly team sync meeting'
  },
  {
    id: 2,
    title: 'Project Deadline',
    date: new Date(2025, 6, 18), // July 18, 2025
    time: '17:00',
    color: '#dc3545',
    description: 'Final submission for project'
  },
  {
    id: 3,
    title: 'Client Presentation',
    date: new Date(2025, 6, 20), // July 20, 2025
    time: '14:00',
    color: '#28a745',
    description: 'Present new features to client'
  },
  {
    id: 4,
    title: 'Birthday Party',
    date: new Date(2025, 6, 22), // July 22, 2025
    time: '19:00',
    color: '#ffc107',
    description: 'Sarah\'s birthday celebration'
  }
])

const currentPeriodText = computed(() => {
  if (currentView.value === 'month') {
    return currentDate.value.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' })
  } else if (currentView.value === 'week') {
    const startOfWeek = getStartOfWeek(currentDate.value)
    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(endOfWeek.getDate() + 6)
    return `${startOfWeek.toLocaleDateString('th-TH', { month: 'short', day: 'numeric' })} - ${endOfWeek.toLocaleDateString('th-TH', { month: 'short', day: 'numeric' })}`
  } else {
    return selectedDate.value.toLocaleDateString('th-TH', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
  }
})

const miniCalendarWeeks = computed(() => {
  return getCalendarWeeks(currentDate.value)
})

const calendarWeeks = computed(() => {
  return getCalendarWeeks(currentDate.value)
})

const currentWeekDays = computed(() => {
  const startOfWeek = getStartOfWeek(currentDate.value)
  const days = []
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek)
    date.setDate(date.getDate() + i)
    days.push({
      date,
      dayName: weekDays[i]
    })
  }
  
  return days
})

const upcomingEvents = computed(() => {
  const today = new Date()
  return events.value
    .filter(event => event.date >= today)
    .sort((a, b) => a.date - b.date)
    .slice(0, 5)
})

const getCalendarWeeks = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  
  // Get first day of month
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  
  // Get start of calendar (might be previous month)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  const weeks = []
  const currentDate = new Date(startDate)
  
  while (currentDate <= lastDay || weeks.length < 6) {
    const week = []
    for (let i = 0; i < 7; i++) {
      week.push({ date: new Date(currentDate) })
      currentDate.setDate(currentDate.getDate() + 1)
    }
    weeks.push(week)
    
    if (currentDate.getMonth() > month && weeks.length >= 5) break
  }
  
  return weeks
}

const getStartOfWeek = (date) => {
  const startOfWeek = new Date(date)
  startOfWeek.setDate(date.getDate() - date.getDay())
  return startOfWeek
}

const isToday = (date) => {
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

const isCurrentMonth = (date) => {
  return date.getMonth() === currentDate.value.getMonth()
}

const hasEvents = (date) => {
  return events.value.some(event => 
    event.date.toDateString() === date.toDateString()
  )
}

const getEventsForDate = (date) => {
  return events.value.filter(event => 
    event.date.toDateString() === date.toDateString()
  )
}

const selectDate = (date) => {
  selectedDate.value = date
  currentView.value = 'day'
}

const previousPeriod = () => {
  if (currentView.value === 'month') {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
  } else if (currentView.value === 'week') {
    currentDate.value = new Date(currentDate.value.getTime() - 7 * 24 * 60 * 60 * 1000)
  } else {
    selectedDate.value = new Date(selectedDate.value.getTime() - 24 * 60 * 60 * 1000)
  }
}

const nextPeriod = () => {
  if (currentView.value === 'month') {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
  } else if (currentView.value === 'week') {
    currentDate.value = new Date(currentDate.value.getTime() + 7 * 24 * 60 * 60 * 1000)
  } else {
    selectedDate.value = new Date(selectedDate.value.getTime() + 24 * 60 * 60 * 1000)
  }
}

const goToToday = () => {
  const today = new Date()
  currentDate.value = today
  selectedDate.value = today
}

const addEvent = () => {
  if (!newEvent.value.title || !newEvent.value.date || !newEvent.value.time) return
  
  const event = {
    id: Date.now(),
    title: newEvent.value.title,
    date: new Date(newEvent.value.date),
    time: newEvent.value.time,
    color: newEvent.value.color,
    description: newEvent.value.description
  }
  
  events.value.push(event)
  
  // Reset form
  newEvent.value = {
    title: '',
    date: '',
    time: '',
    color: '#007bff',
    description: ''
  }
  
  showEventModal.value = false
}

const viewEvent = (event) => {
  alert(`Event: ${event.title}\nDate: ${event.date.toLocaleDateString('th-TH')}\nTime: ${event.time}\nDescription: ${event.description}`)
}

// Set default date for new event
onMounted(() => {
  newEvent.value.date = selectedDate.value.toISOString().split('T')[0]
})
</script>

<style scoped>
.calendar-day {
  min-height: 120px;
}

.mini-calendar .mini-day {
  border: none;
  padding: 4px;
  font-size: 0.8rem;
}

.mini-day.has-events {
  position: relative;
}

.mini-day.has-events::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background-color: var(--bs-primary);
  border-radius: 50%;
}

.event-item {
  cursor: pointer;
  transition: opacity 0.2s;
}

.event-item:hover {
  opacity: 0.8;
}

.calendar-grid {
  font-size: 0.9rem;
}

.week-view, .day-view {
  font-size: 0.9rem;
}

.modal {
  z-index: 1050;
}

/* Custom scrollbar */
.overflow-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>
