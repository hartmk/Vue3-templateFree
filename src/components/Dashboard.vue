<template>
  <div>
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
import StatCard from './StatCard.vue'
import SalesChart from './SalesChart.vue'
import ProductChart from './ProductChart.vue'
import RecentOrders from './RecentOrders.vue'
import RecentActivities from './RecentActivities.vue'
import { useDashboard } from '../composables/useDashboard'

const {
  stats,
  recentOrders,
  recentActivities,
  loading,
  error,
  loadDashboardData
} = useDashboard()
</script>
