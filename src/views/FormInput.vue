<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="mb-0">Form Input Examples</h2>
        <p class="text-muted">Comprehensive form input components and validation examples</p>
      </div>
    </div>

    <!-- Form Examples -->
    <div class="row">
      <!-- Basic Form Controls -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Basic Form Controls</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitBasicForm">
              <!-- Text Input -->
              <div class="mb-3">
                <label for="basicText" class="form-label">Text Input</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="basicText" 
                  v-model="basicForm.text"
                  placeholder="กรอกข้อความ"
                >
                <div class="form-text">ข้อความช่วยเหลือสำหรับ input นี้</div>
              </div>

              <!-- Email Input -->
              <div class="mb-3">
                <label for="basicEmail" class="form-label">Email</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="basicEmail" 
                  v-model="basicForm.email"
                  placeholder="name@example.com"
                >
              </div>

              <!-- Password Input -->
              <div class="mb-3">
                <label for="basicPassword" class="form-label">Password</label>
                <div class="input-group">
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    class="form-control" 
                    id="basicPassword" 
                    v-model="basicForm.password"
                    placeholder="รหัสผ่าน"
                  >
                  <button 
                    class="btn btn-outline-secondary" 
                    type="button" 
                    @click="showPassword = !showPassword"
                  >
                    <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                </div>
              </div>

              <!-- Textarea -->
              <div class="mb-3">
                <label for="basicTextarea" class="form-label">Textarea</label>
                <textarea 
                  class="form-control" 
                  id="basicTextarea" 
                  rows="3"
                  v-model="basicForm.description"
                  placeholder="กรอกรายละเอียด..."
                ></textarea>
              </div>

              <!-- Select -->
              <div class="mb-3">
                <label for="basicSelect" class="form-label">Select</label>
                <select class="form-select" id="basicSelect" v-model="basicForm.category">
                  <option value="">เลือกหมวดหมู่</option>
                  <option value="technology">เทคโนโลยี</option>
                  <option value="business">ธุรกิจ</option>
                  <option value="education">การศึกษา</option>
                  <option value="health">สุขภาพ</option>
                </select>
              </div>

              <!-- Multiple Select -->
              <div class="mb-3">
                <label for="basicMultiSelect" class="form-label">Multiple Select</label>
                <select class="form-select" id="basicMultiSelect" multiple v-model="basicForm.skills">
                  <option value="javascript">JavaScript</option>
                  <option value="vue">Vue.js</option>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="node">Node.js</option>
                </select>
                <div class="form-text">กด Ctrl (หรือ Cmd) เพื่อเลือกหลายตัวเลือก</div>
              </div>

              <button type="submit" class="btn btn-primary">Submit Basic Form</button>
            </form>
          </div>
        </div>
      </div>

      <!-- Advanced Form Controls -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Advanced Form Controls</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitAdvancedForm">
              <!-- Number Input -->
              <div class="mb-3">
                <label for="advancedNumber" class="form-label">Number Input</label>
                <input 
                  type="number" 
                  class="form-control" 
                  id="advancedNumber" 
                  v-model.number="advancedForm.age"
                  min="18" 
                  max="100"
                  placeholder="อายุ"
                >
              </div>

              <!-- Range Input -->
              <div class="mb-3">
                <label for="advancedRange" class="form-label">Range Input ({{ advancedForm.rating }})</label>
                <input 
                  type="range" 
                  class="form-range" 
                  id="advancedRange" 
                  v-model.number="advancedForm.rating"
                  min="1" 
                  max="10"
                >
              </div>

              <!-- Date Input -->
              <div class="mb-3">
                <label for="advancedDate" class="form-label">Date Input</label>
                <flat-pickr
                  id="advancedDate"
                  v-model="advancedForm.birthDate"
                  :config="datePickerConfig"
                  class="form-control"
                  placeholder="เลือกวันที่..."
                ></flat-pickr>
              </div>

              <!-- Time Input -->
              <div class="mb-3">
                <label for="advancedTime" class="form-label">Time Input</label>
                <input 
                  type="time" 
                  class="form-control" 
                  id="advancedTime" 
                  v-model="advancedForm.appointmentTime"
                >
              </div>

              <!-- Color Input -->
              <div class="mb-3">
                <label for="advancedColor" class="form-label">Color Input</label>
                <input 
                  type="color" 
                  class="form-control form-control-color" 
                  id="advancedColor" 
                  v-model="advancedForm.favoriteColor"
                  title="เลือกสีที่ชอบ"
                >
              </div>

              <!-- File Input -->
              <div class="mb-3">
                <label for="advancedFile" class="form-label">File Input</label>
                <input 
                  type="file" 
                  class="form-control" 
                  id="advancedFile" 
                  @change="handleFileChange"
                  multiple
                  accept="image/*"
                >
              </div>

              <!-- URL Input -->
              <div class="mb-3">
                <label for="advancedUrl" class="form-label">URL Input</label>
                <input 
                  type="url" 
                  class="form-control" 
                  id="advancedUrl" 
                  v-model="advancedForm.website"
                  placeholder="https://example.com"
                >
              </div>

              <button type="submit" class="btn btn-success">Submit Advanced Form</button>
            </form>
          </div>
        </div>
      </div>

      <!-- Checkboxes and Radio Buttons -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Checkboxes & Radio Buttons</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitChoiceForm">
              <!-- Single Checkbox -->
              <div class="mb-3">
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    id="singleCheck" 
                    v-model="choiceForm.agree"
                  >
                  <label class="form-check-label" for="singleCheck">
                    ฉันยอมรับข้อกำหนดและเงื่อนไข
                  </label>
                </div>
              </div>

              <!-- Multiple Checkboxes -->
              <div class="mb-3">
                <label class="form-label">ความสนใจ (เลือกได้หลายข้อ)</label>
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    id="interest1" 
                    value="programming"
                    v-model="choiceForm.interests"
                  >
                  <label class="form-check-label" for="interest1">โปรแกรมมิ่ง</label>
                </div>
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    id="interest2" 
                    value="design"
                    v-model="choiceForm.interests"
                  >
                  <label class="form-check-label" for="interest2">ดีไซน์</label>
                </div>
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    id="interest3" 
                    value="marketing"
                    v-model="choiceForm.interests"
                  >
                  <label class="form-check-label" for="interest3">การตลาด</label>
                </div>
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    id="interest4" 
                    value="writing"
                    v-model="choiceForm.interests"
                  >
                  <label class="form-check-label" for="interest4">การเขียน</label>
                </div>
              </div>

              <!-- Radio Buttons -->
              <div class="mb-3">
                <label class="form-label">เพศ</label>
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="radio" 
                    id="genderMale" 
                    value="male"
                    v-model="choiceForm.gender"
                  >
                  <label class="form-check-label" for="genderMale">ชาย</label>
                </div>
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="radio" 
                    id="genderFemale" 
                    value="female"
                    v-model="choiceForm.gender"
                  >
                  <label class="form-check-label" for="genderFemale">หญิง</label>
                </div>
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="radio" 
                    id="genderOther" 
                    value="other"
                    v-model="choiceForm.gender"
                  >
                  <label class="form-check-label" for="genderOther">อื่นๆ</label>
                </div>
              </div>

              <!-- Inline Radio Buttons -->
              <div class="mb-3">
                <label class="form-label">ระดับความพึงพอใจ</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input 
                      class="form-check-input" 
                      type="radio" 
                      id="satisfaction1" 
                      value="1"
                      v-model="choiceForm.satisfaction"
                    >
                    <label class="form-check-label" for="satisfaction1">1</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input 
                      class="form-check-input" 
                      type="radio" 
                      id="satisfaction2" 
                      value="2"
                      v-model="choiceForm.satisfaction"
                    >
                    <label class="form-check-label" for="satisfaction2">2</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input 
                      class="form-check-input" 
                      type="radio" 
                      id="satisfaction3" 
                      value="3"
                      v-model="choiceForm.satisfaction"
                    >
                    <label class="form-check-label" for="satisfaction3">3</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input 
                      class="form-check-input" 
                      type="radio" 
                      id="satisfaction4" 
                      value="4"
                      v-model="choiceForm.satisfaction"
                    >
                    <label class="form-check-label" for="satisfaction4">4</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input 
                      class="form-check-input" 
                      type="radio" 
                      id="satisfaction5" 
                      value="5"
                      v-model="choiceForm.satisfaction"
                    >
                    <label class="form-check-label" for="satisfaction5">5</label>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-info">Submit Choice Form</button>
            </form>
          </div>
        </div>
      </div>

      <!-- Form Validation -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Form Validation</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitValidationForm" novalidate>
              <!-- Required Field -->
              <div class="mb-3">
                <label for="validationName" class="form-label">ชื่อ *</label>
                <input 
                  type="text" 
                  class="form-control"
                  :class="{ 'is-invalid': validationErrors.name, 'is-valid': validationForm.name && !validationErrors.name }"
                  id="validationName" 
                  v-model="validationForm.name"
                  @blur="validateName"
                  placeholder="กรอกชื่อของคุณ"
                  required
                >
                <div class="invalid-feedback" v-if="validationErrors.name">
                  {{ validationErrors.name }}
                </div>
                <div class="valid-feedback" v-else-if="validationForm.name">
                  ดูดี!
                </div>
              </div>

              <!-- Email Validation -->
              <div class="mb-3">
                <label for="validationEmail" class="form-label">อีเมล *</label>
                <input 
                  type="email" 
                  class="form-control"
                  :class="{ 'is-invalid': validationErrors.email, 'is-valid': validationForm.email && !validationErrors.email }"
                  id="validationEmail" 
                  v-model="validationForm.email"
                  @blur="validateEmail"
                  placeholder="name@example.com"
                  required
                >
                <div class="invalid-feedback" v-if="validationErrors.email">
                  {{ validationErrors.email }}
                </div>
                <div class="valid-feedback" v-else-if="validationForm.email">
                  อีเมลถูกต้อง!
                </div>
              </div>

              <!-- Phone Validation -->
              <div class="mb-3">
                <label for="validationPhone" class="form-label">เบอร์โทรศัพท์ *</label>
                <input 
                  type="tel" 
                  class="form-control"
                  :class="{ 'is-invalid': validationErrors.phone, 'is-valid': validationForm.phone && !validationErrors.phone }"
                  id="validationPhone" 
                  v-model="validationForm.phone"
                  @blur="validatePhone"
                  placeholder="08X-XXX-XXXX"
                  required
                >
                <div class="invalid-feedback" v-if="validationErrors.phone">
                  {{ validationErrors.phone }}
                </div>
                <div class="valid-feedback" v-else-if="validationForm.phone">
                  เบอร์โทรถูกต้อง!
                </div>
              </div>

              <!-- Password Confirmation -->
              <div class="mb-3">
                <label for="validationPassword" class="form-label">รหัสผ่าน *</label>
                <input 
                  type="password" 
                  class="form-control"
                  :class="{ 'is-invalid': validationErrors.password, 'is-valid': validationForm.password && !validationErrors.password }"
                  id="validationPassword" 
                  v-model="validationForm.password"
                  @blur="validatePassword"
                  placeholder="รหัสผ่าน (อย่างน้อย 8 ตัวอักษร)"
                  required
                >
                <div class="invalid-feedback" v-if="validationErrors.password">
                  {{ validationErrors.password }}
                </div>
                <div class="valid-feedback" v-else-if="validationForm.password">
                  รหัสผ่านแข็งแรง!
                </div>
              </div>

              <div class="mb-3">
                <label for="validationConfirmPassword" class="form-label">ยืนยันรหัสผ่าน *</label>
                <input 
                  type="password" 
                  class="form-control"
                  :class="{ 'is-invalid': validationErrors.confirmPassword, 'is-valid': validationForm.confirmPassword && !validationErrors.confirmPassword }"
                  id="validationConfirmPassword" 
                  v-model="validationForm.confirmPassword"
                  @blur="validateConfirmPassword"
                  placeholder="ยืนยันรหัสผ่าน"
                  required
                >
                <div class="invalid-feedback" v-if="validationErrors.confirmPassword">
                  {{ validationErrors.confirmPassword }}
                </div>
                <div class="valid-feedback" v-else-if="validationForm.confirmPassword">
                  รหัสผ่านตรงกัน!
                </div>
              </div>

              <button type="submit" class="btn btn-warning" :disabled="!isValidationFormValid">
                Submit Validation Form
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Input Groups -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Input Groups</h5>
          </div>
          <div class="card-body">
            <!-- Input with Icon -->
            <div class="mb-3">
              <label for="inputWithIcon" class="form-label">Search</label>
              <div class="input-group">
                <span class="input-group-text">
                  <i class="fas fa-search"></i>
                </span>
                <input 
                  type="text" 
                  class="form-control" 
                  id="inputWithIcon"
                  v-model="inputGroups.search"
                  placeholder="ค้นหา..."
                >
              </div>
            </div>

            <!-- Input with Button -->
            <div class="mb-3">
              <label for="inputWithButton" class="form-label">Email Subscription</label>
              <div class="input-group">
                <input 
                  type="email" 
                  class="form-control" 
                  id="inputWithButton"
                  v-model="inputGroups.email"
                  placeholder="อีเมลของคุณ"
                >
                <button class="btn btn-primary" type="button" @click="subscribeEmail">Subscribe</button>
              </div>
            </div>

            <!-- Input with Dropdown -->
            <div class="mb-3">
              <label for="inputWithDropdown" class="form-label">Price with Currency</label>
              <div class="input-group">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  {{ inputGroups.currency }}
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" @click="inputGroups.currency = 'THB'">THB</a></li>
                  <li><a class="dropdown-item" href="#" @click="inputGroups.currency = 'USD'">USD</a></li>
                  <li><a class="dropdown-item" href="#" @click="inputGroups.currency = 'EUR'">EUR</a></li>
                </ul>
                <input 
                  type="number" 
                  class="form-control" 
                  id="inputWithDropdown"
                  v-model.number="inputGroups.price"
                  placeholder="0.00"
                >
              </div>
            </div>

            <!-- Multiple Addons -->
            <div class="mb-3">
              <label for="multipleAddons" class="form-label">Website URL</label>
              <div class="input-group">
                <span class="input-group-text">https://</span>
                <input 
                  type="text" 
                  class="form-control" 
                  id="multipleAddons"
                  v-model="inputGroups.website"
                  placeholder="example"
                >
                <span class="input-group-text">.com</span>
              </div>
            </div>

            <!-- Sizing -->
            <div class="mb-3">
              <label class="form-label">Input Sizes</label>
              <div class="input-group input-group-sm mb-2">
                <span class="input-group-text">Small</span>
                <input type="text" class="form-control" placeholder="Small input">
              </div>
              <div class="input-group mb-2">
                <span class="input-group-text">Default</span>
                <input type="text" class="form-control" placeholder="Default input">
              </div>
              <div class="input-group input-group-lg">
                <span class="input-group-text">Large</span>
                <input type="text" class="form-control" placeholder="Large input">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Labels -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Floating Labels</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitFloatingForm">
              <div class="form-floating mb-3">
                <input 
                  type="text" 
                  class="form-control" 
                  id="floatingName" 
                  v-model="floatingForm.name"
                  placeholder="ชื่อของคุณ"
                >
                <label for="floatingName">ชื่อของคุณ</label>
              </div>

              <div class="form-floating mb-3">
                <input 
                  type="email" 
                  class="form-control" 
                  id="floatingEmail" 
                  v-model="floatingForm.email"
                  placeholder="name@example.com"
                >
                <label for="floatingEmail">อีเมลแอดเดรส</label>
              </div>

              <div class="form-floating mb-3">
                <select 
                  class="form-select" 
                  id="floatingSelect" 
                  v-model="floatingForm.country"
                >
                  <option value="">เลือกประเทศ</option>
                  <option value="TH">ไทย</option>
                  <option value="US">สหรัฐอเมริกา</option>
                  <option value="JP">ญี่ปุ่น</option>
                  <option value="KR">เกาหลีใต้</option>
                </select>
                <label for="floatingSelect">ประเทศ</label>
              </div>

              <div class="form-floating mb-3">
                <textarea 
                  class="form-control" 
                  id="floatingTextarea" 
                  v-model="floatingForm.message"
                  placeholder="ข้อความของคุณ"
                  style="height: 100px"
                ></textarea>
                <label for="floatingTextarea">ข้อความ</label>
              </div>

              <button type="submit" class="btn btn-secondary">Submit Floating Form</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Data Display -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Form Data Display</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <h6>Basic Form</h6>
                <pre class="bg-light p-2 rounded"><code>{{ JSON.stringify(basicForm, null, 2) }}</code></pre>
              </div>
              <div class="col-md-3">
                <h6>Advanced Form</h6>
                <pre class="bg-light p-2 rounded"><code>{{ JSON.stringify(advancedForm, null, 2) }}</code></pre>
              </div>
              <div class="col-md-3">
                <h6>Choice Form</h6>
                <pre class="bg-light p-2 rounded"><code>{{ JSON.stringify(choiceForm, null, 2) }}</code></pre>
              </div>
              <div class="col-md-3">
                <h6>Validation Form</h6>
                <pre class="bg-light p-2 rounded"><code>{{ JSON.stringify(validationForm, null, 2) }}</code></pre>
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

// Flatpickr configuration
const datePickerConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  allowInput: true,
  locale: Thai
})

// Form Data
const basicForm = ref({
  text: '',
  email: '',
  password: '',
  description: '',
  category: '',
  skills: []
})

const advancedForm = ref({
  age: null,
  rating: 5,
  birthDate: '',
  appointmentTime: '',
  favoriteColor: '#667eea',
  website: '',
  files: []
})

const choiceForm = ref({
  agree: false,
  interests: [],
  gender: '',
  satisfaction: ''
})

const validationForm = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const floatingForm = ref({
  name: '',
  email: '',
  country: '',
  message: ''
})

const inputGroups = ref({
  search: '',
  email: '',
  currency: 'THB',
  price: null,
  website: ''
})

// UI State
const showPassword = ref(false)

// Validation
const validationErrors = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

// Form Submission Methods
const submitBasicForm = () => {
  console.log('Basic Form Data:', basicForm.value)
  swalUtils.success('สำเร็จ!', 'ส่ง Basic Form เรียบร้อยแล้ว')
}

const submitAdvancedForm = () => {
  console.log('Advanced Form Data:', advancedForm.value)
  swalUtils.success('สำเร็จ!', 'ส่ง Advanced Form เรียบร้อยแล้ว')
}

const submitChoiceForm = () => {
  console.log('Choice Form Data:', choiceForm.value)
  swalUtils.success('สำเร็จ!', 'ส่ง Choice Form เรียบร้อยแล้ว')
}

const submitValidationForm = () => {
  if (isValidationFormValid.value) {
    console.log('Validation Form Data:', validationForm.value)
    swalUtils.success('สำเร็จ!', 'ส่ง Validation Form เรียบร้อยแล้ว')
  } else {
    swalUtils.error('ข้อผิดพลาด!', 'กรุณาตรวจสอบข้อมูลให้ถูกต้อง')
  }
}

const submitFloatingForm = () => {
  console.log('Floating Form Data:', floatingForm.value)
  swalUtils.success('สำเร็จ!', 'ส่ง Floating Form เรียบร้อยแล้ว')
}

// File Handling
const handleFileChange = (event) => {
  advancedForm.value.files = Array.from(event.target.files)
  console.log('Selected files:', advancedForm.value.files)
}

// Input Group Methods
const subscribeEmail = () => {
  if (inputGroups.value.email) {
    swalUtils.success('สมัครสมาชิกสำเร็จ!', `ส่งข้อมูลไปที่ ${inputGroups.value.email} แล้ว`)
    inputGroups.value.email = ''
  } else {
    swalUtils.warning('กรุณากรอกอีเมล', 'ต้องกรอกอีเมลก่อนสมัครสมาชิก')
  }
}

// Validation Methods
const validateName = () => {
  const name = validationForm.value.name.trim()
  if (!name) {
    validationErrors.value.name = 'กรุณากรอกชื่อ'
  } else if (name.length < 2) {
    validationErrors.value.name = 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'
  } else {
    validationErrors.value.name = ''
  }
}

const validateEmail = () => {
  const email = validationForm.value.email.trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!email) {
    validationErrors.value.email = 'กรุณากรอกอีเมล'
  } else if (!emailRegex.test(email)) {
    validationErrors.value.email = 'รูปแบบอีเมลไม่ถูกต้อง'
  } else {
    validationErrors.value.email = ''
  }
}

const validatePhone = () => {
  const phone = validationForm.value.phone.trim()
  const phoneRegex = /^[0-9]{10}$/
  
  if (!phone) {
    validationErrors.value.phone = 'กรุณากรอกเบอร์โทรศัพท์'
  } else if (!phoneRegex.test(phone.replace(/[-\s]/g, ''))) {
    validationErrors.value.phone = 'เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก'
  } else {
    validationErrors.value.phone = ''
  }
}

const validatePassword = () => {
  const password = validationForm.value.password
  
  if (!password) {
    validationErrors.value.password = 'กรุณากรอกรหัสผ่าน'
  } else if (password.length < 8) {
    validationErrors.value.password = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร'
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    validationErrors.value.password = 'รหัสผ่านต้องมีตัวพิมพ์เล็ก พิมพ์ใหญ่ และตัวเลข'
  } else {
    validationErrors.value.password = ''
  }
  
  // Re-validate confirm password if it exists
  if (validationForm.value.confirmPassword) {
    validateConfirmPassword()
  }
}

const validateConfirmPassword = () => {
  const password = validationForm.value.password
  const confirmPassword = validationForm.value.confirmPassword
  
  if (!confirmPassword) {
    validationErrors.value.confirmPassword = 'กรุณายืนยันรหัสผ่าน'
  } else if (password !== confirmPassword) {
    validationErrors.value.confirmPassword = 'รหัสผ่านไม่ตรงกัน'
  } else {
    validationErrors.value.confirmPassword = ''
  }
}

// Computed Properties
const isValidationFormValid = computed(() => {
  return validationForm.value.name && 
         validationForm.value.email && 
         validationForm.value.phone && 
         validationForm.value.password && 
         validationForm.value.confirmPassword &&
         !validationErrors.value.name &&
         !validationErrors.value.email &&
         !validationErrors.value.phone &&
         !validationErrors.value.password &&
         !validationErrors.value.confirmPassword
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

.card-header h5 {
  color: #5a5c69;
  font-weight: 600;
}

.form-label {
  font-weight: 600;
  color: #5a5c69;
}

.form-control:focus,
.form-select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.form-check-input:checked {
  background-color: #667eea;
  border-color: #667eea;
}

.form-check-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.25rem rgba(102, 126, 234, 0.25);
}

.input-group-text {
  background-color: #f8f9fc;
  border-color: #d1d3e2;
}

.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label {
  color: #667eea;
}

pre code {
  font-size: 0.75rem;
  color: #5a5c69;
}

.btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.invalid-feedback {
  display: block;
}

.valid-feedback {
  display: block;
}
</style>
