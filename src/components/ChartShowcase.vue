<template>
  <div class="container-fluid py-4 px-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-primary mb-4">Chart.js Examples</h1>
        <p class="lead text-muted">ตัวอย่างการใช้งาน Chart.js แบบต่างๆ</p>
      </div>
    </div>

    <!-- Line Chart Section -->
    <div class="row mb-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0"><i class="fas fa-chart-line me-2"></i>Line Chart</h5>
          </div>
          <div class="card-body">
            <canvas ref="lineChart" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-success text-white">
            <h5 class="mb-0"><i class="fas fa-chart-bar me-2"></i>Bar Chart</h5>
          </div>
          <div class="card-body">
            <canvas ref="barChart" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- Pie and Doughnut Charts -->
    <div class="row mb-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-info text-white">
            <h5 class="mb-0"><i class="fas fa-chart-pie me-2"></i>Pie Chart</h5>
          </div>
          <div class="card-body">
            <canvas ref="pieChart" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-warning text-dark">
            <h5 class="mb-0"><i class="fas fa-circle-notch me-2"></i>Doughnut Chart</h5>
          </div>
          <div class="card-body">
            <canvas ref="doughnutChart" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- Area and Radar Charts -->
    <div class="row mb-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-secondary text-white">
            <h5 class="mb-0"><i class="fas fa-chart-area me-2"></i>Area Chart</h5>
          </div>
          <div class="card-body">
            <canvas ref="areaChart" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-danger text-white">
            <h5 class="mb-0"><i class="fas fa-star me-2"></i>Radar Chart</h5>
          </div>
          <div class="card-body">
            <canvas ref="radarChart" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- Mixed Chart -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-dark text-white">
            <h5 class="mb-0"><i class="fas fa-layer-group me-2"></i>Mixed Chart (Line + Bar)</h5>
          </div>
          <div class="card-body">
            <canvas ref="mixedChart" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- Real-time Chart -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-success text-white d-flex justify-content-between align-items-center">
            <h5 class="mb-0"><i class="fas fa-broadcast-tower me-2"></i>Real-time Chart</h5>
            <div>
              <button class="btn btn-sm btn-light" @click="toggleRealtime">
                {{ isRealtime ? 'Stop' : 'Start' }} Real-time
              </button>
            </div>
          </div>
          <div class="card-body">
            <canvas ref="realtimeChart" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Chart from 'chart.js/auto'

// Template refs
const lineChart = ref(null)
const barChart = ref(null)
const pieChart = ref(null)
const doughnutChart = ref(null)
const areaChart = ref(null)
const radarChart = ref(null)
const mixedChart = ref(null)
const realtimeChart = ref(null)

// Chart instances
let lineChartInstance = null
let barChartInstance = null
let pieChartInstance = null
let doughnutChartInstance = null
let areaChartInstance = null
let radarChartInstance = null
let mixedChartInstance = null
let realtimeChartInstance = null

// Real-time variables
const isRealtime = ref(false)
let realtimeInterval = null

// Sample data
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const salesData = [65, 59, 80, 81, 56, 55]
const revenueData = [28, 48, 40, 19, 86, 27]

onMounted(() => {
  createLineChart()
  createBarChart()
  createPieChart()
  createDoughnutChart()
  createAreaChart()
  createRadarChart()
  createMixedChart()
  createRealtimeChart()
})

onUnmounted(() => {
  // Cleanup charts
  if (lineChartInstance) lineChartInstance.destroy()
  if (barChartInstance) barChartInstance.destroy()
  if (pieChartInstance) pieChartInstance.destroy()
  if (doughnutChartInstance) doughnutChartInstance.destroy()
  if (areaChartInstance) areaChartInstance.destroy()
  if (radarChartInstance) radarChartInstance.destroy()
  if (mixedChartInstance) mixedChartInstance.destroy()
  if (realtimeChartInstance) realtimeChartInstance.destroy()
  
  if (realtimeInterval) {
    clearInterval(realtimeInterval)
  }
})

function createLineChart() {
  const ctx = lineChart.value.getContext('2d')
  lineChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Sales',
        data: salesData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Sales Data'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}

function createBarChart() {
  const ctx = barChart.value.getContext('2d')
  barChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label: 'Revenue',
        data: revenueData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Revenue'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}

function createPieChart() {
  const ctx = pieChart.value.getContext('2d')
  pieChartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Desktop', 'Mobile', 'Tablet', 'Smart TV'],
      datasets: [{
        data: [45, 35, 15, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Device Usage'
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  })
}

function createDoughnutChart() {
  const ctx = doughnutChart.value.getContext('2d')
  doughnutChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Marketing', 'Development', 'Design', 'Support'],
      datasets: [{
        data: [30, 40, 20, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Team Distribution'
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  })
}

function createAreaChart() {
  const ctx = areaChart.value.getContext('2d')
  areaChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Website Traffic',
        data: [120, 190, 300, 500, 200, 300],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Website Traffic Over Time'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}

function createRadarChart() {
  const ctx = radarChart.value.getContext('2d')
  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
      datasets: [{
        label: 'Product A',
        data: [80, 90, 70, 85, 75],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
      }, {
        label: 'Product B',
        data: [70, 85, 90, 75, 80],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Product Comparison'
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  })
}

function createMixedChart() {
  const ctx = mixedChart.value.getContext('2d')
  mixedChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        type: 'line',
        label: 'Temperature (°C)',
        data: [25, 28, 32, 35, 30, 27],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y1',
        tension: 0.1
      }, {
        type: 'bar',
        label: 'Rainfall (mm)',
        data: [50, 45, 30, 20, 35, 55],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        yAxisID: 'y'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Weather Data (Mixed Chart)'
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
        },
      }
    }
  })
}

function createRealtimeChart() {
  const ctx = realtimeChart.value.getContext('2d')
  const initialData = Array.from({length: 10}, (_, i) => Math.random() * 100)
  
  realtimeChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({length: 10}, (_, i) => `${i + 1}s`),
      datasets: [{
        label: 'Real-time Data',
        data: initialData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Real-time Data Stream'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      },
      animation: {
        duration: 0
      }
    }
  })
}

function toggleRealtime() {
  isRealtime.value = !isRealtime.value
  
  if (isRealtime.value) {
    realtimeInterval = setInterval(() => {
      const chart = realtimeChartInstance
      const newValue = Math.random() * 100
      
      // Remove first data point and add new one
      chart.data.datasets[0].data.shift()
      chart.data.datasets[0].data.push(newValue)
      
      // Update labels
      const currentTime = new Date().toLocaleTimeString()
      chart.data.labels.shift()
      chart.data.labels.push(currentTime.split(':').slice(1).join(':'))
      
      chart.update('none')
    }, 1000)
  } else {
    if (realtimeInterval) {
      clearInterval(realtimeInterval)
      realtimeInterval = null
    }
  }
}
</script>

<style scoped>
canvas {
  max-height: 400px;
}
</style>
