<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="mb-0">
          <i class="fas fa-calendar-alt me-2"></i>
          DateTime Picker Examples
        </h2>
        <p class="text-muted">Beautiful and interactive date time picker components</p>
      </div>
    </div>
        <div class="row">
      <!-- Basic Date Picker -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-calendar me-2"></i>
              Basic Date Picker
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- Simple Date -->
              <div class="col-12">
                <label for="basicDate" class="form-label">เลือกวันที่</label>
                <flat-pickr
                  id="basicDate"
                  v-model="basicDate"
                  :config="basicDateConfig"
                  class="form-control"
                  placeholder="เลือกวันที่..."
                ></flat-pickr>
                <div class="form-text">
                  Selected: {{ basicDate || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- Date Range -->
              <div class="col-12">
                <label for="dateRange" class="form-label">ช่วงวันที่</label>
                <flat-pickr
                  id="dateRange"
                  v-model="dateRange"
                  :config="dateRangeConfig"
                  class="form-control"
                  placeholder="เลือกช่วงวันที่..."
                ></flat-pickr>
                <div class="form-text">
                  Selected: {{ dateRange || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- Thai Locale -->
              <div class="col-12">
                <label for="thaiDate" class="form-label">วันที่ (ภาษาไทย)</label>
                <flat-pickr
                  id="thaiDate"
                  v-model="thaiDate"
                  :config="thaiDateConfig"
                  class="form-control"
                  placeholder="เลือกวันที่..."
                ></flat-pickr>
                <div class="form-text">
                  Selected: {{ thaiDate || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- With Icons -->
              <div class="col-12">
                <label for="iconDate" class="form-label">วันที่พร้อมไอคอน</label>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fas fa-calendar-alt"></i>
                  </span>
                  <flat-pickr
                    id="iconDate"
                    v-model="iconDate"
                    :config="iconDateConfig"
                    class="form-control"
                    placeholder="เลือกวันที่..."
                  ></flat-pickr>
                </div>
                <div class="form-text">
                  Selected: {{ iconDate || 'ยังไม่ได้เลือก' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Time Picker -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-clock me-2"></i>
              Time Picker
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- Simple Time -->
              <div class="col-12">
                <label for="basicTime" class="form-label">เลือกเวลา</label>
                <flat-pickr
                  id="basicTime"
                  v-model="basicTime"
                  :config="timeConfig"
                  class="form-control"
                  placeholder="เลือกเวลา..."
                ></flat-pickr>
                <div class="form-text">
                  Selected: {{ basicTime || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- 24 Hour Format -->
              <div class="col-12">
                <label for="time24" class="form-label">เวลา 24 ชั่วโมง</label>
                <flat-pickr
                  id="time24"
                  v-model="time24"
                  :config="time24Config"
                  class="form-control"
                  placeholder="เลือกเวลา..."
                ></flat-pickr>
                <div class="form-text">
                  Selected: {{ time24 || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- DateTime -->
              <div class="col-12">
                <label for="dateTime" class="form-label">วันที่และเวลา</label>
                <flat-pickr
                  id="dateTime"
                  v-model="dateTime"
                  :config="dateTimeConfig"
                  class="form-control"
                  placeholder="เลือกวันที่และเวลา..."
                ></flat-pickr>
                <div class="form-text">
                  Selected: {{ dateTime || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- Time with Icon -->
              <div class="col-12">
                <label for="iconTime" class="form-label">เวลาพร้อมไอคอน</label>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fas fa-clock"></i>
                  </span>
                  <flat-pickr
                    id="iconTime"
                    v-model="iconTime"
                    :config="iconTimeConfig"
                    class="form-control"
                    placeholder="เลือกเวลา..."
                  ></flat-pickr>
                </div>
                <div class="form-text">
                  Selected: {{ iconTime || 'ยังไม่ได้เลือก' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Advanced Features -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-cog me-2"></i>
              Advanced Features
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- Min/Max Date -->
              <div class="col-12">
                <label for="minMaxDate" class="form-label">วันที่ (จำกัดช่วง)</label>
                <flat-pickr
                  id="minMaxDate"
                  v-model="minMaxDate"
                  :config="minMaxDateConfig"
                  class="form-control"
                  placeholder="เลือกวันที่..."
                ></flat-pickr>
                <div class="form-text">
                  จำกัดเฉพาะ 30 วันข้างหน้า - Selected: {{ minMaxDate || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- Disabled Weekends -->
              <div class="col-12">
                <label for="noWeekends" class="form-label">วันที่ (ไม่รวมเสาร์-อาทิตย์)</label>
                <flat-pickr
                  id="noWeekends"
                  v-model="noWeekends"
                  :config="noWeekendsConfig"
                  class="form-control"
                  placeholder="เลือกวันที่..."
                ></flat-pickr>
                <div class="form-text">
                  ไม่สามารถเลือกเสาร์-อาทิตย์ได้ - Selected: {{ noWeekends || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- Multiple Dates -->
              <div class="col-12">
                <label for="multipleDates" class="form-label">เลือกหลายวัน</label>
                <flat-pickr
                  id="multipleDates"
                  v-model="multipleDates"
                  :config="multipleDatesConfig"
                  class="form-control"
                  placeholder="เลือกหลายวัน..."
                ></flat-pickr>
                <div class="form-text">
                  Selected: {{ multipleDates || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- Inline Calendar -->
              <div class="col-12">
                <label class="form-label">ปฏิทินแบบ Inline</label>
                <flat-pickr
                  v-model="inlineDate"
                  :config="inlineConfig"
                ></flat-pickr>
                <div class="form-text mt-2">
                  Selected: {{ inlineDate || 'ยังไม่ได้เลือก' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Custom Styling -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-palette me-2"></i>
              Custom Styling
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- Dark Theme -->
              <div class="col-12">
                <label for="darkDate" class="form-label">Dark Theme</label>
                <flat-pickr
                  id="darkDate"
                  v-model="darkDate"
                  :config="darkDateConfig"
                  class="form-control dark-picker"
                  placeholder="เลือกวันที่..."
                ></flat-pickr>
                <div class="form-text">
                  Selected: {{ darkDate || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- Custom Colors -->
              <div class="col-12">
                <label for="customDate" class="form-label">Custom Colors</label>
                <flat-pickr
                  id="customDate"
                  v-model="customDate"
                  :config="customDateConfig"
                  class="form-control custom-picker"
                  placeholder="เลือกวันที่..."
                ></flat-pickr>
                <div class="form-text">
                  Selected: {{ customDate || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- Birthday Picker -->
              <div class="col-12">
                <label for="birthdayDate" class="form-label">วันเกิด</label>
                <flat-pickr
                  id="birthdayDate"
                  v-model="birthdayDate"
                  :config="birthdayConfig"
                  class="form-control birthday-picker"
                  placeholder="เลือกวันเกิด..."
                ></flat-pickr>
                <div class="form-text">
                  Selected: {{ birthdayDate || 'ยังไม่ได้เลือก' }}
                </div>
              </div>

              <!-- Event Date -->
              <div class="col-12">
                <label for="eventDate" class="form-label">วันที่จัดงาน</label>
                <div class="input-group">
                  <span class="input-group-text bg-primary text-white">
                    <i class="fas fa-calendar-check"></i>
                  </span>
                  <flat-pickr
                    id="eventDate"
                    v-model="eventDate"
                    :config="eventDateConfig"
                    class="form-control event-picker"
                    placeholder="เลือกวันที่จัดงาน..."
                  ></flat-pickr>
                </div>
                <div class="form-text">
                  Selected: {{ eventDate || 'ยังไม่ได้เลือก' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Real-world Examples -->
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
              <!-- Booking Form -->
              <div class="col-lg-4">
                <div class="border rounded p-3 bg-light">
                  <h6 class="mb-3">
                    <i class="fas fa-bed me-2"></i>
                    Hotel Booking
                  </h6>
                  <form @submit.prevent="submitBooking">
                    <div class="mb-3">
                      <label class="form-label">Check-in Date</label>
                      <flat-pickr
                        v-model="bookingCheckin"
                        :config="bookingCheckinConfig"
                        class="form-control"
                        placeholder="เลือกวันที่เช็คอิน"
                      ></flat-pickr>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Check-out Date</label>
                      <flat-pickr
                        v-model="bookingCheckout"
                        :config="bookingCheckoutConfig"
                        class="form-control"
                        placeholder="เลือกวันที่เช็คเอาท์"
                      ></flat-pickr>
                    </div>
                    <button type="submit" class="btn btn-primary btn-sm">
                      <i class="fas fa-search me-1"></i>
                      ค้นหาห้องพัก
                    </button>
                  </form>
                </div>
              </div>

              <!-- Meeting Scheduler -->
              <div class="col-lg-4">
                <div class="border rounded p-3 bg-light">
                  <h6 class="mb-3">
                    <i class="fas fa-users me-2"></i>
                    Meeting Scheduler
                  </h6>
                  <form @submit.prevent="submitMeeting">
                    <div class="mb-3">
                      <label class="form-label">Meeting Date</label>
                      <flat-pickr
                        v-model="meetingDate"
                        :config="meetingDateConfig"
                        class="form-control"
                        placeholder="เลือกวันที่ประชุม"
                      ></flat-pickr>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <flat-pickr
                        v-model="meetingStartTime"
                        :config="meetingTimeConfig"
                        class="form-control"
                        placeholder="เลือกเวลาเริ่ม"
                      ></flat-pickr>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <flat-pickr
                        v-model="meetingEndTime"
                        :config="meetingTimeConfig"
                        class="form-control"
                        placeholder="เลือกเวลาสิ้นสุด"
                      ></flat-pickr>
                    </div>
                    <button type="submit" class="btn btn-success btn-sm">
                      <i class="fas fa-calendar-plus me-1"></i>
                      สร้างการประชุม
                    </button>
                  </form>
                </div>
              </div>

              <!-- Report Generator -->
              <div class="col-lg-4">
                <div class="border rounded p-3 bg-light">
                  <h6 class="mb-3">
                    <i class="fas fa-chart-bar me-2"></i>
                    Report Generator
                  </h6>
                  <form @submit.prevent="submitReport">
                    <div class="mb-3">
                      <label class="form-label">Report Period</label>
                      <flat-pickr
                        v-model="reportPeriod"
                        :config="reportPeriodConfig"
                        class="form-control"
                        placeholder="เลือกช่วงเวลา"
                      ></flat-pickr>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Report Type</label>
                      <select class="form-select" v-model="reportType">
                        <option value="">เลือกประเภทรายงาน</option>
                        <option value="sales">รายงานยอดขาย</option>
                        <option value="inventory">รายงานสต็อก</option>
                        <option value="customer">รายงานลูกค้า</option>
                      </select>
                    </div>
                    <button type="submit" class="btn btn-info btn-sm">
                      <i class="fas fa-file-download me-1"></i>
                      สร้างรายงาน
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Selected Data Display -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-database me-2"></i>
              Selected Data
            </h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h6>Basic Pickers</h6>
                <pre class="bg-light p-3 rounded"><code>{{ JSON.stringify({
                  basicDate,
                  dateRange,
                  thaiDate,
                  iconDate,
                  basicTime,
                  time24,
                  dateTime,
                  iconTime
                }, null, 2) }}</code></pre>
              </div>
              <div class="col-md-6">
                <h6>Advanced Pickers</h6>
                <pre class="bg-light p-3 rounded"><code>{{ JSON.stringify({
                  minMaxDate,
                  noWeekends,
                  multipleDates,
                  inlineDate,
                  darkDate,
                  customDate,
                  birthdayDate,
                  eventDate
                }, null, 2) }}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'
import { Thai } from 'flatpickr/dist/l10n/th.js'
import { swalUtils } from '../utils/swal'

// Basic Date Picker Data
const basicDate = ref('')
const dateRange = ref('')
const thaiDate = ref('')
const iconDate = ref('')

// Time Picker Data
const basicTime = ref('')
const time24 = ref('')
const dateTime = ref('')
const iconTime = ref('')

// Advanced Features Data
const minMaxDate = ref('')
const noWeekends = ref('')
const multipleDates = ref('')
const inlineDate = ref('')

// Custom Styling Data
const darkDate = ref('')
const customDate = ref('')
const birthdayDate = ref('')
const eventDate = ref('')

// Real-world Examples Data
const bookingCheckin = ref('')
const bookingCheckout = ref('')
const meetingDate = ref('')
const meetingStartTime = ref('')
const meetingEndTime = ref('')
const reportPeriod = ref('')
const reportType = ref('')

// Basic Date Configurations
const basicDateConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  allowInput: true
})

const dateRangeConfig = ref({
  mode: 'range',
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  allowInput: true
})

const thaiDateConfig = ref({
  locale: Thai,
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  allowInput: true
})

const iconDateConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  allowInput: true
})

// Time Configurations
const timeConfig = ref({
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
  time_24hr: false,
  allowInput: true
})

const time24Config = ref({
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
  time_24hr: true,
  allowInput: true
})

const dateTimeConfig = ref({
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  altInput: true,
  altFormat: 'j F Y \\เ\\ว\\ล\\า H:i',
  time_24hr: false,
  allowInput: true
})

const iconTimeConfig = ref({
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
  time_24hr: false,
  allowInput: true
})

// Advanced Configurations
const minMaxDateConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  minDate: 'today',
  maxDate: new Date().fp_incr(30),
  allowInput: true
})

const noWeekendsConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  disable: [
    function(date) {
      return (date.getDay() === 0 || date.getDay() === 6)
    }
  ],
  allowInput: true
})

const multipleDatesConfig = ref({
  mode: 'multiple',
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  allowInput: true
})

const inlineConfig = ref({
  inline: true,
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y'
})

// Custom Styling Configurations
const darkDateConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  theme: 'dark',
  allowInput: true
})

const customDateConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  allowInput: true
})

const birthdayConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  maxDate: 'today',
  defaultDate: '1990-01-01',
  allowInput: true
})

const eventDateConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  minDate: 'today',
  allowInput: true
})

// Real-world Configurations
const bookingCheckinConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  minDate: 'today',
  allowInput: true,
  onChange: function(selectedDates) {
    if (selectedDates[0]) {
      bookingCheckoutConfig.value.minDate = new Date(selectedDates[0].getTime() + 24*60*60*1000)
    }
  }
})

const bookingCheckoutConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  minDate: 'today',
  allowInput: true
})

const meetingDateConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  minDate: 'today',
  disable: [
    function(date) {
      return (date.getDay() === 0 || date.getDay() === 6)
    }
  ],
  allowInput: true
})

const meetingTimeConfig = ref({
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
  time_24hr: false,
  minuteIncrement: 15,
  allowInput: true
})

const reportPeriodConfig = ref({
  mode: 'range',
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  maxDate: 'today',
  allowInput: true
})

// Form Submit Methods
const submitBooking = () => {
  if (bookingCheckin.value && bookingCheckout.value) {
    swalUtils.success('สำเร็จ!', `ค้นหาห้องพักสำหรับ ${bookingCheckin.value} ถึง ${bookingCheckout.value}`)
  } else {
    swalUtils.warning('กรุณาเลือกวันที่', 'กรุณาเลือกวันที่เช็คอินและเช็คเอาท์')
  }
}

const submitMeeting = () => {
  if (meetingDate.value && meetingStartTime.value && meetingEndTime.value) {
    swalUtils.success('สำเร็จ!', `สร้างการประชุมวันที่ ${meetingDate.value} เวลา ${meetingStartTime.value} - ${meetingEndTime.value}`)
  } else {
    swalUtils.warning('กรุณากรอกข้อมูล', 'กรุณาเลือกวันที่และเวลาการประชุม')
  }
}

const submitReport = () => {
  if (reportPeriod.value && reportType.value) {
    swalUtils.success('สำเร็จ!', `สร้างรายงาน${reportType.value}สำหรับช่วง ${reportPeriod.value}`)
  } else {
    swalUtils.warning('กรุณากรอกข้อมูล', 'กรุณาเลือกช่วงเวลาและประเภทรายงาน')
  }
}
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

.card-header h5 {
  color: #5a5c69;
  font-weight: 600;
}

.form-label {
  font-weight: 600;
  color: #5a5c69;
}

/* Custom Flatpickr Styling */
:deep(.flatpickr-calendar) {
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border: 1px solid #e3e6f0;
}

:deep(.flatpickr-day.selected) {
  background: #667eea;
  border-color: #667eea;
}

:deep(.flatpickr-day.selected:hover) {
  background: #5a6fd8;
  border-color: #5a6fd8;
}

:deep(.flatpickr-day:hover) {
  background: #f8f9fc;
  border-color: #667eea;
}

:deep(.flatpickr-current-month) {
  color: #5a5c69;
}

:deep(.flatpickr-weekday) {
  color: #858796;
  font-weight: 600;
}

/* Dark Theme */
.dark-picker :deep(.flatpickr-calendar) {
  background: #2d3748;
  border-color: #4a5568;
}

.dark-picker :deep(.flatpickr-day) {
  color: #e2e8f0;
}

.dark-picker :deep(.flatpickr-day:hover) {
  background: #4a5568;
  border-color: #667eea;
}

.dark-picker :deep(.flatpickr-current-month .flatpickr-monthDropdown-months) {
  background: #2d3748;
  color: #e2e8f0;
}

/* Custom Colors */
.custom-picker :deep(.flatpickr-day.selected) {
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-color: #667eea;
}

.custom-picker :deep(.flatpickr-day.selected:hover) {
  background: linear-gradient(45deg, #5a6fd8, #6a4190);
}

/* Birthday Picker */
.birthday-picker :deep(.flatpickr-day.selected) {
  background: #f093fb;
  border-color: #f093fb;
}

.birthday-picker :deep(.flatpickr-day.selected:hover) {
  background: #ee82f0;
}

/* Event Picker */
.event-picker :deep(.flatpickr-day.selected) {
  background: #43e97b;
  border-color: #43e97b;
}

.event-picker :deep(.flatpickr-day.selected:hover) {
  background: #38d970;
}

/* Input Group Styling */
.input-group-text.bg-primary {
  border-color: #667eea;
}

/* Form Control Focus */
.form-control:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

/* Inline Calendar Styling */
:deep(.flatpickr-calendar.inline) {
  position: relative;
  top: auto;
  left: auto;
  display: block;
  width: 100%;
  max-width: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  :deep(.flatpickr-calendar) {
    font-size: 0.9rem;
  }
  
  :deep(.flatpickr-day) {
    height: 35px;
    line-height: 35px;
  }
}

pre code {
  font-size: 0.75rem;
  color: #5a5c69;
}

.btn:focus {
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}
</style>
