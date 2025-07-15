<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <div class="error-container">
            <!-- 404 Number -->
            <div class="error-number mb-4">
              <span class="display-1 fw-bold text-primary">4</span>
              <span class="display-1 fw-bold text-danger">0</span>
              <span class="display-1 fw-bold text-warning">4</span>
            </div>

            <!-- Error Icon -->
            <div class="error-icon mb-4">
              <i class="fas fa-search fa-4x text-muted"></i>
            </div>

            <!-- Error Message -->
            <h2 class="mb-3 text-dark">ไม่พบหน้าที่คุณค้นหา</h2>
            <p class="text-muted mb-4 lead">
              ขออภัย หน้าที่คุณพยายามเข้าถึงไม่มีอยู่ หรืออาจถูกย้ายไปยังที่อื่นแล้ว
            </p>

            <!-- Current URL Info -->
            <div class="alert alert-light border mb-4">
              <small class="text-muted">
                <i class="fas fa-link me-2"></i>
                URL ที่ไม่พบ: <code>{{ currentPath }}</code>
              </small>
            </div>

            <!-- Action Buttons -->
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <router-link to="/dashboard" class="btn btn-primary btn-lg">
                <i class="fas fa-home me-2"></i>กลับสู่หน้าหลัก
              </router-link>
              <button class="btn btn-outline-secondary btn-lg" @click="goBack">
                <i class="fas fa-arrow-left me-2"></i>กลับหน้าที่แล้ว
              </button>
              <button class="btn btn-outline-info btn-lg" @click="refreshPage">
                <i class="fas fa-redo me-2"></i>โหลดหน้าใหม่
              </button>
            </div>

            <!-- Help Links -->
            <div class="mt-5">
              <h5 class="mb-3">หรือลองไปที่หน้าอื่น:</h5>
              <div class="row">
                <div class="col-6 col-md-3 mb-3">
                  <router-link to="/dashboard" class="text-decoration-none">
                    <div class="card h-100 border-primary">
                      <div class="card-body text-center">
                        <i class="fas fa-tachometer-alt fa-2x text-primary mb-2"></i>
                        <h6 class="card-title">แดชบอร์ด</h6>
                      </div>
                    </div>
                  </router-link>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <router-link to="/products" class="text-decoration-none">
                    <div class="card h-100 border-success">
                      <div class="card-body text-center">
                        <i class="fas fa-box fa-2x text-success mb-2"></i>
                        <h6 class="card-title">สินค้า</h6>
                      </div>
                    </div>
                  </router-link>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <router-link to="/orders" class="text-decoration-none">
                    <div class="card h-100 border-warning">
                      <div class="card-body text-center">
                        <i class="fas fa-shopping-cart fa-2x text-warning mb-2"></i>
                        <h6 class="card-title">คำสั่งซื้อ</h6>
                      </div>
                    </div>
                  </router-link>
                </div>
                <div class="col-6 col-md-3 mb-3">
                  <router-link to="/customers" class="text-decoration-none">
                    <div class="card h-100 border-info">
                      <div class="card-body text-center">
                        <i class="fas fa-users fa-2x text-info mb-2"></i>
                        <h6 class="card-title">ลูกค้า</h6>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Search Box -->
            <div class="mt-4">
              <div class="input-group">
                <input 
                  type="text" 
                  class="form-control form-control-lg" 
                  placeholder="ค้นหาหน้าที่ต้องการ..."
                  v-model="searchQuery"
                  @keyup.enter="searchPages"
                >
                <button class="btn btn-primary" @click="searchPages">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>

            <!-- Footer -->
            <div class="mt-5 text-muted">
              <small>
                หากปัญหายังคงเกิดขึ้น กรุณาติดต่อผู้ดูแลระบบ
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const searchQuery = ref('')

const currentPath = computed(() => route.fullPath)

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/dashboard')
  }
}

const refreshPage = () => {
  window.location.reload()
}

const searchPages = () => {
  if (searchQuery.value.trim()) {
    // Simple search logic - redirect to relevant page based on keywords
    const query = searchQuery.value.toLowerCase().trim()
    
    if (query.includes('สินค้า') || query.includes('product')) {
      router.push('/products')
    } else if (query.includes('คำสั่ง') || query.includes('order')) {
      router.push('/orders')
    } else if (query.includes('ลูกค้า') || query.includes('customer')) {
      router.push('/customers')
    } else if (query.includes('รายงาน') || query.includes('analytics')) {
      router.push('/analytics')
    } else if (query.includes('ตั้งค่า') || query.includes('setting')) {
      router.push('/settings')
    } else {
      router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.error-container {
  max-width: 600px;
  margin: 0 auto;
}

.error-number {
  font-size: 8rem;
  line-height: 1;
}

.error-icon {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

code {
  background-color: #f8f9fa;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

@media (max-width: 576px) {
  .error-number {
    font-size: 5rem;
  }
  
  .error-icon i {
    font-size: 2.5rem !important;
  }
  
  .d-flex.flex-column.flex-sm-row {
    flex-direction: column !important;
  }
  
  .btn-lg {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}

.lead {
  font-size: 1.1rem;
}

.input-group {
  max-width: 400px;
  margin: 0 auto;
}
</style>
