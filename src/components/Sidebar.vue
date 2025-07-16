<template>
  <nav class="bg-dark text-light position-fixed start-0 top-0 h-100 transition-all" 
       :class="sidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'" 
       style="z-index: 1000; box-shadow: 2px 0 10px rgba(0,0,0,0.1); overflow: hidden;">
    <div class="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary" style="height: 60px; min-height: 60px;">
      <h4 v-show="!sidebarCollapsed" class="mb-0 text-light fw-semibold fs-6">Dashboard</h4>
      <button class="btn btn-outline-light btn-sm border-0" @click="toggleSidebar">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div class="py-3" style="max-height: calc(100vh - 60px); overflow-y: visible;">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="item in menuItems" :key="item.id">
          <!-- Main menu item -->
          <template v-if="!item.children">
            <router-link 
              class="nav-link d-flex align-items-center text-light py-3 px-3" 
              :class="{ 'bg-primary': activeMenu === item.id }" 
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
                'bg-primary': activeMenu === item.id || isParentActive(item)
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
                    :class="{ 'bg-primary': activeMenu === child.id }"
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
.sidebar-expanded {
  width: 260px;
  background: linear-gradient(180deg, var(--sidebarBg, #2c3e50) 0%, #34495e 100%);
  transition: all 0.3s ease;
}

.sidebar-collapsed {
  width: 70px;
  background: linear-gradient(180deg, var(--sidebarBg, #2c3e50) 0%, #34495e 100%);
  transition: all 0.3s ease;
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
