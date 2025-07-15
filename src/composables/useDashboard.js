import { ref, onMounted } from 'vue'
import { dashboardApi, apiHelpers } from '../api'

export function useDashboard() {
  const stats = ref([])
  const recentOrders = ref([])
  const recentActivities = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadDashboardData = async () => {
    loading.value = true
    error.value = null
    
    try {
      // Load all dashboard data concurrently
      const [statsData, ordersData, activitiesData] = await Promise.all([
        dashboardApi.getStats(),
        dashboardApi.getRecentOrders(),
        dashboardApi.getRecentActivities()
      ])
      
      stats.value = statsData
      recentOrders.value = ordersData
      recentActivities.value = activitiesData
    } catch (err) {
      error.value = apiHelpers.formatError(err)
      console.error('Error loading dashboard data:', err)
    } finally {
      loading.value = false
    }
  }

  const refreshStats = async () => {
    try {
      const statsData = await dashboardApi.getStats()
      stats.value = statsData
    } catch (err) {
      error.value = apiHelpers.formatError(err)
    }
  }

  const refreshOrders = async () => {
    try {
      const ordersData = await dashboardApi.getRecentOrders()
      recentOrders.value = ordersData
    } catch (err) {
      error.value = apiHelpers.formatError(err)
    }
  }

  const refreshActivities = async () => {
    try {
      const activitiesData = await dashboardApi.getRecentActivities()
      recentActivities.value = activitiesData
    } catch (err) {
      error.value = apiHelpers.formatError(err)
    }
  }

  // Auto-load data when composable is used
  onMounted(() => {
    loadDashboardData()
  })

  return {
    // State
    stats,
    recentOrders,
    recentActivities,
    loading,
    error,
    
    // Methods
    loadDashboardData,
    refreshStats,
    refreshOrders,
    refreshActivities
  }
}
