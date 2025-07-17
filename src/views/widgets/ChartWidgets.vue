<template>
  <div class="container-fluid px-5 py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="mb-2">Chart Widgets</h2>
        <p class="text-muted">วิดเจ็ตแผนภูมิและการแสดงข้อมูลเชิงสถิติ</p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
          <li class="breadcrumb-item">Widgets</li>
          <li class="breadcrumb-item active">Chart Widgets</li>
        </ol>
      </nav>
    </div>

    <!-- Sales Charts -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Sales Charts</h4>
      </div>
      <div class="col-lg-8 mb-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">ยอดขายรายเดือน</h5>
            <div class="chart-controls">
              <button class="btn btn-sm" :class="salesPeriod === '6m' ? 'btn-primary' : 'btn-outline-primary'"
                      @click="salesPeriod = '6m'">6 เดือน</button>
              <button class="btn btn-sm" :class="salesPeriod === '1y' ? 'btn-primary' : 'btn-outline-primary'"
                      @click="salesPeriod = '1y'">1 ปี</button>
            </div>
          </div>
          <div class="card-body">
            <div class="chart-container">
              <canvas ref="salesChart" width="400" height="200"></canvas>
            </div>
            <div class="chart-legend mt-3">
              <div class="legend-item">
                <span class="legend-color bg-primary"></span>
                <span>ยอดขาย 2024</span>
              </div>
              <div class="legend-item">
                <span class="legend-color bg-success"></span>
                <span>ยอดขาย 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">สรุปยอดขาย</h5>
          </div>
          <div class="card-body">
            <div class="sales-summary">
              <div class="summary-metric">
                <h3 class="text-primary">₿ 245,680</h3>
                <p class="text-muted mb-2">ยอดขายเดือนนี้</p>
                <div class="metric-change positive">
                  <i class="fas fa-arrow-up"></i> +12.5%
                </div>
              </div>
              
              <div class="summary-metric">
                <h3 class="text-success">₿ 2,156,420</h3>
                <p class="text-muted mb-2">ยอดขายปีนี้</p>
                <div class="metric-change positive">
                  <i class="fas fa-arrow-up"></i> +8.3%
                </div>
              </div>
              
              <div class="summary-metric">
                <h3 class="text-warning">₿ 41,250</h3>
                <p class="text-muted mb-2">ยอดขายเฉลี่ย/วัน</p>
                <div class="metric-change negative">
                  <i class="fas fa-arrow-down"></i> -2.1%
                </div>
              </div>
            </div>
            
            <div class="progress-goals mt-4">
              <h6>เป้าหมายรายเดือน</h6>
              <div class="progress mb-2">
                <div class="progress-bar bg-primary" style="width: 82%"></div>
              </div>
              <div class="d-flex justify-content-between">
                <small>82% ของเป้าหมาย</small>
                <small>₿ 300,000</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Analytics Dashboard -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Analytics Dashboard</h4>
      </div>
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">การกระจายของผู้ใช้</h5>
          </div>
          <div class="card-body">
            <div class="pie-chart-container">
              <canvas ref="userChart" width="300" height="300"></canvas>
            </div>
            <div class="pie-chart-data">
              <div class="data-item" v-for="(item, index) in userDistribution" :key="index">
                <span class="data-color" :style="{ backgroundColor: item.color }"></span>
                <span class="data-label">{{ item.label }}</span>
                <span class="data-value">{{ item.value }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">ประสิทธิภาพระบบ</h5>
          </div>
          <div class="card-body">
            <div class="performance-charts">
              <div class="performance-item">
                <div class="d-flex justify-content-between mb-2">
                  <span>CPU Usage</span>
                  <span class="fw-bold">65%</span>
                </div>
                <div class="progress mb-3">
                  <div class="progress-bar bg-warning progress-bar-animated" style="width: 65%"></div>
                </div>
              </div>
              
              <div class="performance-item">
                <div class="d-flex justify-content-between mb-2">
                  <span>Memory</span>
                  <span class="fw-bold">42%</span>
                </div>
                <div class="progress mb-3">
                  <div class="progress-bar bg-success progress-bar-animated" style="width: 42%"></div>
                </div>
              </div>
              
              <div class="performance-item">
                <div class="d-flex justify-content-between mb-2">
                  <span>Disk Space</span>
                  <span class="fw-bold">78%</span>
                </div>
                <div class="progress mb-3">
                  <div class="progress-bar bg-danger progress-bar-animated" style="width: 78%"></div>
                </div>
              </div>
              
              <div class="performance-item">
                <div class="d-flex justify-content-between mb-2">
                  <span>Network</span>
                  <span class="fw-bold">23%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-info progress-bar-animated" style="width: 23%"></div>
                </div>
              </div>
            </div>
            
            <div class="system-status mt-4">
              <h6>สถานะระบบ</h6>
              <div class="status-grid">
                <div class="status-item">
                  <i class="fas fa-circle text-success"></i>
                  <span>Web Server</span>
                </div>
                <div class="status-item">
                  <i class="fas fa-circle text-success"></i>
                  <span>Database</span>
                </div>
                <div class="status-item">
                  <i class="fas fa-circle text-warning"></i>
                  <span>Cache</span>
                </div>
                <div class="status-item">
                  <i class="fas fa-circle text-danger"></i>
                  <span>Email Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistical Widgets -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Statistical Widgets</h4>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">การเติบโตรายสัปดาห์</h5>
          </div>
          <div class="card-body">
            <div class="growth-chart">
              <canvas ref="growthChart" width="300" height="200"></canvas>
            </div>
            <div class="growth-stats mt-3">
              <div class="stat-row">
                <span>การเติบโต</span>
                <span class="text-success fw-bold">+15.2%</span>
              </div>
              <div class="stat-row">
                <span>ผู้ใช้ใหม่</span>
                <span class="fw-bold">1,234</span>
              </div>
              <div class="stat-row">
                <span>ผู้ใช้กลับมา</span>
                <span class="fw-bold">5,678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Top Products</h5>
          </div>
          <div class="card-body">
            <div class="product-ranking">
              <div class="ranking-item" v-for="(product, index) in topProducts" :key="index">
                <div class="ranking-number">{{ index + 1 }}</div>
                <div class="product-info">
                  <h6 class="product-name">{{ product.name }}</h6>
                  <p class="product-sales">{{ product.sales }} ขาย</p>
                </div>
                <div class="product-chart">
                  <div class="mini-bar" :style="{ width: product.percentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Traffic Sources</h5>
          </div>
          <div class="card-body">
            <div class="traffic-sources">
              <div class="source-item" v-for="source in trafficSources" :key="source.name">
                <div class="source-icon" :class="source.iconClass">
                  <i class="fab" :class="source.icon"></i>
                </div>
                <div class="source-info">
                  <h6>{{ source.name }}</h6>
                  <p class="source-visitors">{{ source.visitors }} visitors</p>
                </div>
                <div class="source-percentage">
                  <span class="percentage">{{ source.percentage }}%</span>
                  <div class="percentage-bar">
                    <div class="bar-fill" :class="source.barClass" 
                         :style="{ width: source.percentage + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Real-time Charts -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Real-time Charts</h4>
      </div>
      <div class="col-lg-8 mb-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Live Data</h5>
            <div class="live-indicator">
              <span class="status-dot"></span>
              <span>LIVE</span>
            </div>
          </div>
          <div class="card-body">
            <div class="realtime-chart">
              <canvas ref="realtimeChart" width="600" height="300"></canvas>
            </div>
            <div class="chart-info mt-3">
              <div class="info-item">
                <span class="info-label">Current</span>
                <span class="info-value">{{ currentValue }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Average</span>
                <span class="info-value">{{ averageValue }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Peak</span>
                <span class="info-value">{{ peakValue }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">Data Metrics</h5>
          </div>
          <div class="card-body">
            <div class="metrics-list">
              <div class="metric-item">
                <div class="metric-icon bg-primary">
                  <i class="fas fa-users"></i>
                </div>
                <div class="metric-data">
                  <h4>{{ onlineUsers }}</h4>
                  <p>ผู้ใช้ออนไลน์</p>
                  <div class="metric-trend positive">
                    <i class="fas fa-arrow-up"></i> +5.2%
                  </div>
                </div>
              </div>
              
              <div class="metric-item">
                <div class="metric-icon bg-success">
                  <i class="fas fa-chart-line"></i>
                </div>
                <div class="metric-data">
                  <h4>{{ pageViews }}</h4>
                  <p>Page Views</p>
                  <div class="metric-trend positive">
                    <i class="fas fa-arrow-up"></i> +12.8%
                  </div>
                </div>
              </div>
              
              <div class="metric-item">
                <div class="metric-icon bg-warning">
                  <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="metric-data">
                  <h4>{{ conversions }}</h4>
                  <p>Conversions</p>
                  <div class="metric-trend negative">
                    <i class="fas fa-arrow-down"></i> -2.1%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Charts -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Interactive Charts</h4>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Revenue Analysis</h5>
            <div class="chart-filters">
              <select class="form-select form-select-sm" v-model="selectedCategory">
                <option value="all">ทั้งหมด</option>
                <option value="electronics">อิเล็กทรอนิกส์</option>
                <option value="clothing">เสื้อผ้า</option>
                <option value="books">หนังสือ</option>
              </select>
            </div>
          </div>
          <div class="card-body">
            <div class="revenue-chart">
              <canvas ref="revenueChart" width="800" height="400"></canvas>
            </div>
            <div class="chart-summary mt-4">
              <div class="row">
                <div class="col-md-3">
                  <div class="summary-card">
                    <h6>รายได้รวม</h6>
                    <h3 class="text-primary">₿ 1,245,680</h3>
                    <small class="text-muted">เดือนนี้</small>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="summary-card">
                    <h6>กำไรสุทธิ</h6>
                    <h3 class="text-success">₿ 324,150</h3>
                    <small class="text-muted">26% margin</small>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="summary-card">
                    <h6>ค่าใช้จ่าย</h6>
                    <h3 class="text-warning">₿ 921,530</h3>
                    <small class="text-muted">74% ของรายได้</small>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="summary-card">
                    <h6>อัตราการเติบโต</h6>
                    <h3 class="text-info">+15.2%</h3>
                    <small class="text-muted">เทียบเดือนก่อน</small>
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
import { ref, onMounted, reactive } from 'vue'

const salesPeriod = ref('6m')
const selectedCategory = ref('all')

const currentValue = ref(1240)
const averageValue = ref(1180)
const peakValue = ref(1450)
const onlineUsers = ref(1248)
const pageViews = ref(15420)
const conversions = ref(245)

const userDistribution = reactive([
  { label: 'Desktop', value: 45, color: '#007bff' },
  { label: 'Mobile', value: 35, color: '#28a745' },
  { label: 'Tablet', value: 20, color: '#ffc107' }
])

const topProducts = reactive([
  { name: 'iPhone 15 Pro', sales: 1245, percentage: 85 },
  { name: 'Samsung Galaxy S24', sales: 980, percentage: 67 },
  { name: 'MacBook Pro', sales: 756, percentage: 51 },
  { name: 'iPad Air', sales: 642, percentage: 43 },
  { name: 'AirPods Pro', sales: 523, percentage: 35 }
])

const trafficSources = reactive([
  { 
    name: 'Google', 
    visitors: '12,450', 
    percentage: 45, 
    icon: 'fa-google', 
    iconClass: 'bg-danger',
    barClass: 'bg-danger'
  },
  { 
    name: 'Facebook', 
    visitors: '8,320', 
    percentage: 30, 
    icon: 'fa-facebook', 
    iconClass: 'bg-primary',
    barClass: 'bg-primary'
  },
  { 
    name: 'Twitter', 
    visitors: '4,180', 
    percentage: 15, 
    icon: 'fa-twitter', 
    iconClass: 'bg-info',
    barClass: 'bg-info'
  },
  { 
    name: 'Direct', 
    visitors: '2,760', 
    percentage: 10, 
    icon: 'fa-globe', 
    iconClass: 'bg-success',
    barClass: 'bg-success'
  }
])

// Refs for canvas elements
const salesChart = ref(null)
const userChart = ref(null)
const growthChart = ref(null)
const realtimeChart = ref(null)
const revenueChart = ref(null)

onMounted(() => {
  // Initialize charts
  initializeSalesChart()
  initializeUserChart()
  initializeGrowthChart()
  initializeRealtimeChart()
  initializeRevenueChart()
  
  // Start real-time data updates
  startRealtimeUpdates()
})

const initializeSalesChart = () => {
  if (!salesChart.value) return
  
  const ctx = salesChart.value.getContext('2d')
  const gradient = ctx.createLinearGradient(0, 0, 0, 200)
  gradient.addColorStop(0, 'rgba(0, 123, 255, 0.8)')
  gradient.addColorStop(1, 'rgba(0, 123, 255, 0.1)')
  
  // Simple line chart simulation
  ctx.clearRect(0, 0, 400, 200)
  ctx.fillStyle = gradient
  ctx.strokeStyle = '#007bff'
  ctx.lineWidth = 3
  
  ctx.beginPath()
  ctx.moveTo(50, 150)
  ctx.lineTo(100, 120)
  ctx.lineTo(150, 100)
  ctx.lineTo(200, 80)
  ctx.lineTo(250, 90)
  ctx.lineTo(300, 60)
  ctx.lineTo(350, 40)
  ctx.stroke()
  
  ctx.lineTo(350, 200)
  ctx.lineTo(50, 200)
  ctx.closePath()
  ctx.fill()
}

const initializeUserChart = () => {
  if (!userChart.value) return
  
  const ctx = userChart.value.getContext('2d')
  const centerX = 150
  const centerY = 150
  const radius = 100
  
  let currentAngle = 0
  userDistribution.forEach(segment => {
    const sliceAngle = (segment.value / 100) * 2 * Math.PI
    
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
    ctx.lineTo(centerX, centerY)
    ctx.fillStyle = segment.color
    ctx.fill()
    
    currentAngle += sliceAngle
  })
}

const initializeGrowthChart = () => {
  if (!growthChart.value) return
  
  const ctx = growthChart.value.getContext('2d')
  ctx.fillStyle = '#28a745'
  
  // Simple bar chart
  const bars = [60, 80, 75, 90, 85, 95, 100]
  bars.forEach((height, index) => {
    const x = index * 40 + 20
    const y = 200 - height
    ctx.fillRect(x, y, 30, height)
  })
}

const initializeRealtimeChart = () => {
  if (!realtimeChart.value) return
  
  const ctx = realtimeChart.value.getContext('2d')
  // Real-time chart will be updated by the animation function
  updateRealtimeChart()
}

const initializeRevenueChart = () => {
  if (!revenueChart.value) return
  
  const ctx = revenueChart.value.getContext('2d')
  
  // Multiple line chart simulation
  ctx.strokeStyle = '#007bff'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(50, 200)
  ctx.lineTo(150, 150)
  ctx.lineTo(250, 100)
  ctx.lineTo(350, 120)
  ctx.lineTo(450, 80)
  ctx.lineTo(550, 60)
  ctx.lineTo(650, 40)
  ctx.lineTo(750, 50)
  ctx.stroke()
  
  ctx.strokeStyle = '#28a745'
  ctx.beginPath()
  ctx.moveTo(50, 220)
  ctx.lineTo(150, 180)
  ctx.lineTo(250, 140)
  ctx.lineTo(350, 160)
  ctx.lineTo(450, 130)
  ctx.lineTo(550, 110)
  ctx.lineTo(650, 90)
  ctx.lineTo(750, 100)
  ctx.stroke()
}

const updateRealtimeChart = () => {
  if (!realtimeChart.value) return
  
  const ctx = realtimeChart.value.getContext('2d')
  ctx.clearRect(0, 0, 600, 300)
  
  // Generate random data points
  const dataPoints = []
  for (let i = 0; i < 50; i++) {
    dataPoints.push(Math.random() * 200 + 50)
  }
  
  ctx.strokeStyle = '#007bff'
  ctx.lineWidth = 2
  ctx.beginPath()
  
  dataPoints.forEach((point, index) => {
    const x = index * 12
    const y = 300 - point
    if (index === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  })
  
  ctx.stroke()
}

const startRealtimeUpdates = () => {
  setInterval(() => {
    // Update real-time values
    currentValue.value = Math.floor(Math.random() * 300) + 1000
    onlineUsers.value = Math.floor(Math.random() * 500) + 1000
    pageViews.value = Math.floor(Math.random() * 5000) + 12000
    conversions.value = Math.floor(Math.random() * 100) + 200
    
    // Update real-time chart
    updateRealtimeChart()
  }, 2000)
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 200px;
  margin-bottom: 20px;
}

.chart-controls {
  display: flex;
  gap: 5px;
}

.chart-legend {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 3px;
}

.sales-summary {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.summary-metric {
  text-align: center;
}

.summary-metric h3 {
  margin-bottom: 8px;
}

.metric-change {
  font-size: 0.9rem;
  font-weight: 600;
}

.metric-change.positive {
  color: #28a745;
}

.metric-change.negative {
  color: #dc3545;
}

.progress-goals h6 {
  margin-bottom: 10px;
}

.pie-chart-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.pie-chart-data {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.data-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.data-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.data-label {
  flex: 1;
}

.data-value {
  font-weight: 600;
}

.performance-item {
  margin-bottom: 15px;
}

.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}

.growth-chart {
  margin-bottom: 15px;
}

.growth-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
}

.ranking-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 8px;
}

.ranking-number {
  width: 30px;
  height: 30px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
}

.product-info {
  flex: 1;
}

.product-name {
  margin-bottom: 2px;
  font-size: 0.95rem;
}

.product-sales {
  margin-bottom: 0;
  font-size: 0.85rem;
  color: #6c757d;
}

.product-chart {
  width: 60px;
}

.mini-bar {
  height: 8px;
  background: #007bff;
  border-radius: 4px;
}

.source-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.source-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
}

.source-info {
  flex: 1;
}

.source-info h6 {
  margin-bottom: 2px;
}

.source-visitors {
  margin-bottom: 0;
  font-size: 0.85rem;
  color: #6c757d;
}

.source-percentage {
  text-align: right;
  width: 80px;
}

.percentage {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.percentage-bar {
  width: 100%;
  height: 6px;
  background: #e9ecef;
  border-radius: 3px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #28a745;
}

.status-dot {
  width: 8px;
  height: 8px;
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

.realtime-chart {
  margin-bottom: 15px;
}

.chart-info {
  display: flex;
  justify-content: space-around;
}

.info-item {
  text-align: center;
}

.info-label {
  display: block;
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 5px;
}

.info-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
}

.metrics-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.metric-item {
  display: flex;
  align-items: center;
}

.metric-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
}

.metric-data h4 {
  margin-bottom: 2px;
  color: #495057;
}

.metric-data p {
  margin-bottom: 5px;
  color: #6c757d;
  font-size: 0.9rem;
}

.metric-trend {
  font-size: 0.85rem;
  font-weight: 600;
}

.metric-trend.positive {
  color: #28a745;
}

.metric-trend.negative {
  color: #dc3545;
}

.chart-filters {
  display: flex;
  gap: 10px;
}

.revenue-chart {
  margin-bottom: 20px;
}

.summary-card {
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.summary-card h6 {
  margin-bottom: 10px;
  color: #6c757d;
}

.summary-card h3 {
  margin-bottom: 5px;
}

.summary-card small {
  color: #6c757d;
}
</style>
