<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5 col-xl-4">
          <div class="card shadow-lg border-0">
            <div class="card-body p-5">
              <!-- Logo/Header -->
              <div class="text-center mb-4">
                <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style="width: 80px; height: 80px;">
                  <i class="fas fa-store text-white fa-2x"></i>
                </div>
                <h3 class="fw-bold text-dark">ระบบจัดการร้านค้า</h3>
                <p class="text-muted">เข้าสู่ระบบเพื่อดำเนินการต่อ</p>
              </div>

              <!-- Error Alert -->
              <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                <i class="fas fa-exclamation-triangle me-2"></i>
                {{ error }}
                <button type="button" class="btn-close" @click="clearError"></button>
              </div>

              <!-- Login Form -->
              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label for="username" class="form-label fw-semibold">
                    <i class="fas fa-user me-2"></i>ชื่อผู้ใช้หรืออีเมล
                  </label>
                  <input 
                    type="text" 
                    class="form-control form-control-lg"
                    id="username"
                    v-model="loginForm.username"
                    :class="{ 'is-invalid': validationErrors.username }"
                    placeholder="กรอกชื่อผู้ใช้หรืออีเมล"
                    autocomplete="username"
                    required
                  >
                  <div v-if="validationErrors.username" class="invalid-feedback">
                    {{ validationErrors.username }}
                  </div>
                </div>

                <div class="mb-4">
                  <label for="password" class="form-label fw-semibold">
                    <i class="fas fa-lock me-2"></i>รหัสผ่าน
                  </label>
                  <div class="input-group">
                    <input 
                      :type="showPassword ? 'text' : 'password'" 
                      class="form-control form-control-lg"
                      id="password"
                      v-model="loginForm.password"
                      :class="{ 'is-invalid': validationErrors.password }"
                      placeholder="กรอกรหัสผ่าน"
                      autocomplete="current-password"
                      required
                    >
                    <button 
                      class="btn btn-outline-secondary" 
                      type="button"
                      @click="showPassword = !showPassword"
                    >
                      <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                    </button>
                  </div>
                  <div v-if="validationErrors.password" class="invalid-feedback d-block">
                    {{ validationErrors.password }}
                  </div>
                </div>

                <div class="mb-4">
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      id="rememberMe"
                      v-model="loginForm.rememberMe"
                    >
                    <label class="form-check-label" for="rememberMe">
                      จดจำการเข้าสู่ระบบ
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  class="btn btn-primary btn-lg w-100 mb-3"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                  <i v-else class="fas fa-sign-in-alt me-2"></i>
                  {{ isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}
                </button>
              </form>

              <!-- Demo Accounts -->
              <div class="mt-4">
                <hr>
                <h6 class="text-center text-muted mb-3">บัญชีทดลอง</h6>
                <div class="row g-2">
                  <div class="col-4">
                    <button 
                      class="btn btn-outline-primary btn-sm w-100" 
                      @click="quickLogin('admin', 'admin123')"
                      :disabled="isLoading"
                    >
                      <i class="fas fa-crown me-1"></i>
                      Admin
                    </button>
                  </div>
                  <div class="col-4">
                    <button 
                      class="btn btn-outline-success btn-sm w-100" 
                      @click="quickLogin('manager', 'manager123')"
                      :disabled="isLoading"
                    >
                      <i class="fas fa-user-tie me-1"></i>
                      Manager
                    </button>
                  </div>
                  <div class="col-4">
                    <button 
                      class="btn btn-outline-info btn-sm w-100" 
                      @click="quickLogin('user', 'user123')"
                      :disabled="isLoading"
                    >
                      <i class="fas fa-user me-1"></i>
                      User
                    </button>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div class="text-center mt-4">
                <small class="text-muted">
                  © 2024 ระบบจัดการร้านค้า. สงวนลิขสิทธิ์.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useAuth } from '../composables/useAuth'

const emit = defineEmits(['login-success'])

const { login, isLoading, error, clearError } = useAuth()

const loginForm = reactive({
  username: '',
  password: '',
  rememberMe: false
})

const validationErrors = ref({})
const showPassword = ref(false)

// Validation
const validateForm = () => {
  const errors = {}
  
  if (!loginForm.username.trim()) {
    errors.username = 'กรุณากรอกชื่อผู้ใช้หรืออีเมล'
  }
  
  if (!loginForm.password.trim()) {
    errors.password = 'กรุณากรอกรหัสผ่าน'
  } else if (loginForm.password.length < 6) {
    errors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'
  }
  
  validationErrors.value = errors
  return Object.keys(errors).length === 0
}

// Handle login
const handleLogin = async () => {
  if (!validateForm()) return
  
  try {
    await login({
      username: loginForm.username.trim(),
      password: loginForm.password
    })
    
    emit('login-success')
  } catch (err) {
    console.error('Login failed:', err)
  }
}

// Quick login for demo
const quickLogin = (username, password) => {
  loginForm.username = username
  loginForm.password = password
  handleLogin()
}

// Clear validation errors when user types
watch(() => loginForm.username, () => {
  if (validationErrors.value.username) {
    delete validationErrors.value.username
  }
})

watch(() => loginForm.password, () => {
  if (validationErrors.value.password) {
    delete validationErrors.value.password
  }
})
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.card {
  border-radius: 15px;
}

.form-control:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 10px;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-outline-primary:hover,
.btn-outline-success:hover,
.btn-outline-info:hover {
  transform: translateY(-1px);
}

.input-group .btn {
  border-radius: 0 8px 8px 0;
}

.form-control {
  border-radius: 8px;
}

.input-group .form-control {
  border-radius: 8px 0 0 8px;
}

@media (max-width: 576px) {
  .card-body {
    padding: 2rem !important;
  }
}
</style>
