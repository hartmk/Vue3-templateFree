<template>
  <div class="container-fluid py-4 px-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-primary mb-4">การตั้งค่าระบบ</h1>
        <p class="lead text-muted">จัดการการตั้งค่าและธีมของระบบ</p>
      </div>
    </div>

    <!-- Theme Settings -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0"><i class="fas fa-palette me-2"></i>การตั้งค่าธีม</h5>
          </div>
          <div class="card-body">
            <!-- Sidebar Color Settings -->
            <div class="mb-4">
              <h6 class="fw-bold mb-3">สี Sidebar</h6>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">สีพื้นหลัง Sidebar</label>
                  <div class="d-flex align-items-center">
                    <input 
                      type="color" 
                      class="form-control form-control-color me-3" 
                      v-model="settings.sidebarBgColor"
                      @input="updateSidebarColor"
                      style="width: 60px; height: 40px;"
                    >
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="settings.sidebarBgColor"
                      @input="updateSidebarColor"
                      placeholder="#2c3e50"
                    >
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label">สีข้อความ Sidebar</label>
                  <div class="d-flex align-items-center">
                    <input 
                      type="color" 
                      class="form-control form-control-color me-3" 
                      v-model="settings.sidebarTextColor"
                      @input="updateSidebarColor"
                      style="width: 60px; height: 40px;"
                    >
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="settings.sidebarTextColor"
                      @input="updateSidebarColor"
                      placeholder="#ffffff"
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Bootstrap Color Settings -->
            <div class="mb-4">
              <h6 class="fw-bold mb-3">สี Bootstrap</h6>
              <div class="row g-3">
                <div class="col-md-6 col-lg-4">
                  <label class="form-label">Primary</label>
                  <div class="d-flex align-items-center">
                    <input 
                      type="color" 
                      class="form-control form-control-color me-3" 
                      v-model="settings.primaryColor"
                      @input="updateBootstrapColors"
                      style="width: 50px; height: 38px;"
                    >
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="settings.primaryColor"
                      @input="updateBootstrapColors"
                    >
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <label class="form-label">Success</label>
                  <div class="d-flex align-items-center">
                    <input 
                      type="color" 
                      class="form-control form-control-color me-3" 
                      v-model="settings.successColor"
                      @input="updateBootstrapColors"
                      style="width: 50px; height: 38px;"
                    >
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="settings.successColor"
                      @input="updateBootstrapColors"
                    >
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <label class="form-label">Info</label>
                  <div class="d-flex align-items-center">
                    <input 
                      type="color" 
                      class="form-control form-control-color me-3" 
                      v-model="settings.infoColor"
                      @input="updateBootstrapColors"
                      style="width: 50px; height: 38px;"
                    >
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="settings.infoColor"
                      @input="updateBootstrapColors"
                    >
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <label class="form-label">Warning</label>
                  <div class="d-flex align-items-center">
                    <input 
                      type="color" 
                      class="form-control form-control-color me-3" 
                      v-model="settings.warningColor"
                      @input="updateBootstrapColors"
                      style="width: 50px; height: 38px;"
                    >
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="settings.warningColor"
                      @input="updateBootstrapColors"
                    >
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <label class="form-label">Danger</label>
                  <div class="d-flex align-items-center">
                    <input 
                      type="color" 
                      class="form-control form-control-color me-3" 
                      v-model="settings.dangerColor"
                      @input="updateBootstrapColors"
                      style="width: 50px; height: 38px;"
                    >
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="settings.dangerColor"
                      @input="updateBootstrapColors"
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Preview Section -->
            <div class="mb-4">
              <h6 class="fw-bold mb-3">ตัวอย่าง</h6>
              <div class="row g-3">
                <div class="col-md-6">
                  <button class="btn btn-primary me-2 mb-2">Primary</button>
                  <button class="btn btn-success me-2 mb-2">Success</button>
                  <button class="btn btn-info me-2 mb-2">Info</button>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-warning me-2 mb-2">Warning</button>
                  <button class="btn btn-danger me-2 mb-2">Danger</button>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="d-flex gap-2">
              <button class="btn btn-primary" @click="saveSettings">
                <i class="fas fa-save me-2"></i>บันทึกการตั้งค่า
              </button>
              <button class="btn btn-secondary" @click="resetSettings">
                <i class="fas fa-undo me-2"></i>รีเซ็ตเป็นค่าเริ่มต้น
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Settings -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-info text-white">
            <h5 class="mb-0"><i class="fas fa-window-minimize me-2"></i>การตั้งค่า Footer</h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">ข้อความ Footer</label>
                <input 
                  type="text" 
                  class="form-control" 
                  v-model="settings.footerText"
                  placeholder="© 2025 ระบบจัดการ. สงวนลิขสิทธิ์."
                >
              </div>
              <div class="col-md-6">
                <label class="form-label">เวอร์ชัน</label>
                <input 
                  type="text" 
                  class="form-control" 
                  v-model="settings.footerVersion"
                  placeholder="v1.0.0"
                >
              </div>
              <div class="col-md-6">
                <label class="form-label">สี Footer</label>
                <div class="d-flex align-items-center">
                  <input 
                    type="color" 
                    class="form-control form-control-color me-3" 
                    v-model="settings.footerBgColor"
                    style="width: 60px; height: 40px;"
                  >
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="settings.footerBgColor"
                    placeholder="#f8f9fa"
                  >
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label">แสดง Footer</label>
                <div class="form-check form-switch">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    v-model="settings.showFooter"
                    id="showFooter"
                  >
                  <label class="form-check-label" for="showFooter">
                    เปิดใช้งาน Footer
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2'

// Settings state
const settings = ref({
  // Sidebar colors
  sidebarBgColor: '#2c3e50',
  sidebarTextColor: '#ffffff',
  
  // Bootstrap colors
  primaryColor: '#0d6efd',
  successColor: '#198754',
  infoColor: '#0dcaf0',
  warningColor: '#ffc107',
  dangerColor: '#dc3545',
  
  // Footer settings
  footerText: '© 2025 ระบบจัดการ. สงวนลิขสิทธิ์.',
  footerVersion: 'v1.0.0',
  footerBgColor: '#f8f9fa',
  showFooter: true
})

// Load settings from localStorage
onMounted(() => {
  const savedSettings = localStorage.getItem('appSettings')
  if (savedSettings) {
    Object.assign(settings.value, JSON.parse(savedSettings))
    applySettings()
  }
})

// Update sidebar colors
const updateSidebarColor = () => {
  const sidebar = document.querySelector('.sidebar')
  if (sidebar) {
    sidebar.style.background = settings.value.sidebarBgColor
    sidebar.style.color = settings.value.sidebarTextColor
    
    // Update menu item colors
    const menuItems = sidebar.querySelectorAll('.menu-item')
    menuItems.forEach(item => {
      item.style.color = settings.value.sidebarTextColor
    })
  }
}

// Update Bootstrap colors
const updateBootstrapColors = () => {
  const root = document.documentElement
  root.style.setProperty('--bs-primary', settings.value.primaryColor)
  root.style.setProperty('--bs-success', settings.value.successColor)
  root.style.setProperty('--bs-info', settings.value.infoColor)
  root.style.setProperty('--bs-warning', settings.value.warningColor)
  root.style.setProperty('--bs-danger', settings.value.dangerColor)
}

// Apply all settings
const applySettings = () => {
  updateSidebarColor()
  updateBootstrapColors()
  
  // Apply footer settings
  const footer = document.querySelector('.app-footer')
  if (footer) {
    footer.style.backgroundColor = settings.value.footerBgColor
    footer.style.display = settings.value.showFooter ? 'block' : 'none'
  }
}

// Save settings
const saveSettings = () => {
  localStorage.setItem('appSettings', JSON.stringify(settings.value))
  applySettings()
  
  Swal.fire({
    icon: 'success',
    title: 'บันทึกสำเร็จ!',
    text: 'การตั้งค่าได้ถูกบันทึกแล้ว',
    timer: 2000,
    showConfirmButton: false
  })
}

// Reset settings to default
const resetSettings = () => {
  Swal.fire({
    title: 'รีเซ็ตการตั้งค่า?',
    text: 'คุณต้องการรีเซ็ตการตั้งค่าเป็นค่าเริ่มต้นหรือไม่?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'รีเซ็ต',
    cancelButtonText: 'ยกเลิก',
    confirmButtonColor: '#d33'
  }).then((result) => {
    if (result.isConfirmed) {
      settings.value = {
        sidebarBgColor: '#2c3e50',
        sidebarTextColor: '#ffffff',
        primaryColor: '#0d6efd',
        successColor: '#198754',
        infoColor: '#0dcaf0',
        warningColor: '#ffc107',
        dangerColor: '#dc3545',
        footerText: '© 2025 ระบบจัดการ. สงวนลิขสิทธิ์.',
        footerVersion: 'v1.0.0',
        footerBgColor: '#f8f9fa',
        showFooter: true
      }
      
      localStorage.removeItem('appSettings')
      applySettings()
      
      Swal.fire({
        icon: 'success',
        title: 'รีเซ็ตสำเร็จ!',
        text: 'การตั้งค่าได้ถูกรีเซ็ตเป็นค่าเริ่มต้นแล้ว',
        timer: 2000,
        showConfirmButton: false
      })
    }
  })
}
</script>

<style scoped>
.form-control-color {
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
  cursor: pointer;
}

.form-control-color::-webkit-color-swatch-wrapper {
  padding: 0;
}

.form-control-color::-webkit-color-swatch {
  border: none;
  border-radius: 0.25rem;
}

.form-check-input:checked {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.btn {
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.card {
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
