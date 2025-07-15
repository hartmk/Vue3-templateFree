<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="mb-0">
          <i class="fas fa-window-restore me-2"></i>
          Modal Examples
        </h2>
        <p class="text-muted">Bootstrap modal dialogs และตัวอย่างการใช้งานแบบต่างๆ</p>
      </div>
    </div>

    <!-- Modal Trigger Buttons -->
    <div class="row">
      <!-- Basic Modals -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-play me-2"></i>
              Basic Modals
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- Simple Modal -->
              <div class="col-12">
                <h6 class="mb-2">Simple Modal</h6>
                <button 
                  class="btn btn-primary" 
                  @click="openModal('simpleModal')"
                >
                  <i class="fas fa-external-link-alt me-2"></i>
                  เปิด Simple Modal
                </button>
                <p class="small text-muted mt-1">Modal พื้นฐานแสดงข้อความและปุ่มปิด</p>
              </div>

              <!-- Modal with Form -->
              <div class="col-12">
                <h6 class="mb-2">Modal with Form</h6>
                <button 
                  class="btn btn-success" 
                  @click="openModal('formModal')"
                >
                  <i class="fas fa-edit me-2"></i>
                  เปิด Form Modal
                </button>
                <p class="small text-muted mt-1">Modal ที่มีฟอร์มสำหรับกรอกข้อมูล</p>
              </div>

              <!-- Confirmation Modal -->
              <div class="col-12">
                <h6 class="mb-2">Confirmation Modal</h6>
                <button 
                  class="btn btn-warning" 
                  @click="openModal('confirmModal')"
                >
                  <i class="fas fa-question-circle me-2"></i>
                  เปิด Confirmation Modal
                </button>
                <p class="small text-muted mt-1">Modal สำหรับยืนยันการดำเนินการ</p>
              </div>

              <!-- Large Modal -->
              <div class="col-12">
                <h6 class="mb-2">Large Modal</h6>
                <button 
                  class="btn btn-info" 
                  @click="openModal('largeModal')"
                >
                  <i class="fas fa-expand me-2"></i>
                  เปิด Large Modal
                </button>
                <p class="small text-muted mt-1">Modal ขนาดใหญ่สำหรับเนื้อหาเยอะ</p>
              </div>

              <!-- Small Modal -->
              <div class="col-12">
                <h6 class="mb-2">Small Modal</h6>
                <button 
                  class="btn btn-secondary" 
                  @click="openModal('smallModal')"
                >
                  <i class="fas fa-compress me-2"></i>
                  เปิด Small Modal
                </button>
                <p class="small text-muted mt-1">Modal ขนาดเล็กสำหรับข้อความสั้น</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Advanced Modals -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-cog me-2"></i>
              Advanced Modals
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- Fullscreen Modal -->
              <div class="col-12">
                <h6 class="mb-2">Fullscreen Modal</h6>
                <button 
                  class="btn btn-dark" 
                  @click="openModal('fullscreenModal')"
                >
                  <i class="fas fa-expand-arrows-alt me-2"></i>
                  เปิด Fullscreen Modal
                </button>
                <p class="small text-muted mt-1">Modal เต็มจอสำหรับแสดงเนื้อหาจำนวนมาก</p>
              </div>

              <!-- Modal with Tabs -->
              <div class="col-12">
                <h6 class="mb-2">Modal with Tabs</h6>
                <button 
                  class="btn btn-purple" 
                  @click="openModal('tabModal')"
                >
                  <i class="fas fa-tabs me-2"></i>
                  เปิด Tab Modal
                </button>
                <p class="small text-muted mt-1">Modal ที่มี Tab สำหรับจัดกลุ่มเนื้อหา</p>
              </div>

              <!-- Modal with Steps -->
              <div class="col-12">
                <h6 class="mb-2">Modal with Steps</h6>
                <button 
                  class="btn btn-gradient" 
                  @click="openModal('stepModal')"
                >
                  <i class="fas fa-list-ol me-2"></i>
                  เปิด Step Modal
                </button>
                <p class="small text-muted mt-1">Modal แบบ Wizard มีขั้นตอน</p>
              </div>

              <!-- Image Gallery Modal -->
              <div class="col-12">
                <h6 class="mb-2">Image Gallery Modal</h6>
                <button 
                  class="btn btn-pink" 
                  @click="openModal('galleryModal')"
                >
                  <i class="fas fa-images me-2"></i>
                  เปิด Gallery Modal
                </button>
                <p class="small text-muted mt-1">Modal สำหรับแสดงรูปภาพ</p>
              </div>

              <!-- Video Modal -->
              <div class="col-12">
                <h6 class="mb-2">Video Modal</h6>
                <button 
                  class="btn btn-red" 
                  @click="openModal('videoModal')"
                >
                  <i class="fas fa-play-circle me-2"></i>
                  เปิด Video Modal
                </button>
                <p class="small text-muted mt-1">Modal สำหรับเล่นวิดีโอ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Real-world Examples -->
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-star me-2"></i>
              Real-world Modal Examples
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <!-- User Profile Modal -->
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="d-grid">
                  <button 
                    class="btn btn-outline-primary" 
                    @click="openModal('profileModal')"
                  >
                    <i class="fas fa-user me-2"></i>
                    User Profile
                  </button>
                </div>
              </div>

              <!-- Product Detail Modal -->
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="d-grid">
                  <button 
                    class="btn btn-outline-success" 
                    @click="openModal('productModal')"
                  >
                    <i class="fas fa-box me-2"></i>
                    Product Detail
                  </button>
                </div>
              </div>

              <!-- Shopping Cart Modal -->
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="d-grid">
                  <button 
                    class="btn btn-outline-warning" 
                    @click="openModal('cartModal')"
                  >
                    <i class="fas fa-shopping-cart me-2"></i>
                    Shopping Cart
                  </button>
                </div>
              </div>

              <!-- Contact Form Modal -->
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="d-grid">
                  <button 
                    class="btn btn-outline-info" 
                    @click="openModal('contactModal')"
                  >
                    <i class="fas fa-envelope me-2"></i>
                    Contact Form
                  </button>
                </div>
              </div>

              <!-- Settings Modal -->
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="d-grid">
                  <button 
                    class="btn btn-outline-secondary" 
                    @click="openModal('settingsModal')"
                  >
                    <i class="fas fa-cog me-2"></i>
                    Settings
                  </button>
                </div>
              </div>

              <!-- Help Modal -->
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="d-grid">
                  <button 
                    class="btn btn-outline-dark" 
                    @click="openModal('helpModal')"
                  >
                    <i class="fas fa-question-circle me-2"></i>
                    Help & FAQ
                  </button>
                </div>
              </div>

              <!-- Feedback Modal -->
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="d-grid">
                  <button 
                    class="btn btn-outline-danger" 
                    @click="openModal('feedbackModal')"
                  >
                    <i class="fas fa-comment me-2"></i>
                    Feedback
                  </button>
                </div>
              </div>

              <!-- Terms Modal -->
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="d-grid">
                  <button 
                    class="btn btn-outline-purple" 
                    @click="openModal('termsModal')"
                  >
                    <i class="fas fa-file-contract me-2"></i>
                    Terms & Conditions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <!-- Simple Modal -->
    <div class="modal fade" id="simpleModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-info-circle me-2"></i>
              Simple Modal
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>นี่คือ Modal พื้นฐานที่ใช้แสดงข้อความหรือข้อมูลสำคัญให้กับผู้ใช้</p>
            <div class="alert alert-info" role="alert">
              <i class="fas fa-lightbulb me-2"></i>
              <strong>เคล็ดลับ:</strong> Modal เป็นวิธีที่ดีในการแสดงข้อมูลโดยไม่ต้องไปหน้าใหม่
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
            <button type="button" class="btn btn-primary">เข้าใจแล้ว</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Modal -->
    <div class="modal fade" id="formModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-plus me-2"></i>
              เพิ่มข้อมูลใหม่
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="formName" class="form-label">ชื่อ</label>
                <input type="text" class="form-control" id="formName" v-model="formData.name" required>
              </div>
              <div class="mb-3">
                <label for="formEmail" class="form-label">อีเมล</label>
                <input type="email" class="form-control" id="formEmail" v-model="formData.email" required>
              </div>
              <div class="mb-3">
                <label for="formMessage" class="form-label">ข้อความ</label>
                <textarea class="form-control" id="formMessage" rows="3" v-model="formData.message"></textarea>
              </div>
              <div class="mb-3">
                <label for="formCategory" class="form-label">หมวดหมู่</label>
                <select class="form-select" id="formCategory" v-model="formData.category">
                  <option value="">เลือกหมวดหมู่</option>
                  <option value="general">ทั่วไป</option>
                  <option value="support">สนับสนุน</option>
                  <option value="feedback">ข้อเสนอแนะ</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
            <button type="button" class="btn btn-success" @click="submitForm">
              <i class="fas fa-save me-2"></i>บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div class="modal fade" id="confirmModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-warning text-dark">
            <h5 class="modal-title">
              <i class="fas fa-exclamation-triangle me-2"></i>
              ยืนยันการดำเนินการ
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="text-center">
              <i class="fas fa-question-circle fa-4x text-warning mb-3"></i>
              <h6>คุณแน่ใจหรือไม่ที่จะดำเนินการนี้?</h6>
              <p class="text-muted">การดำเนินการนี้ไม่สามารถยกเลิกได้</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
            <button type="button" class="btn btn-warning" @click="confirmAction">
              <i class="fas fa-check me-2"></i>ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Large Modal -->
    <div class="modal fade" id="largeModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-expand me-2"></i>
              Large Modal
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <h6>คอลัมน์ซ้าย</h6>
                <p>Modal ขนาดใหญ่เหมาะสำหรับแสดงข้อมูลจำนวนมากหรือเนื้อหาที่ซับซ้อน</p>
                <ul>
                  <li>แสดงรายละเอียดสินค้า</li>
                  <li>ฟอร์มที่มีหลายฟิลด์</li>
                  <li>ตารางข้อมูล</li>
                  <li>กราฟและแผนภูมิ</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h6>คอลัมน์ขวา</h6>
                <div class="bg-light p-3 rounded">
                  <h6>ตัวอย่างเนื้อหา</h6>
                  <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div class="progress mb-2">
                    <div class="progress-bar" style="width: 75%"></div>
                  </div>
                  <small class="text-muted">Progress: 75%</small>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
            <button type="button" class="btn btn-info">บันทึกการเปลี่ยนแปลง</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Small Modal -->
    <div class="modal fade" id="smallModal" tabindex="-1">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              <i class="fas fa-compress me-2"></i>
              Small Modal
            </h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center">
            <i class="fas fa-check-circle fa-3x text-success mb-3"></i>
            <p>การดำเนินการสำเร็จ!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success btn-sm" data-bs-dismiss="modal">ตกลง</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen Modal -->
    <div class="modal fade" id="fullscreenModal" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-expand-arrows-alt me-2"></i>
              Fullscreen Modal
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-8">
                  <h4>เนื้อหาหลัก</h4>
                  <p>Modal เต็มจอเหมาะสำหรับ:</p>
                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="card">
                        <div class="card-body">
                          <h6>แดชบอร์ด</h6>
                          <p class="small">แสดงข้อมูลสถิติและกราฟ</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card">
                        <div class="card-body">
                          <h6>แก้ไขเอกสาร</h6>
                          <p class="small">โปรแกรมแก้ไขข้อความ</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card">
                        <div class="card-body">
                          <h6>แสดงรูปภาพ</h6>
                          <p class="small">Gallery เต็มจอ</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card">
                        <div class="card-body">
                          <h6>วิดีโอ</h6>
                          <p class="small">เล่นวิดีโอเต็มจอ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <h5>แถบด้านข้าง</h5>
                  <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">
                      <i class="fas fa-home me-2"></i>หน้าหลัก
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <i class="fas fa-user me-2"></i>โปรไฟล์
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <i class="fas fa-cog me-2"></i>ตั้งค่า
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <i class="fas fa-sign-out-alt me-2"></i>ออกจากระบบ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
            <button type="button" class="btn btn-primary">บันทึก</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab Modal -->
    <div class="modal fade" id="tabModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-tabs me-2"></i>
              Modal with Tabs
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab1" role="tab">
                  <i class="fas fa-info-circle me-2"></i>ข้อมูลทั่วไป
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab2" role="tab">
                  <i class="fas fa-cog me-2"></i>การตั้งค่า
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab3" role="tab">
                  <i class="fas fa-chart-bar me-2"></i>สถิติ
                </button>
              </li>
            </ul>
            <div class="tab-content mt-3">
              <div class="tab-pane fade show active" id="tab1" role="tabpanel">
                <h6>ข้อมูลทั่วไป</h6>
                <p>แสดงข้อมูลพื้นฐานและรายละเอียดสำคัญ</p>
                <div class="row">
                  <div class="col-md-6">
                    <strong>ชื่อ:</strong> {{ userData.name }}<br>
                    <strong>อีเมล:</strong> {{ userData.email }}<br>
                    <strong>โทรศัพท์:</strong> {{ userData.phone }}
                  </div>
                  <div class="col-md-6">
                    <strong>สถานะ:</strong> <span class="badge bg-success">Active</span><br>
                    <strong>วันที่สมัคร:</strong> {{ userData.joinDate }}<br>
                    <strong>ระดับ:</strong> {{ userData.level }}
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab2" role="tabpanel">
                <h6>การตั้งค่า</h6>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="notification" v-model="settings.notification">
                  <label class="form-check-label" for="notification">รับการแจ้งเตือน</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="newsletter" v-model="settings.newsletter">
                  <label class="form-check-label" for="newsletter">รับจดหมายข่าว</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="darkmode" v-model="settings.darkMode">
                  <label class="form-check-label" for="darkmode">โหมดมืด</label>
                </div>
              </div>
              <div class="tab-pane fade" id="tab3" role="tabpanel">
                <h6>สถิติการใช้งาน</h6>
                <div class="row">
                  <div class="col-md-4 text-center">
                    <h4 class="text-primary">{{ stats.loginCount }}</h4>
                    <small>ครั้งที่เข้าสู่ระบบ</small>
                  </div>
                  <div class="col-md-4 text-center">
                    <h4 class="text-success">{{ stats.orderCount }}</h4>
                    <small>คำสั่งซื้อ</small>
                  </div>
                  <div class="col-md-4 text-center">
                    <h4 class="text-info">{{ stats.points }}</h4>
                    <small>คะแนนสะสม</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
            <button type="button" class="btn btn-primary">บันทึกการเปลี่ยนแปลง</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Step Modal -->
    <div class="modal fade" id="stepModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-list-ol me-2"></i>
              Setup Wizard - ขั้นตอนที่ {{ currentStep }} จาก 3
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="progress">
                <div class="progress-bar" :style="{ width: (currentStep / 3) * 100 + '%' }"></div>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <small :class="{ 'text-primary fw-bold': currentStep >= 1 }">ข้อมูลพื้นฐาน</small>
                <small :class="{ 'text-primary fw-bold': currentStep >= 2 }">การตั้งค่า</small>
                <small :class="{ 'text-primary fw-bold': currentStep >= 3 }">ยืนยัน</small>
              </div>
            </div>

            <!-- Step Content -->
            <div v-if="currentStep === 1">
              <h6>ขั้นตอนที่ 1: ข้อมูลพื้นฐาน</h6>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">ชื่อ</label>
                    <input type="text" class="form-control" v-model="stepData.name">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">นามสกุล</label>
                    <input type="text" class="form-control" v-model="stepData.lastname">
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">อีเมล</label>
                    <input type="email" class="form-control" v-model="stepData.email">
                  </div>
                </div>
              </div>
            </div>

            <div v-if="currentStep === 2">
              <h6>ขั้นตอนที่ 2: การตั้งค่า</h6>
              <div class="mb-3">
                <label class="form-label">ประเภทบัญชี</label>
                <select class="form-select" v-model="stepData.accountType">
                  <option value="">เลือกประเภทบัญชี</option>
                  <option value="personal">บุคคล</option>
                  <option value="business">ธุรกิจ</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">ภาษา</label>
                <select class="form-select" v-model="stepData.language">
                  <option value="th">ไทย</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="terms" v-model="stepData.acceptTerms">
                <label class="form-check-label" for="terms">
                  ยอมรับข้อกำหนดและเงื่อนไข
                </label>
              </div>
            </div>

            <div v-if="currentStep === 3">
              <h6>ขั้นตอนที่ 3: ยืนยันข้อมูล</h6>
              <div class="alert alert-success">
                <i class="fas fa-check-circle me-2"></i>
                กรุณาตรวจสอบข้อมูลก่อนยืนยัน
              </div>
              <table class="table table-borderless">
                <tr>
                  <td><strong>ชื่อ-นามสกุล:</strong></td>
                  <td>{{ stepData.name }} {{ stepData.lastname }}</td>
                </tr>
                <tr>
                  <td><strong>อีเมล:</strong></td>
                  <td>{{ stepData.email }}</td>
                </tr>
                <tr>
                  <td><strong>ประเภทบัญชี:</strong></td>
                  <td>{{ stepData.accountType === 'personal' ? 'บุคคล' : 'ธุรกิจ' }}</td>
                </tr>
                <tr>
                  <td><strong>ภาษา:</strong></td>
                  <td>{{ stepData.language === 'th' ? 'ไทย' : 'English' }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button 
              type="button" 
              class="btn btn-secondary" 
              @click="previousStep" 
              :disabled="currentStep === 1"
            >
              <i class="fas fa-arrow-left me-2"></i>ก่อนหน้า
            </button>
            <button 
              type="button" 
              class="btn btn-primary" 
              @click="nextStep" 
              v-if="currentStep < 3"
            >
              ถัดไป<i class="fas fa-arrow-right ms-2"></i>
            </button>
            <button 
              type="button" 
              class="btn btn-success" 
              @click="completeSetup" 
              v-if="currentStep === 3"
            >
              <i class="fas fa-check me-2"></i>เสร็จสิ้น
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- More modals would continue here... -->
    <!-- For brevity, I'll add a few more key modals -->

    <!-- Image Gallery Modal -->
    <div class="modal fade" id="galleryModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-images me-2"></i>
              Image Gallery
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div class="col-md-4" v-for="(image, index) in galleryImages" :key="index">
                <div class="card">
                  <img :src="image.src" class="card-img-top" :alt="image.title" style="height: 200px; object-fit: cover;">
                  <div class="card-body p-2">
                    <h6 class="card-title small">{{ image.title }}</h6>
                    <button class="btn btn-sm btn-primary" @click="viewImage(image)">
                      <i class="fas fa-eye me-1"></i>ดู
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- User Profile Modal -->
    <div class="modal fade" id="profileModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">
              <i class="fas fa-user me-2"></i>
              User Profile
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="text-center mb-4">
              <img src="https://via.placeholder.com/120" class="rounded-circle" alt="Profile">
              <h5 class="mt-2">{{ userData.name }}</h5>
              <span class="badge bg-success">{{ userData.status }}</span>
            </div>
            <div class="row">
              <div class="col-6">
                <strong>อีเมล:</strong><br>
                <small>{{ userData.email }}</small>
              </div>
              <div class="col-6">
                <strong>โทรศัพท์:</strong><br>
                <small>{{ userData.phone }}</small>
              </div>
              <div class="col-6 mt-3">
                <strong>วันที่สมัคร:</strong><br>
                <small>{{ userData.joinDate }}</small>
              </div>
              <div class="col-6 mt-3">
                <strong>ครั้งล่าสุด:</strong><br>
                <small>{{ userData.lastLogin }}</small>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-primary">
              <i class="fas fa-edit me-2"></i>แก้ไขโปรไฟล์
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { swalUtils } from '../utils/swal'

// Make sure bootstrap is available
const bootstrap = window.bootstrap

// Form data
const formData = ref({
  name: '',
  email: '',
  message: '',
  category: ''
})

// User data
const userData = ref({
  name: 'สมชาย ใจดี',
  email: 'somchai@example.com',
  phone: '08-1234-5678',
  status: 'Active',
  joinDate: '15 มกราคม 2567',
  lastLogin: '2 ชั่วโมงที่แล้ว',
  level: 'Premium'
})

// Settings
const settings = ref({
  notification: true,
  newsletter: false,
  darkMode: false
})

// Stats
const stats = ref({
  loginCount: 127,
  orderCount: 15,
  points: 2450
})

// Step modal data
const currentStep = ref(1)
const stepData = ref({
  name: '',
  lastname: '',
  email: '',
  accountType: '',
  language: 'th',
  acceptTerms: false
})

// Gallery images
const galleryImages = ref([
  { src: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Image+1', title: 'รูปภาพที่ 1' },
  { src: 'https://via.placeholder.com/300x200/f093fb/ffffff?text=Image+2', title: 'รูปภาพที่ 2' },
  { src: 'https://via.placeholder.com/300x200/4facfe/ffffff?text=Image+3', title: 'รูปภาพที่ 3' },
  { src: 'https://via.placeholder.com/300x200/43e97b/ffffff?text=Image+4', title: 'รูปภาพที่ 4' },
  { src: 'https://via.placeholder.com/300x200/38d9a9/ffffff?text=Image+5', title: 'รูปภาพที่ 5' },
  { src: 'https://via.placeholder.com/300x200/f093b0/ffffff?text=Image+6', title: 'รูปภาพที่ 6' }
])

// Methods
const openModal = (modalId) => {
  try {
    if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
      const modalElement = document.getElementById(modalId)
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement)
        modal.show()
      } else {
        console.error(`Modal element with id '${modalId}' not found`)
        swalUtils.error('ข้อผิดพลาด!', `ไม่พบ Modal: ${modalId}`)
      }
    } else {
      console.error('Bootstrap is not loaded or Modal class is not available')
      swalUtils.error('ข้อผิดพลาด!', 'Bootstrap ยังไม่โหลดเสร็จ')
    }
  } catch (error) {
    console.error('Error opening modal:', error)
    swalUtils.error('ข้อผิดพลาด!', 'ไม่สามารถเปิด Modal ได้')
  }
}

const submitForm = () => {
  if (formData.value.name && formData.value.email) {
    swalUtils.success('สำเร็จ!', 'บันทึกข้อมูลเรียบร้อยแล้ว')
    // Reset form
    formData.value = {
      name: '',
      email: '',
      message: '',
      category: ''
    }
    // Close modal
    try {
      const modal = bootstrap.Modal.getInstance(document.getElementById('formModal'))
      if (modal) modal.hide()
    } catch (error) {
      console.error('Error closing modal:', error)
    }
  } else {
    swalUtils.warning('กรุณากรอกข้อมูล', 'กรุณากรอกชื่อและอีเมล')
  }
}

const confirmAction = () => {
  swalUtils.success('ดำเนินการแล้ว!', 'การดำเนินการเสร็จสิ้น')
  const modal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'))
  if (modal) modal.hide()
}

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const completeSetup = () => {
  swalUtils.success('สำเร็จ!', 'การตั้งค่าเสร็จสิ้น')
  const modal = bootstrap.Modal.getInstance(document.getElementById('stepModal'))
  if (modal) modal.hide()
  // Reset step
  currentStep.value = 1
}

const viewImage = (image) => {
  swalUtils.info('ดูรูปภาพ', `กำลังดู: ${image.title}`)
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

.btn-purple {
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  color: white;
}

.btn-purple:hover {
  background: linear-gradient(45deg, #5a6fd8, #6a4190);
  color: white;
}

.btn-gradient {
  background: linear-gradient(45deg, #f093fb, #f5576c);
  border: none;
  color: white;
}

.btn-gradient:hover {
  background: linear-gradient(45deg, #ee82f0, #f04454);
  color: white;
}

.btn-pink {
  background: #f093fb;
  border-color: #f093fb;
  color: white;
}

.btn-pink:hover {
  background: #ee82f0;
  border-color: #ee82f0;
  color: white;
}

.btn-red {
  background: #f5576c;
  border-color: #f5576c;
  color: white;
}

.btn-red:hover {
  background: #f04454;
  border-color: #f04454;
  color: white;
}

.btn-outline-purple {
  border-color: #6f42c1;
  color: #6f42c1;
}

.btn-outline-purple:hover {
  background-color: #6f42c1;
  border-color: #6f42c1;
  color: white;
}

/* Modal Styling */
.modal-content {
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}

.modal-header {
  border-bottom: 1px solid #e3e6f0;
  border-radius: 0.5rem 0.5rem 0 0;
}

.modal-footer {
  border-top: 1px solid #e3e6f0;
  border-radius: 0 0 0.5rem 0.5rem;
}

/* Progress bar */
.progress {
  height: 0.5rem;
  border-radius: 0.25rem;
}

.progress-bar {
  background: linear-gradient(45deg, #667eea, #764ba2);
}

/* Tab styling */
.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-radius: 0.25rem 0.25rem 0 0;
  color: #5a5c69;
}

.nav-tabs .nav-link.active {
  background-color: #667eea;
  border-color: #667eea;
  color: white;
}

.nav-tabs .nav-link:hover {
  border-color: #e3e6f0;
  background-color: #f8f9fc;
}

/* Form styling */
.form-control:focus,
.form-select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

/* Badge styling */
.badge {
  font-size: 0.75rem;
}

/* Image styling */
.card-img-top {
  transition: transform 0.3s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

/* Button focus */
.btn:focus {
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}
</style>
