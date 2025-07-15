// API service for fetching data
import { authApi } from './auth'

const API_BASE_URL = '/api'

// Generic fetch function with error handling
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    throw error
  }
}

// Dashboard API
export const dashboardApi = {
  // Get dashboard statistics
  getStats: () => fetchData('stats.json').then(data => data.stats),
  
  // Get recent orders
  getRecentOrders: () => fetchData('orders.json').then(data => 
    data.orders.map(order => ({
      ...order,
      date: new Date(order.date)
    }))
  ),
  
  // Get recent activities
  getRecentActivities: () => fetchData('activities.json').then(data => data.activities)
}

// Products API
export const productsApi = {
  // Get all products
  getProducts: () => fetchData('products.json').then(data => 
    data.products.map(product => ({
      ...product,
      createdAt: new Date(product.createdAt)
    }))
  ),
  
  // Get product categories
  getCategories: () => fetchData('products.json').then(data => data.categories),
  
  // Get single product by ID
  getProduct: (id) => fetchData('products.json').then(data => 
    data.products.find(product => product.id === parseInt(id))
  ),
  
  // Simulate API calls for CRUD operations
  createProduct: (productData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          ...productData, 
          id: Date.now(),
          createdAt: new Date()
        })
      }, 500)
    })
  },
  
  updateProduct: (id, productData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          ...productData, 
          id: parseInt(id),
          updatedAt: new Date()
        })
      }, 500)
    })
  },
  
  deleteProduct: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'Product deleted successfully' })
      }, 500)
    })
  }
}

// Orders API
export const ordersApi = {
  // Get all orders
  getOrders: () => fetchData('orders.json').then(data => 
    data.orders.map(order => ({
      ...order,
      date: new Date(order.date)
    }))
  ),
  
  // Get single order by ID
  getOrder: (id) => fetchData('orders.json').then(data => 
    data.orders.find(order => order.id === id)
  )
}

// Generic API helper functions
export const apiHelpers = {
  // Simulate loading delay
  delay: (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms)),
  
  // Format error messages
  formatError: (error) => {
    if (error.message) return error.message
    if (typeof error === 'string') return error
    return 'เกิดข้อผิดพลาดในการโหลดข้อมูล'
  }
}

// Export auth API
export { authApi }
