<template>
  <div class="container-fluid px-5 py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="mb-2">Notification Widgets</h2>
        <p class="text-muted">วิดเจ็ตการแจ้งเตือนและข้อความต่างๆ</p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
          <li class="breadcrumb-item">Widgets</li>
          <li class="breadcrumb-item active">Notification Widgets</li>
        </ol>
      </nav>
    </div>

    <!-- Notification Center -->
    <div class="row mb-5">
      <div class="col-lg-8 mb-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">ศูนย์การแจ้งเตือน</h5>
            <div class="notification-actions">
              <button class="btn btn-sm btn-outline-primary me-2" @click="markAllAsRead">
                <i class="fas fa-check-double me-1"></i>อ่านทั้งหมด
              </button>
              <button class="btn btn-sm btn-outline-danger" @click="clearAll">
                <i class="fas fa-trash me-1"></i>ลบทั้งหมด
              </button>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="notification-list">
              <div v-for="(notification, index) in notifications" :key="index"
                   class="notification-item" :class="{ 'unread': !notification.read }">
                <div class="notification-icon" :class="getNotificationIconClass(notification.type)">
                  <i class="fas" :class="getNotificationIcon(notification.type)"></i>
                </div>
                <div class="notification-content">
                  <h6 class="notification-title">{{ notification.title }}</h6>
                  <p class="notification-message">{{ notification.message }}</p>
                  <div class="notification-meta">
                    <span class="notification-time">{{ formatTime(notification.time) }}</span>
                    <span class="notification-category">{{ notification.category }}</span>
                  </div>
                </div>
                <div class="notification-actions-item">
                  <button class="btn btn-sm btn-link" @click="toggleRead(index)">
                    <i class="fas" :class="notification.read ? 'fa-envelope' : 'fa-envelope-open'"></i>
                  </button>
                  <button class="btn btn-sm btn-link text-danger" @click="removeNotification(index)">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">สรุปการแจ้งเตือน</h5>
          </div>
          <div class="card-body">
            <div class="notification-summary">
              <div class="summary-item">
                <div class="summary-icon bg-primary">
                  <i class="fas fa-bell text-white"></i>
                </div>
                <div class="summary-content">
                  <h3>{{ totalNotifications }}</h3>
                  <small>การแจ้งเตือนทั้งหมด</small>
                </div>
              </div>
              
              <div class="summary-item">
                <div class="summary-icon bg-warning">
                  <i class="fas fa-envelope text-white"></i>
                </div>
                <div class="summary-content">
                  <h3>{{ unreadNotifications }}</h3>
                  <small>ยังไม่ได้อ่าน</small>
                </div>
              </div>
              
              <div class="summary-item">
                <div class="summary-icon bg-success">
                  <i class="fas fa-check text-white"></i>
                </div>
                <div class="summary-content">
                  <h3>{{ readNotifications }}</h3>
                  <small>อ่านแล้ว</small>
                </div>
              </div>
            </div>
            
            <div class="notification-types mt-4">
              <h6>ประเภทการแจ้งเตือน</h6>
              <div class="type-chart">
                <div v-for="type in notificationTypes" :key="type.name" class="type-item">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="type-name">{{ type.name }}</span>
                    <span class="type-count">{{ type.count }}</span>
                  </div>
                  <div class="progress" style="height: 6px;">
                    <div class="progress-bar" :class="type.color"
                         :style="{ width: (type.count / totalNotifications * 100) + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Live Notifications -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Live Notifications</h4>
      </div>
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">การแจ้งเตือนแบบเรียลไทม์</h5>
          </div>
          <div class="card-body">
            <div class="live-notification-demo">
              <button class="btn btn-primary me-2" @click="showToast('success', 'สำเร็จ!', 'การดำเนินการเสร็จสิ้น')">
                Success Toast
              </button>
              <button class="btn btn-warning me-2" @click="showToast('warning', 'คำเตือน!', 'กรุณาตรวจสอบข้อมูล')">
                Warning Toast
              </button>
              <button class="btn btn-danger me-2" @click="showToast('error', 'ข้อผิดพลาด!', 'เกิดข้อผิดพลาดในระบบ')">
                Error Toast
              </button>
              <button class="btn btn-info" @click="showToast('info', 'ข้อมูล', 'คุณมีข้อความใหม่')">
                Info Toast
              </button>
            </div>
            
            <div class="mt-4">
              <h6>การตั้งค่าการแจ้งเตือน</h6>
              <div class="notification-settings">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" v-model="settings.emailNotifications" id="emailNotif">
                  <label class="form-check-label" for="emailNotif">การแจ้งเตือนทางอีเมล</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" v-model="settings.pushNotifications" id="pushNotif">
                  <label class="form-check-label" for="pushNotif">การแจ้งเตือนแบบ Push</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" v-model="settings.soundNotifications" id="soundNotif">
                  <label class="form-check-label" for="soundNotif">เสียงการแจ้งเตือน</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" v-model="settings.desktopNotifications" id="desktopNotif">
                  <label class="form-check-label" for="desktopNotif">การแจ้งเตือนบนหน้าจอ</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">กิจกรรมล่าสุด</h5>
          </div>
          <div class="card-body">
            <div class="activity-timeline">
              <div v-for="(activity, index) in recentActivities" :key="index" class="activity-item">
                <div class="activity-icon" :class="getActivityIconClass(activity.type)">
                  <i class="fas" :class="getActivityIcon(activity.type)"></i>
                </div>
                <div class="activity-content">
                  <p class="activity-text">{{ activity.text }}</p>
                  <small class="activity-time">{{ formatTime(activity.time) }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert Widgets -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Alert Widgets</h4>
      </div>
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">แจ้งเตือนระบบ</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-primary alert-dismissible" role="alert">
              <i class="fas fa-info-circle me-2"></i>
              <strong>ข้อมูล:</strong> ระบบจะอัปเดตในวันที่ 15 เมษายน 2024
              <button type="button" class="btn-close" aria-label="Close"></button>
            </div>
            
            <div class="alert alert-success alert-dismissible" role="alert">
              <i class="fas fa-check-circle me-2"></i>
              <strong>สำเร็จ:</strong> การสำรองข้อมูลเสร็จสิ้นแล้ว
              <button type="button" class="btn-close" aria-label="Close"></button>
            </div>
            
            <div class="alert alert-warning alert-dismissible" role="alert">
              <i class="fas fa-exclamation-triangle me-2"></i>
              <strong>คำเตือน:</strong> พื้นที่จัดเก็บข้อมูลเหลือ 15%
              <button type="button" class="btn-close" aria-label="Close"></button>
            </div>
            
            <div class="alert alert-danger alert-dismissible" role="alert">
              <i class="fas fa-exclamation-circle me-2"></i>
              <strong>ข้อผิดพลาด:</strong> การเชื่อมต่อฐานข้อมูลขัดข้อง
              <button type="button" class="btn-close" aria-label="Close"></button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">การแจ้งเตือนที่กำหนดเอง</h5>
          </div>
          <div class="card-body">
            <div class="custom-alerts">
              <div class="custom-alert info-alert">
                <div class="alert-icon">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <div class="alert-content">
                  <h6>เคล็ดลับ</h6>
                  <p>คุณสามารถใช้คีย์ลัด Ctrl+K เพื่อเปิดการค้นหาได้</p>
                </div>
              </div>
              
              <div class="custom-alert progress-alert">
                <div class="alert-icon">
                  <i class="fas fa-download"></i>
                </div>
                <div class="alert-content">
                  <h6>กำลังดาวน์โหลด</h6>
                  <p>ไฟล์ระบบ v2.1.3</p>
                  <div class="progress mt-2" style="height: 8px;">
                    <div class="progress-bar bg-success progress-bar-animated progress-bar-striped" 
                         style="width: 65%"></div>
                  </div>
                  <small class="text-muted">65% เสร็จแล้ว</small>
                </div>
              </div>
              
              <div class="custom-alert social-alert">
                <div class="alert-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div class="alert-content">
                  <h6>ผู้ใช้ออนไลน์</h6>
                  <p>มีผู้ใช้ออนไลน์ 1,234 คน</p>
                  <div class="online-users">
                    <img src="https://via.placeholder.com/24x24" alt="User" class="user-avatar">
                    <img src="https://via.placeholder.com/24x24" alt="User" class="user-avatar">
                    <img src="https://via.placeholder.com/24x24" alt="User" class="user-avatar">
                    <span class="more-users">+1,231</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Container -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div v-for="(toast, index) in toasts" :key="toast.id"
           class="toast show" :class="getToastClass(toast.type)" role="alert">
        <div class="toast-header">
          <i class="fas me-2" :class="getToastIcon(toast.type)"></i>
          <strong class="me-auto">{{ toast.title }}</strong>
          <small>{{ formatTime(toast.time) }}</small>
          <button type="button" class="btn-close" @click="removeToast(index)"></button>
        </div>
        <div class="toast-body">
          {{ toast.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const notifications = ref([
  {
    title: 'ผู้ใช้ใหม่ลงทะเบียน',
    message: 'มีผู้ใช้ใหม่ลงทะเบียนเข้าใช้งานระบบ',
    type: 'user',
    category: 'ผู้ใช้',
    time: new Date(Date.now() - 5 * 60000),
    read: false
  },
  {
    title: 'การสำรองข้อมูลเสร็จสิ้น',
    message: 'การสำรองข้อมูลประจำวันเสร็จสิ้นเรียบร้อยแล้ว',
    type: 'system',
    category: 'ระบบ',
    time: new Date(Date.now() - 15 * 60000),
    read: true
  },
  {
    title: 'คำสั่งซื้อใหม่',
    message: 'มีคำสั่งซื้อใหม่เข้ามาจำนวน 3 รายการ',
    type: 'order',
    category: 'การขาย',
    time: new Date(Date.now() - 30 * 60000),
    read: false
  },
  {
    title: 'การแจ้งเตือนระบบ',
    message: 'ระบบจะปิดปรับปรุงในวันที่ 15 เมษายน',
    type: 'warning',
    category: 'ระบบ',
    time: new Date(Date.now() - 60 * 60000),
    read: true
  },
  {
    title: 'รายงานประจำเดือน',
    message: 'รายงานประจำเดือนมีนาคมพร้อมแล้ว',
    type: 'report',
    category: 'รายงาน',
    time: new Date(Date.now() - 120 * 60000),
    read: false
  }
])

const recentActivities = ref([
  {
    text: 'สมชาย ใจดี เข้าสู่ระบบ',
    type: 'login',
    time: new Date(Date.now() - 2 * 60000)
  },
  {
    text: 'อัปเดตข้อมูลสินค้า iPhone 15',
    type: 'update',
    time: new Date(Date.now() - 8 * 60000)
  },
  {
    text: 'สร้างรายงานยอดขายใหม่',
    type: 'create',
    time: new Date(Date.now() - 15 * 60000)
  },
  {
    text: 'ส่งอีเมลแจ้งโปรโมชั่น',
    type: 'email',
    time: new Date(Date.now() - 25 * 60000)
  }
])

const settings = ref({
  emailNotifications: true,
  pushNotifications: true,
  soundNotifications: false,
  desktopNotifications: true
})

const toasts = ref([])

const totalNotifications = computed(() => notifications.value.length)
const unreadNotifications = computed(() => notifications.value.filter(n => !n.read).length)
const readNotifications = computed(() => notifications.value.filter(n => n.read).length)

const notificationTypes = computed(() => {
  const types = {}
  notifications.value.forEach(n => {
    if (!types[n.category]) {
      types[n.category] = { name: n.category, count: 0, color: getTypeColor(n.category) }
    }
    types[n.category].count++
  })
  return Object.values(types)
})

const getNotificationIcon = (type) => {
  const icons = {
    'user': 'fa-user',
    'system': 'fa-cogs',
    'order': 'fa-shopping-cart',
    'warning': 'fa-exclamation-triangle',
    'report': 'fa-chart-bar'
  }
  return icons[type] || 'fa-bell'
}

const getNotificationIconClass = (type) => {
  const classes = {
    'user': 'bg-primary',
    'system': 'bg-info',
    'order': 'bg-success',
    'warning': 'bg-warning',
    'report': 'bg-secondary'
  }
  return classes[type] || 'bg-primary'
}

const getActivityIcon = (type) => {
  const icons = {
    'login': 'fa-sign-in-alt',
    'update': 'fa-edit',
    'create': 'fa-plus',
    'email': 'fa-envelope'
  }
  return icons[type] || 'fa-circle'
}

const getActivityIconClass = (type) => {
  const classes = {
    'login': 'bg-success',
    'update': 'bg-warning',
    'create': 'bg-primary',
    'email': 'bg-info'
  }
  return classes[type] || 'bg-secondary'
}

const getTypeColor = (category) => {
  const colors = {
    'ผู้ใช้': 'bg-primary',
    'ระบบ': 'bg-info',
    'การขาย': 'bg-success',
    'รายงาน': 'bg-secondary'
  }
  return colors[category] || 'bg-primary'
}

const getToastClass = (type) => {
  const classes = {
    'success': 'text-bg-success',
    'warning': 'text-bg-warning',
    'error': 'text-bg-danger',
    'info': 'text-bg-info'
  }
  return classes[type] || 'text-bg-primary'
}

const getToastIcon = (type) => {
  const icons = {
    'success': 'fa-check-circle',
    'warning': 'fa-exclamation-triangle',
    'error': 'fa-exclamation-circle',
    'info': 'fa-info-circle'
  }
  return icons[type] || 'fa-bell'
}

const formatTime = (time) => {
  const now = new Date()
  const diff = now - time
  const minutes = Math.floor(diff / 60000)
  
  if (minutes < 1) return 'เมื่อกี้นี้'
  if (minutes < 60) return `${minutes} นาทีที่แล้ว`
  
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} ชั่วโมงที่แล้ว`
  
  const days = Math.floor(hours / 24)
  return `${days} วันที่แล้ว`
}

const toggleRead = (index) => {
  notifications.value[index].read = !notifications.value[index].read
}

const removeNotification = (index) => {
  notifications.value.splice(index, 1)
}

const markAllAsRead = () => {
  notifications.value.forEach(n => n.read = true)
}

const clearAll = () => {
  notifications.value = []
}

const showToast = (type, title, message) => {
  const toast = {
    id: Date.now(),
    type,
    title,
    message,
    time: new Date()
  }
  toasts.value.push(toast)
  
  setTimeout(() => {
    const index = toasts.value.findIndex(t => t.id === toast.id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }, 5000)
}

const removeToast = (index) => {
  toasts.value.splice(index, 1)
}
</script>

<style scoped>
.notification-list {
  max-height: 500px;
  overflow-y: auto;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  padding: 15px 20px;
  border-bottom: 1px solid #f8f9fa;
  transition: background-color 0.2s ease;
}

.notification-item:hover {
  background-color: #f8f9fa;
}

.notification-item.unread {
  background-color: #f0f8ff;
  border-left: 4px solid #007bff;
}

.notification-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
}

.notification-content {
  flex: 1;
}

.notification-title {
  margin-bottom: 5px;
  font-size: 1rem;
}

.notification-message {
  margin-bottom: 8px;
  color: #6c757d;
  font-size: 0.9rem;
}

.notification-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notification-time {
  font-size: 0.8rem;
  color: #6c757d;
}

.notification-category {
  font-size: 0.8rem;
  padding: 2px 8px;
  background: #e9ecef;
  border-radius: 12px;
}

.notification-actions-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.summary-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.summary-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.summary-content h3 {
  margin-bottom: 0;
  font-size: 1.8rem;
}

.type-item {
  margin-bottom: 15px;
}

.type-name {
  font-size: 0.9rem;
  color: #495057;
}

.type-count {
  font-weight: bold;
}

.live-notification-demo {
  margin-bottom: 20px;
}

.notification-settings {
  margin-top: 15px;
}

.form-check {
  margin-bottom: 10px;
}

.activity-timeline {
  max-height: 300px;
  overflow-y: auto;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}

.activity-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: white;
  font-size: 0.8rem;
}

.activity-content {
  flex: 1;
}

.activity-text {
  margin-bottom: 2px;
  font-size: 0.9rem;
}

.activity-time {
  color: #6c757d;
  font-size: 0.8rem;
}

.custom-alerts {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.custom-alert {
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid;
}

.info-alert {
  background: #e7f3ff;
  border-left-color: #007bff;
}

.progress-alert {
  background: #e8f5e8;
  border-left-color: #28a745;
}

.social-alert {
  background: #fff3cd;
  border-left-color: #ffc107;
}

.alert-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  background: rgba(0, 0, 0, 0.1);
}

.alert-content {
  flex: 1;
}

.alert-content h6 {
  margin-bottom: 8px;
}

.alert-content p {
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.online-users {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 8px;
}

.user-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid white;
}

.more-users {
  background: #6c757d;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.toast-container {
  z-index: 1055;
}

.toast {
  margin-bottom: 10px;
  min-width: 300px;
}
</style>
