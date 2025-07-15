<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="mb-0">SweetAlert Examples</h2>
        <p class="text-muted">Beautiful, responsive, customizable replacement for JavaScript's popup boxes</p>
      </div>
    </div>

    <!-- Alert Categories -->
    <div class="row">
      <!-- Basic Alerts -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Basic Alerts</h5>
          </div>
          <div class="card-body">
            <div class="d-grid gap-2">
              <button class="btn btn-primary" @click="showBasicAlert">
                <i class="fas fa-info-circle me-2"></i>Basic Alert
              </button>
              <button class="btn btn-success" @click="showSuccessAlert">
                <i class="fas fa-check-circle me-2"></i>Success Alert
              </button>
              <button class="btn btn-danger" @click="showErrorAlert">
                <i class="fas fa-times-circle me-2"></i>Error Alert
              </button>
              <button class="btn btn-warning" @click="showWarningAlert">
                <i class="fas fa-exclamation-triangle me-2"></i>Warning Alert
              </button>
              <button class="btn btn-info" @click="showInfoAlert">
                <i class="fas fa-info-circle me-2"></i>Info Alert
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Alerts -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Interactive Alerts</h5>
          </div>
          <div class="card-body">
            <div class="d-grid gap-2">
              <button class="btn btn-outline-primary" @click="showConfirmAlert">
                <i class="fas fa-question-circle me-2"></i>Confirm Dialog
              </button>
              <button class="btn btn-outline-success" @click="showInputAlert">
                <i class="fas fa-keyboard me-2"></i>Input Dialog
              </button>
              <button class="btn btn-outline-warning" @click="showSelectAlert">
                <i class="fas fa-list me-2"></i>Select Dialog
              </button>
              <button class="btn btn-outline-info" @click="showPasswordAlert">
                <i class="fas fa-lock me-2"></i>Password Input
              </button>
              <button class="btn btn-outline-secondary" @click="showMultipleInputAlert">
                <i class="fas fa-edit me-2"></i>Multiple Inputs
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Advanced Alerts -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Advanced Alerts</h5>
          </div>
          <div class="card-body">
            <div class="d-grid gap-2">
              <button class="btn btn-dark" @click="showTimerAlert">
                <i class="fas fa-clock me-2"></i>Auto Close Timer
              </button>
              <button class="btn btn-purple" @click="showProgressAlert">
                <i class="fas fa-spinner me-2"></i>Progress Steps
              </button>
              <button class="btn btn-gradient" @click="showImageAlert">
                <i class="fas fa-image me-2"></i>With Image
              </button>
              <button class="btn btn-custom" @click="showCustomAlert">
                <i class="fas fa-palette me-2"></i>Custom Styling
              </button>
              <button class="btn btn-animation" @click="showAnimationAlert">
                <i class="fas fa-magic me-2"></i>Custom Animation
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading & Toast -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Loading & Toast</h5>
          </div>
          <div class="card-body">
            <div class="d-grid gap-2">
              <button class="btn btn-secondary" @click="showLoadingAlert">
                <i class="fas fa-spinner me-2"></i>Loading Alert
              </button>
              <button class="btn btn-success" @click="showToastSuccess">
                <i class="fas fa-check me-2"></i>Success Toast
              </button>
              <button class="btn btn-danger" @click="showToastError">
                <i class="fas fa-times me-2"></i>Error Toast
              </button>
              <button class="btn btn-warning" @click="showToastWarning">
                <i class="fas fa-exclamation me-2"></i>Warning Toast
              </button>
              <button class="btn btn-info" @click="showToastInfo">
                <i class="fas fa-info me-2"></i>Info Toast
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Real-world Examples -->
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Real-world Examples</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3 mb-2">
                <button class="btn btn-danger w-100" @click="deleteConfirmation">
                  <i class="fas fa-trash me-2"></i>Delete Item
                </button>
              </div>
              <div class="col-md-3 mb-2">
                <button class="btn btn-success w-100" @click="saveConfirmation">
                  <i class="fas fa-save me-2"></i>Save Changes
                </button>
              </div>
              <div class="col-md-3 mb-2">
                <button class="btn btn-primary w-100" @click="loginForm">
                  <i class="fas fa-sign-in-alt me-2"></i>Login Form
                </button>
              </div>
              <div class="col-md-3 mb-2">
                <button class="btn btn-warning w-100" @click="subscriptionAlert">
                  <i class="fas fa-crown me-2"></i>Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Code Examples -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Code Examples</h5>
          </div>
          <div class="card-body">
            <div class="accordion" id="codeAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#utilsCode">
                    Using SwalUtils (Recommended)
                  </button>
                </h2>
                <div id="utilsCode" class="accordion-collapse collapse" data-bs-parent="#codeAccordion">
                  <div class="accordion-body">
                    <pre><code>import { swalUtils } from '@/utils/swal'

// Success Toast
swalUtils.success('สำเร็จ!', 'การดำเนินการเสร็จสิ้น')

// Error Alert
swalUtils.error('ข้อผิดพลาด', 'มีบางอย่างผิดพลาด')

// Confirmation
const result = await swalUtils.confirm('ยืนยัน?', 'คุณแน่ใจหรือไม่?')
if (result.isConfirmed) {
  // User confirmed
}

// Delete Confirmation
const result = await swalUtils.delete()
if (result.isConfirmed) {
  // Delete confirmed
}

// Loading
swalUtils.loading('กำลังโหลด...')
// Later...
swalUtils.close()

// Toast
swalUtils.toast('success', 'บันทึกสำเร็จ!')

// Input
const result = await swalUtils.input('กรอกชื่อ', 'ชื่อของคุณ...')
if (result.isConfirmed) {
  console.log(result.value)
}</code></pre>
                  </div>
                </div>
              </div>
              
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#basicCode">
                    Basic Alert Code
                  </button>
                </h2>
                <div id="basicCode" class="accordion-collapse collapse" data-bs-parent="#codeAccordion">
                  <div class="accordion-body">
                    <pre><code>import Swal from 'sweetalert2'

// Basic Alert
Swal.fire('Hello world!')

// Success Alert
Swal.fire({
  icon: 'success',
  title: 'สำเร็จ!',
  text: 'การดำเนินการเสร็จสิ้น'
})</code></pre>
                  </div>
                </div>
              </div>
              
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#confirmCode">
                    Confirm Dialog Code
                  </button>
                </h2>
                <div id="confirmCode" class="accordion-collapse collapse" data-bs-parent="#codeAccordion">
                  <div class="accordion-body">
                    <pre><code>const result = await Swal.fire({
  title: 'คุณแน่ใจหรือไม่?',
  text: 'การดำเนินการนี้ไม่สามารถยกเลิกได้!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'ใช่, ลบเลย!',
  cancelButtonText: 'ยกเลิก'
})

if (result.isConfirmed) {
  // User confirmed
}</code></pre>
                  </div>
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
import Swal from 'sweetalert2'
import { swalUtils } from '../utils/swal'

// Basic Alerts
const showBasicAlert = () => {
  Swal.fire('Hello World!', 'This is a basic SweetAlert', 'info')
}

const showSuccessAlert = () => {
  swalUtils.success('สำเร็จ!', 'การดำเนินการเสร็จสิ้นแล้ว')
}

const showErrorAlert = () => {
  swalUtils.error('เกิดข้อผิดพลาด!', 'มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง')
}

const showWarningAlert = () => {
  swalUtils.warning('คำเตือน!', 'กรุณาตรวจสอบข้อมูลของคุณให้ถูกต้อง')
}

const showInfoAlert = () => {
  swalUtils.info('ข้อมูล', 'นี่คือข้อมูลสำคัญที่คุณควรทราบ')
}

// Interactive Alerts
const showConfirmAlert = async () => {
  const result = await swalUtils.confirm(
    'คุณแน่ใจหรือไม่?', 
    'การดำเนินการนี้ไม่สามารถยกเลิกได้!',
    'ใช่, ดำเนินการ!',
    'ยกเลิก'
  )

  if (result.isConfirmed) {
    swalUtils.success('ดำเนินการแล้ว!', 'การดำเนินการของคุณเสร็จสิ้น')
  }
}

const showInputAlert = async () => {
  const result = await swalUtils.input('กรอกชื่อของคุณ', 'กรอกชื่อของคุณ...')

  if (result.isConfirmed && result.value) {
    swalUtils.success(`สวัสดี ${result.value}!`, 'ยินดีต้อนรับ!')
  }
}

const showSelectAlert = async () => {
  const { value: fruit } = await Swal.fire({
    title: 'เลือกผลไม้ที่คุณชอบ',
    input: 'select',
    inputOptions: {
      'apples': 'แอปเปิ้ล',
      'bananas': 'กล้วย',
      'grapes': 'องุ่น',
      'oranges': 'ส้ม'
    },
    inputPlaceholder: 'เลือกผลไม้',
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value) {
          resolve()
        } else {
          resolve('กรุณาเลือกผลไม้!')
        }
      })
    }
  })

  if (fruit) {
    Swal.fire(`คุณเลือก: ${fruit}`)
  }
}

const showPasswordAlert = async () => {
  const { value: password } = await Swal.fire({
    title: 'กรอกรหัสผ่าน',
    input: 'password',
    inputLabel: 'รหัสผ่าน',
    inputPlaceholder: 'กรอกรหัสผ่านของคุณ',
    inputAttributes: {
      maxlength: 10,
      autocapitalize: 'off',
      autocorrect: 'off'
    }
  })

  if (password) {
    Swal.fire(`รหัสผ่านของคุณ: ${password}`)
  }
}

const showMultipleInputAlert = async () => {
  const { value: formValues } = await Swal.fire({
    title: 'ข้อมูลส่วนตัว',
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="ชื่อ">
      <input id="swal-input2" class="swal2-input" placeholder="อีเมล">
      <input id="swal-input3" class="swal2-input" placeholder="เบอร์โทร">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value,
        document.getElementById('swal-input3').value
      ]
    }
  })

  if (formValues) {
    Swal.fire(`
      ชื่อ: ${formValues[0]}<br>
      อีเมล: ${formValues[1]}<br>
      เบอร์โทร: ${formValues[2]}
    `)
  }
}

// Advanced Alerts
const showTimerAlert = () => {
  let timerInterval
  Swal.fire({
    title: 'จะปิดอัตโนมัติ!',
    html: 'จะปิดใน <b></b> วินาที',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Math.ceil(Swal.getTimerLeft() / 1000)
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('ปิดด้วย timer')
    }
  })
}

const showProgressAlert = async () => {
  const steps = ['1', '2', '3']
  const swalQueueStep = Swal.mixin({
    confirmButtonText: 'ถัดไป &rarr;',
    showCancelButton: true,
    progressSteps: steps,
    reverseButtons: true
  })

  const values = []
  let currentStep

  for (currentStep = 0; currentStep < steps.length;) {
    const result = await swalQueueStep.fire({
      title: `ขั้นตอนที่ ${currentStep + 1}`,
      text: `ข้อมูลสำหรับขั้นตอนที่ ${currentStep + 1}`,
      input: 'text',
      inputValue: values[currentStep],
      showCancelButton: currentStep > 0,
      currentProgressStep: currentStep
    })

    if (result.value) {
      values[currentStep] = result.value
      currentStep++
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      currentStep--
    } else {
      break
    }
  }

  if (currentStep === steps.length) {
    Swal.fire({
      title: 'เสร็จสิ้น!',
      html: `ข้อมูลของคุณ: <pre>${JSON.stringify(values, null, 2)}</pre>`,
      confirmButtonText: 'รับทราบ'
    })
  }
}

const showImageAlert = () => {
  Swal.fire({
    title: 'สวยงาม!',
    text: 'Alert พร้อมรูปภาพ',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image'
  })
}

const showCustomAlert = () => {
  Swal.fire({
    title: 'Alert แบบกำหนดเอง',
    text: 'สีสันและสไตล์ที่แตกต่าง',
    background: '#222',
    color: '#fff',
    confirmButtonColor: '#ff6b6b',
    customClass: {
      popup: 'colored-toast'
    }
  })
}

const showAnimationAlert = () => {
  Swal.fire({
    title: 'Animation แบบกำหนดเอง',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}

// Loading & Toast
const showLoadingAlert = () => {
  swalUtils.loading('กำลังโหลด...')
  
  // Simulate loading
  setTimeout(() => {
    swalUtils.close()
    swalUtils.success('เสร็จสิ้น!', 'โหลดข้อมูลเสร็จแล้ว')
  }, 3000)
}

const showToastSuccess = () => {
  swalUtils.toast('success', 'บันทึกสำเร็จ!')
}

const showToastError = () => {
  swalUtils.toast('error', 'เกิดข้อผิดพลาด!')
}

const showToastWarning = () => {
  swalUtils.toast('warning', 'คำเตือน!')
}

const showToastInfo = () => {
  swalUtils.toast('info', 'ข้อมูลใหม่!')
}

// Real-world Examples
const deleteConfirmation = async () => {
  const result = await swalUtils.delete('ลบรายการนี้?', 'คุณจะไม่สามารถกู้คืนข้อมูลนี้ได้!')

  if (result.isConfirmed) {
    swalUtils.success('ลบแล้ว!', 'รายการของคุณถูกลบแล้ว')
  }
}

const saveConfirmation = async () => {
  const result = await swalUtils.confirm(
    'บันทึกการเปลี่ยนแปลง?',
    'คุณต้องการบันทึกการเปลี่ยนแปลงหรือไม่?',
    'บันทึก',
    'ไม่บันทึก'
  )

  if (result.isConfirmed) {
    swalUtils.success('บันทึกแล้ว!', 'การเปลี่ยนแปลงของคุณถูกบันทึกแล้ว')
  }
}

const loginForm = async () => {
  const { value: formValues } = await Swal.fire({
    title: 'เข้าสู่ระบบ',
    html: `
      <div class="mb-3">
        <input id="username" class="swal2-input" placeholder="ชื่อผู้ใช้" type="text">
      </div>
      <div class="mb-3">
        <input id="password" class="swal2-input" placeholder="รหัสผ่าน" type="password">
      </div>
    `,
    confirmButtonText: 'เข้าสู่ระบบ',
    focusConfirm: false,
    preConfirm: () => {
      const username = document.getElementById('username').value
      const password = document.getElementById('password').value
      
      if (!username || !password) {
        Swal.showValidationMessage('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน')
        return false
      }
      
      return { username, password }
    }
  })

  if (formValues) {
    Swal.fire(`ยินดีต้อนรับ ${formValues.username}!`, 'เข้าสู่ระบบสำเร็จ', 'success')
  }
}

const subscriptionAlert = () => {
  Swal.fire({
    title: 'อัพเกรดแพ็คเกจ',
    text: 'อัพเกรดเป็น Premium เพื่อรับสิทธิประโยชน์เพิ่มเติม',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#ffc107',
    cancelButtonColor: '#6c757d',
    confirmButtonText: '<i class="fas fa-crown"></i> อัพเกรดเลย!',
    cancelButtonText: 'ภายหลัง',
    customClass: {
      confirmButton: 'btn btn-warning'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('ขอบคุณ!', 'เราจะติดต่อกลับในเร็วๆ นี้', 'success')
    }
  })
}
</script>

<style scoped>
.btn-purple {
  background-color: #6f42c1;
  border-color: #6f42c1;
  color: white;
}

.btn-purple:hover {
  background-color: #5a359e;
  border-color: #5a359e;
}

.btn-gradient {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
}

.btn-gradient:hover {
  background: linear-gradient(45deg, #5a6fd8 0%, #6a4190 100%);
  color: white;
}

.btn-custom {
  background-color: #ff6b6b;
  border-color: #ff6b6b;
  color: white;
}

.btn-custom:hover {
  background-color: #ff5252;
  border-color: #ff5252;
}

.btn-animation {
  background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
  border: none;
  color: white;
}

.btn-animation:hover {
  background: linear-gradient(45deg, #ee82fa 0%, #f4455a 100%);
  color: white;
}

.card {
  border: 1px solid #e3e6f0;
  border-radius: 0.35rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
  transition: all 0.3s;
}

.card:hover {
  box-shadow: 0 0.25rem 2rem 0 rgba(58, 59, 69, 0.2);
}

.card-header {
  background-color: #f8f9fc;
  border-bottom: 1px solid #e3e6f0;
}

.card-header h5 {
  color: #5a5c69;
  font-weight: 600;
}

pre code {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #212529;
}

.accordion-button:not(.collapsed) {
  background-color: #e7f3ff;
  color: #0c63e4;
}
</style>
