import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authApi } from '../api/auth'
import Swal from 'sweetalert2'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const token = ref(localStorage.getItem('token'))
  const isLoading = ref(false)
  const error = ref(null)

  // Getters
  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const userRole = computed(() => user.value?.role || null)
  const userName = computed(() => user.value?.name || user.value?.username)

  // Actions
  const login = async (credentials) => {
    try {
      isLoading.value = true
      error.value = null

      console.log('Login attempt with credentials:', { username: credentials.username })
      
      const response = await authApi.login(credentials)
      
      console.log('Login response:', response)
      
      if (response.success) {
        token.value = response.token
        user.value = response.user
        
        // Save to localStorage
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))

        console.log('Login successful, user:', response.user)

        // Show success alert
        await Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ!',
          text: `ยินดีต้อนรับ ${response.user.name}`,
          timer: 2000,
          showConfirmButton: false,
          toast: true,
          position: 'top-end'
        })

        return response
      } else {
        throw new Error(response.message || 'เข้าสู่ระบบไม่สำเร็จ')
      }
    } catch (err) {
      console.error('Login error:', err)
      error.value = err.message
      
      // Show error alert
      await Swal.fire({
        icon: 'error',
        title: 'เข้าสู่ระบบไม่สำเร็จ',
        text: err.message,
        confirmButtonText: 'ตกลง'
      })
      
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    try {
      const result = await Swal.fire({
        icon: 'warning',
        title: 'ออกจากระบบ',
        text: 'คุณต้องการออกจากระบบหรือไม่?',
        showCancelButton: true,
        confirmButtonText: 'ออกจากระบบ',
        cancelButtonText: 'ยกเลิก',
        confirmButtonColor: '#d33'
      })

      if (result.isConfirmed) {
        // Clear state
        user.value = null
        token.value = null
        error.value = null

        // Clear localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        // Show success message
        await Swal.fire({
          icon: 'success',
          title: 'ออกจากระบบสำเร็จ',
          timer: 1500,
          showConfirmButton: false,
          toast: true,
          position: 'top-end'
        })

        return true
      }
      return false
    } catch (err) {
      console.error('Logout error:', err)
      return false
    }
  }

  const initializeAuth = () => {
    console.log('Initializing auth store...')
    const savedToken = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')

    console.log('Saved token:', savedToken)
    console.log('Saved user:', savedUser)

    if (savedToken && savedUser) {
      try {
        token.value = savedToken
        user.value = JSON.parse(savedUser)
        console.log('Auth restored from localStorage:', { token: token.value, user: user.value })
      } catch (err) {
        console.error('Error parsing saved user data:', err)
        clearAuth()
      }
    } else {
      console.log('No saved auth data found')
    }
  }

  const clearAuth = () => {
    user.value = null
    token.value = null
    error.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const clearError = () => {
    error.value = null
  }

  // Initialize auth on store creation
  initializeAuth()

  return {
    // State
    user,
    token,
    isLoading,
    error,
    
    // Getters
    isAuthenticated,
    userRole,
    userName,
    
    // Actions
    login,
    logout,
    initializeAuth,
    clearAuth,
    clearError
  }
})
