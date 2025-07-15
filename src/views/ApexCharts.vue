<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="mb-0">ApexCharts</h2>
        <p class="text-muted">Modern charting library with interactive and responsive charts</p>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="row">
      <!-- Line Chart -->
      <div class="col-xl-6 col-lg-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Line Chart</h5>
            <small class="text-muted">Sales performance over time</small>
          </div>
          <div class="card-body">
            <apexchart
              type="line"
              height="300"
              :options="lineChartOptions"
              :series="lineChartSeries"
            ></apexchart>
          </div>
        </div>
      </div>

      <!-- Bar Chart -->
      <div class="col-xl-6 col-lg-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Bar Chart</h5>
            <small class="text-muted">Product sales by category</small>
          </div>
          <div class="card-body">
            <apexchart
              type="bar"
              height="300"
              :options="barChartOptions"
              :series="barChartSeries"
            ></apexchart>
          </div>
        </div>
      </div>

      <!-- Pie Chart -->
      <div class="col-xl-6 col-lg-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Pie Chart</h5>
            <small class="text-muted">Market share distribution</small>
          </div>
          <div class="card-body">
            <apexchart
              type="pie"
              height="300"
              :options="pieChartOptions"
              :series="pieChartSeries"
            ></apexchart>
          </div>
        </div>
      </div>

      <!-- Area Chart -->
      <div class="col-xl-6 col-lg-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Area Chart</h5>
            <small class="text-muted">Revenue growth over months</small>
          </div>
          <div class="card-body">
            <apexchart
              type="area"
              height="300"
              :options="areaChartOptions"
              :series="areaChartSeries"
            ></apexchart>
          </div>
        </div>
      </div>

      <!-- Donut Chart -->
      <div class="col-xl-6 col-lg-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Donut Chart</h5>
            <small class="text-muted">Customer segments</small>
          </div>
          <div class="card-body">
            <apexchart
              type="donut"
              height="300"
              :options="donutChartOptions"
              :series="donutChartSeries"
            ></apexchart>
          </div>
        </div>
      </div>

      <!-- Radial Bar Chart -->
      <div class="col-xl-6 col-lg-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Radial Bar Chart</h5>
            <small class="text-muted">Performance metrics</small>
          </div>
          <div class="card-body">
            <apexchart
              type="radialBar"
              height="300"
              :options="radialBarOptions"
              :series="radialBarSeries"
            ></apexchart>
          </div>
        </div>
      </div>

      <!-- Heatmap Chart -->
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Heatmap Chart</h5>
            <small class="text-muted">Activity patterns by day and hour</small>
          </div>
          <div class="card-body">
            <apexchart
              type="heatmap"
              height="350"
              :options="heatmapOptions"
              :series="heatmapSeries"
            ></apexchart>
          </div>
        </div>
      </div>

      <!-- Mixed Chart -->
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Mixed Chart</h5>
            <small class="text-muted">Combined line and column chart</small>
          </div>
          <div class="card-body">
            <apexchart
              height="400"
              :options="mixedChartOptions"
              :series="mixedChartSeries"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

// Register component
const apexchart = VueApexCharts

// Line Chart Configuration
const lineChartSeries = ref([{
  name: 'ยอดขาย',
  data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 155, 178, 200]
}])

const lineChartOptions = ref({
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  colors: ['#667eea'],
  xaxis: {
    categories: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
  },
  title: {
    text: 'ยอดขายรายเดือน',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    },
  }
})

// Bar Chart Configuration
const barChartSeries = ref([{
  name: 'ยอดขาย',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}])

const barChartOptions = ref({
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  colors: ['#f093fb'],
  xaxis: {
    categories: ['เสื้อผ้า', 'รองเท้า', 'กระเป๋า', 'เครื่องประดับ', 'อุปกรณ์กีฬา', 'อิเล็กทรอนิกส์', 'หนังสือ', 'ของเล่น', 'อื่นๆ'],
  },
  yaxis: {
    title: {
      text: 'ยอดขาย (ล้านบาท)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " ล้านบาท"
      }
    }
  }
})

// Pie Chart Configuration
const pieChartSeries = ref([44, 55, 13, 43, 22])
const pieChartOptions = ref({
  chart: {
    type: 'pie',
  },
  labels: ['Desktop', 'Mobile', 'Tablet', 'Smart TV', 'Others'],
  colors: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
})

// Area Chart Configuration
const areaChartSeries = ref([{
  name: 'รายได้',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'ค่าใช้จ่าย',
  data: [11, 32, 45, 32, 34, 52, 41]
}])

const areaChartOptions = ref({
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  colors: ['#667eea', '#f5576c'],
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
})

// Donut Chart Configuration
const donutChartSeries = ref([44, 55, 41, 17, 15])
const donutChartOptions = ref({
  chart: {
    type: 'donut',
  },
  labels: ['ลูกค้าใหม่', 'ลูกค้าเก่า', 'ลูกค้า VIP', 'ลูกค้าพรีเมียม', 'อื่นๆ'],
  colors: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
})

// Radial Bar Configuration
const radialBarSeries = ref([76, 67, 61, 90])
const radialBarOptions = ref({
  chart: {
    height: 390,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        }
      }
    }
  },
  colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
  labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
  legend: {
    show: true,
    floating: true,
    fontSize: '16px',
    position: 'left',
    offsetX: 50,
    offsetY: 10,
    labels: {
      useSeriesColors: true,
    },
    formatter: function(seriesName, opts) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
    },
    itemMargin: {
      horizontal: 3,
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
          show: false
      }
    }
  }]
})

// Heatmap Configuration
const heatmapSeries = ref([
  {
    name: 'จันทร์',
    data: generateData(18, {min: 0, max: 90})
  },
  {
    name: 'อังคาร',
    data: generateData(18, {min: 0, max: 90})
  },
  {
    name: 'พุธ',
    data: generateData(18, {min: 0, max: 90})
  },
  {
    name: 'พฤหัสบดี',
    data: generateData(18, {min: 0, max: 90})
  },
  {
    name: 'ศุกร์',
    data: generateData(18, {min: 0, max: 90})
  },
  {
    name: 'เสาร์',
    data: generateData(18, {min: 0, max: 90})
  },
  {
    name: 'อาทิตย์',
    data: generateData(18, {min: 0, max: 90})
  }
])

function generateData(count, yrange) {
  let i = 0;
  let series = [];
  while (i < count) {
    let x = (i + 1).toString();
    let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}

const heatmapOptions = ref({
  chart: {
    height: 350,
    type: 'heatmap',
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      colorScale: {
        ranges: [{
            from: -30,
            to: 5,
            name: 'ต่ำ',
            color: '#00A100'
          },
          {
            from: 6,
            to: 20,
            name: 'ปานกลาง',
            color: '#128FD9'
          },
          {
            from: 21,
            to: 45,
            name: 'สูง',
            color: '#FFB200'
          },
          {
            from: 46,
            to: 55,
            name: 'สูงมาก',
            color: '#FF0000'
          }
        ]
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1
  },
  title: {
    text: 'กิจกรรมการใช้งานตามวันและชั่วโมง'
  },
})

// Mixed Chart Configuration
const mixedChartSeries = ref([{
  name: 'ยอดขาย',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'เป้าหมาย',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}])

const mixedChartOptions = ref({
  chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'ยอดขายเทียบกับเป้าหมาย'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 ม.ค.', '02 ม.ค.', '03 ม.ค.', '04 ม.ค.', '05 ม.ค.', '06 ม.ค.', '07 ม.ค.', '08 ม.ค.', '09 ม.ค.', '10 ม.ค.', '11 ม.ค.'],
  colors: ['#667eea', '#f5576c'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'ยอดขาย',
    },
  }, {
    opposite: true,
    title: {
      text: 'เป้าหมาย'
    }
  }]
})
</script>

<style scoped>
.card {
  border: 1px solid #e3e6f0;
  border-radius: 0.35rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
}

.card-header {
  background-color: #f8f9fc;
  border-bottom: 1px solid #e3e6f0;
}

.card-header h5 {
  color: #5a5c69;
  font-weight: 600;
}

.text-muted {
  color: #858796 !important;
}
</style>
