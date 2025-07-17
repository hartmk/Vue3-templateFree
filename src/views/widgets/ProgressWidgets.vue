<template>
  <div class="container-fluid px-5 py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="mb-2">Progress Widgets</h2>
        <p class="text-muted">แถบแสดงความคืบหน้าและตัวชี้วัดต่างๆ</p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
          <li class="breadcrumb-item">Widgets</li>
          <li class="breadcrumb-item active">Progress Widgets</li>
        </ol>
      </nav>
    </div>

    <!-- Basic Progress Bars -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Basic Progress Bars</h4>
      </div>
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">แถบความคืบหน้าพื้นฐาน</h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-primary" style="width: 90%"></div>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span>CSS</span>
                <span>85%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-success" style="width: 85%"></div>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span>JavaScript</span>
                <span>75%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-warning" style="width: 75%"></div>
              </div>
            </div>
            <div class="mb-0">
              <div class="d-flex justify-content-between mb-1">
                <span>Vue.js</span>
                <span>65%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-info" style="width: 65%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">แถบความคืบหน้าแบบ Striped</h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span>กำลังดาวน์โหลด...</span>
                <span>45%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" style="width: 45%"></div>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span>กำลังอัปโหลด...</span>
                <span>78%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 78%"></div>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span>กำลังประมวลผล...</span>
                <span>32%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 32%"></div>
              </div>
            </div>
            <div class="mb-0">
              <div class="d-flex justify-content-between mb-1">
                <span>กำลังสำรองข้อมูล...</span>
                <span>92%</span>
              </div>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 92%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Circular Progress -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Circular Progress</h4>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-center">
          <div class="card-body">
            <div class="circular-progress-wrapper">
              <svg class="circular-progress" width="120" height="120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#e9ecef" stroke-width="8"/>
                <circle cx="60" cy="60" r="50" fill="none" stroke="#007bff" stroke-width="8"
                        stroke-dasharray="314" stroke-dashoffset="94" 
                        transform="rotate(-90 60 60)" class="progress-circle"/>
              </svg>
              <div class="progress-text">70%</div>
            </div>
            <h6 class="mt-3">ยอดขาย</h6>
            <small class="text-muted">เป้าหมาย: 100,000</small>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-center">
          <div class="card-body">
            <div class="circular-progress-wrapper">
              <svg class="circular-progress" width="120" height="120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#e9ecef" stroke-width="8"/>
                <circle cx="60" cy="60" r="50" fill="none" stroke="#28a745" stroke-width="8"
                        stroke-dasharray="314" stroke-dashoffset="63" 
                        transform="rotate(-90 60 60)" class="progress-circle"/>
              </svg>
              <div class="progress-text">80%</div>
            </div>
            <h6 class="mt-3">ลูกค้า</h6>
            <small class="text-muted">เป้าหมาย: 1,000</small>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-center">
          <div class="card-body">
            <div class="circular-progress-wrapper">
              <svg class="circular-progress" width="120" height="120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#e9ecef" stroke-width="8"/>
                <circle cx="60" cy="60" r="50" fill="none" stroke="#ffc107" stroke-width="8"
                        stroke-dasharray="314" stroke-dashoffset="157" 
                        transform="rotate(-90 60 60)" class="progress-circle"/>
              </svg>
              <div class="progress-text">50%</div>
            </div>
            <h6 class="mt-3">โครงการ</h6>
            <small class="text-muted">เสร็จแล้ว 5/10</small>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-center">
          <div class="card-body">
            <div class="circular-progress-wrapper">
              <svg class="circular-progress" width="120" height="120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#e9ecef" stroke-width="8"/>
                <circle cx="60" cy="60" r="50" fill="none" stroke="#dc3545" stroke-width="8"
                        stroke-dasharray="314" stroke-dashoffset="25" 
                        transform="rotate(-90 60 60)" class="progress-circle"/>
              </svg>
              <div class="progress-text">92%</div>
            </div>
            <h6 class="mt-3">CPU Usage</h6>
            <small class="text-muted">High Load</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Multi-Step Progress -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Multi-Step Progress</h4>
      </div>
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">ขั้นตอนการสั่งซื้อ</h5>
          </div>
          <div class="card-body">
            <div class="step-progress">
              <div class="step active completed">
                <div class="step-number">1</div>
                <div class="step-title">เลือกสินค้า</div>
              </div>
              <div class="step-line completed"></div>
              <div class="step active completed">
                <div class="step-number">2</div>
                <div class="step-title">ข้อมูลการจัดส่ง</div>
              </div>
              <div class="step-line completed"></div>
              <div class="step active">
                <div class="step-number">3</div>
                <div class="step-title">การชำระเงิน</div>
              </div>
              <div class="step-line"></div>
              <div class="step">
                <div class="step-number">4</div>
                <div class="step-title">ยืนยันคำสั่งซื้อ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Progress Widgets -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Advanced Progress Widgets</h4>
      </div>
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">ประสิทธิภาพระบบ</h5>
          </div>
          <div class="card-body">
            <div class="metric-item mb-4">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="fw-medium">CPU Usage</span>
                <span class="badge bg-warning">65%</span>
              </div>
              <div class="progress-container">
                <div class="progress">
                  <div class="progress-bar bg-gradient-warning" style="width: 65%"></div>
                </div>
                <div class="progress-indicators">
                  <span class="indicator" style="left: 50%">Normal</span>
                  <span class="indicator" style="left: 80%">High</span>
                </div>
              </div>
            </div>
            
            <div class="metric-item mb-4">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="fw-medium">Memory Usage</span>
                <span class="badge bg-success">42%</span>
              </div>
              <div class="progress-container">
                <div class="progress">
                  <div class="progress-bar bg-gradient-success" style="width: 42%"></div>
                </div>
                <div class="progress-indicators">
                  <span class="indicator" style="left: 70%">Warning</span>
                  <span class="indicator" style="left: 90%">Critical</span>
                </div>
              </div>
            </div>
            
            <div class="metric-item mb-0">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="fw-medium">Disk Space</span>
                <span class="badge bg-danger">88%</span>
              </div>
              <div class="progress-container">
                <div class="progress">
                  <div class="progress-bar bg-gradient-danger" style="width: 88%"></div>
                </div>
                <div class="progress-indicators">
                  <span class="indicator" style="left: 75%">Warning</span>
                  <span class="indicator" style="left: 90%">Critical</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">เป้าหมายยอดขาย</h5>
          </div>
          <div class="card-body">
            <div class="sales-progress">
              <div class="text-center mb-4">
                <h3 class="text-primary">₿ 85,420</h3>
                <p class="text-muted mb-0">จาก ₿ 100,000</p>
              </div>
              
              <div class="progress-ring">
                <svg width="200" height="200">
                  <circle cx="100" cy="100" r="85" fill="none" stroke="#e9ecef" stroke-width="15"/>
                  <circle cx="100" cy="100" r="85" fill="none" stroke="#007bff" stroke-width="15"
                          stroke-dasharray="534" stroke-dashoffset="80" 
                          transform="rotate(-90 100 100)" class="progress-ring-circle"/>
                </svg>
                <div class="progress-ring-text">
                  <span class="percentage">85%</span>
                  <span class="label">Complete</span>
                </div>
              </div>
              
              <div class="mt-4">
                <div class="d-flex justify-content-between text-sm">
                  <span>เหลือ</span>
                  <span class="fw-bold">₿ 14,580</span>
                </div>
                <div class="d-flex justify-content-between text-sm">
                  <span>วันที่เหลือ</span>
                  <span class="fw-bold">12 วัน</span>
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
import { onMounted } from 'vue'

onMounted(() => {
  // Animate progress bars on mount
  animateProgress()
})

const animateProgress = () => {
  const progressBars = document.querySelectorAll('.progress-bar')
  progressBars.forEach(bar => {
    const width = bar.style.width
    bar.style.width = '0%'
    setTimeout(() => {
      bar.style.transition = 'width 1s ease-in-out'
      bar.style.width = width
    }, 100)
  })
}
</script>

<style scoped>
.circular-progress-wrapper {
  position: relative;
  display: inline-block;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
  color: #495057;
}

.progress-circle {
  transition: stroke-dashoffset 0.5s ease-in-out;
}

.step-progress {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e9ecef;
  color: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.step.active .step-number {
  background: #007bff;
  color: white;
}

.step.completed .step-number {
  background: #28a745;
  color: white;
}

.step-title {
  font-size: 0.875rem;
  text-align: center;
  color: #6c757d;
}

.step.active .step-title {
  color: #007bff;
  font-weight: 500;
}

.step.completed .step-title {
  color: #28a745;
}

.step-line {
  height: 2px;
  background: #e9ecef;
  flex: 1;
  margin: 0 10px;
  margin-bottom: 32px;
  transition: all 0.3s ease;
}

.step-line.completed {
  background: #28a745;
}

.progress-container {
  position: relative;
}

.progress-indicators {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 20px;
}

.indicator {
  position: absolute;
  font-size: 0.75rem;
  color: #6c757d;
  transform: translateX(-50%);
  padding-top: 5px;
}

.indicator::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 6px;
  background: #6c757d;
}

.progress-ring {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-ring-circle {
  transition: stroke-dashoffset 0.5s ease-in-out;
}

.progress-ring-text {
  position: absolute;
  text-align: center;
}

.progress-ring-text .percentage {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
}

.progress-ring-text .label {
  display: block;
  font-size: 0.875rem;
  color: #6c757d;
}

.bg-gradient-warning {
  background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%);
}

.bg-gradient-success {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
}

.bg-gradient-danger {
  background: linear-gradient(135deg, #dc3545 0%, #e83e8c 100%);
}

.metric-item {
  padding: 15px 0;
  border-bottom: 1px solid #f8f9fa;
}

.metric-item:last-child {
  border-bottom: none;
}

.text-sm {
  font-size: 0.875rem;
}
</style>
