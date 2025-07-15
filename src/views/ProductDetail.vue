<template>
  <div class="container-fluid p-5">
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb" class="mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/dashboard" class="text-decoration-none">
            <i class="fas fa-home me-1"></i>หน้าหลัก
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/products" class="text-decoration-none">สินค้า</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product?.name || 'รายละเอียดสินค้า' }}
        </li>
      </ol>
    </nav>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;"></div>
      <p class="mt-3 text-muted">กำลังโหลดข้อมูลสินค้า...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="alert alert-danger" role="alert">
      <i class="fas fa-exclamation-triangle me-2"></i>
      {{ error }}
      <div class="mt-3">
        <button class="btn btn-outline-danger me-2" @click="loadProduct">
          <i class="fas fa-redo me-1"></i>ลองใหม่
        </button>
        <router-link to="/products" class="btn btn-secondary">
          <i class="fas fa-arrow-left me-1"></i>กลับไปหน้าสินค้า
        </router-link>
      </div>
    </div>

    <!-- Product Detail Content -->
    <div v-else-if="product">
      <!-- Header Actions -->
      <div class="row mb-4">
        <div class="col-lg-8">
          <h2 class="mb-1">{{ product.name }}</h2>
          <p class="text-muted mb-0">SKU: {{ product.sku }}</p>
        </div>
        <div class="col-lg-4 text-end">
          <button class="btn btn-primary me-2" @click="editProduct">
            <i class="fas fa-edit me-2"></i>แก้ไข
          </button>
          <button class="btn btn-danger" @click="deleteProduct">
            <i class="fas fa-trash me-2"></i>ลบ
          </button>
        </div>
      </div>

      <!-- Product Info Cards -->
      <div class="row">
        <!-- Product Image & Info -->
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <div class="product-image-container">
              <img :src="product.image" class="main-product-image" :alt="product.name">
            </div>
            <div class="card-body">
              <div class="mb-3">
                <span class="badge" :class="getStockBadgeClass(product.stock)" style="font-size: 0.9rem;">
                  {{ getStockStatus(product.stock) }}
                </span>
              </div>
              <h4 class="text-primary mb-3">{{ formatCurrency(product.price) }}</h4>
              <div class="row text-center">
                <div class="col-4">
                  <div class="border-end">
                    <h5 class="mb-1">{{ product.stock }}</h5>
                    <small class="text-muted">คงเหลือ</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="border-end">
                    <h5 class="mb-1">{{ product.sold || 0 }}</h5>
                    <small class="text-muted">ขายแล้ว</small>
                  </div>
                </div>
                <div class="col-4">
                  <h5 class="mb-1">{{ product.views || 0 }}</h5>
                  <small class="text-muted">ยอดดู</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="col-lg-8 mb-4">
          <div class="card h-100">
            <div class="card-header">
              <h5 class="mb-0">รายละเอียดสินค้า</h5>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-sm-3"><strong>ชื่อสินค้า:</strong></div>
                <div class="col-sm-9">{{ product.name }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3"><strong>หมวดหมู่:</strong></div>
                <div class="col-sm-9">
                  <span class="badge bg-secondary">{{ product.category }}</span>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3"><strong>คำอธิบาย:</strong></div>
                <div class="col-sm-9">{{ product.description }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3"><strong>ราคา:</strong></div>
                <div class="col-sm-9 text-primary fw-bold">{{ formatCurrency(product.price) }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3"><strong>วันที่เพิ่ม:</strong></div>
                <div class="col-sm-9">{{ formatDate(product.createdAt) }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3"><strong>อัปเดตล่าสุด:</strong></div>
                <div class="col-sm-9">{{ formatDate(product.updatedAt || product.createdAt) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sales History Chart -->
      <div class="row">
        <div class="col-12 mb-4">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="mb-0">ประวัติการขาย</h5>
              <div class="btn-group btn-group-sm">
                <button class="btn btn-outline-secondary active">7 วัน</button>
                <button class="btn btn-outline-secondary">30 วัน</button>
                <button class="btn btn-outline-secondary">90 วัน</button>
              </div>
            </div>
            <div class="card-body">
              <canvas id="salesChart" height="100"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-0">สินค้าที่เกี่ยวข้อง</h5>
            </div>
            <div class="card-body">
              <div class="row" v-if="relatedProducts.length > 0">
                <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="col-lg-3 col-md-4 col-sm-6 mb-3">
                  <div class="card h-100 product-card" @click="goToProduct(relatedProduct.id)">
                    <div class="related-image-container">
                      <img :src="relatedProduct.image" class="card-img-top related-product-image" :alt="relatedProduct.name">
                    </div>
                    <div class="card-body p-3">
                      <h6 class="card-title">{{ relatedProduct.name }}</h6>
                      <p class="card-text text-primary fw-bold">{{ formatCurrency(relatedProduct.price) }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-4">
                <i class="fas fa-box-open fa-3x text-muted mb-3"></i>
                <p class="text-muted">ไม่มีสินค้าที่เกี่ยวข้อง</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { productsApi } from '../api'

const route = useRoute()
const router = useRouter()

const product = ref(null)
const relatedProducts = ref([])
const loading = ref(false)
const error = ref(null)

// Get product ID from route params
const productId = computed(() => route.params.id)

// Helper functions
const getStockStatus = (stock) => {
  if (stock === 0) return 'หมดสต็อก'
  if (stock <= 10) return 'สต็อกต่ำ'
  return 'ในสต็อก'
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
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date))
}

// Load product data
const loadProduct = async () => {
  loading.value = true
  error.value = null

  try {
    const [productData, productsData] = await Promise.all([
      productsApi.getProduct(productId.value),
      productsApi.getProducts()
    ])

    if (!productData) {
      throw new Error('ไม่พบสินค้าที่ระบุ')
    }

    product.value = productData

    // Get related products (same category, excluding current product)
    relatedProducts.value = productsData
      .filter(p => p.category === productData.category && p.id !== productData.id)
      .slice(0, 4)

  } catch (err) {
    error.value = err.message || 'เกิดข้อผิดพลาดในการโหลดข้อมูล'
    console.error('Error loading product:', err)
  } finally {
    loading.value = false
  }
}

// Navigation functions
const goToProduct = (id) => {
  router.push(`/products/${id}`)
}

const editProduct = () => {
  // TODO: Implement edit functionality
  console.log('Edit product:', product.value)
}

const deleteProduct = async () => {
  if (confirm(`คุณต้องการลบสินค้า "${product.value.name}" หรือไม่?`)) {
    try {
      await productsApi.deleteProduct(productId.value)
      router.push('/products')
    } catch (err) {
      alert('เกิดข้อผิดพลาดในการลบสินค้า')
    }
  }
}

// Load data when component mounts
onMounted(() => {
  loadProduct()
})

// Watch route changes (for when navigating between product details)
watch(() => route.params.id, () => {
  if (route.name === 'ProductDetail') {
    loadProduct()
  }
})
</script>

<style scoped>
.product-image-container {
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 0.375rem;
}

.main-product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.main-product-image:hover {
  transform: scale(1.05);
}

.related-image-container {
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.related-product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.product-card {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #dee2e6;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.product-card:hover .related-product-image {
  transform: scale(1.08);
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}

@media (max-width: 768px) {
  .product-image-container {
    height: 250px;
  }
  
  .related-image-container {
    height: 150px;
  }
  
  .col-lg-4.text-end {
    text-align: center !important;
    margin-top: 1rem;
  }
  
  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
  .btn:last-child {
    margin-bottom: 0;
  }
}
</style>
