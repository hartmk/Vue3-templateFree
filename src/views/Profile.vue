<template>
  <div class="container-fluid py-4 px-5">
    <!-- Profile Header -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card border-0 shadow-sm overflow-hidden">
          <div class="card-header bg-gradient-primary text-white position-relative" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 200px;">
            <div class="position-absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
              <div class="text-center">
                <div class="position-relative d-inline-block mb-3">
                  <div class="profile-avatar bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto shadow-lg"
                       style="width: 120px; height: 120px;">
                    <i class="fas fa-user text-primary" style="font-size: 3rem;"></i>
                  </div>
                  <button class="btn btn-sm btn-light rounded-circle position-absolute shadow"
                          style="bottom: 0; right: 0; width: 35px; height: 35px;"
                          @click="changeProfilePicture">
                    <i class="fas fa-camera"></i>
                  </button>
                </div>
                <h3 class="mb-1 text-white">{{ user.name }}</h3>
                <p class="mb-0 text-white-50">{{ user.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Left Column - Personal Information -->
      <div class="col-lg-4 mb-4">
        <!-- Personal Info Card -->
        <div class="card border-0 shadow-sm mb-4">
          <div class="card-header bg-white border-bottom">
            <h5 class="mb-0 text-primary">
              <i class="fas fa-user-circle me-2"></i>ข้อมูลส่วนตัว
            </h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label text-muted small">ชื่อผู้ใช้</label>
              <div class="p-2 bg-light rounded">{{ user.name }}</div>
            </div>
            <div class="mb-3">
              <label class="form-label text-muted small">อีเมล</label>
              <div class="p-2 bg-light rounded">{{ user.email }}</div>
            </div>
            <div class="mb-3">
              <label class="form-label text-muted small">ตำแหน่ง</label>
              <div class="p-2 bg-light rounded">
                <span class="badge bg-primary">{{ user.role }}</span>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label text-muted small">วันที่เข้าร่วม</label>
              <div class="p-2 bg-light rounded">{{ formatDate(user.joinDate) }}</div>
            </div>
            <div class="mb-3">
              <label class="form-label text-muted small">สถานะ</label>
              <div class="p-2 bg-light rounded">
                <span class="badge bg-success">
                  <i class="fas fa-circle me-1" style="font-size: 0.7rem;"></i>ออนไลน์
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Stats Card -->
        <div class="card border-0 shadow-sm">
          <div class="card-header bg-white border-bottom">
            <h5 class="mb-0 text-primary">
              <i class="fas fa-chart-bar me-2"></i>สถิติด่วน
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-6">
                <div class="text-center p-3 bg-primary bg-opacity-10 rounded">
                  <i class="fas fa-tasks text-primary fa-2x mb-2"></i>
                  <h4 class="text-primary mb-0">{{ stats.tasksCompleted }}</h4>
                  <small class="text-muted">งานเสร็จ</small>
                </div>
              </div>
              <div class="col-6">
                <div class="text-center p-3 bg-success bg-opacity-10 rounded">
                  <i class="fas fa-project-diagram text-success fa-2x mb-2"></i>
                  <h4 class="text-success mb-0">{{ stats.projectsActive }}</h4>
                  <small class="text-muted">โครงการ</small>
                </div>
              </div>
              <div class="col-6">
                <div class="text-center p-3 bg-warning bg-opacity-10 rounded">
                  <i class="fas fa-clock text-warning fa-2x mb-2"></i>
                  <h4 class="text-warning mb-0">{{ stats.hoursWorked }}h</h4>
                  <small class="text-muted">ชั่วโมงทำงาน</small>
                </div>
              </div>
              <div class="col-6">
                <div class="text-center p-3 bg-info bg-opacity-10 rounded">
                  <i class="fas fa-trophy text-info fa-2x mb-2"></i>
                  <h4 class="text-info mb-0">{{ stats.achievements }}</h4>
                  <small class="text-muted">รางวัล</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Editable Profile & Settings -->
      <div class="col-lg-8">
        <!-- Edit Profile Tab -->
        <div class="card border-0 shadow-sm mb-4">
          <div class="card-header bg-white border-bottom">
            <ul class="nav nav-tabs card-header-tabs" role="tablist">
              <li class="nav-item">
                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#edit-profile" type="button">
                  <i class="fas fa-edit me-2"></i>แก้ไขโปรไฟล์
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#account-settings" type="button">
                  <i class="fas fa-cog me-2"></i>ตั้งค่าบัญชี
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#activity-log" type="button">
                  <i class="fas fa-history me-2"></i>กิจกรรมล่าสุด
                </button>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content">
              <!-- Edit Profile Tab -->
              <div class="tab-pane fade show active" id="edit-profile">
                <form @submit.prevent="updateProfile">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label">ชื่อ</label>
                      <input type="text" class="form-control" v-model="editForm.firstName" placeholder="ชื่อ">
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">นามสกุล</label>
                      <input type="text" class="form-control" v-model="editForm.lastName" placeholder="นามสกุล">
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">อีเมล</label>
                      <input type="email" class="form-control" v-model="editForm.email" placeholder="อีเมล">
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">เบอร์โทรศัพท์</label>
                      <input type="tel" class="form-control" v-model="editForm.phone" placeholder="เบอร์โทรศัพท์">
                    </div>
                    <div class="col-12 mb-3">
                      <label class="form-label">ที่อยู่</label>
                      <textarea class="form-control" rows="3" v-model="editForm.address" placeholder="ที่อยู่"></textarea>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">เมือง</label>
                      <input type="text" class="form-control" v-model="editForm.city" placeholder="เมือง">
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">รหัสไปรษณีย์</label>
                      <input type="text" class="form-control" v-model="editForm.zipCode" placeholder="รหัสไปรษณีย์">
                    </div>
                    <div class="col-12 mb-3">
                      <label class="form-label">เกี่ยวกับตัวเอง</label>
                      <textarea class="form-control" rows="4" v-model="editForm.bio" placeholder="แนะนำตัวเอง..."></textarea>
                    </div>
                  </div>
                  <div class="d-flex gap-2">
                    <button type="submit" class="btn btn-primary">
                      <i class="fas fa-save me-2"></i>บันทึกการเปลี่ยนแปลง
                    </button>
                    <button type="button" class="btn btn-outline-secondary" @click="resetForm">
                      <i class="fas fa-undo me-2"></i>รีเซ็ต
                    </button>
                  </div>
                </form>
              </div>

              <!-- Account Settings Tab -->
              <div class="tab-pane fade" id="account-settings">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-primary mb-3">
                      <i class="fas fa-shield-alt me-2"></i>ความปลอดภัย
                    </h6>
                    <div class="card border-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">เปลี่ยนรหัสผ่าน</h6>
                        <form @submit.prevent="changePassword">
                          <div class="mb-3">
                            <label class="form-label">รหัสผ่านปัจจุบัน</label>
                            <input type="password" class="form-control" v-model="passwordForm.currentPassword">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">รหัสผ่านใหม่</label>
                            <input type="password" class="form-control" v-model="passwordForm.newPassword">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">ยืนยันรหัสผ่านใหม่</label>
                            <input type="password" class="form-control" v-model="passwordForm.confirmPassword">
                          </div>
                          <button type="submit" class="btn btn-warning btn-sm">
                            <i class="fas fa-key me-2"></i>เปลี่ยนรหัสผ่าน
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-primary mb-3">
                      <i class="fas fa-bell me-2"></i>การแจ้งเตือน
                    </h6>
                    <div class="card border-light">
                      <div class="card-body">
                        <div class="form-check form-switch mb-3">
                          <input class="form-check-input" type="checkbox" v-model="notifications.email" id="emailNotif">
                          <label class="form-check-label" for="emailNotif">
                            การแจ้งเตือนทางอีเมล
                          </label>
                        </div>
                        <div class="form-check form-switch mb-3">
                          <input class="form-check-input" type="checkbox" v-model="notifications.push" id="pushNotif">
                          <label class="form-check-label" for="pushNotif">
                            การแจ้งเตือนแบบ Push
                          </label>
                        </div>
                        <div class="form-check form-switch mb-3">
                          <input class="form-check-input" type="checkbox" v-model="notifications.sms" id="smsNotif">
                          <label class="form-check-label" for="smsNotif">
                            การแจ้งเตือนทาง SMS
                          </label>
                        </div>
                        <button class="btn btn-primary btn-sm" @click="saveNotificationSettings">
                          <i class="fas fa-save me-2"></i>บันทึกการตั้งค่า
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Activity Log Tab -->
              <div class="tab-pane fade" id="activity-log">
                <h6 class="text-primary mb-3">
                  <i class="fas fa-history me-2"></i>กิจกรรมล่าสุด
                </h6>
                <div class="timeline">
                  <div v-for="(activity, index) in recentActivities" :key="index" 
                       class="timeline-item d-flex mb-3">
                    <div class="timeline-marker me-3">
                      <div class="rounded-circle d-flex align-items-center justify-content-center"
                           :class="activity.iconClass" style="width: 40px; height: 40px;">
                        <i :class="activity.icon" class="text-white"></i>
                      </div>
                    </div>
                    <div class="timeline-content flex-grow-1">
                      <div class="card border-light">
                        <div class="card-body py-2">
                          <h6 class="mb-1">{{ activity.title }}</h6>
                          <p class="text-muted mb-1 small">{{ activity.description }}</p>
                          <small class="text-muted">{{ activity.time }}</small>
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
import { ref, reactive, computed } from 'vue'
import { useAuth } from '../composables/useAuth'

const { user } = useAuth()

// Sample user data (in real app, this would come from API)
const userData = reactive({
  name: 'นายสมชาย ใจดี',
  email: 'somchai@example.com',
  role: 'ผู้ดูแลระบบ',
  joinDate: '2024-01-15',
  firstName: 'สมชาย',
  lastName: 'ใจดี',
  phone: '081-234-5678',
  address: '123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย',
  city: 'กรุงเทพมหานคร',
  zipCode: '10110',
  bio: 'เป็นผู้ดูแลระบบที่มีประสบการณ์ในการพัฒนาระบบและจัดการฐานข้อมูล มีความสนใจในเทคโนโลยีใหม่ๆ และการพัฒนาซอฟต์แวร์'
})

// Form data
const editForm = reactive({
  firstName: userData.firstName,
  lastName: userData.lastName,
  email: userData.email,
  phone: userData.phone,
  address: userData.address,
  city: userData.city,
  zipCode: userData.zipCode,
  bio: userData.bio
})

const passwordForm = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const notifications = reactive({
  email: true,
  push: true,
  sms: false
})

// Stats data
const stats = reactive({
  tasksCompleted: 42,
  projectsActive: 8,
  hoursWorked: 156,
  achievements: 12
})

// Recent activities
const recentActivities = ref([
  {
    icon: 'fas fa-sign-in-alt',
    iconClass: 'bg-success',
    title: 'เข้าสู่ระบบ',
    description: 'เข้าสู่ระบบจาก IP 192.168.1.100',
    time: '2 นาทีที่แล้ว'
  },
  {
    icon: 'fas fa-edit',
    iconClass: 'bg-primary',
    title: 'แก้ไขโปรไฟล์',
    description: 'อัปเดตข้อมูลส่วนตัว',
    time: '1 ชั่วโมงที่แล้ว'
  },
  {
    icon: 'fas fa-upload',
    iconClass: 'bg-info',
    title: 'อัปโหลดไฟล์',
    description: 'อัปโหลดรูปโปรไฟล์ใหม่',
    time: '3 ชั่วโมงที่แล้ว'
  },
  {
    icon: 'fas fa-cog',
    iconClass: 'bg-warning',
    title: 'เปลี่ยนการตั้งค่า',
    description: 'อัปเดตการตั้งค่าการแจ้งเตือน',
    time: '1 วันที่แล้ว'
  }
])

// Methods
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const updateProfile = () => {
  // Update user data
  Object.assign(userData, editForm)
  
  // Show success message (you can integrate with your notification system)
  alert('อัปเดตโปรไฟล์เรียบร้อยแล้ว!')
}

const resetForm = () => {
  Object.assign(editForm, {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    address: userData.address,
    city: userData.city,
    zipCode: userData.zipCode,
    bio: userData.bio
  })
}

const changePassword = () => {
  if (passwordForm.newPassword !== passwordForm.confirmPassword) {
    alert('รหัสผ่านใหม่ไม่ตรงกัน!')
    return
  }
  
  // Here you would call your API to change password
  alert('เปลี่ยนรหัสผ่านเรียบร้อยแล้ว!')
  
  // Reset form
  Object.assign(passwordForm, {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
}

const saveNotificationSettings = () => {
  // Here you would call your API to save notification preferences
  alert('บันทึกการตั้งค่าการแจ้งเตือนเรียบร้อยแล้ว!')
}

const changeProfilePicture = () => {
  // Here you would implement file upload functionality
  alert('คุณสามารถเพิ่มฟังก์ชันอัปโหลดรูปได้ที่นี่!')
}
</script>

<style scoped>
.profile-avatar {
  border: 4px solid rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.profile-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.timeline-item {
  position: relative;
}

.timeline-item:not(:last-child):before {
  content: '';
  position: absolute;
  left: 19px;
  top: 50px;
  height: calc(100% - 20px);
  width: 2px;
  background: #e9ecef;
  z-index: 0;
}

.timeline-marker {
  z-index: 1;
}

.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.nav-tabs .nav-link {
  border-radius: 0.5rem 0.5rem 0 0;
  border: none;
  color: #6c757d;
  background: transparent;
}

.nav-tabs .nav-link.active {
  background: white;
  color: #495057;
  border-bottom: 2px solid #007bff;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.form-control:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
