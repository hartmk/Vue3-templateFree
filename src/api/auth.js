// Authentication API
export const authApi = {
  async login(credentials) {
    try {
      console.log('Auth API login called with:', credentials)
      
      // Mock user data - ใช้ข้อมูลจำลองแทน
      const mockUsers = [
        {
          id: 1,
          username: "admin",
          email: "admin@example.com",
          password: "admin123",
          name: "ผู้ดูแลระบบ",
          role: "admin"
        },
        {
          id: 2,
          username: "manager",
          email: "manager@example.com", 
          password: "manager123",
          name: "ผู้จัดการ",
          role: "manager"
        },
        {
          id: 3,
          username: "user",
          email: "user@example.com",
          password: "user123", 
          name: "ผู้ใช้งาน",
          role: "user"
        }
      ]
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const user = mockUsers.find(u => 
        (u.username === credentials.username || u.email === credentials.username) &&
        u.password === credentials.password
      )
      
      console.log('User found:', user)
      
      if (!user) {
        throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
      }
      
      // Generate fake token
      const token = btoa(JSON.stringify({ userId: user.id, timestamp: Date.now() }))
      
      // Remove password from user object
      const { password, ...userWithoutPassword } = user
      
      const result = {
        success: true,
        user: userWithoutPassword,
        token,
        expiresIn: 24 * 60 * 60 * 1000 // 24 hours
      }
      
      console.log('Login result:', result)
      return result
    } catch (error) {
      console.error('Auth API error:', error)
      throw new Error(error.message || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ')
    }
  },

  async logout() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return { success: true }
  },

  async getProfile(token) {
    try {
      if (!token) {
        throw new Error('ไม่พบ token')
      }

      // Decode token to get user ID
      const decoded = JSON.parse(atob(token))
      const userId = decoded.userId
      
      const response = await fetch('/api/auth.json')
      const { users } = await response.json()
      
      const user = users.find(u => u.id === userId)
      
      if (!user) {
        throw new Error('ไม่พบข้อมูลผู้ใช้')
      }
      
      // Remove password from user object
      const { password, ...userWithoutPassword } = user
      
      return userWithoutPassword
    } catch (error) {
      throw new Error('ไม่สามารถโหลดข้อมูลผู้ใช้ได้')
    }
  },

  async refreshToken(token) {
    try {
      const decoded = JSON.parse(atob(token))
      const newToken = btoa(JSON.stringify({ 
        userId: decoded.userId, 
        timestamp: Date.now() 
      }))
      
      return {
        token: newToken,
        expiresIn: 24 * 60 * 60 * 1000
      }
    } catch (error) {
      throw new Error('ไม่สามารถต่ออายุ token ได้')
    }
  }
}
