<template>
  <div class="container-fluid px-5 py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="mb-2">Card Widgets</h2>
        <p class="text-muted">การ์ดแสดงข้อมูลสถิติและข้อมูลต่างๆ</p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
          <li class="breadcrumb-item">Widgets</li>
          <li class="breadcrumb-item active">Card Widgets</li>
        </ol>
      </nav>
    </div>

    <!-- Statistics Cards -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Statistics Cards</h4>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-white bg-primary">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h6 class="card-title">ยอดขายรวม</h6>
                <h3 class="mb-0">₿125,000</h3>
                <small class="text-white-50">+12% จากเดือนที่แล้ว</small>
              </div>
              <div class="align-self-center">
                <i class="fas fa-chart-line fa-2x opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-white bg-success">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h6 class="card-title">คำสั่งซื้อใหม่</h6>
                <h3 class="mb-0">1,254</h3>
                <small class="text-white-50">+8% จากเดือนที่แล้ว</small>
              </div>
              <div class="align-self-center">
                <i class="fas fa-shopping-cart fa-2x opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-white bg-warning">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h6 class="card-title">ผู้ใช้งาน</h6>
                <h3 class="mb-0">8,542</h3>
                <small class="text-white-50">+15% จากเดือนที่แล้ว</small>
              </div>
              <div class="align-self-center">
                <i class="fas fa-users fa-2x opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-white bg-danger">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h6 class="card-title">ปัญหา</h6>
                <h3 class="mb-0">12</h3>
                <small class="text-white-50">-3% จากเดือนที่แล้ว</small>
              </div>
              <div class="align-self-center">
                <i class="fas fa-exclamation-triangle fa-2x opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Cards -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Featured Cards</h4>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-header bg-gradient-primary text-white">
            <h5 class="mb-0"><i class="fas fa-trophy me-2"></i>สินค้าขายดี</h5>
          </div>
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <img src="https://via.placeholder.com/60x60" alt="Product" class="rounded me-3">
              <div>
                <h6 class="mb-1">iPhone 15 Pro</h6>
                <small class="text-muted">ขายแล้ว 1,245 ชิ้น</small>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-success" style="width: 85%"></div>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <small>85% ของเป้าหมาย</small>
              <small class="text-success">+15%</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-header bg-gradient-success text-white">
            <h5 class="mb-0"><i class="fas fa-chart-bar me-2"></i>ประสิทธิภาพ</h5>
          </div>
          <div class="card-body">
            <div class="text-center">
              <div class="circular-progress mb-3">
                <svg width="100" height="100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e9ecef" stroke-width="8"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#28a745" stroke-width="8"
                          stroke-dasharray="251" stroke-dashoffset="63" transform="rotate(-90 50 50)"/>
                </svg>
                <div class="progress-text">75%</div>
              </div>
              <h6>Server Performance</h6>
              <small class="text-muted">อัพไทม์ 99.9%</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-header bg-gradient-info text-white">
            <h5 class="mb-0"><i class="fas fa-bell me-2"></i>การแจ้งเตือน</h5>
          </div>
          <div class="card-body p-0">
            <div class="list-group list-group-flush">
              <div class="list-group-item d-flex align-items-center">
                <div class="notification-icon bg-primary me-3">
                  <i class="fas fa-user text-white"></i>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-1">ผู้ใช้ใหม่</h6>
                  <small class="text-muted">5 นาทีที่แล้ว</small>
                </div>
              </div>
              <div class="list-group-item d-flex align-items-center">
                <div class="notification-icon bg-success me-3">
                  <i class="fas fa-shopping-cart text-white"></i>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-1">คำสั่งซื้อใหม่</h6>
                  <small class="text-muted">10 นาทีที่แล้ว</small>
                </div>
              </div>
              <div class="list-group-item d-flex align-items-center">
                <div class="notification-icon bg-warning me-3">
                  <i class="fas fa-exclamation-triangle text-white"></i>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-1">แจ้งเตือนระบบ</h6>
                  <small class="text-muted">15 นาทีที่แล้ว</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Cards -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Interactive Cards</h4>
      </div>
      <div class="col-lg-6 col-md-12 mb-4">
        <div class="card shadow-sm">
          <div class="card-header">
            <h5 class="mb-0">ยอดขายรายวัน</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <h3 class="text-primary">₿45,280</h3>
                <p class="text-muted mb-0">วันนี้</p>
              </div>
              <div class="col-6">
                <div class="chart-mini">
                  <canvas id="miniChart1" width="100" height="50"></canvas>
                </div>
              </div>
            </div>
            <div class="progress mt-3">
              <div class="progress-bar bg-primary" style="width: 65%"></div>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <small>65% ของเป้าหมายวันนี้</small>
              <small class="text-success">+8.5%</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 mb-4">
        <div class="card shadow-sm">
          <div class="card-header">
            <h5 class="mb-0">ลูกค้าออนไลน์</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <h3 class="text-success">1,254</h3>
                <p class="text-muted mb-0">ออนไลน์ตอนนี้</p>
              </div>
              <div class="col-6">
                <div class="d-flex justify-content-end align-items-center">
                  <div class="online-indicator me-2"></div>
                  <span class="text-success fw-bold">LIVE</span>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex justify-content-between align-items-center">
                <span>Desktop</span>
                <span class="fw-bold">756</span>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span>Mobile</span>
                <span class="fw-bold">498</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Initialize mini charts or any interactive features here
  console.log('Card Widgets mounted')
})
</script>

<style scoped>
.circular-progress {
  position: relative;
  display: inline-block;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: bold;
  color: #28a745;
}

.notification-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.online-indicator {
  width: 12px;
  height: 12px;
  background: #28a745;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(40, 167, 69, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
  }
}

.card {
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-2px);
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.bg-gradient-success {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
}

.bg-gradient-info {
  background: linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%);
}
</style>
