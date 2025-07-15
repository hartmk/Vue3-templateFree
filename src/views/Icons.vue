<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="mb-0">Icon Examples</h2>
        <p class="text-muted">Font Awesome icons และ Bootstrap icons สำหรับใช้งานในโปรเจค</p>
      </div>
    </div>

    <!-- Font Awesome Icons -->
    <div class="row">
      <!-- Solid Icons -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-icons me-2"></i>
              Font Awesome Solid Icons
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- Navigation Icons -->
              <div class="col-12">
                <h6 class="text-primary mb-3">
                  <i class="fas fa-compass me-2"></i>
                  Navigation Icons
                </h6>
              </div>
              <div class="col-md-4 col-sm-6" v-for="icon in navigationIcons" :key="icon.class">
                <div class="icon-item p-3 text-center border rounded hover-shadow" @click="copyIconClass(icon.class)">
                  <i :class="icon.class" class="icon-display mb-2"></i>
                  <div class="icon-name">{{ icon.name }}</div>
                  <small class="text-muted">{{ icon.class }}</small>
                </div>
              </div>

              <!-- Action Icons -->
              <div class="col-12 mt-4">
                <h6 class="text-success mb-3">
                  <i class="fas fa-play me-2"></i>
                  Action Icons
                </h6>
              </div>
              <div class="col-md-4 col-sm-6" v-for="icon in actionIcons" :key="icon.class">
                <div class="icon-item p-3 text-center border rounded hover-shadow" @click="copyIconClass(icon.class)">
                  <i :class="icon.class" class="icon-display mb-2"></i>
                  <div class="icon-name">{{ icon.name }}</div>
                  <small class="text-muted">{{ icon.class }}</small>
                </div>
              </div>

              <!-- Business Icons -->
              <div class="col-12 mt-4">
                <h6 class="text-info mb-3">
                  <i class="fas fa-briefcase me-2"></i>
                  Business Icons
                </h6>
              </div>
              <div class="col-md-4 col-sm-6" v-for="icon in businessIcons" :key="icon.class">
                <div class="icon-item p-3 text-center border rounded hover-shadow" @click="copyIconClass(icon.class)">
                  <i :class="icon.class" class="icon-display mb-2"></i>
                  <div class="icon-name">{{ icon.name }}</div>
                  <small class="text-muted">{{ icon.class }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Regular Icons -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="far fa-star me-2"></i>
              Font Awesome Regular Icons
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- Communication Icons -->
              <div class="col-12">
                <h6 class="text-warning mb-3">
                  <i class="far fa-comments me-2"></i>
                  Communication Icons
                </h6>
              </div>
              <div class="col-md-4 col-sm-6" v-for="icon in communicationIcons" :key="icon.class">
                <div class="icon-item p-3 text-center border rounded hover-shadow" @click="copyIconClass(icon.class)">
                  <i :class="icon.class" class="icon-display mb-2"></i>
                  <div class="icon-name">{{ icon.name }}</div>
                  <small class="text-muted">{{ icon.class }}</small>
                </div>
              </div>

              <!-- File Icons -->
              <div class="col-12 mt-4">
                <h6 class="text-danger mb-3">
                  <i class="far fa-file me-2"></i>
                  File Icons
                </h6>
              </div>
              <div class="col-md-4 col-sm-6" v-for="icon in fileIcons" :key="icon.class">
                <div class="icon-item p-3 text-center border rounded hover-shadow" @click="copyIconClass(icon.class)">
                  <i :class="icon.class" class="icon-display mb-2"></i>
                  <div class="icon-name">{{ icon.name }}</div>
                  <small class="text-muted">{{ icon.class }}</small>
                </div>
              </div>

              <!-- UI Icons -->
              <div class="col-12 mt-4">
                <h6 class="text-secondary mb-3">
                  <i class="far fa-window-maximize me-2"></i>
                  UI Icons
                </h6>
              </div>
              <div class="col-md-4 col-sm-6" v-for="icon in uiIcons" :key="icon.class">
                <div class="icon-item p-3 text-center border rounded hover-shadow" @click="copyIconClass(icon.class)">
                  <i :class="icon.class" class="icon-display mb-2"></i>
                  <div class="icon-name">{{ icon.name }}</div>
                  <small class="text-muted">{{ icon.class }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Icon Sizes -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-expand-arrows-alt me-2"></i>
              Icon Sizes
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-4">
              <div class="col-12">
                <h6 class="mb-3">Font Awesome Sizes</h6>
                <div class="d-flex align-items-center flex-wrap gap-3">
                  <div class="text-center">
                    <i class="fas fa-star fa-xs text-primary"></i>
                    <div class="small mt-1">fa-xs</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-star fa-sm text-primary"></i>
                    <div class="small mt-1">fa-sm</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-star text-primary"></i>
                    <div class="small mt-1">default</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-star fa-lg text-primary"></i>
                    <div class="small mt-1">fa-lg</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-star fa-xl text-primary"></i>
                    <div class="small mt-1">fa-xl</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-star fa-2x text-primary"></i>
                    <div class="small mt-1">fa-2x</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-star fa-3x text-primary"></i>
                    <div class="small mt-1">fa-3x</div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <h6 class="mb-3">Bootstrap Icon Font Sizes</h6>
                <div class="d-flex align-items-center flex-wrap gap-3">
                  <div class="text-center">
                    <i class="fas fa-heart text-danger" style="font-size: 0.75rem;"></i>
                    <div class="small mt-1">0.75rem</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-heart text-danger" style="font-size: 1rem;"></i>
                    <div class="small mt-1">1rem</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-heart text-danger" style="font-size: 1.25rem;"></i>
                    <div class="small mt-1">1.25rem</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-heart text-danger" style="font-size: 1.5rem;"></i>
                    <div class="small mt-1">1.5rem</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-heart text-danger" style="font-size: 2rem;"></i>
                    <div class="small mt-1">2rem</div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-heart text-danger" style="font-size: 3rem;"></i>
                    <div class="small mt-1">3rem</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Icon Colors -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-palette me-2"></i>
              Icon Colors
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-12">
                <h6 class="mb-3">Bootstrap Text Colors</h6>
                <div class="row g-3">
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x text-primary"></i>
                    <div class="small mt-1">text-primary</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x text-secondary"></i>
                    <div class="small mt-1">text-secondary</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x text-success"></i>
                    <div class="small mt-1">text-success</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x text-danger"></i>
                    <div class="small mt-1">text-danger</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x text-warning"></i>
                    <div class="small mt-1">text-warning</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x text-info"></i>
                    <div class="small mt-1">text-info</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x text-light bg-dark p-2 rounded"></i>
                    <div class="small mt-1">text-light</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x text-dark"></i>
                    <div class="small mt-1">text-dark</div>
                  </div>
                </div>
              </div>

              <div class="col-12 mt-4">
                <h6 class="mb-3">Custom Colors</h6>
                <div class="row g-3">
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x" style="color: #667eea;"></i>
                    <div class="small mt-1">#667eea</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x" style="color: #f093fb;"></i>
                    <div class="small mt-1">#f093fb</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x" style="color: #4facfe;"></i>
                    <div class="small mt-1">#4facfe</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-2x" style="color: #43e97b;"></i>
                    <div class="small mt-1">#43e97b</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Icon Animations -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-sync-alt fa-spin me-2"></i>
              Icon Animations
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-4">
              <div class="col-12">
                <h6 class="mb-3">Font Awesome Animations</h6>
                <div class="row g-3">
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-spinner fa-spin fa-2x text-primary"></i>
                    <div class="small mt-2">fa-spin</div>
                    <code class="small">fa-spinner fa-spin</code>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-sync-alt fa-spin fa-2x text-success"></i>
                    <div class="small mt-2">fa-spin</div>
                    <code class="small">fa-sync-alt fa-spin</code>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-circle-notch fa-spin fa-2x text-info"></i>
                    <div class="small mt-2">fa-spin</div>
                    <code class="small">fa-circle-notch fa-spin</code>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-cog fa-spin fa-2x text-warning"></i>
                    <div class="small mt-2">fa-spin</div>
                    <code class="small">fa-cog fa-spin</code>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-heart fa-beat fa-2x text-danger"></i>
                    <div class="small mt-2">fa-beat</div>
                    <code class="small">fa-heart fa-beat</code>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-bell fa-shake fa-2x text-warning"></i>
                    <div class="small mt-2">fa-shake</div>
                    <code class="small">fa-bell fa-shake</code>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-exclamation-triangle fa-bounce fa-2x text-danger"></i>
                    <div class="small mt-2">fa-bounce</div>
                    <code class="small">fa-exclamation-triangle fa-bounce</code>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-star fa-fade fa-2x text-primary"></i>
                    <div class="small mt-2">fa-fade</div>
                    <code class="small">fa-star fa-fade</code>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <h6 class="mb-3">Custom CSS Animations</h6>
                <div class="row g-3">
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-arrow-up fa-2x text-success custom-bounce"></i>
                    <div class="small mt-2">Custom Bounce</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-lightbulb fa-2x text-warning custom-pulse"></i>
                    <div class="small mt-2">Custom Pulse</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-arrows-alt fa-2x text-info custom-wiggle"></i>
                    <div class="small mt-2">Custom Wiggle</div>
                  </div>
                  <div class="col-md-3 col-6 text-center">
                    <i class="fas fa-magic fa-2x text-purple custom-float"></i>
                    <div class="small mt-2">Custom Float</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Icon Usage Examples -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-code me-2"></i>
              Icon Usage Examples
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- Button with Icons -->
              <div class="col-12">
                <h6 class="mb-3">Buttons with Icons</h6>
                <div class="d-flex flex-wrap gap-2">
                  <button class="btn btn-primary">
                    <i class="fas fa-save me-2"></i>บันทึก
                  </button>
                  <button class="btn btn-success">
                    <i class="fas fa-plus me-2"></i>เพิ่ม
                  </button>
                  <button class="btn btn-danger">
                    <i class="fas fa-trash me-2"></i>ลบ
                  </button>
                  <button class="btn btn-warning">
                    <i class="fas fa-edit me-2"></i>แก้ไข
                  </button>
                  <button class="btn btn-info">
                    <i class="fas fa-download me-2"></i>ดาวน์โหลด
                  </button>
                  <button class="btn btn-secondary">
                    <i class="fas fa-print me-2"></i>พิมพ์
                  </button>
                </div>
              </div>

              <!-- Alert with Icons -->
              <div class="col-12 mt-4">
                <h6 class="mb-3">Alerts with Icons</h6>
                <div class="alert alert-success" role="alert">
                  <i class="fas fa-check-circle me-2"></i>
                  การดำเนินการสำเร็จ!
                </div>
                <div class="alert alert-warning" role="alert">
                  <i class="fas fa-exclamation-triangle me-2"></i>
                  คำเตือน: กรุณาตรวจสอบข้อมูล
                </div>
                <div class="alert alert-danger" role="alert">
                  <i class="fas fa-times-circle me-2"></i>
                  เกิดข้อผิดพลาด!
                </div>
                <div class="alert alert-info" role="alert">
                  <i class="fas fa-info-circle me-2"></i>
                  ข้อมูลเพิ่มเติม
                </div>
              </div>

              <!-- List with Icons -->
              <div class="col-12 mt-4">
                <h6 class="mb-3">Lists with Icons</h6>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <i class="fas fa-home me-2 text-primary"></i>หน้าหลัก
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-user me-2 text-success"></i>โปรไฟล์
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-cog me-2 text-warning"></i>ตั้งค่า
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-sign-out-alt me-2 text-danger"></i>ออกจากระบบ
                  </li>
                </ul>
              </div>

              <!-- Badge with Icons -->
              <div class="col-12 mt-4">
                <h6 class="mb-3">Badges with Icons</h6>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge bg-primary">
                    <i class="fas fa-envelope me-1"></i>5 ข้อความ
                  </span>
                  <span class="badge bg-success">
                    <i class="fas fa-check me-1"></i>เสร็จสิ้น
                  </span>
                  <span class="badge bg-warning">
                    <i class="fas fa-clock me-1"></i>รอดำเนินการ
                  </span>
                  <span class="badge bg-danger">
                    <i class="fas fa-exclamation me-1"></i>เร่งด่วน
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search and Filter -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-search me-2"></i>
              Icon Search & Copy
            </h5>
          </div>
          <div class="card-body">
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fas fa-search"></i>
                  </span>
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="searchQuery"
                    placeholder="ค้นหา icons..."
                  >
                </div>
              </div>
              <div class="col-md-6">
                <select class="form-select" v-model="selectedCategory">
                  <option value="">ทุกหมวดหมู่</option>
                  <option value="solid">Solid Icons</option>
                  <option value="regular">Regular Icons</option>
                  <option value="brands">Brand Icons</option>
                </select>
              </div>
            </div>

            <div class="row g-3" v-if="filteredIcons.length > 0">
              <div class="col-lg-2 col-md-3 col-sm-4 col-6" v-for="icon in filteredIcons" :key="icon.class">
                <div class="icon-item p-3 text-center border rounded hover-shadow" @click="copyIconClass(icon.class)">
                  <i :class="icon.class" class="icon-display mb-2"></i>
                  <div class="icon-name small">{{ icon.name }}</div>
                  <small class="text-muted d-block">{{ icon.class }}</small>
                </div>
              </div>
            </div>

            <div v-else-if="searchQuery && filteredIcons.length === 0" class="text-center py-4">
              <i class="fas fa-search fa-3x text-muted mb-3"></i>
              <p class="text-muted">ไม่พบ icon ที่ค้นหา "{{ searchQuery }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copy Notification -->
    <div 
      v-if="showCopyNotification" 
      class="position-fixed bottom-0 end-0 m-4 alert alert-success alert-dismissible"
      style="z-index: 1050;"
    >
      <i class="fas fa-check-circle me-2"></i>
      คัดลอก "{{ copiedClass }}" แล้ว!
      <button type="button" class="btn-close" @click="showCopyNotification = false"></button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { swalUtils } from '../utils/swal'

// Search and filter state
const searchQuery = ref('')
const selectedCategory = ref('')
const showCopyNotification = ref(false)
const copiedClass = ref('')

// Icon collections
const navigationIcons = ref([
  { class: 'fas fa-home', name: 'หน้าหลัก' },
  { class: 'fas fa-tachometer-alt', name: 'แดชบอร์ด' },
  { class: 'fas fa-bars', name: 'เมนู' },
  { class: 'fas fa-compass', name: 'นำทาง' },
  { class: 'fas fa-map-marker-alt', name: 'ที่ตั้ง' },
  { class: 'fas fa-arrow-left', name: 'ย้อนกลับ' },
  { class: 'fas fa-arrow-right', name: 'ถัดไป' },
  { class: 'fas fa-chevron-up', name: 'ขึ้น' },
  { class: 'fas fa-chevron-down', name: 'ลง' },
  { class: 'fas fa-external-link-alt', name: 'ลิงค์ภายนอก' },
  { class: 'fas fa-bookmark', name: 'บุ๊คมาร์ค' },
  { class: 'fas fa-star', name: 'ดาว' }
])

const actionIcons = ref([
  { class: 'fas fa-plus', name: 'เพิ่ม' },
  { class: 'fas fa-edit', name: 'แก้ไข' },
  { class: 'fas fa-trash', name: 'ลบ' },
  { class: 'fas fa-save', name: 'บันทึก' },
  { class: 'fas fa-download', name: 'ดาวน์โหลด' },
  { class: 'fas fa-upload', name: 'อัปโหลด' },
  { class: 'fas fa-copy', name: 'คัดลอก' },
  { class: 'fas fa-cut', name: 'ตัด' },
  { class: 'fas fa-paste', name: 'วาง' },
  { class: 'fas fa-undo', name: 'ยกเลิก' },
  { class: 'fas fa-redo', name: 'ทำซ้ำ' },
  { class: 'fas fa-refresh', name: 'รีเฟรช' }
])

const businessIcons = ref([
  { class: 'fas fa-briefcase', name: 'ธุรกิจ' },
  { class: 'fas fa-chart-bar', name: 'กราฟแท่ง' },
  { class: 'fas fa-chart-line', name: 'กราฟเส้น' },
  { class: 'fas fa-chart-pie', name: 'กราฟวงกลม' },
  { class: 'fas fa-shopping-cart', name: 'ตะกร้า' },
  { class: 'fas fa-credit-card', name: 'บัตรเครดิต' },
  { class: 'fas fa-money-bill', name: 'เงิน' },
  { class: 'fas fa-calculator', name: 'เครื่องคิดเลข' },
  { class: 'fas fa-clipboard', name: 'คลิปบอร์ด' },
  { class: 'fas fa-calendar', name: 'ปฏิทิน' },
  { class: 'fas fa-clock', name: 'นาฬิกา' },
  { class: 'fas fa-building', name: 'อาคาร' }
])

const communicationIcons = ref([
  { class: 'far fa-envelope', name: 'ซองจดหมาย' },
  { class: 'far fa-comments', name: 'แชท' },
  { class: 'far fa-comment', name: 'ความคิดเห็น' },
  { class: 'far fa-bell', name: 'กระดิ่ง' },
  { class: 'fas fa-phone', name: 'โทรศัพท์' },
  { class: 'fas fa-mobile-alt', name: 'มือถือ' },
  { class: 'far fa-paper-plane', name: 'ส่งข้อความ' },
  { class: 'fas fa-inbox', name: 'กล่องข้อความ' },
  { class: 'fas fa-share', name: 'แชร์' },
  { class: 'fas fa-thumbs-up', name: 'ไลค์' },
  { class: 'fas fa-thumbs-down', name: 'ไม่ไลค์' },
  { class: 'fas fa-heart', name: 'หัวใจ' }
])

const fileIcons = ref([
  { class: 'far fa-file', name: 'ไฟล์' },
  { class: 'far fa-file-alt', name: 'เอกสาร' },
  { class: 'far fa-file-pdf', name: 'PDF' },
  { class: 'far fa-file-word', name: 'Word' },
  { class: 'far fa-file-excel', name: 'Excel' },
  { class: 'far fa-file-powerpoint', name: 'PowerPoint' },
  { class: 'far fa-file-image', name: 'รูปภาพ' },
  { class: 'far fa-file-video', name: 'วิดีโอ' },
  { class: 'far fa-file-audio', name: 'เสียง' },
  { class: 'far fa-file-archive', name: 'ไฟล์บีบอัด' },
  { class: 'far fa-file-code', name: 'โค้ด' },
  { class: 'far fa-folder', name: 'โฟลเดอร์' }
])

const uiIcons = ref([
  { class: 'far fa-window-maximize', name: 'หน้าต่าง' },
  { class: 'far fa-window-minimize', name: 'ย่อหน้าต่าง' },
  { class: 'far fa-window-close', name: 'ปิดหน้าต่าง' },
  { class: 'fas fa-expand', name: 'ขยาย' },
  { class: 'fas fa-compress', name: 'ย่อ' },
  { class: 'far fa-eye', name: 'ดู' },
  { class: 'far fa-eye-slash', name: 'ซ่อน' },
  { class: 'fas fa-search', name: 'ค้นหา' },
  { class: 'fas fa-filter', name: 'กรอง' },
  { class: 'fas fa-sort', name: 'เรียง' },
  { class: 'fas fa-list', name: 'รายการ' },
  { class: 'fas fa-th', name: 'ตาราง' }
])

// All icons combined for search
const allIcons = computed(() => {
  const all = [
    ...navigationIcons.value.map(icon => ({ ...icon, category: 'solid' })),
    ...actionIcons.value.map(icon => ({ ...icon, category: 'solid' })),
    ...businessIcons.value.map(icon => ({ ...icon, category: 'solid' })),
    ...communicationIcons.value.map(icon => ({ ...icon, category: 'regular' })),
    ...fileIcons.value.map(icon => ({ ...icon, category: 'regular' })),
    ...uiIcons.value.map(icon => ({ ...icon, category: 'regular' }))
  ]
  return all
})

// Filtered icons based on search and category
const filteredIcons = computed(() => {
  let filtered = allIcons.value

  if (selectedCategory.value) {
    filtered = filtered.filter(icon => icon.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(icon => 
      icon.name.toLowerCase().includes(query) || 
      icon.class.toLowerCase().includes(query)
    )
  }

  return filtered.slice(0, 24) // Limit to 24 icons for performance
})

// Copy icon class to clipboard
const copyIconClass = async (iconClass) => {
  try {
    await navigator.clipboard.writeText(iconClass)
    copiedClass.value = iconClass
    showCopyNotification.value = true
    
    // Auto hide notification after 3 seconds
    setTimeout(() => {
      showCopyNotification.value = false
    }, 3000)
    
    console.log('Copied icon class:', iconClass)
  } catch (err) {
    console.error('Failed to copy:', err)
    swalUtils.error('ข้อผิดพลาด!', 'ไม่สามารถคัดลอกได้')
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

.icon-item {
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fff;
}

.icon-item:hover {
  background-color: #f8f9fc;
  transform: translateY(-2px);
  border-color: #667eea !important;
}

.icon-display {
  font-size: 2rem;
  color: #5a5c69;
  transition: color 0.3s ease;
}

.icon-item:hover .icon-display {
  color: #667eea;
}

.icon-name {
  font-weight: 600;
  color: #5a5c69;
  font-size: 0.85rem;
}

.hover-shadow {
  transition: box-shadow 0.3s ease;
}

.hover-shadow:hover {
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.15);
}

.text-purple {
  color: #6f42c1 !important;
}

/* Custom Animations */
@keyframes custom-bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0,-15px,0);
  }
  70% {
    transform: translate3d(0,-8px,0);
  }
  90% {
    transform: translate3d(0,-3px,0);
  }
}

.custom-bounce {
  animation: custom-bounce 2s infinite;
}

@keyframes custom-pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.custom-pulse {
  animation: custom-pulse 1.5s infinite;
}

@keyframes custom-wiggle {
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
}

.custom-wiggle {
  animation: custom-wiggle 2s infinite;
}

@keyframes custom-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.custom-float {
  animation: custom-float 3s infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .icon-display {
    font-size: 1.5rem;
  }
  
  .icon-name {
    font-size: 0.75rem;
  }
}

.alert-dismissible .btn-close {
  padding: 0.375rem 0.75rem;
}
</style>
