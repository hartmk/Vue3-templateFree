import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'

export function useAuth() {
  const authStore = useAuthStore()

  // Return store state and actions
  return {
    // State
    user: computed(() => authStore.user),
    token: computed(() => authStore.token),
    isLoading: computed(() => authStore.isLoading),
    error: computed(() => authStore.error),
    
    // Getters
    isAuthenticated: computed(() => authStore.isAuthenticated),
    userRole: computed(() => authStore.userRole),
    userName: computed(() => authStore.userName),
    
    // Actions
    login: authStore.login,
    logout: authStore.logout,
    clearError: authStore.clearError,
    initializeAuth: authStore.initializeAuth,
    
    // Legacy compatibility
    isAdmin: computed(() => authStore.userRole === 'admin'),
    isManager: computed(() => authStore.userRole === 'manager'),
    hasRole: (role) => authStore.userRole === role,
    hasPermission: (permission) => {
      if (!authStore.user) return false
      
      const rolePermissions = {
        admin: ['read', 'write', 'delete', 'manage_users'],
        manager: ['read', 'write', 'delete'],
        user: ['read']
      }
      
      return rolePermissions[authStore.userRole]?.includes(permission) || false
    }
  }
}
