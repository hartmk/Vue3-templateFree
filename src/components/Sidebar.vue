<template>
  <nav class="bg-dark text-light position-fixed start-0 top-0 h-100 transition-all sidebar" 
       :class="[
         sidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded',
         isMobileMenuOpen ? 'mobile-menu-open' : ''
       ]" 
       style="z-index: 1000; box-shadow: 2px 0 10px rgba(0,0,0,0.1); overflow: hidden;">
    
    <!-- Mobile overlay -->
    <div 
      v-if="isMobileMenuOpen" 
      class="mobile-overlay d-lg-none"
      @click="closeMobileMenu"
    ></div>
    
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary sidebar-header">
      <h4 v-show="!sidebarCollapsed" class="mb-0 text-light fw-semibold fs-6">Dashboard</h4>
      <button class="btn btn-outline-light btn-sm border-0" @click="toggleSidebar">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    
    <!-- Scrollable Menu Content -->
    <div class="sidebar-content">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="item in menuItems" :key="item.id">
          <!-- Main menu item -->
          <template v-if="!item.children">
            <router-link 
              class="nav-link d-flex align-items-center text-light py-3 px-3" 
              :class="{ 'active-menu-item': activeMenu === item.id }" 
              :to="item.route"
              @click="setActiveMenu(item.id)"
              style="transition: all 0.3s ease; font-size: 0.9rem;"
            >
              <i :class="item.icon" class="me-3" style="width: 20px; text-align: center;"></i>
              <span v-show="!sidebarCollapsed">{{ item.name }}</span>
            </router-link>
          </template>
          
          <!-- Menu item with submenu -->
          <template v-else>
            <a 
              href="#"
              class="nav-link d-flex align-items-center justify-content-between text-light py-3 px-3"
              :class="{ 
                'active-menu-item': activeMenu === item.id || isParentActive(item)
              }"
              @click.prevent="toggleSubmenu(item.id)"
              style="transition: all 0.3s ease; font-size: 0.9rem;"
            >
              <div class="d-flex align-items-center">
                <i :class="item.icon" class="me-3" style="width: 20px; text-align: center;"></i>
                <span v-show="!sidebarCollapsed">{{ item.name }}</span>
              </div>
              <i 
                v-show="!sidebarCollapsed"
                class="fas fa-chevron-down transition-transform"
                :class="{ 'rotate-180': openSubmenus.includes(item.id) }"
                style="font-size: 0.8rem; transition: transform 0.3s ease;"
              ></i>
            </a>
            
            <div 
              class="collapse"
              :class="{ 
                show: openSubmenus.includes(item.id) && !sidebarCollapsed,
                'd-none': sidebarCollapsed 
              }"
              style="background: rgba(0, 0, 0, 0.1);"
            >
              <ul class="nav flex-column">
                <li class="nav-item" v-for="child in item.children" :key="child.id">
                  <router-link 
                    class="nav-link d-flex align-items-center text-light ps-5 py-2"
                    :class="{ 'active-submenu-item': activeMenu === child.id }"
                    :to="child.route"
                    @click="setActiveMenu(child.id)"
                    style="font-size: 0.85rem; border-left: 2px solid transparent; margin-left: 1rem; transition: all 0.3s ease;"
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
  menuItems: Array,
  isMobileMenuOpen: Boolean
})

const emit = defineEmits(['toggle-sidebar', 'set-active-menu', 'close-mobile-menu'])

// State for managing open submenus
const openSubmenus = ref([])

const toggleSidebar = () => {
  emit('toggle-sidebar')
}

const setActiveMenu = (menuId) => {
  emit('set-active-menu', menuId)
  // Auto close mobile menu when menu item is selected
  if (props.isMobileMenuOpen) {
    emit('close-mobile-menu')
  }
}

const closeMobileMenu = () => {
  emit('close-mobile-menu')
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
.sidebar-expanded {
  width: 260px;
}

.sidebar-collapsed {
  width: 70px;
}

.transition-all {
  transition: all 0.3s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}

/* Active menu styling with CSS variables */
.active-menu-item {
  background-color: var(--sidebarActive, #3498db) !important;
  color: var(--sidebarActiveText, #ffffff) !important;
  border-radius: var(--activeMenuRadius, 0.5rem) !important;
  margin: 0.25rem 0.5rem !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
}

.active-submenu-item {
  background-color: var(--sidebarActive, #3498db) !important;
  color: var(--sidebarActiveText, #ffffff) !important;
  border-radius: var(--activeMenuRadius, 0.5rem) !important;
  margin: 0.125rem 1rem !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
}

.nav-link:hover {
  background-color: rgba(255,255,255,0.1) !important;
  color: var(--sidebarHoverText, #ffffff) !important;
  border-radius: var(--activeMenuRadius, 0.5rem) !important;
  margin: 0.25rem 0.5rem !important;
}

.nav-link:hover span,
.nav-link:hover i {
  color: var(--sidebarHoverText, #ffffff) !important;
}

/* Submenu hover effect */
.submenu .nav-link:hover {
  background-color: rgba(255,255,255,0.08) !important;
  color: var(--sidebarHoverText, #ffffff) !important;
  border-radius: var(--activeMenuRadius, 0.5rem) !important;
  margin: 0.125rem 1rem !important;
}

.submenu .nav-link:hover span,
.submenu .nav-link:hover i {
  color: var(--sidebarHoverText, #ffffff) !important;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar-expanded,
  .sidebar-collapsed {
    width: 100%;
    transform: translateX(-100%);
  }
  
  .sidebar-expanded.show,
  .sidebar-collapsed.show {
    transform: translateX(0);
  }
}
</style>

<style scoped>
.sidebar-expanded {
  width: 260px;
  background: linear-gradient(180deg, var(--sidebarBg, #2c3e50) 0%, #34495e 100%);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar-collapsed {
  width: 70px;
  background: linear-gradient(180deg, var(--sidebarBg, #2c3e50) 0%, #34495e 100%);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  height: 60px;
  min-height: 60px;
  flex-shrink: 0;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  scroll-behavior: smooth;
}

/* Custom Scrollbar Styling */
.sidebar-content::-webkit-scrollbar {
  width: 6px;
}

.sidebar-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.sidebar-content::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%);
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;
}

.sidebar-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.3) 100%);
}

/* Fade effect for better UX */
.sidebar-content::before {
  content: '';
  position: sticky;
  top: 0;
  height: 8px;
  background: linear-gradient(to bottom, rgba(44, 62, 80, 1), rgba(44, 62, 80, 0));
  z-index: 1;
  pointer-events: none;
  display: block;
}

.sidebar-content::after {
  content: '';
  position: sticky;
  bottom: 0;
  height: 8px;
  background: linear-gradient(to top, rgba(52, 73, 94, 1), rgba(52, 73, 94, 0));
  z-index: 1;
  pointer-events: none;
  display: block;
}

.transition-all {
  transition: all 0.3s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}

.transition-transform {
  transition: transform 0.3s ease;
}

.nav-link:hover {
  background: rgba(255,255,255,0.1) !important;
  transform: translateX(5px);
}

.nav-link.bg-primary {
  border-right: 3px solid var(--sidebarActive, #667eea);
}

.collapsed .nav-link {
  padding: 0.75rem;
  text-align: center;
}

.collapsed .nav-link:hover {
  transform: none;
}

/* Mobile Responsive */
@media (max-width: 770px) {
  .sidebar {
    width: 280px;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .sidebar.mobile-menu-open {
    transform: translateX(0) !important;
  }
}

/* Mobile overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

@media (min-width: 771px) {
  .sidebar {
    transform: translateX(0) !important;
  }
  
  .mobile-overlay {
    display: none !important;
  }
}
</style>
