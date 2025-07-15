<template>
  <nav class="sidebar" :class="{ collapsed: sidebarCollapsed }">
    <div class="sidebar-header d-flex justify-content-between align-items-center">
      <h4 v-show="!sidebarCollapsed" class="mb-0">Dashboard</h4>
      <button class="toggle-btn" @click="toggleSidebar">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div class="sidebar-menu">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="item in menuItems" :key="item.id">
          <!-- Main menu item -->
          <template v-if="!item.children">
            <router-link 
              class="nav-link d-flex align-items-center" 
              :class="{ active: activeMenu === item.id }" 
              :to="item.route"
              @click="setActiveMenu(item.id)"
            >
              <i :class="item.icon" class="me-3"></i>
              <span v-show="!sidebarCollapsed">{{ item.name }}</span>
            </router-link>
          </template>
          
          <!-- Menu item with submenu -->
          <template v-else>
            <a 
              href="#"
              class="nav-link d-flex align-items-center justify-content-between"
              :class="{ 
                active: activeMenu === item.id || isParentActive(item),
                'has-submenu': true
              }"
              @click.prevent="toggleSubmenu(item.id)"
            >
              <div class="d-flex align-items-center">
                <i :class="item.icon" class="me-3"></i>
                <span v-show="!sidebarCollapsed">{{ item.name }}</span>
              </div>
              <i 
                v-show="!sidebarCollapsed"
                class="fas fa-chevron-down submenu-arrow"
                :class="{ rotated: openSubmenus.includes(item.id) }"
              ></i>
            </a>
            
            <!-- Submenu -->
            <div 
              class="submenu"
              :class="{ 
                show: openSubmenus.includes(item.id) && !sidebarCollapsed,
                collapsed: sidebarCollapsed 
              }"
            >
              <ul class="nav flex-column">
                <li class="nav-item" v-for="child in item.children" :key="child.id">
                  <router-link 
                    class="nav-link submenu-link d-flex align-items-center"
                    :class="{ active: activeMenu === child.id }"
                    :to="child.route"
                    @click="setActiveMenu(child.id)"
                  >
                    <i :class="child.icon" class="me-3"></i>
                    <span v-show="!sidebarCollapsed">{{ child.name }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </template>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  sidebarCollapsed: Boolean,
  activeMenu: String,
  menuItems: Array
})

const emit = defineEmits(['toggle-sidebar', 'set-active-menu'])

// State for managing open submenus
const openSubmenus = ref([])

const toggleSidebar = () => {
  emit('toggle-sidebar')
}

const setActiveMenu = (menuId) => {
  emit('set-active-menu', menuId)
}

const toggleSubmenu = (menuId) => {
  if (props.sidebarCollapsed) return
  
  const index = openSubmenus.value.indexOf(menuId)
  if (index > -1) {
    openSubmenus.value.splice(index, 1)
  } else {
    openSubmenus.value.push(menuId)
  }
}

const isParentActive = (item) => {
  if (!item.children) return false
  return item.children.some(child => child.id === props.activeMenu)
}

// Auto-open submenu if child is active
const checkActiveSubmenu = () => {
  props.menuItems.forEach(item => {
    if (item.children && isParentActive(item)) {
      if (!openSubmenus.value.includes(item.id)) {
        openSubmenus.value.push(item.id)
      }
    }
  })
}

// Watch for active menu changes
import { watch } from 'vue'
watch(() => props.activeMenu, () => {
  checkActiveSubmenu()
}, { immediate: true })
</script>

<style scoped>
.sidebar {
  width: 260px; /* ลดขนาดจาก default */
  min-height: 100vh;
  background: linear-gradient(180deg, var(--sidebarBg, #2c3e50) 0%, #34495e 100%);
  color: white !important;
  transition: all 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  overflow: hidden;
}

.sidebar.collapsed {
  width: 70px; /* ขนาดเมื่อย่อ */
}

.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  height: 60px; /* เท่ากับ navbar */
  min-height: 60px;
}

.sidebar-header h4 {
  color: white !important;
  font-weight: 600;
  font-size: 1.1rem;
}

.toggle-btn {
  background: none;
  border: none;
  color: white !important;
  font-size: 1.1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  background: rgba(255,255,255,0.1);
}

.sidebar-menu {
  padding: 1rem 0;
  overflow-y: visible;
  max-height: calc(100vh - 60px);
}

.nav-item {
  margin-bottom: 0.25rem;
}

.nav-link {
  color: white !important;
  padding: 0.75rem 1rem;
  border-radius: 0;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
}

.nav-link:hover {
  background: rgba(255,255,255,0.1);
  color: white !important;
  transform: translateX(5px);
}

.nav-link.active {
  background: rgba(255,255,255,0.15);
  color: white !important;
  border-right: 3px solid var(--sidebarActive, #667eea);
}

.nav-link.has-submenu {
  position: relative;
}

.nav-link i {
  width: 20px;
  text-align: center;
  font-size: 1rem;
}

.submenu-arrow {
  transition: transform 0.3s ease;
  font-size: 0.8rem !important;
  width: auto !important;
}

.submenu-arrow.rotated {
  transform: rotate(180deg);
}

/* Submenu Styles */
.submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(0, 0, 0, 0.1);
}

.submenu.show {
  max-height: 500px; /* กำหนดความสูงสูงสุด */
}

.submenu.collapsed {
  display: none;
}

.submenu-link {
  padding: 0.5rem 1rem 0.5rem 3rem !important;
  font-size: 0.85rem;
  border-left: 2px solid transparent;
  margin-left: 1rem;
}

.submenu-link:hover {
  background: rgba(255,255,255,0.08);
  border-left-color: var(--sidebarActive, #667eea);
  transform: translateX(3px);
}

.submenu-link.active {
  background: rgba(255,255,255,0.12);
  border-left-color: var(--sidebarActive, #667eea);
  border-right: none;
}

.collapsed .nav-link {
  padding: 0.75rem;
  text-align: center;
}

.collapsed .nav-link:hover {
  transform: none;
}

.collapsed .submenu-link {
  padding: 0.5rem !important;
  margin-left: 0;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    transform: translateX(-100%);
  }
  
  .sidebar.show {
    transform: translateX(0);
  }
  
  .sidebar.collapsed {
    width: 100%;
    transform: translateX(-100%);
  }
}
</style>
