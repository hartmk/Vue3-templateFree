<template>
  <div class="container-fluid py-4 px-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-primary mb-4">การตั้งค่าระบบ</h1>
        <p class="lead text-muted">จัดการการตั้งค่าทั่วไปของระบบ</p>
      </div>
    </div>

    <!-- App Settings -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0"><i class="fas fa-cog me-2"></i>การตั้งค่าแอปพลิเคชัน</h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">ชื่อเว็บไซต์</label>
                <input 
                  type="text" 
                  class="form-control" 
                  v-model="appName"
                  placeholder="ระบบจัดการ Dashboard"
                >
              </div>
              <div class="col-md-6">
                <label class="form-label">เวอร์ชัน</label>
                <input 
                  type="text" 
                  class="form-control" 
                  :value="getAppVersion()"
                  readonly
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="row">
      <div class="col-12">
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
</template>

<script setup>
import { useAppConfig } from '../composables/useAppConfig'
import Swal from 'sweetalert2'

// Composables
const { appName, getAppVersion, updateAppName, resetConfig } = useAppConfig()

// Save all settings
const saveSettings = () => {
  updateAppName(appName.value)
  
  Swal.fire({
    title: 'สำเร็จ!',
    text: 'บันทึกการตั้งค่าเรียบร้อยแล้ว',
    icon: 'success',
    confirmButtonText: 'ตกลง'
  })
}

// Reset all settings
const resetSettings = () => {
  Swal.fire({
    title: 'ยืนยันการรีเซ็ต',
    text: 'คุณต้องการรีเซ็ตการตั้งค่าทั้งหมดเป็นค่าเริ่มต้นหรือไม่?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'รีเซ็ต',
    cancelButtonText: 'ยกเลิก'
  }).then((result) => {
    if (result.isConfirmed) {
      resetConfig()
      
      Swal.fire({
        title: 'สำเร็จ!',
        text: 'รีเซ็ตการตั้งค่าเรียบร้อยแล้ว',
        icon: 'success',
        confirmButtonText: 'ตกลง'
      })
    }
  })
}
</script>

<style scoped>
/* Simple styling for settings page */
.form-control:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-1px);
}
</style>
