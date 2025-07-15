<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="mb-0">
          <i class="fas fa-calendar-alt me-2"></i>
          Day.js Examples
        </h2>
        <p class="text-muted">เครื่องมือจัดการวันที่และเวลาที่เบาและรวดเร็ว</p>
      </div>
    </div>

    <!-- Current Date & Time -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card bg-gradient-primary text-white">
          <div class="card-body text-center">
            <h3 class="mb-1">{{ currentDateTime.format('dddd, DD MMMM YYYY') }}</h3>
            <h4 class="mb-0">{{ currentDateTime.format('HH:mm:ss') }}</h4>
            <small>{{ currentDateTime.format('A') }}</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Basic Operations -->
    <div class="row mb-4">
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-play me-2"></i>
              Basic Operations
            </h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">เลือกวันที่</label>
              <flat-pickr
                v-model="selectedDate"
                :config="datePickerConfig"
                class="form-control"
                placeholder="เลือกวันที่..."
                @change="updateSelectedDate"
              ></flat-pickr>
            </div>
            
            <div class="table-responsive">
              <table class="table table-borderless table-sm">
                <tbody>
                  <tr>
                    <td><strong>วันที่เลือก:</strong></td>
                    <td>{{ selectedDayjs.format('DD/MM/YYYY') }}</td>
                  </tr>
                  <tr>
                    <td><strong>วันในสัปดาห์:</strong></td>
                    <td>{{ getDayName(selectedDayjs.day()) }}</td>
                  </tr>
                  <tr>
                    <td><strong>เดือน:</strong></td>
                    <td>{{ getMonthName(selectedDayjs.month()) }}</td>
                  </tr>
                  <tr>
                    <td><strong>ปี พ.ศ.:</strong></td>
                    <td>{{ selectedDayjs.year() + 543 }}</td>
                  </tr>
                  <tr>
                    <td><strong>วันที่ในปี:</strong></td>
                    <td>{{ selectedDayjs.dayOfYear() }}</td>
                  </tr>
                  <tr>
                    <td><strong>สัปดาห์ในปี:</strong></td>
                    <td>{{ selectedDayjs.week() }}</td>
                  </tr>
                  <tr>
                    <td><strong>Unix Timestamp:</strong></td>
                    <td>{{ selectedDayjs.unix() }}</td>
                  </tr>
                  <tr>
                    <td><strong>ISO String:</strong></td>
                    <td>{{ selectedDayjs.toISOString().substring(0, 10) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-calculator me-2"></i>
              Date Calculations
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-6">
                <label class="form-label">เพิ่ม/ลบ</label>
                <select class="form-select" v-model="calculation.operation">
                  <option value="add">เพิ่ม (+)</option>
                  <option value="subtract">ลบ (-)</option>
                </select>
              </div>
              <div class="col-6">
                <label class="form-label">จำนวน</label>
                <input 
                  type="number" 
                  class="form-control" 
                  v-model="calculation.amount"
                  @input="calculateDate"
                >
              </div>
              <div class="col-12">
                <label class="form-label">หน่วย</label>
                <select class="form-select" v-model="calculation.unit" @change="calculateDate">
                  <option value="day">วัน</option>
                  <option value="week">สัปดาห์</option>
                  <option value="month">เดือน</option>
                  <option value="year">ปี</option>
                  <option value="hour">ชั่วโมง</option>
                  <option value="minute">นาที</option>
                </select>
              </div>
            </div>

            <div class="mt-3">
              <div class="alert alert-info">
                <strong>ผลลัพธ์:</strong><br>
                {{ calculatedDate.format('DD/MM/YYYY HH:mm:ss') }}<br>
                <small>{{ getDayName(calculatedDate.day()) }}, {{ getMonthName(calculatedDate.month()) }} {{ calculatedDate.year() + 543 }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Date Formatting -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-text-width me-2"></i>
              Date Formatting Examples
            </h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <h6>รูปแบบพื้นฐาน</h6>
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Format</th>
                        <th>ผลลัพธ์</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="format in basicFormats" :key="format.pattern">
                        <td><code>{{ format.pattern }}</code></td>
                        <td>{{ now.format(format.pattern) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-6">
                <h6>รูปแบบภาษาไทย</h6>
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>รูปแบบ</th>
                        <th>ผลลัพธ์</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="format in thaiFormats" :key="format.name">
                        <td>{{ format.name }}</td>
                        <td>{{ format.value }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Date Comparison -->
    <div class="row mb-4">
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-balance-scale me-2"></i>
              Date Comparison
            </h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">วันที่ที่ 1</label>
              <flat-pickr
                v-model="comparison.date1"
                :config="datePickerConfig"
                class="form-control"
                placeholder="เลือกวันที่ที่ 1..."
                @change="compareDate"
              ></flat-pickr>
            </div>
            <div class="mb-3">
              <label class="form-label">วันที่ที่ 2</label>
              <flat-pickr
                v-model="comparison.date2"
                :config="datePickerConfig"
                class="form-control"
                placeholder="เลือกวันที่ที่ 2..."
                @change="compareDate"
              ></flat-pickr>
            </div>

            <div v-if="comparison.result">
              <div class="alert alert-primary">
                <h6>ผลการเปรียบเทียบ:</h6>
                <ul class="mb-0">
                  <li><strong>ความต่าง:</strong> {{ comparison.result.diff }} วัน</li>
                  <li><strong>วันที่ 1 อยู่ก่อน:</strong> {{ comparison.result.isBefore ? 'ใช่' : 'ไม่' }}</li>
                  <li><strong>วันที่ 1 อยู่หลัง:</strong> {{ comparison.result.isAfter ? 'ใช่' : 'ไม่' }}</li>
                  <li><strong>วันเดียวกัน:</strong> {{ comparison.result.isSame ? 'ใช่' : 'ไม่' }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-clock me-2"></i>
              Relative Time
            </h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">เลือกวันที่เพื่อดูเวลาสัมพัทธ์</label>
              <flat-pickr
                v-model="relativeDate"
                :config="datePickerConfig"
                class="form-control"
                placeholder="เลือกวันที่..."
                @change="updateRelativeTime"
              ></flat-pickr>
            </div>

            <div class="table-responsive">
              <table class="table table-borderless table-sm">
                <tbody>
                  <tr>
                    <td><strong>จากวันนี้:</strong></td>
                    <td>{{ getRelativeTime(relativeDayjs) }}</td>
                  </tr>
                  <tr>
                    <td><strong>ถึงวันนี้:</strong></td>
                    <td>{{ getRelativeTimeTo(relativeDayjs) }}</td>
                  </tr>
                  <tr>
                    <td><strong>ความต่าง (วัน):</strong></td>
                    <td>{{ Math.abs(relativeDayjs.diff(now, 'day')) }} วัน</td>
                  </tr>
                  <tr>
                    <td><strong>ความต่าง (สัปดาห์):</strong></td>
                    <td>{{ Math.abs(relativeDayjs.diff(now, 'week')) }} สัปดาห์</td>
                  </tr>
                  <tr>
                    <td><strong>ความต่าง (เดือน):</strong></td>
                    <td>{{ Math.abs(relativeDayjs.diff(now, 'month')) }} เดือน</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Date Validation -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-check-circle me-2"></i>
              Date Validation & Utilities
            </h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4 mb-3">
                <h6>ปีอธิกสุรทิน</h6>
                <div class="input-group">
                  <input 
                    type="number" 
                    class="form-control" 
                    v-model="leapYear"
                    placeholder="ปี ค.ศ."
                  >
                  <button class="btn btn-outline-primary" @click="checkLeapYear">
                    ตรวจสอบ
                  </button>
                </div>
                <small v-if="leapYearResult !== null" class="text-muted">
                  ปี {{ leapYear }} {{ leapYearResult ? 'เป็น' : 'ไม่เป็น' }}ปีอธิกสุรทิน
                </small>
              </div>

              <div class="col-lg-4 mb-3">
                <h6>วันในเดือน</h6>
                <div class="row">
                  <div class="col-6">
                    <select class="form-select" v-model="daysInMonthData.month" @change="checkDaysInMonth">
                      <option v-for="(month, index) in monthNames" :key="index" :value="index">
                        {{ month }}
                      </option>
                    </select>
                  </div>
                  <div class="col-6">
                    <input 
                      type="number" 
                      class="form-control" 
                      v-model="daysInMonthData.year"
                      placeholder="ปี"
                      @input="checkDaysInMonth"
                    >
                  </div>
                </div>
                <small v-if="daysInMonthResult" class="text-muted">
                  {{ monthNames[daysInMonthData.month] }} {{ daysInMonthData.year }} มี {{ daysInMonthResult }} วัน
                </small>
              </div>

              <div class="col-lg-4 mb-3">
                <h6>เขตเวลา</h6>
                <div class="table-responsive">
                  <table class="table table-sm">
                    <tbody>
                      <tr>
                        <td><strong>UTC:</strong></td>
                        <td>{{ now.utc().format('HH:mm:ss') }}</td>
                      </tr>
                      <tr>
                        <td><strong>ท้องถิ่น:</strong></td>
                        <td>{{ now.format('HH:mm:ss') }}</td>
                      </tr>
                      <tr>
                        <td><strong>Offset:</strong></td>
                        <td>UTC{{ now.format('Z') }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Real-world Examples -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-star me-2"></i>
              Real-world Examples
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-4">
              <!-- Age Calculator -->
              <div class="col-lg-4">
                <div class="card border-primary">
                  <div class="card-header bg-primary text-white">
                    <h6 class="mb-0">
                      <i class="fas fa-birthday-cake me-2"></i>
                      คำนวณอายุ
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">วันเกิด</label>
                      <flat-pickr
                        v-model="birthDate"
                        :config="birthdayConfig"
                        class="form-control"
                        placeholder="เลือกวันเกิด..."
                        @change="calculateAge"
                      ></flat-pickr>
                    </div>
                    <div v-if="age" class="alert alert-primary">
                      <strong>อายุ:</strong> {{ age.years }} ปี {{ age.months }} เดือน {{ age.days }} วัน<br>
                      <small>รวม {{ age.totalDays }} วัน</small>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Working Days -->
              <div class="col-lg-4">
                <div class="card border-success">
                  <div class="card-header bg-success text-white">
                    <h6 class="mb-0">
                      <i class="fas fa-briefcase me-2"></i>
                      วันทำงาน
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 mb-2">
                        <label class="form-label">วันเริ่มต้น</label>
                        <flat-pickr
                          v-model="workingDays.start"
                          :config="datePickerConfig"
                          class="form-control"
                          placeholder="เลือกวันเริ่มต้น..."
                          @change="calculateWorkingDays"
                        ></flat-pickr>
                      </div>
                      <div class="col-12 mb-2">
                        <label class="form-label">วันสิ้นสุด</label>
                        <flat-pickr
                          v-model="workingDays.end"
                          :config="datePickerConfig"
                          class="form-control"
                          placeholder="เลือกวันสิ้นสุด..."
                          @change="calculateWorkingDays"
                        ></flat-pickr>
                      </div>
                    </div>
                    <div v-if="workingDaysResult" class="alert alert-success">
                      <strong>วันทำงาน:</strong> {{ workingDaysResult.workingDays }} วัน<br>
                      <strong>วันหยุด:</strong> {{ workingDaysResult.weekends }} วัน<br>
                      <small>รวม {{ workingDaysResult.total }} วัน</small>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Time Until Event -->
              <div class="col-lg-4">
                <div class="card border-warning">
                  <div class="card-header bg-warning text-dark">
                    <h6 class="mb-0">
                      <i class="fas fa-calendar-check me-2"></i>
                      เหลือเวลา
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">วันที่เป้าหมาย</label>
                      <flat-pickr
                        v-model="targetDate"
                        :config="datePickerConfig"
                        class="form-control"
                        placeholder="เลือกวันที่เป้าหมาย..."
                        @change="calculateTimeUntil"
                      ></flat-pickr>
                    </div>
                    <div v-if="timeUntil" class="alert alert-warning">
                      <div v-if="timeUntil.isPast">
                        <strong>ผ่านมาแล้ว:</strong><br>
                        {{ timeUntil.days }} วัน {{ timeUntil.hours }} ชั่วโมง
                      </div>
                      <div v-else>
                        <strong>เหลืออีก:</strong><br>
                        {{ timeUntil.days }} วัน {{ timeUntil.hours }} ชั่วโมง {{ timeUntil.minutes }} นาที
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

    <!-- Custom Format Builder -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-tools me-2"></i>
              Custom Format Builder
            </h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <label class="form-label">สร้างรูปแบบของคุณเอง</label>
                <input 
                  type="text" 
                  class="form-control font-monospace" 
                  v-model="customFormat"
                  placeholder="เช่น: DD/MM/YYYY HH:mm:ss"
                >
                <small class="text-muted">
                  ใช้: YYYY (ปี), MM (เดือน), DD (วัน), HH (ชั่วโมง), mm (นาที), ss (วินาที)
                </small>
              </div>
              <div class="col-lg-6">
                <label class="form-label">ผลลัพธ์</label>
                <div class="p-3 bg-light rounded font-monospace">
                  {{ customFormatResult }}
                </div>
              </div>
            </div>

            <div class="mt-3">
              <h6>รูปแบบที่ใช้บ่อย</h6>
              <div class="d-flex flex-wrap gap-2">
                <button 
                  v-for="preset in formatPresets" 
                  :key="preset.pattern"
                  class="btn btn-sm btn-outline-secondary"
                  @click="customFormat = preset.pattern"
                >
                  {{ preset.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'
import { Thai } from 'flatpickr/dist/l10n/th.js'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import duration from 'dayjs/plugin/duration'

// Extend dayjs with plugins
dayjs.extend(weekOfYear)
dayjs.extend(dayOfYear)
dayjs.extend(isLeapYear)
dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(duration)

// Set Thai locale
dayjs.locale('th')

// Flatpickr configurations
const datePickerConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  allowInput: true,
  locale: Thai
})

const birthdayConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  maxDate: 'today',
  allowInput: true,
  locale: Thai
})

// Reactive data
const currentDateTime = ref(dayjs())
const now = ref(dayjs())
const selectedDate = ref(dayjs().format('YYYY-MM-DD'))
const selectedDayjs = ref(dayjs())

// Calculation
const calculation = ref({
  operation: 'add',
  amount: 1,
  unit: 'day'
})

// Comparison
const comparison = ref({
  date1: dayjs().format('YYYY-MM-DD'),
  date2: dayjs().add(1, 'day').format('YYYY-MM-DD'),
  result: null
})

// Relative time
const relativeDate = ref(dayjs().subtract(1, 'day').format('YYYY-MM-DD'))
const relativeDayjs = ref(dayjs().subtract(1, 'day'))

// Leap year
const leapYear = ref(2024)
const leapYearResult = ref(null)

// Days in month
const daysInMonthData = ref({
  month: dayjs().month(),
  year: dayjs().year()
})
const daysInMonthResult = ref(null)

// Real-world examples
const birthDate = ref('')
const age = ref(null)

const workingDays = ref({
  start: dayjs().format('YYYY-MM-DD'),
  end: dayjs().add(30, 'day').format('YYYY-MM-DD')
})
const workingDaysResult = ref(null)

const targetDate = ref(dayjs().add(30, 'day').format('YYYY-MM-DD'))
const timeUntil = ref(null)

// Custom format
const customFormat = ref('DD/MM/YYYY HH:mm:ss')

// Computed properties
const calculatedDate = computed(() => {
  if (calculation.value.operation === 'add') {
    return selectedDayjs.value.add(calculation.value.amount, calculation.value.unit)
  } else {
    return selectedDayjs.value.subtract(calculation.value.amount, calculation.value.unit)
  }
})

const customFormatResult = computed(() => {
  try {
    return now.value.format(customFormat.value)
  } catch (error) {
    return 'รูปแบบไม่ถูกต้อง'
  }
})

const thaiFormats = computed(() => [
  {
    name: 'วันที่แบบไทย',
    value: `${selectedDayjs.value.date()} ${getMonthName(selectedDayjs.value.month())} ${selectedDayjs.value.year() + 543}`
  },
  {
    name: 'วันที่แบบยาว',
    value: `วัน${getDayName(selectedDayjs.value.day())}ที่ ${selectedDayjs.value.date()} ${getMonthName(selectedDayjs.value.month())} พ.ศ. ${selectedDayjs.value.year() + 543}`
  },
  {
    name: 'เวลาแบบไทย',
    value: `${selectedDayjs.value.hour()} นาฬิกา ${selectedDayjs.value.minute()} นาที`
  },
  {
    name: 'วันที่ย่อ',
    value: `${selectedDayjs.value.date()}/${selectedDayjs.value.month() + 1}/${selectedDayjs.value.year() + 543}`
  }
])

// Data
const dayNames = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
const monthNames = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
]

const basicFormats = [
  { pattern: 'YYYY-MM-DD', description: 'ISO Date' },
  { pattern: 'DD/MM/YYYY', description: 'Thai Format' },
  { pattern: 'MM/DD/YYYY', description: 'US Format' },
  { pattern: 'HH:mm:ss', description: '24-hour time' },
  { pattern: 'hh:mm:ss A', description: '12-hour time' },
  { pattern: 'YYYY-MM-DD HH:mm:ss', description: 'Full datetime' },
  { pattern: 'dddd, MMMM Do YYYY', description: 'Long format' },
  { pattern: 'MMM DD, YYYY', description: 'Medium format' }
]

const formatPresets = [
  { name: 'ไทยมาตรฐาน', pattern: 'DD/MM/YYYY' },
  { name: 'เวลาเต็ม', pattern: 'DD/MM/YYYY HH:mm:ss' },
  { name: 'ISO', pattern: 'YYYY-MM-DD' },
  { name: 'US Style', pattern: 'MM/DD/YYYY' },
  { name: 'เวลาเท่านั้น', pattern: 'HH:mm:ss' },
  { name: 'แบบยาว', pattern: 'dddd, DD MMMM YYYY' },
  { name: 'แบบสั้น', pattern: 'DD MMM YY' }
]

// Methods
const getDayName = (dayIndex) => dayNames[dayIndex]
const getMonthName = (monthIndex) => monthNames[monthIndex]

const updateSelectedDate = () => {
  selectedDayjs.value = dayjs(selectedDate.value)
  calculateDate()
}

const calculateDate = () => {
  // Calculation is handled by computed property
}

const compareDate = () => {
  const date1 = dayjs(comparison.value.date1)
  const date2 = dayjs(comparison.value.date2)
  
  comparison.value.result = {
    diff: Math.abs(date1.diff(date2, 'day')),
    isBefore: date1.isBefore(date2),
    isAfter: date1.isAfter(date2),
    isSame: date1.isSame(date2, 'day')
  }
}

const updateRelativeTime = () => {
  relativeDayjs.value = dayjs(relativeDate.value)
}

const getRelativeTime = (date) => {
  const diff = date.diff(now.value, 'day')
  if (diff > 0) {
    return `อีก ${diff} วัน`
  } else if (diff < 0) {
    return `${Math.abs(diff)} วันที่แล้ว`
  } else {
    return 'วันนี้'
  }
}

const getRelativeTimeTo = (date) => {
  const diff = now.value.diff(date, 'day')
  if (diff > 0) {
    return `${diff} วันที่แล้ว`
  } else if (diff < 0) {
    return `อีก ${Math.abs(diff)} วัน`
  } else {
    return 'วันนี้'
  }
}

const checkLeapYear = () => {
  leapYearResult.value = dayjs(`${leapYear.value}-01-01`).isLeapYear()
}

const checkDaysInMonth = () => {
  if (daysInMonthData.value.year) {
    const date = dayjs().year(daysInMonthData.value.year).month(daysInMonthData.value.month)
    daysInMonthResult.value = date.daysInMonth()
  }
}

const calculateAge = () => {
  if (birthDate.value) {
    const birth = dayjs(birthDate.value)
    const today = dayjs()
    
    const years = today.diff(birth, 'year')
    const months = today.diff(birth.add(years, 'year'), 'month')
    const days = today.diff(birth.add(years, 'year').add(months, 'month'), 'day')
    const totalDays = today.diff(birth, 'day')
    
    age.value = { years, months, days, totalDays }
  }
}

const calculateWorkingDays = () => {
  if (workingDays.value.start && workingDays.value.end) {
    const start = dayjs(workingDays.value.start)
    const end = dayjs(workingDays.value.end)
    
    let workingDaysCount = 0
    let weekendsCount = 0
    let current = start
    
    // ใช้ isBefore หรือ isSame แทน isSameOrBefore
    while (current.isBefore(end) || current.isSame(end, 'day')) {
      if (current.day() === 0 || current.day() === 6) { // Sunday = 0, Saturday = 6
        weekendsCount++
      } else {
        workingDaysCount++
      }
      current = current.add(1, 'day')
    }
    
    workingDaysResult.value = {
      workingDays: workingDaysCount,
      weekends: weekendsCount,
      total: workingDaysCount + weekendsCount
    }
  }
}

const calculateTimeUntil = () => {
  if (targetDate.value) {
    const target = dayjs(targetDate.value)
    const now = dayjs()
    
    const isPast = target.isBefore(now)
    const diff = isPast ? now.diff(target) : target.diff(now)
    const duration = dayjs.duration(diff)
    
    timeUntil.value = {
      isPast,
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes()
    }
  }
}

// Timer for current time
let timer = null

onMounted(() => {
  // Update current time every second
  timer = setInterval(() => {
    currentDateTime.value = dayjs()
    now.value = dayjs()
  }, 1000)
  
  // Initialize calculations
  updateSelectedDate()
  compareDate()
  updateRelativeTime()
  checkDaysInMonth()
  calculateWorkingDays()
  calculateTimeUntil()
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.card {
  border: 1px solid #e3e6f0;
  border-radius: 0.35rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
  transition: all 0.3s;
}

.card:hover {
  box-shadow: 0 0.25rem 2rem 0 rgba(58, 59, 69, 0.2);
}

.card-header {
  background-color: #f8f9fc;
  border-bottom: 1px solid #e3e6f0;
}

.card-header h5, .card-header h6 {
  color: #5a5c69;
  font-weight: 600;
}

.bg-gradient-primary {
  background: linear-gradient(45deg, #667eea, #764ba2);
}

.form-control:focus,
.form-select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.table th {
  border-top: none;
  font-weight: 600;
  color: #5a5c69;
}

.font-monospace {
  font-family: 'Courier New', monospace;
}

.alert {
  border: none;
  border-radius: 0.35rem;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  border-color: #6c757d;
}

code {
  background-color: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}
</style>
