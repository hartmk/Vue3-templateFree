<template>
  <div class="login-container" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important; min-height: 100vh;">
    <!-- Background Elements -->
    <div class="background-shapes" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
      <!-- Test Background -->
      <div class="test-bg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(45deg, rgba(255, 0, 0, 0.2), rgba(0, 255, 0, 0.2), rgba(0, 0, 255, 0.2));"></div>
      
      <!-- Gradient Orbs -->
      <div class="gradient-orb orb-1" style="position: absolute; width: 400px; height: 400px; background: radial-gradient(circle, #ff6b6b, #ee5a24); border-radius: 50%; filter: blur(40px); opacity: 0.6; top: -200px; left: -200px;"></div>
      <div class="gradient-orb orb-2" style="position: absolute; width: 300px; height: 300px; background: radial-gradient(circle, #4ecdc4, #45b7d1); border-radius: 50%; filter: blur(40px); opacity: 0.6; top: 50%; right: -150px;"></div>
      <div class="gradient-orb orb-3" style="position: absolute; width: 350px; height: 350px; background: radial-gradient(circle, #a8e6cf, #7fcdcd); border-radius: 50%; filter: blur(40px); opacity: 0.6; bottom: -175px; left: 20%;"></div>
      <div class="gradient-orb orb-4" style="position: absolute; width: 250px; height: 250px; background: radial-gradient(circle, #ffd93d, #ff6b95); border-radius: 50%; filter: blur(40px); opacity: 0.6; top: 20%; left: 70%;"></div>
      <div class="gradient-orb orb-5" style="position: absolute; width: 200px; height: 200px; background: radial-gradient(circle, #a8edea, #fed6e3); border-radius: 50%; filter: blur(40px); opacity: 0.6; bottom: 30%; right: 20%;"></div>
      
      <!-- Geometric Shapes -->
      <div class="shape shape-1" style="position: absolute; width: 300px; height: 300px; border-radius: 50%; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); top: -150px; left: -150px;"></div>
      <div class="shape shape-2" style="position: absolute; width: 200px; height: 200px; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); top: 10%; right: -100px;"></div>
      <div class="shape shape-3" style="position: absolute; width: 150px; height: 150px; border-radius: 50%; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); bottom: -75px; left: 30%;"></div>
      <div class="shape shape-4" style="position: absolute; width: 120px; height: 120px; border-radius: 20px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); top: 60%; left: 5%; transform: rotate(45deg);"></div>
      <div class="shape shape-5" style="position: absolute; width: 180px; height: 180px; border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); top: 30%; right: 10%;"></div>
      
      <!-- Grid Pattern -->
      <div class="grid-pattern"></div>
      
      <!-- Animated Lines -->
      <div class="animated-lines">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
        <div class="line line-4"></div>
      </div>
      
      <!-- Floating Elements -->
      <div class="floating-elements">
        <div class="floating-element" v-for="n in 12" :key="n" :style="{ 
          animationDelay: `${n * 0.3}s`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 4}s`
        }"></div>
      </div>
      
      <!-- Particles -->
      <div class="particles">
        <div class="particle" v-for="n in 20" :key="n" :style="{ 
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`
        }"></div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center align-items-center min-vh-100">
        <div class="col-md-6 col-lg-5 col-xl-4">
          <div class="login-card">
            <div class="card-body p-5">
              <!-- Logo/Header -->
              <div class="text-center mb-4 login-header">
                <div class="logo-container">
                  <div class="logo-circle">
                    <i class="fas fa-store"></i>
                  </div>
                  <div class="logo-glow"></div>
                </div>
                <h2 class="brand-title">ระบบจัดการร้านค้า</h2>
                <p class="brand-subtitle">เข้าสู่ระบบเพื่อดำเนินการต่อ</p>
              </div>

              <!-- Error Alert -->
              <div v-if="error" class="alert alert-danger custom-alert" role="alert">
                <div class="alert-content">
                  <i class="fas fa-exclamation-triangle"></i>
                  <span>{{ error }}</span>
                  <button type="button" class="alert-close" @click="clearError">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <!-- Login Form -->
              <form @submit.prevent="handleLogin" class="login-form">
                <div class="form-group">
                  <label for="username" class="form-label">
                    <i class="fas fa-user"></i>
                    ชื่อผู้ใช้หรืออีเมล
                  </label>
                  <div class="input-wrapper">
                    <input 
                      type="text" 
                      class="form-input"
                      id="username"
                      v-model="loginForm.username"
                      :class="{ 'is-invalid': validationErrors.username }"
                      placeholder="กรอกชื่อผู้ใช้หรืออีเมล"
                      autocomplete="username"
                      required
                    >
                    <div class="input-focus-line"></div>
                  </div>
                  <div v-if="validationErrors.username" class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    {{ validationErrors.username }}
                  </div>
                </div>

                <div class="form-group">
                  <label for="password" class="form-label">
                    <i class="fas fa-lock"></i>
                    รหัสผ่าน
                  </label>
                  <div class="input-wrapper">
                    <input 
                      :type="showPassword ? 'text' : 'password'" 
                      class="form-input"
                      id="password"
                      v-model="loginForm.password"
                      :class="{ 'is-invalid': validationErrors.password }"
                      placeholder="กรอกรหัสผ่าน"
                      autocomplete="current-password"
                      required
                    >
                    <button 
                      class="password-toggle" 
                      type="button"
                      @click="showPassword = !showPassword"
                    >
                      <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                    </button>
                    <div class="input-focus-line"></div>
                  </div>
                  <div v-if="validationErrors.password" class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    {{ validationErrors.password }}
                  </div>
                </div>

                <div class="form-group remember-me">
                  <label class="custom-checkbox">
                    <input 
                      type="checkbox" 
                      v-model="loginForm.rememberMe"
                    >
                    <span class="checkmark"></span>
                    <span class="checkbox-text">จดจำการเข้าสู่ระบบ</span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  class="login-btn"
                  :disabled="isLoading"
                >
                  <span class="btn-content">
                    <span v-if="isLoading" class="spinner"></span>
                    <i v-else class="fas fa-sign-in-alt"></i>
                    <span class="btn-text">{{ isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}</span>
                  </span>
                  <div class="btn-glow"></div>
                </button>
              </form>

              <!-- Demo Accounts -->
              <div class="demo-section">
                <div class="divider">
                  <span>บัญชีทดลอง</span>
                </div>
                <div class="demo-buttons">
                  <button 
                    class="demo-btn demo-admin" 
                    @click="quickLogin('admin', 'admin123')"
                    :disabled="isLoading"
                  >
                    <div class="demo-btn-content">
                      <i class="fas fa-crown"></i>
                      <span>Admin</span>
                    </div>
                  </button>
                  <button 
                    class="demo-btn demo-manager" 
                    @click="quickLogin('manager', 'manager123')"
                    :disabled="isLoading"
                  >
                    <div class="demo-btn-content">
                      <i class="fas fa-user-tie"></i>
                      <span>Manager</span>
                    </div>
                  </button>
                  <button 
                    class="demo-btn demo-user" 
                    @click="quickLogin('user', 'user123')"
                    :disabled="isLoading"
                  >
                    <div class="demo-btn-content">
                      <i class="fas fa-user"></i>
                      <span>User</span>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Footer -->
              <div class="login-footer">
                <p>© 2025 ระบบจัดการร้านค้า. สงวนลิขสิทธิ์.</p>
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
/* Login Container */
.login-container {
  min-height: 100vh !important;
  /* Fallback background */
  background-color: #667eea !important;
  /* Primary gradient backgrounds */
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  position: relative;
  overflow: hidden;
}

/* Background Shapes */
.background-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
}

/* Test Background */
.test-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 0, 0, 0.1), rgba(0, 255, 0, 0.1), rgba(0, 0, 255, 0.1)) !important;
  z-index: 0;
}

/* Gradient Orbs */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.6 !important;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #ff6b6b, #ee5a24) !important;
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #4ecdc4, #45b7d1) !important;
  top: 50%;
  right: -150px;
  animation-delay: -5s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #a8e6cf, #7fcdcd) !important;
  bottom: -175px;
  left: 20%;
  animation-delay: -10s;
}

.orb-4 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #ffd93d, #ff6b95) !important;
  top: 20%;
  left: 70%;
  animation-delay: -15s;
}

.orb-5 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #a8edea, #fed6e3) !important;
  bottom: 30%;
  right: 20%;
  animation-delay: -8s;
}

/* Geometric Shapes */
.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
}

.shape-1 {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  top: -150px;
  left: -150px;
  animation: float 25s ease-in-out infinite;
}

.shape-2 {
  width: 200px;
  height: 200px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  top: 10%;
  right: -100px;
  animation: float 30s ease-in-out infinite reverse;
}

.shape-3 {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  bottom: -75px;
  left: 30%;
  animation: float 20s ease-in-out infinite;
}

.shape-4 {
  width: 120px;
  height: 120px;
  border-radius: 20px;
  top: 60%;
  left: 5%;
  animation: float 35s ease-in-out infinite;
  transform: rotate(45deg);
}

.shape-5 {
  width: 180px;
  height: 180px;
  border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
  top: 30%;
  right: 10%;
  animation: float 28s ease-in-out infinite reverse;
}

/* Grid Pattern */
.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2 !important;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px) !important;
  background-size: 50px 50px;
  animation: gridMove 60s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Animated Lines */
.animated-lines {
  position: absolute;
  width: 100%;
  height: 100%;
}

.line {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: moveLine 8s ease-in-out infinite;
}

.line-1 {
  width: 200px;
  height: 2px;
  top: 20%;
  left: -200px;
  animation-delay: 0s;
}

.line-2 {
  width: 150px;
  height: 2px;
  top: 60%;
  right: -150px;
  animation-delay: 2s;
  animation-direction: reverse;
}

.line-3 {
  width: 2px;
  height: 200px;
  left: 30%;
  top: -200px;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation-delay: 4s;
}

.line-4 {
  width: 2px;
  height: 150px;
  right: 20%;
  bottom: -150px;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation-delay: 6s;
  animation-direction: reverse;
}

@keyframes moveLine {
  0%, 100% { 
    opacity: 0;
    transform: translateX(0) translateY(0);
  }
  50% { 
    opacity: 1;
    transform: translateX(100vw) translateY(100vh);
  }
}

/* Enhanced Floating Elements */
.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-element {
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
  border-radius: 50%;
  animation: enhancedSparkle 4s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

@keyframes enhancedSparkle {
  0%, 100% { 
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  25% {
    opacity: 0.5;
    transform: scale(0.5) rotate(90deg);
  }
  50% { 
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
  75% {
    opacity: 0.5;
    transform: scale(0.5) rotate(270deg);
  }
}

/* Particles */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: particleFloat 10s linear infinite;
}

@keyframes particleFloat {
  0% {
    opacity: 0;
    transform: translateY(100vh) rotate(0deg);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) rotate(360deg);
  }
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  33% { 
    transform: translateY(-30px) rotate(120deg) scale(1.1);
  }
  66% { 
    transform: translateY(30px) rotate(240deg) scale(0.9);
  }
}

@keyframes sparkle {
  0%, 100% { 
    opacity: 0;
    transform: scale(0);
  }
  50% { 
    opacity: 1;
    transform: scale(1);
  }
}

/* Main Container */
.container {
  position: relative;
  z-index: 2;
}

/* Login Card */
.login-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header */
.login-header {
  margin-bottom: 2rem;
}

.logo-container {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.logo-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  position: relative;
  z-index: 2;
  animation: pulse 2s ease-in-out infinite;
}

.logo-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(15px);
  z-index: 1;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.brand-title {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
}

.brand-subtitle {
  color: #6c757d;
  font-size: 0.95rem;
  margin: 0;
}

/* Form Styles */
.login-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.input-wrapper {
  position: relative;
}

.form-input {
  width: 100%;
  padding: 1rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.form-input.is-invalid {
  border-color: #dc3545;
}

.input-focus-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.form-input:focus + .input-focus-line {
  width: 100%;
}

.password-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6c757d;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 3;
}

.password-toggle:hover {
  color: #667eea;
}

.error-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

/* Custom Checkbox */
.remember-me {
  margin-bottom: 2rem;
}

.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox input {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #e9ecef;
  border-radius: 4px;
  margin-right: 0.75rem;
  position: relative;
  transition: all 0.3s ease;
}

.custom-checkbox input:checked + .checkmark {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
}

.custom-checkbox input:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.checkbox-text {
  color: #495057;
  font-size: 0.9rem;
}

/* Login Button */
.login-btn {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
}

.login-btn:active {
  transform: translateY(0);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.login-btn:hover .btn-glow {
  opacity: 1;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Demo Section */
.demo-section {
  margin-bottom: 2rem;
}

.divider {
  text-align: center;
  margin: 2rem 0 1.5rem;
  position: relative;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e9ecef;
}

.divider span {
  background: rgba(255, 255, 255, 0.95);
  padding: 0 1rem;
  color: #6c757d;
  font-size: 0.9rem;
  position: relative;
}

.demo-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.demo-btn {
  padding: 0.75rem 0.5rem;
  border: 2px solid;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-weight: 500;
}

.demo-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.demo-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.demo-admin {
  border-color: #667eea;
  color: #667eea;
}

.demo-admin:hover:not(:disabled) {
  background: #667eea;
  color: white;
}

.demo-manager {
  border-color: #28a745;
  color: #28a745;
}

.demo-manager:hover:not(:disabled) {
  background: #28a745;
  color: white;
}

.demo-user {
  border-color: #17a2b8;
  color: #17a2b8;
}

.demo-user:hover:not(:disabled) {
  background: #17a2b8;
  color: white;
}

.demo-btn-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.demo-btn i {
  font-size: 1.2rem;
}

/* Custom Alert */
.custom-alert {
  border: none;
  border-radius: 12px;
  background: rgba(220, 53, 69, 0.1);
  border-left: 4px solid #dc3545;
  margin-bottom: 1.5rem;
  animation: slideDown 0.3s ease-out;
}

.alert-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #dc3545;
}

.alert-close {
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  margin-left: auto;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.alert-close:hover {
  background: rgba(220, 53, 69, 0.1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Footer */
.login-footer {
  text-align: center;
  margin-top: 2rem;
}

.login-footer p {
  color: #6c757d;
  font-size: 0.875rem;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 576px) {
  .login-card .card-body {
    padding: 2rem !important;
  }
  
  .brand-title {
    font-size: 1.5rem;
  }
  
  .logo-circle {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  .demo-buttons {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .demo-btn {
    padding: 1rem;
  }
  
  .demo-btn-content {
    flex-direction: row;
    gap: 0.5rem;
  }
}

@media (max-width: 768px) {
  /* Hide some background elements on mobile for better performance */
  .orb-4, .orb-5 {
    display: none;
  }
  
  .shape-4, .shape-5 {
    display: none;
  }
  
  .animated-lines .line-3, .animated-lines .line-4 {
    display: none;
  }
  
  .particles {
    display: none;
  }
  
  .grid-pattern {
    opacity: 0.05;
  }
}

@media (max-width: 480px) {
  /* Further reduce background elements on very small screens */
  .orb-2, .orb-3 {
    opacity: 0.2;
  }
  
  .shape-2, .shape-3 {
    opacity: 0.05;
  }
  
  .floating-elements .floating-element:nth-child(n+7) {
    display: none;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .login-card {
    background: rgba(30, 30, 30, 0.95);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .form-input {
    background: rgba(50, 50, 50, 0.8);
    border-color: #495057;
    color: #fff;
  }
  
  .form-input:focus {
    background: rgba(50, 50, 50, 0.95);
  }
  
  .form-label, .checkbox-text {
    color: #e9ecef;
  }
  
  .brand-subtitle {
    color: #adb5bd;
  }
}
</style>
