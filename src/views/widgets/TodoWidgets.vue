<template>
  <div class="container-fluid px-5 py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="mb-2">Todo Widgets</h2>
        <p class="text-muted">วิดเจ็ตรายการงานและการจัดการงาน</p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
          <li class="breadcrumb-item">Widgets</li>
          <li class="breadcrumb-item active">Todo Widgets</li>
        </ol>
      </nav>
    </div>

    <!-- Simple Todo List -->
    <div class="row mb-5">
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">งานของฉัน</h5>
            <button class="btn btn-primary btn-sm" @click="showAddModal = true">
              <i class="fas fa-plus me-1"></i>เพิ่มงาน
            </button>
          </div>
          <div class="card-body p-0">
            <div class="todo-list">
              <div v-for="(todo, index) in todos" :key="index" 
                   class="todo-item" :class="{ 'completed': todo.completed }">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" 
                         v-model="todo.completed" :id="`todo-${index}`">
                  <label class="form-check-label flex-grow-1" :for="`todo-${index}`">
                    {{ todo.text }}
                  </label>
                </div>
                <div class="todo-actions">
                  <span class="badge" :class="getPriorityClass(todo.priority)">
                    {{ todo.priority }}
                  </span>
                  <button class="btn btn-sm btn-outline-danger ms-2" @click="removeTodo(index)">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">
              {{ completedCount }}/{{ todos.length }} งานเสร็จแล้ว
            </small>
            <div class="progress mt-2" style="height: 8px;">
              <div class="progress-bar bg-success" :style="{ width: progressPercentage + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">สถิติการทำงาน</h5>
          </div>
          <div class="card-body">
            <div class="row text-center">
              <div class="col-4">
                <div class="stat-item">
                  <h3 class="text-primary">{{ todos.length }}</h3>
                  <small class="text-muted">งานทั้งหมด</small>
                </div>
              </div>
              <div class="col-4">
                <div class="stat-item">
                  <h3 class="text-success">{{ completedCount }}</h3>
                  <small class="text-muted">เสร็จแล้ว</small>
                </div>
              </div>
              <div class="col-4">
                <div class="stat-item">
                  <h3 class="text-warning">{{ pendingCount }}</h3>
                  <small class="text-muted">ค้างอยู่</small>
                </div>
              </div>
            </div>
            
            <div class="mt-4">
              <h6>ความคืบหน้าตามลำดับความสำคัญ</h6>
              <div class="priority-stats">
                <div class="priority-item" v-for="priority in priorityStats" :key="priority.name">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="badge" :class="getPriorityClass(priority.name)">
                      {{ priority.name }}
                    </span>
                    <span>{{ priority.completed }}/{{ priority.total }}</span>
                  </div>
                  <div class="progress" style="height: 6px;">
                    <div class="progress-bar" :class="getPriorityProgressClass(priority.name)"
                         :style="{ width: (priority.completed / priority.total * 100) + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Todo Widget -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">โครงการ Dashboard</h5>
            <small class="text-muted">ติดตามความคืบหน้าโครงการ</small>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-8">
                <div class="project-timeline">
                  <div class="timeline-item" v-for="(phase, index) in projectPhases" :key="index"
                       :class="{ 'completed': phase.completed, 'active': phase.active }">
                    <div class="timeline-marker">
                      <i class="fas" :class="phase.completed ? 'fa-check' : (phase.active ? 'fa-clock' : 'fa-circle')"></i>
                    </div>
                    <div class="timeline-content">
                      <h6 class="mb-1">{{ phase.title }}</h6>
                      <p class="text-muted mb-2">{{ phase.description }}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">{{ phase.date }}</small>
                        <div class="task-progress">
                          <span class="badge bg-light text-dark">{{ phase.completedTasks }}/{{ phase.totalTasks }}</span>
                        </div>
                      </div>
                      <div class="progress mt-2" style="height: 4px;">
                        <div class="progress-bar" :class="phase.completed ? 'bg-success' : 'bg-primary'"
                             :style="{ width: (phase.completedTasks / phase.totalTasks * 100) + '%' }"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="project-summary">
                  <h6>สรุปโครงการ</h6>
                  <div class="summary-stats">
                    <div class="stat-row">
                      <span>เฟสทั้งหมด</span>
                      <span class="fw-bold">{{ projectPhases.length }}</span>
                    </div>
                    <div class="stat-row">
                      <span>เฟสที่เสร็จ</span>
                      <span class="fw-bold text-success">{{ completedPhases }}</span>
                    </div>
                    <div class="stat-row">
                      <span>งานทั้งหมด</span>
                      <span class="fw-bold">{{ totalProjectTasks }}</span>
                    </div>
                    <div class="stat-row">
                      <span>งานที่เสร็จ</span>
                      <span class="fw-bold text-success">{{ completedProjectTasks }}</span>
                    </div>
                  </div>
                  
                  <div class="overall-progress mt-4">
                    <h6>ความคืบหน้ารวม</h6>
                    <div class="circular-progress-small">
                      <svg width="80" height="80">
                        <circle cx="40" cy="40" r="30" fill="none" stroke="#e9ecef" stroke-width="6"/>
                        <circle cx="40" cy="40" r="30" fill="none" stroke="#28a745" stroke-width="6"
                                :stroke-dasharray="188" :stroke-dashoffset="188 - (overallProgress * 188 / 100)"
                                transform="rotate(-90 40 40)"/>
                      </svg>
                      <div class="progress-text-small">{{ Math.round(overallProgress) }}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Todo Widget -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">งานของทีม</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4 mb-3" v-for="member in teamMembers" :key="member.id">
                <div class="team-member-card">
                  <div class="d-flex align-items-center mb-3">
                    <img :src="member.avatar" :alt="member.name" class="avatar me-3">
                    <div>
                      <h6 class="mb-0">{{ member.name }}</h6>
                      <small class="text-muted">{{ member.role }}</small>
                    </div>
                  </div>
                  <div class="member-stats">
                    <div class="d-flex justify-content-between mb-2">
                      <span>งานที่ได้รับมอบหมาย</span>
                      <span class="fw-bold">{{ member.totalTasks }}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <span>เสร็จแล้ว</span>
                      <span class="fw-bold text-success">{{ member.completedTasks }}</span>
                    </div>
                    <div class="progress">
                      <div class="progress-bar bg-success" 
                           :style="{ width: (member.completedTasks / member.totalTasks * 100) + '%' }"></div>
                    </div>
                  </div>
                  <div class="recent-tasks mt-3">
                    <h6 class="fs-6">งานล่าสุด</h6>
                    <div class="small-todo-list">
                      <div v-for="task in member.recentTasks" :key="task.id" class="small-todo-item">
                        <i class="fas fa-circle me-2" :class="task.completed ? 'text-success' : 'text-muted'"></i>
                        <span :class="{ 'text-decoration-line-through text-muted': task.completed }">
                          {{ task.title }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Todo Modal -->
    <div class="modal fade" :class="{ 'show d-block': showAddModal }" v-if="showAddModal" @click.self="showAddModal = false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">เพิ่มงานใหม่</h5>
            <button type="button" class="btn-close" @click="showAddModal = false"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">ชื่องาน</label>
              <input type="text" class="form-control" v-model="newTodo.text" placeholder="กรอกชื่องาน">
            </div>
            <div class="mb-3">
              <label class="form-label">ลำดับความสำคัญ</label>
              <select class="form-select" v-model="newTodo.priority">
                <option value="สูง">สูง</option>
                <option value="กลาง">กลาง</option>
                <option value="ต่ำ">ต่ำ</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="showAddModal = false">ยกเลิก</button>
            <button type="button" class="btn btn-primary" @click="addTodo">เพิ่มงาน</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showAddModal = ref(false)
const newTodo = ref({
  text: '',
  priority: 'กลาง',
  completed: false
})

const todos = ref([
  { text: 'ออกแบบ UI/UX สำหรับหน้า Dashboard', priority: 'สูง', completed: true },
  { text: 'พัฒนา API สำหรับการจัดการผู้ใช้', priority: 'สูง', completed: true },
  { text: 'เขียนเอกสาร API Documentation', priority: 'กลาง', completed: false },
  { text: 'ทดสอบระบบ Authentication', priority: 'สูง', completed: false },
  { text: 'จัดการ Database Migration', priority: 'กลาง', completed: false },
  { text: 'ปรับปรุง Performance', priority: 'ต่ำ', completed: false }
])

const projectPhases = ref([
  {
    title: 'การวางแผนและออกแบบ',
    description: 'วิเคราะห์ความต้องการและออกแบบระบบ',
    date: '1-15 มีนาคม',
    completed: true,
    active: false,
    completedTasks: 8,
    totalTasks: 8
  },
  {
    title: 'การพัฒนา Frontend',
    description: 'พัฒนาส่วนติดต่อผู้ใช้และ UI Components',
    date: '16-31 มีนาคม',
    completed: true,
    active: false,
    completedTasks: 12,
    totalTasks: 12
  },
  {
    title: 'การพัฒนา Backend',
    description: 'พัฒนา API และระบบฐานข้อมูล',
    date: '1-20 เมษายน',
    completed: false,
    active: true,
    completedTasks: 7,
    totalTasks: 10
  },
  {
    title: 'การทดสอบและปรับปรุง',
    description: 'ทดสอบระบบและแก้ไขข้อผิดพลาด',
    date: '21-30 เมษายน',
    completed: false,
    active: false,
    completedTasks: 0,
    totalTasks: 6
  }
])

const teamMembers = ref([
  {
    id: 1,
    name: 'สมชาย ใจดี',
    role: 'Frontend Developer',
    avatar: 'https://via.placeholder.com/40x40',
    totalTasks: 8,
    completedTasks: 6,
    recentTasks: [
      { id: 1, title: 'สร้าง Header Component', completed: true },
      { id: 2, title: 'ออกแบบ Sidebar', completed: true },
      { id: 3, title: 'ปรับปรุง Responsive Design', completed: false }
    ]
  },
  {
    id: 2,
    name: 'สุดา เก่งมาก',
    role: 'Backend Developer',
    avatar: 'https://via.placeholder.com/40x40',
    totalTasks: 10,
    completedTasks: 7,
    recentTasks: [
      { id: 4, title: 'สร้าง User API', completed: true },
      { id: 5, title: 'ตั้งค่า Database', completed: true },
      { id: 6, title: 'สร้าง Authentication', completed: false }
    ]
  },
  {
    id: 3,
    name: 'วิชัย ทดสอบ',
    role: 'QA Tester',
    avatar: 'https://via.placeholder.com/40x40',
    totalTasks: 6,
    completedTasks: 4,
    recentTasks: [
      { id: 7, title: 'ทดสอบ Login System', completed: true },
      { id: 8, title: 'ทดสอบ User Management', completed: false },
      { id: 9, title: 'ทดสอบ Performance', completed: false }
    ]
  }
])

const completedCount = computed(() => todos.value.filter(todo => todo.completed).length)
const pendingCount = computed(() => todos.value.filter(todo => !todo.completed).length)
const progressPercentage = computed(() => todos.value.length > 0 ? (completedCount.value / todos.value.length) * 100 : 0)

const priorityStats = computed(() => {
  const stats = {}
  todos.value.forEach(todo => {
    if (!stats[todo.priority]) {
      stats[todo.priority] = { name: todo.priority, total: 0, completed: 0 }
    }
    stats[todo.priority].total++
    if (todo.completed) {
      stats[todo.priority].completed++
    }
  })
  return Object.values(stats)
})

const completedPhases = computed(() => projectPhases.value.filter(phase => phase.completed).length)
const totalProjectTasks = computed(() => projectPhases.value.reduce((sum, phase) => sum + phase.totalTasks, 0))
const completedProjectTasks = computed(() => projectPhases.value.reduce((sum, phase) => sum + phase.completedTasks, 0))
const overallProgress = computed(() => totalProjectTasks.value > 0 ? (completedProjectTasks.value / totalProjectTasks.value) * 100 : 0)

const getPriorityClass = (priority) => {
  const classes = {
    'สูง': 'bg-danger',
    'กลาง': 'bg-warning',
    'ต่ำ': 'bg-success'
  }
  return classes[priority] || 'bg-secondary'
}

const getPriorityProgressClass = (priority) => {
  const classes = {
    'สูง': 'bg-danger',
    'กลาง': 'bg-warning',
    'ต่ำ': 'bg-success'
  }
  return classes[priority] || 'bg-secondary'
}

const addTodo = () => {
  if (newTodo.value.text.trim()) {
    todos.value.push({ ...newTodo.value })
    newTodo.value = { text: '', priority: 'กลาง', completed: false }
    showAddModal.value = false
  }
}

const removeTodo = (index) => {
  todos.value.splice(index, 1)
}
</script>

<style scoped>
.todo-list {
  max-height: 400px;
  overflow-y: auto;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #f8f9fa;
  transition: all 0.2s ease;
}

.todo-item:hover {
  background-color: #f8f9fa;
}

.todo-item.completed {
  opacity: 0.6;
}

.todo-item.completed .form-check-label {
  text-decoration: line-through;
}

.todo-actions {
  display: flex;
  align-items: center;
}

.stat-item {
  padding: 15px 0;
}

.priority-stats .priority-item {
  margin-bottom: 15px;
}

.project-timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  margin-bottom: 30px;
  position: relative;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 15px;
  top: 30px;
  width: 2px;
  height: calc(100% + 10px);
  background: #e9ecef;
}

.timeline-item.completed::after {
  background: #28a745;
}

.timeline-marker {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  position: relative;
  z-index: 1;
}

.timeline-item.completed .timeline-marker {
  background: #28a745;
  color: white;
}

.timeline-item.active .timeline-marker {
  background: #007bff;
  color: white;
}

.timeline-content {
  flex: 1;
}

.project-summary {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.summary-stats .stat-row {
  display: flex;
  justify-content: between;
  margin-bottom: 8px;
}

.circular-progress-small {
  position: relative;
  display: inline-block;
}

.progress-text-small {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.875rem;
  font-weight: bold;
  color: #28a745;
}

.team-member-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  height: 100%;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.small-todo-list {
  max-height: 120px;
  overflow-y: auto;
}

.small-todo-item {
  display: flex;
  align-items: center;
  padding: 4px 0;
  font-size: 0.875rem;
}

.modal.show {
  background: rgba(0, 0, 0, 0.5);
}
</style>
