<template>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-12">
        <!-- Header Section -->
        <div class="mb-4">
          <h2 class="mb-1">
            <i class="fas fa-exclamation-triangle text-warning me-2"></i>
            Alerts
          </h2>
          <p class="text-muted mb-0">ตัวอย่างการใช้งาน Alert Components ของ Bootstrap 5</p>
        </div>

        <!-- Basic Alerts -->
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-info-circle text-primary me-2"></i>
                  Basic Alerts
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">Alert พื้นฐานในสีต่างๆ ของ Bootstrap</p>
                
                <div class="alert alert-primary" role="alert">
                  <strong>Primary Alert!</strong> นี่คือ alert หลักที่ใช้สำหรับข้อมูลทั่วไป
                </div>
                
                <div class="alert alert-secondary" role="alert">
                  <strong>Secondary Alert!</strong> นี่คือ alert รองที่ใช้สำหรับข้อมูลเสริม
                </div>
                
                <div class="alert alert-success" role="alert">
                  <strong>Success Alert!</strong> นี่คือ alert ที่แสดงความสำเร็จของการดำเนินการ
                </div>
                
                <div class="alert alert-danger" role="alert">
                  <strong>Danger Alert!</strong> นี่คือ alert ที่แสดงข้อผิดพลาดหรือคำเตือนสำคัญ
                </div>
                
                <div class="alert alert-warning" role="alert">
                  <strong>Warning Alert!</strong> นี่คือ alert ที่แสดงคำเตือนที่ควรระวัง
                </div>
                
                <div class="alert alert-info" role="alert">
                  <strong>Info Alert!</strong> นี่คือ alert ที่แสดงข้อมูลเพิ่มเติม
                </div>
                
                <div class="alert alert-light" role="alert">
                  <strong>Light Alert!</strong> นี่คือ alert แบบสีอ่อนสำหรับข้อความธรรมดา
                </div>
                
                <div class="alert alert-dark mb-0" role="alert">
                  <strong>Dark Alert!</strong> นี่คือ alert แบบสีเข้มสำหรับข้อความที่เด่น
                </div>
                
                <div class="bg-light p-3 rounded mt-4">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;div class="alert alert-success" role="alert"&gt;<br>
                    &nbsp;&nbsp;&lt;strong&gt;Success!&lt;/strong&gt; การดำเนินการสำเร็จ<br>
                    &lt;/div&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dismissible Alerts -->
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-times-circle text-danger me-2"></i>
                  Dismissible Alerts
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">Alert ที่สามารถปิดได้</p>
                
                <div v-for="(alert, index) in dismissibleAlerts" :key="`alert-${index}`" v-show="alert.visible">
                  <div :class="`alert alert-${alert.type} alert-dismissible fade show`" role="alert">
                    <strong>{{ alert.title }}</strong> {{ alert.message }}
                    <button 
                      type="button" 
                      class="btn-close" 
                      @click="dismissAlert(index)"
                      :aria-label="`ปิด ${alert.title}`"
                    ></button>
                  </div>
                </div>
                
                <button 
                  class="btn btn-outline-primary me-2" 
                  @click="resetAlerts"
                  v-if="dismissibleAlerts.some(alert => !alert.visible)"
                >
                  <i class="fas fa-redo me-2"></i>แสดง Alert ใหม่
                </button>
                
                <div class="bg-light p-3 rounded mt-4">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;div class="alert alert-warning alert-dismissible fade show" role="alert"&gt;<br>
                    &nbsp;&nbsp;&lt;strong&gt;Warning!&lt;/strong&gt; ข้อความเตือน<br>
                    &nbsp;&nbsp;&lt;button type="button" class="btn-close" data-bs-dismiss="alert"&gt;&lt;/button&gt;<br>
                    &lt;/div&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Alerts with Icons -->
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-icons text-success me-2"></i>
                  Alerts with Icons
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">Alert ที่มีไอคอนประกอب</p>
                
                <div class="alert alert-success d-flex align-items-center" role="alert">
                  <i class="fas fa-check-circle me-3 fs-4"></i>
                  <div>
                    <strong>การดำเนินการสำเร็จ!</strong><br>
                    ข้อมูลของคุณได้รับการบันทึกเรียบร้อยแล้ว
                  </div>
                </div>
                
                <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fas fa-exclamation-triangle me-3 fs-4"></i>
                  <div>
                    <strong>เกิดข้อผิดพลาด!</strong><br>
                    ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง
                  </div>
                </div>
                
                <div class="alert alert-warning d-flex align-items-center" role="alert">
                  <i class="fas fa-exclamation-circle me-3 fs-4"></i>
                  <div>
                    <strong>คำเตือน!</strong><br>
                    คุณมีข้อมูลที่ยังไม่ได้บันทึก การออกจากหน้านี้จะทำให้ข้อมูลสูญหาย
                  </div>
                </div>
                
                <div class="alert alert-info d-flex align-items-center mb-0" role="alert">
                  <i class="fas fa-info-circle me-3 fs-4"></i>
                  <div>
                    <strong>ข้อมูล!</strong><br>
                    คุณสามารถดาวน์โหลดรายงานได้จากเมนู "รายงาน" ด้านบน
                  </div>
                </div>
                
                <div class="bg-light p-3 rounded mt-4">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;div class="alert alert-success d-flex align-items-center" role="alert"&gt;<br>
                    &nbsp;&nbsp;&lt;i class="fas fa-check-circle me-3 fs-4"&gt;&lt;/i&gt;<br>
                    &nbsp;&nbsp;&lt;div&gt;&lt;strong&gt;สำเร็จ!&lt;/strong&gt; ข้อความ&lt;/div&gt;<br>
                    &lt;/div&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Animated Alerts -->
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-magic text-purple me-2"></i>
                  Animated Alerts
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">Alert ที่มีเอฟเฟกต์การเคลื่อนไหว</p>
                
                <button 
                  class="btn btn-primary me-2 mb-3" 
                  @click="showAnimatedAlert('success')"
                >
                  <i class="fas fa-check me-2"></i>Success Alert
                </button>
                
                <button 
                  class="btn btn-danger me-2 mb-3" 
                  @click="showAnimatedAlert('danger')"
                >
                  <i class="fas fa-times me-2"></i>Error Alert
                </button>
                
                <button 
                  class="btn btn-warning mb-3" 
                  @click="showAnimatedAlert('warning')"
                >
                  <i class="fas fa-exclamation me-2"></i>Warning Alert
                </button>
                
                <div 
                  v-for="alert in animatedAlerts" 
                  :key="alert.id"
                  :class="`alert alert-${alert.type} alert-dismissible fade animated-alert ${alert.visible ? 'show' : ''}`"
                  role="alert"
                >
                  <i :class="alert.icon" class="me-2"></i>
                  <strong>{{ alert.title }}</strong> {{ alert.message }}
                  <button 
                    type="button" 
                    class="btn-close" 
                    @click="hideAnimatedAlert(alert.id)"
                  ></button>
                </div>
                
                <div class="bg-light p-3 rounded">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;div class="alert alert-success alert-dismissible fade show" role="alert"&gt;<br>
                    &nbsp;&nbsp;ข้อความ Alert<br>
                    &lt;/div&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>

          <!-- Custom Styled Alerts -->
          <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-paint-brush text-info me-2"></i>
                  Custom Styled Alerts
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">Alert ที่มีการปรับแต่งสไตล์</p>
                
                <!-- Gradient Alert -->
                <div class="custom-alert gradient-alert mb-3">
                  <i class="fas fa-sparkles me-2"></i>
                  <strong>Gradient Alert!</strong> นี่คือ alert ที่มี gradient background
                </div>
                
                <!-- Border Alert -->
                <div class="alert alert-light border-start border-primary border-4 mb-3">
                  <i class="fas fa-info-circle text-primary me-2"></i>
                  <strong>Border Alert!</strong> นี่คือ alert ที่มีขอบด้านซ้าย
                </div>
                
                <!-- Shadow Alert -->
                <div class="alert alert-warning shadow-lg mb-3" style="border: none;">
                  <i class="fas fa-star me-2"></i>
                  <strong>Shadow Alert!</strong> นี่คือ alert ที่มีเงา
                </div>
                
                <!-- Rounded Alert -->
                <div class="alert alert-info rounded-pill mb-3">
                  <i class="fas fa-bell me-2"></i>
                  <strong>Rounded Alert!</strong> นี่คือ alert แบบมุมมน
                </div>
                
                <div class="bg-light p-3 rounded">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;div class="alert alert-light border-start border-primary border-4"&gt;<br>
                    &nbsp;&nbsp;Custom styled alert<br>
                    &lt;/div&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Alert with Actions -->
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-cogs text-secondary me-2"></i>
                  Alerts with Actions
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">Alert ที่มีปุ่มหรือลิงก์สำหรับการดำเนินการ</p>
                
                <div class="alert alert-primary" role="alert">
                  <h6 class="alert-heading">
                    <i class="fas fa-download me-2"></i>อัปเดทใหม่พร้อมใช้งาน!
                  </h6>
                  <p class="mb-3">เวอร์ชั่น 2.0 ของระบบพร้อมให้ดาวน์โหลดแล้ว มีฟีเจอร์ใหม่มากมายรอคุณอยู่</p>
                  <hr>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <button class="btn btn-primary btn-sm me-2">
                        <i class="fas fa-download me-1"></i>ดาวน์โหลดเลย
                      </button>
                      <a href="#" class="btn btn-outline-primary btn-sm">ดูรายละเอียด</a>
                    </div>
                    <small class="text-muted">2 ชั่วโมงที่แล้ว</small>
                  </div>
                </div>
                
                <div class="alert alert-warning" role="alert">
                  <h6 class="alert-heading">
                    <i class="fas fa-shield-alt me-2"></i>การรักษาความปลอดภัย
                  </h6>
                  <p class="mb-3">เราตรวจพบการเข้าสู่ระบบจากอุปกรณ์ใหม่ หากไม่ใช่คุณ กรุณาเปลี่ยนรหัสผ่านทันที</p>
                  <hr>
                  <div class="d-flex gap-2">
                    <button class="btn btn-warning btn-sm">
                      <i class="fas fa-key me-1"></i>เปลี่ยนรหัสผ่าน
                    </button>
                    <button class="btn btn-outline-warning btn-sm">
                      <i class="fas fa-check me-1"></i>เป็นฉันเอง
                    </button>
                  </div>
                </div>
                
                <div class="alert alert-success mb-0" role="alert">
                  <h6 class="alert-heading">
                    <i class="fas fa-trophy me-2"></i>ขอแสดงความยินดี!
                  </h6>
                  <p class="mb-3">คุณได้รับรางวัล "นักขายยอดเยี่ยม" ประจำเดือนนี้ ยอดขายของคุณเพิ่มขึ้น 150%</p>
                  <hr>
                  <div class="d-flex gap-2">
                    <button class="btn btn-success btn-sm">
                      <i class="fas fa-share me-1"></i>แชร์ข่าวดี
                    </button>
                    <a href="#" class="btn btn-outline-success btn-sm">ดูรายงานขาย</a>
                  </div>
                </div>
                
                <div class="bg-light p-3 rounded mt-4">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;div class="alert alert-primary" role="alert"&gt;<br>
                    &nbsp;&nbsp;&lt;h6 class="alert-heading"&gt;หัวข้อ Alert&lt;/h6&gt;<br>
                    &nbsp;&nbsp;&lt;p&gt;เนื้อหา...&lt;/p&gt;<br>
                    &nbsp;&nbsp;&lt;hr&gt;<br>
                    &nbsp;&nbsp;&lt;button class="btn btn-primary btn-sm"&gt;ปุ่มดำเนินการ&lt;/button&gt;<br>
                    &lt;/div&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Toast Notifications -->
        <div class="row g-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-bell text-warning me-2"></i>
                  Toast Notifications
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">การแจ้งเตือนแบบ Toast ที่ปรากฏชั่วคราว</p>
                
                <div class="d-flex flex-wrap gap-2 mb-4">
                  <button 
                    class="btn btn-success" 
                    @click="showToast('success')"
                  >
                    <i class="fas fa-check me-2"></i>Success Toast
                  </button>
                  
                  <button 
                    class="btn btn-danger" 
                    @click="showToast('error')"
                  >
                    <i class="fas fa-times me-2"></i>Error Toast
                  </button>
                  
                  <button 
                    class="btn btn-warning" 
                    @click="showToast('warning')"
                  >
                    <i class="fas fa-exclamation me-2"></i>Warning Toast
                  </button>
                  
                  <button 
                    class="btn btn-info" 
                    @click="showToast('info')"
                  >
                    <i class="fas fa-info me-2"></i>Info Toast
                  </button>
                </div>
                
                <div class="bg-light p-3 rounded">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;div class="toast show" role="alert"&gt;<br>
                    &nbsp;&nbsp;&lt;div class="toast-header"&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;strong class="me-auto"&gt;หัวข้อ&lt;/strong&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="button" class="btn-close"&gt;&lt;/button&gt;<br>
                    &nbsp;&nbsp;&lt;/div&gt;<br>
                    &nbsp;&nbsp;&lt;div class="toast-body"&gt;เนื้อหา Toast&lt;/div&gt;<br>
                    &lt;/div&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Container -->
    <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 9999;">
      <div 
        v-for="toast in toasts" 
        :key="toast.id"
        :class="`toast ${toast.show ? 'show' : ''}`"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div :class="`toast-header bg-${toast.type === 'error' ? 'danger' : toast.type} text-white`">
          <i :class="toast.icon" class="me-2"></i>
          <strong class="me-auto">{{ toast.title }}</strong>
          <small>เมื่อสักครู่</small>
          <button 
            type="button" 
            class="btn-close btn-close-white" 
            @click="hideToast(toast.id)"
          ></button>
        </div>
        <div class="toast-body">
          {{ toast.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

// Dismissible Alerts
const dismissibleAlerts = ref([
  {
    type: 'success',
    title: 'สำเร็จ!',
    message: 'การดำเนินการเสร็จสิ้นเรียบร้อยแล้ว',
    visible: true
  },
  {
    type: 'danger',
    title: 'ข้อผิดพลาด!',
    message: 'เกิดข้อผิดพลาดในการดำเนินการ',
    visible: true
  },
  {
    type: 'warning',
    title: 'คำเตือน!',
    message: 'กรุณาตรวจสอบข้อมูลก่อนดำเนินการต่อ',
    visible: true
  },
  {
    type: 'info',
    title: 'ข้อมูล!',
    message: 'มีข้อมูลใหม่ที่คุณควรทราบ',
    visible: true
  }
])

// Animated Alerts
const animatedAlerts = ref([])
let alertId = 0

// Toast Notifications
const toasts = ref([])
let toastId = 0

const dismissAlert = (index) => {
  dismissibleAlerts.value[index].visible = false
}

const resetAlerts = () => {
  dismissibleAlerts.value.forEach(alert => {
    alert.visible = true
  })
}

const showAnimatedAlert = (type) => {
  alertId++
  const alertConfig = {
    success: {
      title: 'สำเร็จ!',
      message: 'การดำเนินการเสร็จสิ้นเรียบร้อยแล้ว',
      icon: 'fas fa-check-circle'
    },
    danger: {
      title: 'ข้อผิดพลาด!',
      message: 'เกิดข้อผิดพลาดในการดำเนินการ กรุณาลองใหม่อีกครั้ง',
      icon: 'fas fa-exclamation-triangle'
    },
    warning: {
      title: 'คำเตือน!',
      message: 'กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนดำเนินการต่อ',
      icon: 'fas fa-exclamation-circle'
    }
  }

  const alert = {
    id: alertId,
    type,
    visible: false,
    ...alertConfig[type]
  }

  animatedAlerts.value.push(alert)
  
  nextTick(() => {
    alert.visible = true
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      hideAnimatedAlert(alert.id)
    }, 5000)
  })
}

const hideAnimatedAlert = (id) => {
  const alertIndex = animatedAlerts.value.findIndex(alert => alert.id === id)
  if (alertIndex > -1) {
    animatedAlerts.value[alertIndex].visible = false
    
    // Remove from array after animation
    setTimeout(() => {
      animatedAlerts.value.splice(alertIndex, 1)
    }, 300)
  }
}

const showToast = (type) => {
  toastId++
  const toastConfig = {
    success: {
      title: 'สำเร็จ',
      message: 'การดำเนินการเสร็จสิ้นเรียบร้อยแล้ว',
      icon: 'fas fa-check-circle'
    },
    error: {
      title: 'ข้อผิดพลาด',
      message: 'เกิดข้อผิดพลาดในการดำเนินการ',
      icon: 'fas fa-exclamation-triangle'
    },
    warning: {
      title: 'คำเตือน',
      message: 'กรุณาตรวจสอบข้อมูลให้ถูกต้อง',
      icon: 'fas fa-exclamation-circle'
    },
    info: {
      title: 'ข้อมูล',
      message: 'มีข้อมูลใหม่ที่คุณควรทราบ',
      icon: 'fas fa-info-circle'
    }
  }

  const toast = {
    id: toastId,
    type,
    show: false,
    ...toastConfig[type]
  }

  toasts.value.push(toast)
  
  nextTick(() => {
    toast.show = true
    
    // Auto hide after 4 seconds
    setTimeout(() => {
      hideToast(toast.id)
    }, 4000)
  })
}

const hideToast = (id) => {
  const toastIndex = toasts.value.findIndex(toast => toast.id === id)
  if (toastIndex > -1) {
    toasts.value[toastIndex].show = false
    
    // Remove from array after animation
    setTimeout(() => {
      toasts.value.splice(toastIndex, 1)
    }, 300)
  }
}
</script>

<style scoped>
.text-purple {
  color: #6f42c1 !important;
}

.custom-alert {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  color: #fff;
  font-weight: 500;
}

.gradient-alert {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 15px 0 rgba(102, 126, 234, 0.3);
}

.animated-alert {
  animation: slideInRight 0.3s ease-out;
  margin-bottom: 1rem;
}

.animated-alert:not(.show) {
  animation: slideOutRight 0.3s ease-in;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

.toast {
  transition: all 0.3s ease;
  margin-bottom: 0.5rem;
}

.toast:not(.show) {
  opacity: 0;
  transform: translateX(100%);
}

.toast.show {
  opacity: 1;
  transform: translateX(0);
}

.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
}

code {
  font-size: 0.85em;
  line-height: 1.4;
}

.btn {
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .d-flex.flex-wrap.gap-2 {
    gap: 0.5rem !important;
  }
  
  .toast-container {
    left: 1rem;
    right: 1rem;
  }
  
  .toast {
    width: 100%;
  }
}
</style>
