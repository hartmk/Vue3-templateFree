import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap JS and make it global
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap

// Import FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// Import ApexCharts
import VueApexCharts from 'vue3-apexcharts'

// Import Flatpickr
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

// Import custom CSS
import './style.css'

// Import theme configuration
import { applyTheme, loadThemeSettings, updateThemeColors } from './config/themeConfig'

// Function to customize active menu styling
const setActiveMenuStyle = (bgColor = '#3498db', textColor = '#ffffff', radius = '0.5rem', hoverTextColor = '#ffffff') => {
  const root = document.documentElement
  root.style.setProperty('--sidebarActive', bgColor)
  root.style.setProperty('--sidebarActiveText', textColor)
  root.style.setProperty('--sidebarHoverText', hoverTextColor)
  root.style.setProperty('--activeMenuRadius', radius)
}

// Initialize theme with saved settings and force update
const initializeTheme = () => {
  // Clear any bad saved settings first
  localStorage.removeItem('themeSettings')
  
  // Apply default theme
  applyTheme('default')
  
  // Force immediate CSS variable update with correct colors
  setTimeout(() => {
    const root = document.documentElement
    root.style.setProperty('--bs-primary', '#3B71CA')
    root.style.setProperty('--bs-secondary', '#9FA6B2')
    root.style.setProperty('--bs-success', '#14A44D')
    root.style.setProperty('--bs-info', '#54B4D3')
    root.style.setProperty('--bs-warning', '#E4A11B')
    root.style.setProperty('--bs-danger', '#DC4C64')
    root.style.setProperty('--sidebarText', '#ffffff')
    root.style.setProperty('--navbarText', '#ffffff')
    root.style.setProperty('--sidebarBg', '#2c2e50ff')
    root.style.setProperty('--navbarBg', '#ffffff')
    root.style.setProperty('--sidebarActive', '#3498db')
    root.style.setProperty('--sidebarActiveText', '#ffffff')
    root.style.setProperty('--sidebarHoverText', '#ffffff')
    root.style.setProperty('--activeMenuRadius', '0.5rem')

    // ตัวอย่างการใช้งาน: เปลี่ยนสี active menu
    // setActiveMenuStyle('#28a745', '#ffffff', '1rem', '#ffffff') // สีเขียว, ข้อความขาว, radius 1rem, hover ขาว
    // setActiveMenuStyle('#dc3545', '#ffffff', '0.25rem', '#ffffff') // สีแดง, ข้อความขาว, radius 0.25rem, hover ขาว
    // setActiveMenuStyle('#6f42c1', '#ffffff', '0.75rem', '#ffffff') // สีม่วง, ข้อความขาว, radius 0.75rem, hover ขาว

    // Example: เปลี่ยนสี active menu เป็นสีเขียว
    // root.style.setProperty('--sidebarActive', '#28a745')
    // root.style.setProperty('--sidebarActiveText', '#ffffff')
    // root.style.setProperty('--sidebarHoverText', '#ffffff')
    // root.style.setProperty('--activeMenuRadius', '1rem')

    // root.style.setProperty('--bs-primary', '#0d6efd')
    // root.style.setProperty('--bs-secondary', '#6c757d')
    // root.style.setProperty('--bs-success', '#198754')
    // root.style.setProperty('--bs-info', '#0dcaf0')
    // root.style.setProperty('--bs-warning', '#ffc107')
    // root.style.setProperty('--bs-danger', '#dc3545')
    // root.style.setProperty('--sidebarText', '#ffffff')
    // root.style.setProperty('--navbarText', '#ffffff')
    // root.style.setProperty('--sidebarBg', '#2c2e50ff')
    // root.style.setProperty('--navbarBg', '#ffffff')
    // root.style.setProperty('--sidebarActive', '#3498db')
    // root.style.setProperty('--sidebarActiveText', '#ffffff')
    // root.style.setProperty('--sidebarHoverText', '#ffffff')
    // root.style.setProperty('--activeMenuRadius', '0.5rem')
  }, 100)
}

// Initialize theme
initializeTheme()

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(VueApexCharts)
app.component('flat-pickr', flatPickr)
app.mount('#app')
