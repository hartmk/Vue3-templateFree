<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <span class="fw-bold text-primary me-3 pe-3 border-end border-2">{{ appName }}</span>
        <span class="navbar-brand mb-0 h1">{{ currentPageTitle }}</span>
      </div>
      <div class="navbar-nav ms-auto d-flex flex-row align-items-center">
        <div class="nav-item dropdown me-3">
          <a 
            class="nav-link position-relative" 
            href="#" 
            role="button"
            @click.prevent="toggleNotifications"
            :aria-expanded="isNotificationOpen"
          >
            <i class="fas fa-bell text-secondary fs-5"></i>
            <span v-if="unreadCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ unreadCount > 99 ? '99+' : unreadCount }}</span>
          </a>
          
          <!-- Notification Dropdown -->
          <div class="dropdown-menu dropdown-menu-end p-0 shadow border-0" :class="{ show: isNotificationOpen }" style="width: 350px; max-height: 500px;">
            <div class="p-3 bg-light border-bottom d-flex justify-content-between align-items-center rounded-top">
              <h6 class="mb-0">การแจ้งเตือน</h6>
              <small class="text-muted">{{ unreadCount }} รายการใหม่</small>
            </div>
            
            <div class="overflow-auto" style="max-height: 300px;">
              <div 
                v-for="notification in notifications" 
                :key="notification.id"
                class="d-flex align-items-start p-3 border-bottom position-relative"
                :class="{ 'bg-light': !notification.read }"
                @click="markAsRead(notification.id)"
                style="cursor: pointer;"
              >
                <div class="rounded-circle d-flex align-items-center justify-content-center text-white me-3" 
                     :class="`bg-${notification.type}`" 
                     style="width: 36px; height: 36px; font-size: 0.875rem;">
                  <i :class="notification.icon"></i>
                </div>
                <div class="flex-grow-1">
                  <div class="fw-semibold small mb-1">{{ notification.title }}</div>
                  <div class="text-muted small mb-1" style="line-height: 1.3;">{{ notification.message }}</div>
                  <div class="text-muted" style="font-size: 0.75rem;">{{ formatTime(notification.time) }}</div>
                </div>
                <div v-if="!notification.read" class="position-absolute top-50 end-0 translate-middle-y me-3">
                  <span class="bg-primary rounded-circle" style="width: 8px; height: 8px; display: block;"></span>
                </div>
              </div>
              
              <div v-if="notifications.length === 0" class="text-center py-4 text-muted">
                <i class="fas fa-bell-slash fa-2x mb-2"></i>
                <p class="mb-0">ไม่มีการแจ้งเตือน</p>
              </div>
            </div>
            
            <div class="p-3 bg-light border-top d-flex gap-2 rounded-bottom">
              <button class="btn btn-sm btn-outline-primary" @click="markAllAsRead">
                อ่านทั้งหมด
              </button>
              <button class="btn btn-sm btn-outline-secondary" @click="clearAllNotifications">
                ลบทั้งหมด
              </button>
            </div>
          </div>
        </div>
        <div class="nav-item dropdown">
          <a 
            class="nav-link dropdown-toggle d-flex align-items-center" 
            href="#" 
            role="button" 
            @click.prevent="toggleDropdown"
            :aria-expanded="isDropdownOpen"
          >
            <div class="rounded-circle overflow-hidden border border-2 border-light" style="width: 32px; height: 32px;">
              <img 
                :src="user?.avatar || defaultAvatar" 
                :alt="user?.name || 'ผู้ใช้'"
                class="w-100 h-100 object-fit-cover"
                @error="handleImageError"
              >
            </div>
            <span class="d-none d-md-inline">{{ user?.name || 'ผู้ใช้' }}</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" :class="{ show: isDropdownOpen }">
            <li><a class="dropdown-item" href="#" @click.prevent="closeDropdown"><i class="fas fa-user me-2"></i>โปรไฟล์</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="goToSettings"><i class="fas fa-cog me-2"></i>ตั้งค่า</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click.prevent="handleLogout"><i class="fas fa-sign-out-alt me-2"></i>ออกจากระบบ</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { useAppConfig } from '../composables/useAppConfig'

const props = defineProps({
  currentPageTitle: String,
  user: Object
})

const authStore = useAuthStore()
const router = useRouter()
const { appName } = useAppConfig()
const isDropdownOpen = ref(false)
const isNotificationOpen = ref(false)

// Default avatar URL
const defaultAvatar = ref('https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png')

// Handle image error
const handleImageError = (event) => {
  event.target.src = defaultAvatar.value
}

// Notification data
const notifications = ref([
  {
    id: 1,
    type: 'success',
    icon: 'fas fa-check-circle',
    title: 'การสั่งซื้อสำเร็จ',
    message: 'คำสั่งซื้อ #12345 ได้รับการยืนยันแล้ว',
    time: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
    read: false
  },
  {
    id: 2,
    type: 'info',
    icon: 'fas fa-info-circle',
    title: 'อัพเดทระบบ',
    message: 'ระบบจะได้รับการอัพเดทในวันที่ 20 ก.ค. 2025',
    time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    read: false
  },
  {
    id: 3,
    type: 'warning',
    icon: 'fas fa-exclamation-triangle',
    title: 'คำเตือนสต็อก',
    message: 'สินค้า iPhone 15 Pro เหลือน้อยกว่า 10 ชิ้น',
    time: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    read: true
  },
  {
    id: 4,
    type: 'danger',
    icon: 'fas fa-times-circle',
    title: 'การชำระเงินล้มเหลว',
    message: 'คำสั่งซื้อ #12340 ชำระเงินไม่สำเร็จ',
    time: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    read: true
  }
])

// Computed properties
const unreadCount = computed(() => {
  return notifications.value.filter(n => !n.read).length
})

// Toggle dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
  isNotificationOpen.value = false // Close notification when opening user dropdown
}

// Toggle notifications
const toggleNotifications = () => {
  isNotificationOpen.value = !isNotificationOpen.value
  isDropdownOpen.value = false // Close user dropdown when opening notifications
}

// Close dropdown
const closeDropdown = () => {
  isDropdownOpen.value = false
}

// Close notifications
const closeNotifications = () => {
  isNotificationOpen.value = false
}

// Go to settings page
const goToSettings = () => {
  closeDropdown()
  router.push('/settings')
}

// Mark notification as read
const markAsRead = (notificationId) => {
  const notification = notifications.value.find(n => n.id === notificationId)
  if (notification) {
    notification.read = true
  }
}

// Mark all notifications as read
const markAllAsRead = () => {
  notifications.value.forEach(n => n.read = true)
  closeNotifications()
}

// Clear all notifications
const clearAllNotifications = () => {
  notifications.value = []
  closeNotifications()
}

// Format time
const formatTime = (time) => {
  const now = new Date()
  const diff = now - time
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (minutes < 60) {
    return `${minutes} นาทีที่แล้ว`
  } else if (hours < 24) {
    return `${hours} ชั่วโมงที่แล้ว`
  } else {
    return `${days} วันที่แล้ว`
  }
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  const dropdown = event.target.closest('.dropdown')
  const notificationDropdown = event.target.closest('.nav-item')
  
  if (!dropdown && isDropdownOpen.value) {
    isDropdownOpen.value = false
  }
  
  if (!notificationDropdown && isNotificationOpen.value) {
    isNotificationOpen.value = false
  }
}

// Add click outside listener
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Remove click outside listener
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleLogout = async () => {
  closeDropdown()
  const success = await authStore.logout()
  if (success) {
    router.push('/login')
  }
}
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: 60px;
  padding: 0.5rem 1rem;
}

.navbar-brand {
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
}

.dropdown-menu {
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background-color: rgba(102, 126, 234, 0.1);
  color: var(--bs-primary);
}
</style>
