<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header Section -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h1 class="text-primary mb-2">
              <i class="fas fa-columns me-3"></i>Kanban Board
            </h1>
            <p class="text-muted mb-0">จัดการงานด้วยระบบ Kanban แบบ Drag & Drop</p>
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-outline-primary" @click="showAddTaskModal">
              <i class="fas fa-plus me-2"></i>เพิ่มงานใหม่
            </button>
            <button class="btn btn-primary" @click="showAddColumnModal">
              <i class="fas fa-columns me-2"></i>เพิ่มคอลัมน์
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="row mb-4">
      <div class="col-md-3 mb-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body text-center">
            <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                 style="width: 60px; height: 60px;">
              <i class="fas fa-tasks text-primary fa-2x"></i>
            </div>
            <h4 class="text-primary mb-1">{{ totalTasks }}</h4>
            <p class="text-muted mb-0">งานทั้งหมด</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body text-center">
            <div class="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                 style="width: 60px; height: 60px;">
              <i class="fas fa-clock text-warning fa-2x"></i>
            </div>
            <h4 class="text-warning mb-1">{{ getTasksByStatus('todo').length }}</h4>
            <p class="text-muted mb-0">รอดำเนินการ</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body text-center">
            <div class="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                 style="width: 60px; height: 60px;">
              <i class="fas fa-spinner text-info fa-2x"></i>
            </div>
            <h4 class="text-info mb-1">{{ getTasksByStatus('in-progress').length }}</h4>
            <p class="text-muted mb-0">กำลังดำเนินการ</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body text-center">
            <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                 style="width: 60px; height: 60px;">
              <i class="fas fa-check-circle text-success fa-2x"></i>
            </div>
            <h4 class="text-success mb-1">{{ getTasksByStatus('done').length }}</h4>
            <p class="text-muted mb-0">เสร็จสิ้น</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Kanban Board -->
    <div class="kanban-board">
      <div class="row g-3">
        <div v-for="column in columns" :key="column.id" class="col-lg-4">
          <div class="kanban-column">
            <div class="column-header">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5 class="mb-1" :class="column.titleClass">
                    <i :class="column.icon" class="me-2"></i>{{ column.title }}
                  </h5>
                  <small class="text-muted">{{ getTasksByStatus(column.id).length }} งาน</small>
                </div>
                <div class="dropdown">
                  <button class="btn btn-sm btn-outline-secondary" data-bs-toggle="dropdown">
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" @click="addTask(column.id)">
                      <i class="fas fa-plus me-2"></i>เพิ่มงาน
                    </a></li>
                    <li><a class="dropdown-item" href="#" @click="editColumn(column.id)">
                      <i class="fas fa-edit me-2"></i>แก้ไขคอลัมน์
                    </a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="#" @click="deleteColumn(column.id)">
                      <i class="fas fa-trash me-2"></i>ลบคอลัมน์
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="column-body" 
                 @dragover.prevent 
                 @drop="onDrop($event, column.id)"
                 :style="{ minHeight: '500px' }">
              
              <div v-for="task in getTasksByStatus(column.id)" 
                   :key="task.id" 
                   class="task-card"
                   draggable="true"
                   @dragstart="onDragStart($event, task)"
                   @click="viewTask(task)">
                
                <div class="task-header">
                  <div class="d-flex justify-content-between align-items-start mb-2">
                    <span class="badge rounded-pill" :class="getPriorityClass(task.priority)">
                      {{ getPriorityText(task.priority) }}
                    </span>
                    <div class="dropdown">
                      <button class="btn btn-sm" data-bs-toggle="dropdown" @click.stop>
                        <i class="fas fa-ellipsis-v text-muted"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" @click.stop="editTask(task)">
                          <i class="fas fa-edit me-2"></i>แก้ไข
                        </a></li>
                        <li><a class="dropdown-item text-danger" href="#" @click.stop="deleteTask(task.id)">
                          <i class="fas fa-trash me-2"></i>ลบ
                        </a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <h6 class="task-title mb-2">{{ task.title }}</h6>
                  <p class="task-description text-muted small mb-3">{{ task.description }}</p>
                </div>
                
                <div class="task-footer">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="task-tags">
                      <span v-for="tag in task.tags" :key="tag" 
                            class="badge bg-light text-dark me-1 small">
                        {{ tag }}
                      </span>
                    </div>
                    <div class="task-assignee">
                      <div class="rounded-circle overflow-hidden border border-2 border-white shadow-sm"
                           style="width: 28px; height: 28px;"
                           :title="task.assignee">
                        <img :src="task.avatar" :alt="task.assignee" class="w-100 h-100 object-fit-cover">
                      </div>
                    </div>
                  </div>
                  
                  <div class="task-meta mt-2">
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">
                        <i class="fas fa-clock me-1"></i>{{ formatDate(task.dueDate) }}
                      </small>
                      <div class="task-progress" v-if="task.progress !== undefined">
                        <div class="progress" style="height: 4px; width: 50px;">
                          <div class="progress-bar" 
                               :class="getProgressClass(task.progress)"
                               :style="{ width: task.progress + '%' }"></div>
                        </div>
                        <small class="text-muted ms-1">{{ task.progress }}%</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Add Task Button -->
              <button class="btn btn-outline-primary w-100 mt-3" 
                      @click="addTask(column.id)"
                      style="border-style: dashed;">
                <i class="fas fa-plus me-2"></i>เพิ่มงานใหม่
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Task Modal -->
    <div class="modal fade" id="addTaskModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-plus me-2"></i>เพิ่มงานใหม่
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitTask">
              <div class="mb-3">
                <label class="form-label">ชื่องาน</label>
                <input type="text" class="form-control" v-model="newTask.title" required>
              </div>
              <div class="mb-3">
                <label class="form-label">รายละเอียด</label>
                <textarea class="form-control" rows="3" v-model="newTask.description"></textarea>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">สถานะ</label>
                  <select class="form-select" v-model="newTask.status">
                    <option value="todo">รอดำเนินการ</option>
                    <option value="in-progress">กำลังดำเนินการ</option>
                    <option value="done">เสร็จสิ้น</option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">ความสำคัญ</label>
                  <select class="form-select" v-model="newTask.priority">
                    <option value="low">ต่ำ</option>
                    <option value="medium">ปานกลาง</option>
                    <option value="high">สูง</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">ผู้รับผิดชอบ</label>
                  <input type="text" class="form-control" v-model="newTask.assignee">
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">วันครบกำหนด</label>
                  <input type="date" class="form-control" v-model="newTask.dueDate">
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">แท็ก (คั่นด้วยเครื่องหมายจุลภาค)</label>
                <input type="text" class="form-control" v-model="newTask.tagsString" 
                       placeholder="frontend, urgent, design">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
            <button type="button" class="btn btn-primary" @click="submitTask">บันทึก</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Task Detail Modal -->
    <div class="modal fade" id="taskDetailModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">รายละเอียดงาน</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" v-if="selectedTask">
            <div class="row">
              <div class="col-md-8">
                <h4>{{ selectedTask.title }}</h4>
                <p class="text-muted">{{ selectedTask.description }}</p>
                
                <div class="mb-3">
                  <h6>ความคืบหน้า</h6>
                  <div class="progress mb-2">
                    <div class="progress-bar" 
                         :class="getProgressClass(selectedTask.progress || 0)"
                         :style="{ width: (selectedTask.progress || 0) + '%' }"></div>
                  </div>
                  <small class="text-muted">{{ selectedTask.progress || 0 }}% เสร็จสิ้น</small>
                </div>
                
                <div class="mb-3">
                  <h6>แท็ก</h6>
                  <span v-for="tag in selectedTask.tags" :key="tag" 
                        class="badge bg-primary me-1">{{ tag }}</span>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card border-light">
                  <div class="card-body">
                    <h6 class="card-title">ข้อมูลงาน</h6>
                    <div class="mb-2">
                      <small class="text-muted">สถานะ:</small><br>
                      <span class="badge" :class="getStatusClass(selectedTask.status)">
                        {{ getStatusText(selectedTask.status) }}
                      </span>
                    </div>
                    <div class="mb-2">
                      <small class="text-muted">ความสำคัญ:</small><br>
                      <span class="badge" :class="getPriorityClass(selectedTask.priority)">
                        {{ getPriorityText(selectedTask.priority) }}
                      </span>
                    </div>
                    <div class="mb-2">
                      <small class="text-muted">ผู้รับผิดชอบ:</small><br>
                      <div class="d-flex align-items-center mt-1">
                        <img :src="selectedTask.avatar" :alt="selectedTask.assignee" 
                             class="rounded-circle me-2" style="width: 24px; height: 24px;">
                        <span>{{ selectedTask.assignee }}</span>
                      </div>
                    </div>
                    <div class="mb-2">
                      <small class="text-muted">วันครบกำหนด:</small><br>
                      <span>{{ formatDate(selectedTask.dueDate) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
            <button type="button" class="btn btn-primary" @click="editTask(selectedTask)">แก้ไข</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

// Kanban columns configuration
const columns = ref([
  {
    id: 'todo',
    title: 'รอดำเนินการ',
    icon: 'fas fa-clock',
    titleClass: 'text-warning'
  },
  {
    id: 'in-progress',
    title: 'กำลังดำเนินการ',
    icon: 'fas fa-spinner',
    titleClass: 'text-info'
  },
  {
    id: 'done',
    title: 'เสร็จสิ้น',
    icon: 'fas fa-check-circle',
    titleClass: 'text-success'
  }
])

// Sample tasks data
const tasks = ref([
  {
    id: 1,
    title: 'ออกแบบหน้า Dashboard',
    description: 'สร้าง UI/UX สำหรับหน้า Dashboard ใหม่ให้ดูทันสมัยและใช้งานง่าย',
    status: 'todo',
    priority: 'high',
    assignee: 'นายสมชาย ใจดี',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
    dueDate: '2025-07-25',
    tags: ['UI/UX', 'Dashboard', 'Priority'],
    progress: 0
  },
  {
    id: 2,
    title: 'พัฒนา API Authentication',
    description: 'สร้างระบบยืนยันตัวตนและการจัดการ Session',
    status: 'in-progress',
    priority: 'high',
    assignee: 'นางสาวมาลี สวยงาม',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-avatar-image-png.png',
    dueDate: '2025-07-22',
    tags: ['Backend', 'API', 'Security'],
    progress: 65
  },
  {
    id: 3,
    title: 'ทดสอบระบบ E-commerce',
    description: 'ทดสอบการทำงานของระบบสั่งซื้อสินค้าและการชำระเงิน',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'นายวิชัย เทสเตอร์',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-business-man-3d-avatar-character-illustration-png.png',
    dueDate: '2025-07-20',
    tags: ['Testing', 'E-commerce', 'QA'],
    progress: 40
  },
  {
    id: 4,
    title: 'เขียนเอกสาร API',
    description: 'จัดทำเอกสารการใช้งาน API สำหรับ Developer',
    status: 'done',
    priority: 'low',
    assignee: 'นายธีรพงษ์ นักเขียน',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/024/354/241/small_2x/happy-young-man-avatar-character-illustration-png.png',
    dueDate: '2025-07-18',
    tags: ['Documentation', 'API'],
    progress: 100
  },
  {
    id: 5,
    title: 'ปรับปรุงระบบ Notification',
    description: 'เพิ่มฟีเจอร์การแจ้งเตือนแบบ Real-time',
    status: 'todo',
    priority: 'medium',
    assignee: 'นางสาวปวีณา โค้ดเดอร์',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
    dueDate: '2025-07-30',
    tags: ['Frontend', 'Notification', 'WebSocket'],
    progress: 0
  },
  {
    id: 6,
    title: 'Optimize Database Performance',
    description: 'ปรับปรุงประสิทธิภาพฐานข้อมูลและเพิ่ม Index',
    status: 'done',
    priority: 'high',
    assignee: 'นาย Database Admin',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg',
    dueDate: '2025-07-19',
    tags: ['Database', 'Performance', 'Backend'],
    progress: 100
  }
])

// Form data for new task
const newTask = reactive({
  title: '',
  description: '',
  status: 'todo',
  priority: 'medium',
  assignee: '',
  dueDate: '',
  tagsString: '',
  progress: 0
})

// Selected task for detail view
const selectedTask = ref(null)

// Computed properties
const totalTasks = computed(() => tasks.value.length)

const getTasksByStatus = (status) => {
  return tasks.value.filter(task => task.status === status)
}

// Drag and drop functionality
let draggedTask = null

const onDragStart = (event, task) => {
  draggedTask = task
  event.dataTransfer.effectAllowed = 'move'
}

const onDrop = (event, newStatus) => {
  if (draggedTask && draggedTask.status !== newStatus) {
    draggedTask.status = newStatus
    
    // Update progress based on status
    if (newStatus === 'done') {
      draggedTask.progress = 100
    } else if (newStatus === 'in-progress' && draggedTask.progress === 0) {
      draggedTask.progress = 25
    } else if (newStatus === 'todo') {
      draggedTask.progress = 0
    }
  }
  draggedTask = null
}

// Modal functions
const showAddTaskModal = () => {
  resetNewTask()
  const modal = new bootstrap.Modal(document.getElementById('addTaskModal'))
  modal.show()
}

const showAddColumnModal = () => {
  alert('คุณสามารถเพิ่มฟังก์ชันเพิ่มคอลัมน์ได้ที่นี่!')
}

const addTask = (columnId) => {
  newTask.status = columnId
  showAddTaskModal()
}

const submitTask = () => {
  if (!newTask.title.trim()) return
  
  const task = {
    id: Date.now(),
    title: newTask.title,
    description: newTask.description,
    status: newTask.status,
    priority: newTask.priority,
    assignee: newTask.assignee || 'ไม่ระบุ',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
    dueDate: newTask.dueDate,
    tags: newTask.tagsString ? newTask.tagsString.split(',').map(tag => tag.trim()) : [],
    progress: newTask.progress
  }
  
  tasks.value.push(task)
  
  // Close modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('addTaskModal'))
  modal.hide()
  
  resetNewTask()
}

const resetNewTask = () => {
  Object.assign(newTask, {
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
    assignee: '',
    dueDate: '',
    tagsString: '',
    progress: 0
  })
}

const viewTask = (task) => {
  selectedTask.value = task
  const modal = new bootstrap.Modal(document.getElementById('taskDetailModal'))
  modal.show()
}

const editTask = (task) => {
  alert('คุณสามารถเพิ่มฟังก์ชันแก้ไขงานได้ที่นี่!')
}

const deleteTask = (taskId) => {
  if (confirm('คุณต้องการลบงานนี้หรือไม่?')) {
    const index = tasks.value.findIndex(task => task.id === taskId)
    if (index > -1) {
      tasks.value.splice(index, 1)
    }
  }
}

const editColumn = (columnId) => {
  alert('คุณสามารถเพิ่มฟังก์ชันแก้ไขคอลัมน์ได้ที่นี่!')
}

const deleteColumn = (columnId) => {
  alert('คุณสามารถเพิ่มฟังก์ชันลบคอลัมน์ได้ที่นี่!')
}

// Utility functions
const getPriorityClass = (priority) => {
  switch (priority) {
    case 'high': return 'bg-danger'
    case 'medium': return 'bg-warning'
    case 'low': return 'bg-success'
    default: return 'bg-secondary'
  }
}

const getPriorityText = (priority) => {
  switch (priority) {
    case 'high': return 'สูง'
    case 'medium': return 'ปานกลาง'
    case 'low': return 'ต่ำ'
    default: return 'ไม่ระบุ'
  }
}

const getStatusClass = (status) => {
  switch (status) {
    case 'todo': return 'bg-warning'
    case 'in-progress': return 'bg-info'
    case 'done': return 'bg-success'
    default: return 'bg-secondary'
  }
}

const getStatusText = (status) => {
  switch (status) {
    case 'todo': return 'รอดำเนินการ'
    case 'in-progress': return 'กำลังดำเนินการ'
    case 'done': return 'เสร็จสิ้น'
    default: return 'ไม่ทราบสถานะ'
  }
}

const getProgressClass = (progress) => {
  if (progress >= 100) return 'bg-success'
  if (progress >= 75) return 'bg-info'
  if (progress >= 50) return 'bg-primary'
  if (progress >= 25) return 'bg-warning'
  return 'bg-danger'
}

const formatDate = (dateString) => {
  if (!dateString) return 'ไม่ระบุ'
  const date = new Date(dateString)
  return date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
.kanban-board {
  overflow-x: auto;
  padding-bottom: 20px;
}

.kanban-column {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 0;
  min-height: 600px;
  border: 1px solid #e9ecef;
}

.column-header {
  background: white;
  padding: 1rem;
  border-radius: 12px 12px 0 0;
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 0;
  z-index: 10;
}

.column-body {
  padding: 1rem;
  max-height: 70vh;
  overflow-y: auto;
}

.task-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border: 1px solid #e9ecef;
  cursor: grab;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-color: #007bff;
}

.task-card:active {
  cursor: grabbing;
  transform: rotate(5deg);
}

.task-title {
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.3;
}

.task-description {
  font-size: 0.875rem;
  line-height: 1.4;
  max-height: 3.6em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.task-tags .badge {
  font-size: 0.75rem;
  font-weight: normal;
}

.task-assignee img {
  object-fit: cover;
}

.task-meta {
  border-top: 1px solid #f1f3f4;
  padding-top: 0.5rem;
}

.progress {
  border-radius: 10px;
}

.progress-bar {
  border-radius: 10px;
}

/* Drag over effect */
.column-body:dragover {
  background-color: #e3f2fd;
  border: 2px dashed #2196f3;
  border-radius: 8px;
}

/* Custom scrollbar */
.column-body::-webkit-scrollbar {
  width: 6px;
}

.column-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.column-body::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.column-body::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Animation for new cards */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.task-card {
  animation: slideInUp 0.3s ease-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .kanban-board .col-lg-4 {
    min-width: 300px;
    flex: 0 0 auto;
  }
  
  .kanban-board .row {
    flex-wrap: nowrap;
  }
  
  .column-body {
    max-height: 60vh;
  }
}

/* Modal enhancements */
.modal-content {
  border: none;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.modal-header {
  border-radius: 12px 12px 0 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-bottom: none;
}

.modal-header .btn-close {
  filter: invert(1);
}

/* Custom form styling */
.form-control:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-select:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>
