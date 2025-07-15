<template>
    <div class="orders-page container-fluid py-4 px-5">
        <div>
            <!-- Header Section -->
            <div class="row mb-4">
                <div class="col-lg-6">
                    <h2 class="mb-0">คำสั่งซื้อ</h2>
                    <p class="text-muted">จัดการคำสั่งซื้อทั้งหมด</p>
                </div>
                <div class="col-lg-6 text-end">
                    <button class="btn btn-primary me-2">
                        <i class="fas fa-plus me-2"></i>เพิ่มคำสั่งซื้อ
                    </button>
                    <button class="btn btn-outline-secondary">
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
                                    <h6 class="card-title text-uppercase opacity-75">คำสั่งซื้อทั้งหมด</h6>
                                    <h2 class="mb-0">{{ orders.length }}</h2>
                                </div>
                                <div class="fs-1 opacity-25">
                                    <i class="fas fa-shopping-cart"></i>
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
                                    <h6 class="card-title text-uppercase opacity-75">สำเร็จแล้ว</h6>
                                    <h2 class="mb-0">{{ completedOrders }}</h2>
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
                                    <h6 class="card-title text-uppercase opacity-75">รอดำเนินการ</h6>
                                    <h2 class="mb-0">{{ pendingOrders }}</h2>
                                </div>
                                <div class="fs-1 opacity-25">
                                    <i class="fas fa-clock"></i>
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
                                    <h6 class="card-title text-uppercase opacity-75">ยอดขายวันนี้</h6>
                                    <h2 class="mb-0">{{ formatCurrency(todaySales) }}</h2>
                                </div>
                                <div class="fs-1 opacity-25">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Filters -->
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="fas fa-search"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="ค้นหาคำสั่งซื้อ..."
                                    v-model="searchQuery">
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <select class="form-select" v-model="selectedStatus">
                                <option value="">สถานะทั้งหมด</option>
                                <option value="pending">รอดำเนินการ</option>
                                <option value="processing">กำลังดำเนินการ</option>
                                <option value="shipped">จัดส่งแล้ว</option>
                                <option value="delivered">ส่งมอบแล้ว</option>
                                <option value="cancelled">ยกเลิก</option>
                            </select>
                        </div>
                        <div class="col-lg-2">
                            <flat-pickr
                                v-model="dateFilter"
                                :config="datePickerConfig"
                                class="form-control"
                                placeholder="เลือกวันที่..."
                            ></flat-pickr>
                        </div>
                        <div class="col-lg-2">
                            <select class="form-select" v-model="sortBy">
                                <option value="date">เรียงตามวันที่</option>
                                <option value="amount">เรียงตามยอดเงิน</option>
                                <option value="customer">เรียงตามลูกค้า</option>
                            </select>
                        </div>
                        <div class="col-lg-2">
                            <button class="btn btn-outline-secondary w-100" @click="resetFilters">
                                <i class="fas fa-undo me-1"></i>รีเซ็ต
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Orders Table -->
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>หมายเลขคำสั่ง</th>
                                    <th>ลูกค้า</th>
                                    <th>วันที่สั่ง</th>
                                    <th>สินค้า</th>
                                    <th>ยอดรวม</th>
                                    <th>สถานะ</th>
                                    <th>การจัดการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in filteredOrders" :key="order.id" class="cursor-pointer"
                                    @click="goToOrderDetail(order.id)">
                                    <td>
                                        <strong class="text-primary">#{{ order.orderNumber }}</strong>
                                    </td>
                                    <td>
                                        <div>
                                            <strong>{{ order.customerName }}</strong>
                                            <br>
                                            <small class="text-muted">{{ order.customerEmail }}</small>
                                        </div>
                                    </td>
                                    <td>{{ formatDate(order.date) }}</td>
                                    <td>
                                        <span class="badge bg-light text-dark">{{ order.items.length }} รายการ</span>
                                    </td>
                                    <td class="text-success fw-bold">{{ formatCurrency(order.total) }}</td>
                                    <td>
                                        <span class="badge" :class="getStatusBadgeClass(order.status)">
                                            {{ getStatusText(order.status) }}
                                        </span>
                                    </td>
                                    <td>
                                        <div class="btn-group" role="group">
                                            <button class="btn btn-outline-primary btn-sm"
                                                @click.stop="viewOrder(order)" title="ดู">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            <button class="btn btn-outline-success btn-sm"
                                                @click.stop="editOrder(order)" title="แก้ไข">
                                                <i class="fas fa-edit"></i>
                                            </button>
                                            <button class="btn btn-outline-danger btn-sm"
                                                @click.stop="deleteOrder(order.id)" title="ลบ">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Empty State -->
                    <div v-if="filteredOrders.length === 0" class="text-center py-5">
                        <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                        <h5 class="text-muted">ไม่พบคำสั่งซื้อ</h5>
                        <p class="text-muted">ลองเปลี่ยนเงื่อนไขการค้นหา หรือเพิ่มคำสั่งซื้อใหม่</p>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="d-flex justify-content-between align-items-center mt-4" v-if="filteredOrders.length > 0">
                <div>
                    <small class="text-muted">
                        แสดง {{ Math.min((currentPage - 1) * itemsPerPage + 1, filteredOrders.length) }} -
                        {{ Math.min(currentPage * itemsPerPage, filteredOrders.length) }}
                        จาก {{ filteredOrders.length }} รายการ
                    </small>
                </div>
                <nav>
                    <ul class="pagination pagination-sm mb-0">
                        <li class="page-item" :class="{ disabled: currentPage === 1 }">
                            <a class="page-link" href="#" @click.prevent="currentPage = currentPage - 1">ก่อนหน้า</a>
                        </li>
                        <li class="page-item" v-for="page in totalPages" :key="page"
                            :class="{ active: currentPage === page }">
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
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'
import { Thai } from 'flatpickr/dist/l10n/th.js'

const router = useRouter()

// Flatpickr configuration
const datePickerConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  allowInput: true,
  locale: Thai
})

// Mock orders data
const orders = ref([
    {
        id: 1,
        orderNumber: '000001',
        customerName: 'สมชาย ใจดี',
        customerEmail: 'somchai@email.com',
        date: new Date('2024-01-15'),
        items: [
            { name: 'iPhone 15 Pro', quantity: 1, price: 39900 },
            { name: 'AirPods Pro', quantity: 1, price: 8990 }
        ],
        total: 48890,
        status: 'delivered'
    },
    {
        id: 2,
        orderNumber: '000002',
        customerName: 'สมหญิง สวยงาม',
        customerEmail: 'somying@email.com',
        date: new Date('2024-01-14'),
        items: [
            { name: 'MacBook Air M3', quantity: 1, price: 42900 }
        ],
        total: 42900,
        status: 'shipped'
    },
    {
        id: 3,
        orderNumber: '000003',
        customerName: 'วิทยา เก่งมาก',
        customerEmail: 'wittaya@email.com',
        date: new Date('2024-01-13'),
        items: [
            { name: 'iPad Air', quantity: 2, price: 19900 },
            { name: 'Apple Pencil', quantity: 2, price: 3790 }
        ],
        total: 47380,
        status: 'processing'
    }
])

// Filter states
const searchQuery = ref('')
const selectedStatus = ref('')
const dateFilter = ref('')
const sortBy = ref('date')
const currentPage = ref(1)
const itemsPerPage = ref(10)

// Computed properties
const filteredOrders = computed(() => {
    let filtered = orders.value

    // Search filter
    if (searchQuery.value) {
        filtered = filtered.filter(order =>
            order.orderNumber.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            order.customerName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            order.customerEmail.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    }

    // Status filter
    if (selectedStatus.value) {
        filtered = filtered.filter(order => order.status === selectedStatus.value)
    }

    // Date filter
    if (dateFilter.value) {
        const filterDate = new Date(dateFilter.value)
        filtered = filtered.filter(order =>
            order.date.toDateString() === filterDate.toDateString()
        )
    }

    // Sort
    filtered.sort((a, b) => {
        switch (sortBy.value) {
            case 'date':
                return b.date - a.date
            case 'amount':
                return b.total - a.total
            case 'customer':
                return a.customerName.localeCompare(b.customerName)
            default:
                return 0
        }
    })

    return filtered
})

const completedOrders = computed(() =>
    orders.value.filter(order => order.status === 'delivered').length
)

const pendingOrders = computed(() =>
    orders.value.filter(order => ['pending', 'processing'].includes(order.status)).length
)

const todaySales = computed(() => {
    const today = new Date()
    return orders.value
        .filter(order => order.date.toDateString() === today.toDateString())
        .reduce((sum, order) => sum + order.total, 0)
})

const totalPages = computed(() =>
    Math.ceil(filteredOrders.value.length / itemsPerPage.value)
)

// Helper functions
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
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date)
}

const getStatusText = (status) => {
    const statusMap = {
        pending: 'รอดำเนินการ',
        processing: 'กำลังดำเนินการ',
        shipped: 'จัดส่งแล้ว',
        delivered: 'ส่งมอบแล้ว',
        cancelled: 'ยกเลิก'
    }
    return statusMap[status] || status
}

const getStatusBadgeClass = (status) => {
    const classMap = {
        pending: 'bg-warning',
        processing: 'bg-info',
        shipped: 'bg-primary',
        delivered: 'bg-success',
        cancelled: 'bg-danger'
    }
    return classMap[status] || 'bg-secondary'
}

// Actions
const goToOrderDetail = (orderId) => {
    router.push(`/orders/${orderId}`)
}

const viewOrder = (order) => {
    router.push(`/orders/${order.id}`)
}

const editOrder = (order) => {
    console.log('Edit order:', order)
    // TODO: Implement edit functionality
}

const deleteOrder = (orderId) => {
    if (confirm('คุณต้องการลบคำสั่งซื้อนี้หรือไม่?')) {
        const index = orders.value.findIndex(order => order.id === orderId)
        if (index !== -1) {
            orders.value.splice(index, 1)
        }
    }
}

const resetFilters = () => {
    searchQuery.value = ''
    selectedStatus.value = ''
    dateFilter.value = ''
    sortBy.value = 'date'
    currentPage.value = 1
}

onMounted(() => {
    // Load orders data
    console.log('Orders component mounted')
})
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}

.cursor-pointer:hover {
    background-color: rgba(0, 0, 0, 0.025);
}

.stat-card {
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
}

.table th {
    font-weight: 600;
    color: #6c757d;
}

.pagination .page-link {
    color: #667eea;
}

.pagination .page-item.active .page-link {
    background-color: #667eea;
    border-color: #667eea;
}
</style>
