<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">กำลังโหลด...</span>
      </div>
      <p class="mt-3 text-muted">กำลังโหลดข้อมูลสินค้า...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="alert alert-danger" role="alert">
      <i class="fas fa-exclamation-triangle me-2"></i>
      {{ error }}
      <button class="btn btn-outline-danger btn-sm ms-2" @click="loadProducts">
        <i class="fas fa-redo me-1"></i>ลองใหม่
      </button>
    </div>

    <!-- Products Content -->
    <div v-else>
      <!-- Header Section -->
      <div class="row mb-4">
        <div class="col-lg-6">
          <h2 class="mb-0">จัดการสินค้า</h2>
          <p class="text-muted">จัดการสินค้าทั้งหมดในระบบ</p>
        </div>
        <div class="col-lg-6 text-end">
          <button class="btn btn-primary me-2" @click="showAddModal = true">
            <i class="fas fa-plus me-2"></i>เพิ่มสินค้าใหม่
          </button>
          <button class="btn btn-outline-secondary" @click="exportProducts">
            <i class="fas fa-download me-2"></i>ส่งออกข้อมูล
          </button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="row mb-4">
        <div class="col-xl-3 col-md-6 mb-3">
          <div class="card stat-card primary">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="card-title text-uppercase opacity-75">สินค้าทั้งหมด</h6>
                  <h2 class="mb-0">{{ totalProducts }}</h2>
                </div>
                <div class="fs-1 opacity-25">
                  <i class="fas fa-boxes"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-3">
          <div class="card stat-card success">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="card-title text-uppercase opacity-75">ในสต็อก</h6>
                  <h2 class="mb-0">{{ inStockProducts }}</h2>
                </div>
                <div class="fs-1 opacity-25">
                  <i class="fas fa-check-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-3">
          <div class="card stat-card warning">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="card-title text-uppercase opacity-75">สต็อกต่ำ</h6>
                  <h2 class="mb-0">{{ lowStockProducts }}</h2>
                </div>
                <div class="fs-1 opacity-25">
                  <i class="fas fa-exclamation-triangle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-3">
          <div class="card stat-card info">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="card-title text-uppercase opacity-75">หมดสต็อก</h6>
                  <h2 class="mb-0">{{ outOfStockProducts }}</h2>
                </div>
                <div class="fs-1 opacity-25">
                  <i class="fas fa-times-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters and Search -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-lg-4 mb-3 mb-lg-0">
              <div class="input-group">
                <span class="input-group-text">
                  <i class="fas fa-search"></i>
                </span>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="ค้นหาสินค้า..." 
                  v-model="searchQuery"
                >
              </div>
            </div>
            <div class="col-lg-2 mb-3 mb-lg-0">
              <select class="form-select" v-model="selectedCategory">
                <option value="">หมวดหมู่ทั้งหมด</option>
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>
            <div class="col-lg-2 mb-3 mb-lg-0">
              <select class="form-select" v-model="selectedStatus">
                <option value="">สถานะทั้งหมด</option>
                <option value="in-stock">ในสต็อก</option>
                <option value="low-stock">สต็อกต่ำ</option>
                <option value="out-of-stock">หมดสต็อก</option>
              </select>
            </div>
            <div class="col-lg-2 mb-3 mb-lg-0">
              <select class="form-select" v-model="sortBy">
                <option value="name">เรียงตามชื่อ</option>
                <option value="price">เรียงตามราคา</option>
                <option value="stock">เรียงตามสต็อก</option>
                <option value="date">เรียงตามวันที่</option>
              </select>
            </div>
            <div class="col-lg-2">
              <div class="btn-group w-100" role="group">
                <button 
                  type="button" 
                  class="btn btn-outline-secondary" 
                  :class="{ active: viewMode === 'grid' }"
                  @click="viewMode = 'grid'"
                >
                  <i class="fas fa-th"></i>
                </button>
                <button 
                  type="button" 
                  class="btn btn-outline-secondary"
                  :class="{ active: viewMode === 'list' }"
                  @click="viewMode = 'list'"
                >
                  <i class="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Products Grid View -->
      <div v-if="viewMode === 'grid'" class="row">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id" 
          class="col-xl-3 col-lg-4 col-md-6 mb-4"
        >
          <div class="card product-card h-100">
            <div class="position-relative">
              <img :src="product.image" class="card-img-top product-image" :alt="product.name">
              <div class="position-absolute top-0 end-0 m-2">
                <span class="badge" :class="getStockBadgeClass(product.stock)">
                  {{ getStockStatus(product.stock) }}
                </span>
              </div>
            </div>
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">{{ product.name }}</h6>
              <p class="card-text text-muted small">{{ product.category }}</p>
              <p class="card-text">{{ product.description }}</p>
              <div class="mt-auto">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="h5 mb-0 text-primary">{{ formatCurrency(product.price) }}</span>
                  <small class="text-muted">สต็อก: {{ product.stock }}</small>
                </div>
                <div class="btn-group w-100" role="group">
                  <button class="btn btn-outline-primary btn-sm" @click="editProduct(product)">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn-outline-info btn-sm" @click="viewProduct(product)">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="btn btn-outline-danger btn-sm" @click="deleteProduct(product.id)">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Products List View -->
      <div v-else class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>รูปภาพ</th>
                  <th>ชื่อสินค้า</th>
                  <th>หมวดหมู่</th>
                  <th>ราคา</th>
                  <th>สต็อก</th>
                  <th>สถานะ</th>
                  <th>วันที่เพิ่ม</th>
                  <th>การจัดการ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in filteredProducts" :key="product.id">
                  <td>
                    <img :src="product.image" class="product-thumbnail" :alt="product.name">
                  </td>
                  <td>
                    <div>
                      <strong>{{ product.name }}</strong>
                      <br>
                      <small class="text-muted">{{ product.sku }}</small>
                    </div>
                  </td>
                  <td>{{ product.category }}</td>
                  <td class="text-primary fw-bold">{{ formatCurrency(product.price) }}</td>
                  <td>{{ product.stock }}</td>
                  <td>
                    <span class="badge" :class="getStockBadgeClass(product.stock)">
                      {{ getStockStatus(product.stock) }}
                    </span>
                  </td>
                  <td>{{ formatDate(product.createdAt) }}</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button class="btn btn-outline-primary btn-sm" @click="editProduct(product)">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button class="btn btn-outline-info btn-sm" @click="viewProduct(product)">
                        <i class="fas fa-eye"></i>
                      </button>
                      <button class="btn btn-outline-danger btn-sm" @click="deleteProduct(product.id)">
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="d-flex justify-content-between align-items-center mt-4">
        <div>
          <small class="text-muted">
            แสดง {{ Math.min((currentPage - 1) * itemsPerPage + 1, totalProducts) }} - 
            {{ Math.min(currentPage * itemsPerPage, totalProducts) }} 
            จาก {{ totalProducts }} รายการ
          </small>
        </div>
        <nav>
          <ul class="pagination pagination-sm mb-0">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" @click.prevent="currentPage = currentPage - 1">ก่อนหน้า</a>
            </li>
            <li 
              class="page-item" 
              v-for="page in totalPages" 
              :key="page"
              :class="{ active: currentPage === page }"
            >
              <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="#" @click.prevent="currentPage = currentPage + 1">ถัดไป</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProducts } from '../composables/useProducts'

const showAddModal = ref(false)

const {
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
} = useProducts()

const editProduct = (product) => {
  console.log('Edit product:', product)
  // TODO: Implement edit functionality
}

const viewProduct = (product) => {
  console.log('View product:', product)
  // TODO: Implement view functionality
}

const exportProducts = () => {
  console.log('Export products')
  // TODO: Implement export functionality
}
</script>

<style scoped>
.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.product-image {
  height: 200px;
  object-fit: cover;
}

.product-thumbnail {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
}

.btn-group .btn {
  border-radius: 0;
}

.btn-group .btn:first-child {
  border-radius: 6px 0 0 6px;
}

.btn-group .btn:last-child {
  border-radius: 0 6px 6px 0;
}

.pagination .page-link {
  color: #667eea;
}

.pagination .page-item.active .page-link {
  background-color: #667eea;
  border-color: #667eea;
}
</style>
