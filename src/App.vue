<template>
  <div id="app">
    <!-- Loading Screen -->
    <div v-if="authLoading" class="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div class="text-center">
        <div class="spinner-border text-primary mb-3" style="width: 3rem; height: 3rem;"></div>
        <p class="text-muted">กำลังตรวจสอบสิทธิ์...</p>
      </div>
    </div>

    <!-- Application Content -->
    <div v-else>
      <!-- Show Login page if route is /login -->
      <router-view v-if="$route.name === 'Login'" />

      <!-- Show Dashboard if authenticated -->
      <div v-else-if="isAuthenticated">
        <!-- Sidebar -->
        <Sidebar 
          :sidebar-collapsed="sidebarCollapsed" 
          :active-menu="activeMenu" 
          :menu-items="menuItems"
          @toggle-sidebar="toggleSidebar" 
          @set-active-menu="setActiveMenu" 
        />

        <!-- Main Content -->
        <div class="main-content" :class="{ expanded: sidebarCollapsed }">
          <!-- Top Navbar -->
          <TopNavbar 
            :current-page-title="currentPageTitle" 
            :user="user" 
            @logout="handleLogout" 
          />

          <!-- Page Content -->
          <div class="page-content">
            <router-view />
          </div>

          <!-- Footer -->
          <Footer />
        </div>
      </div>

      <!-- Redirect to login if not authenticated -->
      <div v-else>
        <div class="d-flex align-items-center justify-content-center min-vh-100 bg-light">
          <div class="text-center">
            <h3>กำลังเปลี่ยนเส้นทาง...</h3>
            <p class="text-muted">กรุณารอสักครู่</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from './composables/useAuth'
import Sidebar from './components/Sidebar.vue'
import TopNavbar from './components/TopNavbar.vue'
import Footer from './components/Footer.vue'

const router = useRouter()
const route = useRoute()
const { user, isAuthenticated, isLoading, initializeAuth, logout } = useAuth()

const sidebarCollapsed = ref(false)
const authLoading = ref(false) // เปลี่ยนเป็น false เลย

// Menu items for navigation
const menuItems = ref([
  { id: 'dashboard', name: 'แดชบอร์ด', icon: 'fas fa-tachometer-alt', route: '/dashboard' },
  { 
    id: 'ui', 
    name: 'UI Elements', 
    icon: 'fas fa-puzzle-piece',
    children: [
      { id: 'components', name: 'UI Components', icon: 'fas fa-cube', route: '/components' },
      { id: 'charts', name: 'Charts & Graphs', icon: 'fas fa-chart-line', route: '/charts' },
      { id: 'apexcharts', name: 'ApexCharts', icon: 'fas fa-chart-area', route: '/apexcharts' },
      { id: 'sweetalert', name: 'SweetAlert', icon: 'fas fa-bell', route: '/sweetalert' },
      { id: 'forminput', name: 'Form Input', icon: 'fas fa-edit', route: '/forminput' },
      { id: 'icons', name: 'Icons', icon: 'fas fa-icons', route: '/icons' },
      { id: 'datetimepicker', name: 'DateTime Picker', icon: 'fas fa-calendar-alt', route: '/datetimepicker' },
      { id: 'modals', name: 'Modals', icon: 'fas fa-window-restore', route: '/modals' },
      { id: 'dayjs', name: 'Day.js', icon: 'fas fa-clock', route: '/dayjs' },
      { id: 'googlemaps', name: 'Google Maps', icon: 'fas fa-map-marked-alt', route: '/googlemaps' },
      { id: 'academy-dashboard', name: 'Academy Dashboard', icon: 'fas fa-graduation-cap', route: '/academy-dashboard' },
      { id: 'datatables', name: 'DataTables', icon: 'fas fa-table', route: '/datatables' }
    ]
  },
  { id: 'documentation', name: 'Documentation', icon: 'fas fa-book', route: '/documentation' },
  { 
    id: 'ecommerce', 
    name: 'E-Commerce', 
    icon: 'fas fa-shopping-cart',
    children: [
      { id: 'products', name: 'สินค้า', icon: 'fas fa-box', route: '/products' },
      { id: 'orders', name: 'คำสั่งซื้อ', icon: 'fas fa-shopping-bag', route: '/orders' },
      { id: 'customers', name: 'ลูกค้า', icon: 'fas fa-users', route: '/customers' }
    ]
  },
  { id: 'analytics', name: 'รายงาน', icon: 'fas fa-chart-bar', route: '/analytics' },
  { id: 'settings', name: 'ตั้งค่า', icon: 'fas fa-cog', route: '/settings' }
])

// Get active menu based on current route
const activeMenu = computed(() => {
  const currentRoute = route.name
  const currentPath = route.path
  
  // Function to find menu item recursively
  const findMenuItem = (items) => {
    for (const item of items) {
      // Check if it's a direct match
      if (item.route === currentPath || item.id === currentRoute?.toLowerCase()) {
        return item.id
      }
      
      // Check children if exist
      if (item.children) {
        for (const child of item.children) {
          if (child.route === currentPath || child.id === currentRoute?.toLowerCase()) {
            return child.id
          }
        }
      }
    }
    return null
  }
  
  return findMenuItem(menuItems.value) || 'dashboard'
})

// Get current page title
const currentPageTitle = computed(() => {
  // First try to get title from route meta
  if (route.meta?.title) {
    return route.meta.title
  }
  
  // Function to find menu item title recursively
  const findMenuTitle = (items, targetId) => {
    for (const item of items) {
      if (item.id === targetId) {
        return item.name
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.id === targetId) {
            return child.name
          }
        }
      }
    }
    return null
  }
  
  return findMenuTitle(menuItems.value, activeMenu.value) || 'ระบบจัดการร้านค้า'
})

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

const setActiveMenu = (menuId) => {
  const menuItem = menuItems.value.find(item => item.id === menuId)
  if (menuItem && menuItem.route) {
    router.push(menuItem.route)
  }
}

const handleLogout = async () => {
  await logout()
  router.push('/login')
}

// Watch authentication state changes
watch(isAuthenticated, (newValue) => {
  if (!newValue && route.name !== 'Login') {
    router.push('/login')
  }
})
</script>

<style>
.min-vh-100 {
  min-height: 100vh;
}

.main-content {
  margin-left: 260px; /* เว้นระยะสำหรับ sidebar */
  min-height: 100vh;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

.main-content.expanded {
  margin-left: 70px; /* เมื่อ sidebar ย่อ */
}

.page-content {
  min-height: calc(100vh - 60px);
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
  
  .main-content.expanded {
    margin-left: 0;
  }
}
</style>
