<template>
  <div class="col-lg-4 mb-4">
    <div class="card">
      <div class="card-header bg-transparent">
        <h5 class="card-title mb-0">สัดส่วนผลิตภัณฑ์</h5>
      </div>
      <div class="card-body">
        <div class="position-relative" style="height: 300px;">
          <canvas ref="productChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const productChart = ref(null)

const initChart = () => {
  if (productChart.value) {
    new Chart(productChart.value, {
      type: 'doughnut',
      data: {
        labels: ['เสื้อผ้า', 'รองเท้า', 'กระเป๋า', 'เครื่องประดับ'],
        datasets: [{
          data: [35, 25, 20, 20],
          backgroundColor: [
            '#667eea',
            '#56ab2f',
            '#f093fb',
            '#4facfe'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
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
