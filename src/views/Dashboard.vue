<template>
  <div class="dashboard-content container-fluid py-4 px-5">
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">กำลังโหลด...</span>
      </div>
      <p class="mt-3 text-muted">กำลังโหลดข้อมูล...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="alert alert-danger" role="alert">
      <i class="fas fa-exclamation-triangle me-2"></i>
      {{ error }}
      <button class="btn btn-outline-danger btn-sm ms-2" @click="loadDashboardData">
        <i class="fas fa-redo me-1"></i>ลองใหม่
      </button>
    </div>

    <!-- Dashboard Content -->
    <div v-else>
      <!-- Quick Actions with SweetAlert2 Demo -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">การแจ้งเตือนแบบต่างๆ (SweetAlert2 Demo)</h5>
              <div class="btn-group" role="group">
                <button class="btn btn-success" @click="showSuccessAlert">
                  <i class="fas fa-check me-1"></i>สำเร็จ
                </button>
                <button class="btn btn-danger" @click="showErrorAlert">
                  <i class="fas fa-times me-1"></i>ข้อผิดพลาด
                </button>
                <button class="btn btn-warning" @click="showWarningAlert">
                  <i class="fas fa-exclamation-triangle me-1"></i>คำเตือน
                </button>
                <button class="btn btn-info" @click="showInfoAlert">
                  <i class="fas fa-info me-1"></i>ข้อมูล
                </button>
                <button class="btn btn-primary" @click="showConfirmAlert">
                  <i class="fas fa-question me-1"></i>ยืนยัน
                </button>
                <button class="btn btn-secondary" @click="showInputAlert">
                  <i class="fas fa-edit me-1"></i>กรอกข้อมูล
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="row mb-4">
        <StatCard v-for="stat in stats" :key="stat.title" :stat="stat" />
      </div>

      <!-- Charts Row -->
      <div class="row mb-4">
        <SalesChart />
        <ProductChart />
      </div>

      <!-- Recent Activity -->
      <div class="row">
        <RecentOrders :orders="recentOrders" />
        <RecentActivities :activities="recentActivities" />
      </div>
    </div>
  </div>
</template>

<script setup>
import StatCard from '../components/StatCard.vue'
import SalesChart from '../components/SalesChart.vue'
import ProductChart from '../components/ProductChart.vue'
import RecentOrders from '../components/RecentOrders.vue'
import RecentActivities from '../components/RecentActivities.vue'
import { useDashboard } from '../composables/useDashboard'
import { swalUtils } from '../utils/swal'

const {
  stats,
  recentOrders,
  recentActivities,
  loading,
  error,
  loadDashboardData
} = useDashboard()

// SweetAlert2 Demo Functions
const showSuccessAlert = () => {
  swalUtils.success('ดำเนินการสำเร็จ!', 'ข้อมูลถูกบันทึกเรียบร้อยแล้ว')
}

const showErrorAlert = () => {
  swalUtils.error('เกิดข้อผิดพลาด!', 'ไม่สามารถดำเนินการได้ กรุณาลองใหม่อีกครั้ง')
}

const showWarningAlert = () => {
  swalUtils.warning('คำเตือน!', 'กรุณาตรวจสอบข้อมูลให้ครบถ้วน')
}

const showInfoAlert = () => {
  swalUtils.info('ข้อมูล', 'นี่คือข้อมูลสำคัญที่ควรทราบ')
}

const showConfirmAlert = async () => {
  const result = await swalUtils.confirm(
    'ยืนยันการดำเนินการ', 
    'คุณต้องการดำเนินการต่อหรือไม่?',
    'ดำเนินการ',
    'ยกเลิก'
  )
  
  if (result.isConfirmed) {
    swalUtils.success('ยืนยันแล้ว!', 'การดำเนินการเสร็จสิ้น')
  } else {
    swalUtils.info('ยกเลิกแล้ว', 'การดำเนินการถูกยกเลิก')
  }
}

const showInputAlert = async () => {
  const result = await swalUtils.input('กรอกชื่อของคุณ', 'ชื่อ-นามสกุล')
  
  if (result.isConfirmed && result.value) {
    swalUtils.success('สวัสดี!', `ยินดีต้อนรับคุณ ${result.value}`)
  }
}
</script>
