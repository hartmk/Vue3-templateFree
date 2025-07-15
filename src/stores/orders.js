import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { ordersApi } from '../api'
import { swalUtils } from '../utils/swal'

export const useOrdersStore = defineStore('orders', () => {
  // State
  const orders = ref([])
  const currentOrder = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  // Getters
  const totalOrders = computed(() => orders.value.length)
  const pendingOrders = computed(() => orders.value.filter(order => order.status === 'pending').length)
  const completedOrders = computed(() => orders.value.filter(order => order.status === 'completed').length)
  const totalRevenue = computed(() => {
    return orders.value
      .filter(order => order.status === 'completed')
      .reduce((sum, order) => sum + order.total, 0)
  })

  // Actions
  const fetchOrders = async () => {
    try {
      isLoading.value = true
      error.value = null
      const data = await ordersApi.getOrders()
      orders.value = data
    } catch (err) {
      error.value = err.message
      await swalUtils.error('โหลดข้อมูลไม่สำเร็จ', 'ไม่สามารถโหลดรายการสั่งซื้อได้')
    } finally {
      isLoading.value = false
    }
  }

  const fetchOrderById = async (id) => {
    try {
      isLoading.value = true
      error.value = null
      const data = await ordersApi.getOrderById(id)
      currentOrder.value = data
      return data
    } catch (err) {
      error.value = err.message
      await swalUtils.error('โหลดข้อมูลไม่สำเร็จ', 'ไม่สามารถโหลดรายละเอียดคำสั่งซื้อได้')
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const updateOrderStatus = async (orderId, newStatus) => {
    const order = orders.value.find(o => o.id === orderId)
    if (!order) return false

    // Show confirmation dialog
    const result = await swalUtils.confirm(
      'เปลี่ยนสถานะคำสั่งซื้อ',
      `คุณต้องการเปลี่ยนสถานะคำสั่งซื้อ #${order.id} เป็น "${newStatus}" หรือไม่?`,
      'เปลี่ยนสถานะ',
      'ยกเลิก'
    )

    if (!result.isConfirmed) return false

    try {
      isLoading.value = true
      const updatedOrder = await ordersApi.updateOrderStatus(orderId, newStatus)
      
      // Update local state
      const index = orders.value.findIndex(o => o.id === orderId)
      if (index !== -1) {
        orders.value[index] = updatedOrder
      }
      
      if (currentOrder.value && currentOrder.value.id === orderId) {
        currentOrder.value = updatedOrder
      }

      await swalUtils.success('อัปเดตสำเร็จ!', `สถานะคำสั่งซื้อ #${orderId} ถูกเปลี่ยนเป็น "${newStatus}" แล้ว`)
      return true
    } catch (err) {
      error.value = err.message
      await swalUtils.error('อัปเดตไม่สำเร็จ', err.message)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const deleteOrder = async (orderId) => {
    const order = orders.value.find(o => o.id === orderId)
    if (!order) return false

    const result = await swalUtils.delete(
      'ลบคำสั่งซื้อ',
      `คุณต้องการลบคำสั่งซื้อ #${order.id} หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้`
    )

    if (!result.isConfirmed) return false

    try {
      isLoading.value = true
      await ordersApi.deleteOrder(orderId)
      
      // Remove from local state
      orders.value = orders.value.filter(o => o.id !== orderId)
      if (currentOrder.value && currentOrder.value.id === orderId) {
        currentOrder.value = null
      }

      await swalUtils.success('ลบสำเร็จ!', `คำสั่งซื้อ #${orderId} ถูกลบแล้ว`)
      return true
    } catch (err) {
      error.value = err.message
      await swalUtils.error('ลบไม่สำเร็จ', err.message)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const clearCurrentOrder = () => {
    currentOrder.value = null
  }

  const clearError = () => {
    error.value = null
  }

  return {
    // State
    orders,
    currentOrder,
    isLoading,
    error,
    
    // Getters
    totalOrders,
    pendingOrders,
    completedOrders,
    totalRevenue,
    
    // Actions
    fetchOrders,
    fetchOrderById,
    updateOrderStatus,
    deleteOrder,
    clearCurrentOrder,
    clearError
  }
})
