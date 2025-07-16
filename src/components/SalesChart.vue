<template>
  <div class="col-lg-8 mb-4">
    <div class="card">
      <div class="card-header bg-transparent">
        <h5 class="card-title mb-0">ยอดขายรายเดือน</h5>
      </div>
      <div class="card-body">
        <div class="position-relative" style="height: 300px;">
          <canvas ref="salesChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const salesChart = ref(null)

const initChart = () => {
  if (salesChart.value) {
    new Chart(salesChart.value, {
      type: 'line',
      data: {
        labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.'],
        datasets: [{
          label: 'ยอดขาย (บาท)',
          data: [120000, 190000, 150000, 220000, 180000, 250000],
          borderColor: '#667eea',
          backgroundColor: 'rgba(102, 126, 234, 0.1)',
          fill: true,
          tension: 0.4
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

onMounted(() => {
  initChart()
})
</script>
