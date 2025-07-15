import { ref, computed, onMounted } from 'vue'
import { productsApi, apiHelpers } from '../api'
import { swalUtils } from '../utils/swal'

export function useProducts() {
  const products = ref([])
  const categories = ref([])
  const loading = ref(false)
  const error = ref(null)
  
  // Filter states
  const searchQuery = ref('')
  const selectedCategory = ref('')
  const selectedStatus = ref('')
  const sortBy = ref('name')
  const viewMode = ref('grid')
  const currentPage = ref(1)
  const itemsPerPage = ref(12)

  const loadProducts = async () => {
    loading.value = true
    error.value = null
    
    try {
      const [productsData, categoriesData] = await Promise.all([
        productsApi.getProducts(),
        productsApi.getCategories()
      ])
      
      products.value = productsData
      categories.value = categoriesData
    } catch (err) {
      error.value = apiHelpers.formatError(err)
      console.error('Error loading products:', err)
    } finally {
      loading.value = false
    }
  }

  const filteredProducts = computed(() => {
    let filtered = products.value

    // Filter by search query
    if (searchQuery.value) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory.value) {
      filtered = filtered.filter(product => product.category === selectedCategory.value)
    }

    // Filter by status
    if (selectedStatus.value) {
      filtered = filtered.filter(product => {
        const status = getStockStatusKey(product.stock)
        return status === selectedStatus.value
      })
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy.value) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price':
          return a.price - b.price
        case 'stock':
          return b.stock - a.stock
        case 'date':
          return b.createdAt - a.createdAt
        default:
          return 0
      }
    })

    return filtered
  })

  const totalProducts = computed(() => products.value.length)
  const inStockProducts = computed(() => products.value.filter(p => p.stock > 10).length)
  const lowStockProducts = computed(() => products.value.filter(p => p.stock > 0 && p.stock <= 10).length)
  const outOfStockProducts = computed(() => products.value.filter(p => p.stock === 0).length)
  const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value))

  // Helper functions
  const getStockStatus = (stock) => {
    if (stock === 0) return 'หมดสต็อก'
    if (stock <= 10) return 'สต็อกต่ำ'
    return 'ในสต็อก'
  }

  const getStockStatusKey = (stock) => {
    if (stock === 0) return 'out-of-stock'
    if (stock <= 10) return 'low-stock'
    return 'in-stock'
  }

  const getStockBadgeClass = (stock) => {
    if (stock === 0) return 'bg-danger'
    if (stock <= 10) return 'bg-warning'
    return 'bg-success'
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB'
    }).format(amount)
  }

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date)
  }

  // CRUD operations
  const createProduct = async (productData) => {
    try {
      loading.value = true
      const newProduct = await productsApi.createProduct(productData)
      products.value.push(newProduct)
      
      // Show success message
      await swalUtils.success('เพิ่มสินค้าสำเร็จ!', `สินค้า "${newProduct.name}" ถูกเพิ่มแล้ว`)
      
      return newProduct
    } catch (err) {
      error.value = apiHelpers.formatError(err)
      await swalUtils.error('เพิ่มสินค้าไม่สำเร็จ', err.message)
      throw err
    } finally {
      loading.value = false
    }
  }

  const updateProduct = async (id, productData) => {
    try {
      loading.value = true
      const updatedProduct = await productsApi.updateProduct(id, productData)
      const index = products.value.findIndex(p => p.id === parseInt(id))
      if (index !== -1) {
        products.value[index] = updatedProduct
      }
      
      // Show success message
      await swalUtils.success('อัปเดตสินค้าสำเร็จ!', `สินค้า "${updatedProduct.name}" ถูกอัปเดตแล้ว`)
      
      return updatedProduct
    } catch (err) {
      error.value = apiHelpers.formatError(err)
      await swalUtils.error('อัปเดตสินค้าไม่สำเร็จ', err.message)
      throw err
    } finally {
      loading.value = false
    }
  }

  const deleteProduct = async (productId) => {
    const product = products.value.find(p => p.id === productId)
    if (!product) return false

    // Show confirmation dialog
    const result = await swalUtils.delete(
      'ลบสินค้า',
      `คุณต้องการลบสินค้า "${product.name}" หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้`
    )

    if (!result.isConfirmed) return false
    
    try {
      loading.value = true
      await productsApi.deleteProduct(productId)
      products.value = products.value.filter(p => p.id !== productId)
      
      // Show success message
      await swalUtils.success('ลบสินค้าสำเร็จ!', `สินค้า "${product.name}" ถูกลบแล้ว`)
      
      return true
    } catch (err) {
      error.value = apiHelpers.formatError(err)
      await swalUtils.error('ลบสินค้าไม่สำเร็จ', err.message)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Auto-load data when composable is used
  onMounted(() => {
    loadProducts()
  })

  return {
    // State
    products,
    categories,
    loading,
    error,
    
    // Filter states
    searchQuery,
    selectedCategory,
    selectedStatus,
    sortBy,
    viewMode,
    currentPage,
    itemsPerPage,
    
    // Computed
    filteredProducts,
    totalProducts,
    inStockProducts,
    lowStockProducts,
    outOfStockProducts,
    totalPages,
    
    // Helper functions
    getStockStatus,
    getStockStatusKey,
    getStockBadgeClass,
    formatCurrency,
    formatDate,
    
    // CRUD methods
    loadProducts,
    createProduct,
    updateProduct,
    deleteProduct
  }
}
