<template>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-12">
        <!-- Header Section -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 class="mb-1">
              <i class="fas fa-chart-line text-primary me-2"></i>
              รายงานและการวิเคราะห์
            </h2>
            <p class="text-muted mb-0">ภาพรวมธุรกิจและข้อมูลเชิงลึก</p>
          </div>
          <div class="d-flex gap-2">
            <select v-model="selectedPeriod" class="form-select" style="width: auto;">
              <option value="today">วันนี้</option>
              <option value="week">7 วันที่ผ่านมา</option>
              <option value="month">30 วันที่ผ่านมา</option>
              <option value="quarter">3 เดือนที่ผ่านมา</option>
              <option value="year">1 ปีที่ผ่านมา</option>
            </select>
            <button class="btn btn-primary" @click="exportReport">
              <i class="fas fa-download me-2"></i>Export
            </button>
          </div>
        </div>

        <!-- Summary Cards -->
        <div class="row g-4 mb-4">
          <div v-for="(card, index) in summaryCards" :key="index" class="col-xl-3 col-md-6">
            <div 
              class="card border-0 shadow-sm h-100 position-relative overflow-hidden"
              :class="`card-${card.theme}`"
            >
              <!-- Background Gradient -->
              <div 
                class="position-absolute top-0 end-0 opacity-10"
                :style="{ 
                  background: `linear-gradient(135deg, ${card.color}40, ${card.color}10)`,
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  transform: 'translate(30px, -30px)'
                }"
              ></div>
              
              <div class="card-body position-relative">
                <div class="d-flex align-items-center">
                  <div 
                    class="rounded-3 d-flex align-items-center justify-content-center me-3 shadow-sm icon-container"
                    :style="{ 
                      background: `linear-gradient(135deg, ${card.color}, ${card.colorSecondary})`,
                      width: '65px', 
                      height: '65px' 
                    }"
                  >
                    <i :class="card.icon" class="fs-4 text-white"></i>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="text-muted mb-1 fw-medium">{{ card.title }}</h6>
                    <h3 class="mb-2 fw-bold" :style="{ color: card.color }">{{ card.value }}</h3>
                    <div class="d-flex align-items-center">
                      <span 
                        class="badge rounded-pill me-2 px-2 py-1 trend-badge"
                        :class="card.trend > 0 ? 'text-success' : card.trend < 0 ? 'text-danger' : 'text-secondary'"
                        :style="{ 
                          backgroundColor: card.trend > 0 ? '#d4edda' : card.trend < 0 ? '#f8d7da' : '#e2e3e5',
                          border: `1px solid ${card.trend > 0 ? '#c3e6cb' : card.trend < 0 ? '#f5c6cb' : '#d6d8db'}`
                        }"
                      >
                        <i :class="card.trend > 0 ? 'fas fa-trending-up' : card.trend < 0 ? 'fas fa-trending-down' : 'fas fa-minus'" class="me-1"></i>
                        {{ Math.abs(card.trend) }}%
                      </span>
                      <small class="text-muted fw-medium">vs เดือนที่แล้ว</small>
                    </div>
                  </div>
                </div>
                
                <!-- Progress bar at bottom -->
                <div class="mt-3">
                  <div class="progress" style="height: 4px; background-color: #f8f9fa;">
                    <div 
                      class="progress-bar rounded-pill"
                      :style="{ 
                        width: card.progress + '%',
                        background: `linear-gradient(90deg, ${card.color}, ${card.colorSecondary})`
                      }"
                    ></div>
                  </div>
                  <div class="d-flex justify-content-between mt-1">
                    <small class="text-muted">Progress</small>
                    <small class="fw-semibold" :style="{ color: card.color }">{{ card.progress }}%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Charts Row -->
        <div class="row g-4 mb-4">
          <!-- Revenue Chart -->
          <div class="col-xl-8">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0 pb-0">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">
                    <i class="fas fa-chart-area text-primary me-2"></i>
                    รายได้รายเดือน
                  </h5>
                  <div class="btn-group btn-group-sm" role="group">
                    <button 
                      v-for="period in chartPeriods"
                      :key="period.value"
                      type="button" 
                      class="btn"
                      :class="selectedChartPeriod === period.value ? 'btn-primary' : 'btn-outline-primary'"
                      @click="selectedChartPeriod = period.value"
                    >
                      {{ period.label }}
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="position-relative" style="height: 350px;">
                  <canvas ref="revenueChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          <!-- Sales by Category -->
          <div class="col-xl-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0 pb-0">
                <h5 class="mb-0">
                  <i class="fas fa-chart-pie text-success me-2"></i>
                  ยอดขายตามหมวดหมู่
                </h5>
              </div>
              <div class="card-body">
                <div class="position-relative" style="height: 300px;">
                  <canvas ref="categoryChart"></canvas>
                </div>
                <div class="mt-3">
                  <div v-for="(category, index) in categoryData" :key="index" class="d-flex justify-content-between align-items-center mb-2">
                    <div class="d-flex align-items-center">
                      <div 
                        class="rounded-circle me-2"
                        :style="{ backgroundColor: category.color, width: '12px', height: '12px' }"
                      ></div>
                      <span class="small">{{ category.name }}</span>
                    </div>
                    <div class="text-end">
                      <div class="fw-semibold">{{ category.percentage }}%</div>
                      <small class="text-muted">฿{{ category.value.toLocaleString() }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Analytics Tables -->
        <div class="row g-4 mb-4">
          <!-- Top Products -->
          <div class="col-xl-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-trophy text-warning me-2"></i>
                  สินค้าขายดี Top 10
                </h5>
              </div>
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table table-hover mb-0">
                    <thead class="table-light">
                      <tr>
                        <th>อันดับ</th>
                        <th>สินค้า</th>
                        <th class="text-end">ยอดขาย</th>
                        <th class="text-end">รายได้</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, index) in topProducts" :key="index">
                        <td>
                          <span 
                            class="badge rounded-pill"
                            :class="index < 3 ? 'bg-primary' : 'bg-secondary'"
                          >
                            {{ index + 1 }}
                          </span>
                        </td>
                        <td>
                          <div class="d-flex align-items-center">
                            <img 
                              :src="product.image" 
                              :alt="product.name"
                              class="rounded me-2"
                              style="width: 40px; height: 40px; object-fit: cover;"
                            >
                            <div>
                              <div class="fw-semibold">{{ product.name }}</div>
                              <small class="text-muted">{{ product.category }}</small>
                            </div>
                          </div>
                        </td>
                        <td class="text-end fw-semibold">{{ product.sales }}</td>
                        <td class="text-end text-success fw-semibold">฿{{ product.revenue.toLocaleString() }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Transactions -->
          <div class="col-xl-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">
                    <i class="fas fa-clock text-info me-2"></i>
                    ธุรกรรมล่าสุด
                  </h5>
                  <a href="#" class="btn btn-sm btn-outline-primary">ดูทั้งหมด</a>
                </div>
              </div>
              <div class="card-body p-0">
                <div class="list-group list-group-flush">
                  <div v-for="(transaction, index) in recentTransactions" :key="index" class="list-group-item border-0">
                    <div class="d-flex align-items-center">
                      <div 
                        class="rounded-circle d-flex align-items-center justify-content-center me-3"
                        :class="transaction.type === 'sale' ? 'bg-success' : transaction.type === 'refund' ? 'bg-danger' : 'bg-primary'"
                        style="width: 40px; height: 40px;"
                      >
                        <i 
                          :class="transaction.type === 'sale' ? 'fas fa-shopping-cart' : transaction.type === 'refund' ? 'fas fa-undo' : 'fas fa-plus'"
                          class="text-white"
                        ></i>
                      </div>
                      <div class="flex-grow-1">
                        <div class="d-flex justify-content-between align-items-start">
                          <div>
                            <h6 class="mb-1">{{ transaction.description }}</h6>
                            <small class="text-muted">{{ transaction.customer }} • {{ formatTime(transaction.time) }}</small>
                          </div>
                          <div class="text-end">
                            <div 
                              class="fw-semibold"
                              :class="transaction.type === 'refund' ? 'text-danger' : 'text-success'"
                            >
                              {{ transaction.type === 'refund' ? '-' : '+' }}฿{{ transaction.amount.toLocaleString() }}
                            </div>
                            <small 
                              class="badge rounded-pill"
                              :class="transaction.status === 'completed' ? 'bg-success' : transaction.status === 'pending' ? 'bg-warning' : 'bg-danger'"
                            >
                              {{ transaction.status === 'completed' ? 'สำเร็จ' : transaction.status === 'pending' ? 'รอดำเนินการ' : 'ล้มเหลว' }}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Customer Analytics -->
        <div class="row g-4">
          <!-- Customer Growth -->
          <div class="col-xl-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-users text-purple me-2"></i>
                  การเติบโตของลูกค้า
                </h5>
              </div>
              <div class="card-body">
                <div class="position-relative" style="height: 250px;">
                  <canvas ref="customerChart"></canvas>
                </div>
                <div class="row text-center mt-3">
                  <div class="col-6">
                    <h5 class="text-primary mb-1">1,247</h5>
                    <small class="text-muted">ลูกค้าใหม่</small>
                  </div>
                  <div class="col-6">
                    <h5 class="text-success mb-1">89.2%</h5>
                    <small class="text-muted">อัตราการกลับมา</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Regional Sales -->
          <div class="col-xl-8">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-map-marker-alt text-danger me-2"></i>
                  ยอดขายตามภูมิภาค
                </h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-8">
                    <div class="position-relative" style="height: 250px;">
                      <!-- Placeholder for map -->
                      <div class="d-flex align-items-center justify-content-center h-100 bg-light rounded">
                        <div class="text-center text-muted">
                          <i class="fas fa-map fa-3x mb-3"></i>
                          <p>แผนที่ยอดขายตามภูมิภาค</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <h6 class="mb-3">ยอดขายสูงสุด 5 อันดับ</h6>
                    <div v-for="(region, index) in topRegions" :key="index" class="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <div class="fw-semibold">{{ region.name }}</div>
                        <small class="text-muted">{{ region.orders }} ออเดอร์</small>
                      </div>
                      <div class="text-end">
                        <div class="fw-semibold text-success">฿{{ region.revenue.toLocaleString() }}</div>
                        <div class="progress" style="width: 60px; height: 4px;">
                          <div 
                            class="progress-bar bg-primary" 
                            :style="{ width: region.percentage + '%' }"
                          ></div>
                        </div>
                      </div>
                    </div>
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
import { ref, onMounted, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const selectedPeriod = ref('month')
const selectedChartPeriod = ref('6months')

const revenueChart = ref(null)
const categoryChart = ref(null)
const customerChart = ref(null)

const chartPeriods = [
  { value: '3months', label: '3 เดือน' },
  { value: '6months', label: '6 เดือน' },
  { value: '1year', label: '1 ปี' }
]

// Summary Cards Data
const summaryCards = ref([
  {
    title: 'รายได้รวม',
    value: '฿2,847,329',
    trend: 12.5,
    icon: 'fas fa-chart-line',
    color: '#007bff',
    colorSecondary: '#0056b3',
    theme: 'primary',
    progress: 85
  },
  {
    title: 'ยอดขาย',
    value: '1,426',
    trend: 8.2,
    icon: 'fas fa-shopping-cart',
    color: '#28a745',
    colorSecondary: '#1e7e34',
    theme: 'success',
    progress: 72
  },
  {
    title: 'ลูกค้าใหม่',
    value: '342',
    trend: -2.1,
    icon: 'fas fa-users',
    color: '#ffc107',
    colorSecondary: '#e0a800',
    theme: 'warning',
    progress: 58
  },
  {
    title: 'อัตราการแปลง',
    value: '3.24%',
    trend: 5.7,
    icon: 'fas fa-percentage',
    color: '#6f42c1',
    colorSecondary: '#5a32a3',
    theme: 'purple',
    progress: 91
  }
])

// Category Data
const categoryData = ref([
  { name: 'เสื้อผ้า', value: 580000, percentage: 35, color: '#007bff' },
  { name: 'รองเท้า', value: 420000, percentage: 25, color: '#28a745' },
  { name: 'กระเป๋า', value: 350000, percentage: 20, color: '#ffc107' },
  { name: 'เครื่องประดับ', value: 280000, percentage: 15, color: '#dc3545' },
  { name: 'อื่นๆ', value: 80000, percentage: 5, color: '#6c757d' }
])

// Top Products Data
const topProducts = ref([
  {
    name: 'iPhone 15 Pro',
    category: 'เทคโนโลยี',
    sales: 234,
    revenue: 850000,
    image: 'https://via.placeholder.com/40x40/007bff/ffffff?text=IP'
  },
  {
    name: 'Nike Air Max',
    category: 'รองเท้า',
    sales: 189,
    revenue: 420000,
    image: 'https://via.placeholder.com/40x40/28a745/ffffff?text=NK'
  },
  {
    name: 'MacBook Pro',
    category: 'เทคโนโลยี',
    sales: 156,
    revenue: 1200000,
    image: 'https://via.placeholder.com/40x40/6f42c1/ffffff?text=MB'
  },
  {
    name: 'Louis Vuitton Bag',
    category: 'กระเป๋า',
    sales: 143,
    revenue: 680000,
    image: 'https://via.placeholder.com/40x40/ffc107/ffffff?text=LV'
  },
  {
    name: 'Samsung Galaxy S24',
    category: 'เทคโนโลยี',
    sales: 132,
    revenue: 520000,
    image: 'https://via.placeholder.com/40x40/dc3545/ffffff?text=SG'
  }
])

// Recent Transactions
const recentTransactions = ref([
  {
    description: 'คำสั่งซื้อ #12345',
    customer: 'สมชาย ใจดี',
    amount: 15900,
    type: 'sale',
    status: 'completed',
    time: new Date(Date.now() - 10 * 60 * 1000)
  },
  {
    description: 'คืนเงิน #12340',
    customer: 'สมหญิง สวยดี',
    amount: 8500,
    type: 'refund',
    status: 'completed',
    time: new Date(Date.now() - 25 * 60 * 1000)
  },
  {
    description: 'คำสั่งซื้อ #12346',
    customer: 'วิชัย ขยันมาก',
    amount: 22300,
    type: 'sale',
    status: 'pending',
    time: new Date(Date.now() - 45 * 60 * 1000)
  },
  {
    description: 'คำสั่งซื้อ #12347',
    customer: 'สุดา ร่าเริง',
    amount: 9800,
    type: 'sale',
    status: 'completed',
    time: new Date(Date.now() - 60 * 60 * 1000)
  }
])

// Regional Data
const topRegions = ref([
  { name: 'กรุงเทพฯ', orders: 342, revenue: 890000, percentage: 100 },
  { name: 'เชียงใหม่', orders: 156, revenue: 420000, percentage: 47 },
  { name: 'ภูเก็ต', orders: 134, revenue: 380000, percentage: 43 },
  { name: 'ขอนแก่น', orders: 98, revenue: 280000, percentage: 32 },
  { name: 'สงขลา', orders: 87, revenue: 250000, percentage: 28 }
])

const exportReport = () => {
  alert('Export รายงานสำเร็จ!')
}

const formatTime = (time) => {
  const now = new Date()
  const diff = now - time
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  
  if (minutes < 60) {
    return `${minutes} นาทีที่แล้ว`
  } else {
    return `${hours} ชั่วโมงที่แล้ว`
  }
}

const initRevenueChart = () => {
  if (revenueChart.value) {
    new Chart(revenueChart.value, {
      type: 'line',
      data: {
        labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'],
        datasets: [
          {
            label: 'รายได้ (บาท)',
            data: [320000, 450000, 380000, 520000, 480000, 620000, 580000],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            fill: true,
            tension: 0.4
          },
          {
            label: 'เป้าหมาย (บาท)',
            data: [400000, 400000, 400000, 400000, 400000, 400000, 400000],
            borderColor: '#28a745',
            backgroundColor: 'transparent',
            borderDash: [5, 5]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '฿' + value.toLocaleString();
              }
            }
          }
        }
      }
    });
  }
}

const initCategoryChart = () => {
  if (categoryChart.value) {
    new Chart(categoryChart.value, {
      type: 'doughnut',
      data: {
        labels: categoryData.value.map(cat => cat.name),
        datasets: [{
          data: categoryData.value.map(cat => cat.percentage),
          backgroundColor: categoryData.value.map(cat => cat.color),
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}

const initCustomerChart = () => {
  if (customerChart.value) {
    new Chart(customerChart.value, {
      type: 'bar',
      data: {
        labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.'],
        datasets: [{
          label: 'ลูกค้าใหม่',
          data: [185, 220, 165, 280, 245, 190],
          backgroundColor: '#6f42c1',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

onMounted(() => {
  nextTick(() => {
    initRevenueChart()
    initCategoryChart()
    initCustomerChart()
  })
})
</script>

<style scoped>
.text-purple {
  color: #6f42c1 !important;
}

.bg-purple {
  background-color: #6f42c1 !important;
}

.card {
  transition: all 0.3s ease;
  border-radius: 15px !important;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
}

.card-primary:hover {
  box-shadow: 0 15px 35px rgba(0, 123, 255, 0.2) !important;
}

.card-success:hover {
  box-shadow: 0 15px 35px rgba(40, 167, 69, 0.2) !important;
}

.card-warning:hover {
  box-shadow: 0 15px 35px rgba(255, 193, 7, 0.2) !important;
}

.card-purple:hover {
  box-shadow: 0 15px 35px rgba(111, 66, 193, 0.2) !important;
}

.icon-container {
  transition: all 0.3s ease;
}

.card:hover .icon-container {
  transform: scale(1.1);
}

.trend-badge {
  transition: all 0.3s ease;
  font-weight: 600;
}

.table tbody tr:hover {
  background-color: rgba(0, 123, 255, 0.05);
}

.progress {
  background-color: #e9ecef;
  border-radius: 10px;
}

.progress-bar {
  transition: width 0.6s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 0.6s ease forwards;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }

@media (max-width: 768px) {
  .d-flex.gap-2 {
    flex-direction: column;
    gap: 0.5rem !important;
  }
  
  .btn-group {
    width: 100%;
  }
  
  .btn-group .btn {
    font-size: 0.8rem;
  }
  
  .card {
    margin-bottom: 1rem;
  }
}
</style>
