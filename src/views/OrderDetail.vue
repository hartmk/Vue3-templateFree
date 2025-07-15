<template>
    <div class="container-fluid px-5 py-4">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="mb-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/dashboard" class="text-decoration-none">
                        <i class="fas fa-home me-1"></i>หน้าหลัก
                    </router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="/orders" class="text-decoration-none">คำสั่งซื้อ</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    คำสั่งซื้อ #{{ order?.orderNumber || route.params.id }}
                </li>
            </ol>
        </nav>

        <!-- Loading State -->
        <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;"></div>
            <p class="mt-3 text-muted">กำลังโหลดข้อมูลคำสั่งซื้อ...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="alert alert-danger" role="alert">
            <i class="fas fa-exclamation-triangle me-2"></i>
            {{ error }}
            <div class="mt-3">
                <button class="btn btn-outline-danger me-2" @click="loadOrder">
                    <i class="fas fa-redo me-1"></i>ลองใหม่
                </button>
                <router-link to="/orders" class="btn btn-secondary">
                    <i class="fas fa-arrow-left me-1"></i>กลับไปหน้าคำสั่งซื้อ
                </router-link>
            </div>
        </div>

        <!-- Order Detail Content -->
        <div v-else-if="order">
            <!-- Header -->
            <div class="row mb-4">
                <div class="col-lg-8">
                    <h2 class="mb-1">คำสั่งซื้อ #{{ order.orderNumber }}</h2>
                    <p class="text-muted mb-0">
                        <i class="fas fa-calendar me-1"></i>{{ formatDate(order.date) }}
                    </p>
                </div>
                <div class="col-lg-4 text-end">
                    <span class="badge fs-6 me-2" :class="getStatusBadgeClass(order.status)">
                        {{ getStatusText(order.status) }}
                    </span>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary btn-sm" @click="printOrder">
                            <i class="fas fa-print me-1"></i>พิมพ์
                        </button>
                        <button class="btn btn-outline-success btn-sm" @click="editOrder">
                            <i class="fas fa-edit me-1"></i>แก้ไข
                        </button>
                    </div>
                </div>
            </div>

            <!-- Order Information -->
            <div class="row mb-4">
                <!-- Customer Information -->
                <div class="col-lg-4 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5 class="mb-0">
                                <i class="fas fa-user me-2"></i>ข้อมูลลูกค้า
                            </h5>
                        </div>
                        <div class="card-body">
                            <h6 class="fw-bold">{{ order.customerName }}</h6>
                            <p class="mb-2">
                                <i class="fas fa-envelope me-2 text-muted"></i>
                                {{ order.customerEmail }}
                            </p>
                            <p class="mb-2">
                                <i class="fas fa-phone me-2 text-muted"></i>
                                {{ order.customerPhone || 'ไม่ระบุ' }}
                            </p>
                            <div v-if="order.shippingAddress">
                                <hr>
                                <h6 class="fw-bold mb-2">ที่อยู่จัดส่ง</h6>
                                <p class="mb-0 small">{{ order.shippingAddress }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="col-lg-4 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5 class="mb-0">
                                <i class="fas fa-info-circle me-2"></i>สรุปคำสั่งซื้อ
                            </h5>
                        </div>
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-6">หมายเลขคำสั่ง:</div>
                                <div class="col-6 fw-bold">#{{ order.orderNumber }}</div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-6">วันที่สั่ง:</div>
                                <div class="col-6">{{ formatDate(order.date) }}</div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-6">จำนวนสินค้า:</div>
                                <div class="col-6">{{ totalItems }} รายการ</div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-6">วิธีการชำระเงิน:</div>
                                <div class="col-6">{{ order.paymentMethod || 'เงินสด' }}</div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-6 fw-bold">ยอดรวมทั้งสิ้น:</div>
                                <div class="col-6 fw-bold text-success">{{ formatCurrency(order.total) }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Status Timeline -->
                <div class="col-lg-4 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5 class="mb-0">
                                <i class="fas fa-clock me-2"></i>สถานะการดำเนินการ
                            </h5>
                        </div>
                        <div class="card-body">
                            <div class="timeline">
                                <div v-for="(step, index) in orderSteps" :key="index" class="timeline-item"
                                    :class="{ active: step.completed, current: step.current }">
                                    <div class="timeline-marker">
                                        <i :class="step.icon"></i>
                                    </div>
                                    <div class="timeline-content">
                                        <h6 class="mb-1">{{ step.title }}</h6>
                                        <small class="text-muted">{{ step.date || 'รอดำเนินการ' }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Order Items -->
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">
                                <i class="fas fa-shopping-bag me-2"></i>รายการสินค้า
                            </h5>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-hover mb-0">
                                    <thead class="bg-light">
                                        <tr>
                                            <th>สินค้า</th>
                                            <th class="text-center">จำนวน</th>
                                            <th class="text-end">ราคาต่อหน่วย</th>
                                            <th class="text-end">รวม</th>
                                            <th class="text-center">การจัดการ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in order.items" :key="item.id" class="align-middle">
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <img :src="item.image || 'https://via.placeholder.com/50'"
                                                        class="me-3 rounded"
                                                        style="width: 50px; height: 50px; object-fit: cover;"
                                                        :alt="item.name">
                                                    <div>
                                                        <h6 class="mb-1">{{ item.name }}</h6>
                                                        <small class="text-muted">SKU: {{ item.sku || 'N/A' }}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                <span class="badge bg-light text-dark">{{ item.quantity }}</span>
                                            </td>
                                            <td class="text-end">{{ formatCurrency(item.price) }}</td>
                                            <td class="text-end fw-bold">{{ formatCurrency(item.price * item.quantity)
                                                }}</td>
                                            <td class="text-center">
                                                <router-link :to="`/products/${item.productId || item.id}`"
                                                    class="btn btn-outline-primary btn-sm" title="ดูรายละเอียดสินค้า">
                                                    <i class="fas fa-eye"></i>
                                                </router-link>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="bg-light">
                                        <tr>
                                            <td colspan="3" class="text-end fw-bold">ยอดรวมทั้งสิ้น:</td>
                                            <td class="text-end fw-bold text-success fs-5">{{
                                                formatCurrency(order.total) }}</td>
                                            <td></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="row mt-4">
                <div class="col-12 text-center">
                    <button class="btn btn-success me-2" @click="updateStatus('processing')"
                        v-if="order.status === 'pending'">
                        <i class="fas fa-play me-1"></i>เริ่มดำเนินการ
                    </button>
                    <button class="btn btn-primary me-2" @click="updateStatus('shipped')"
                        v-if="order.status === 'processing'">
                        <i class="fas fa-shipping-fast me-1"></i>จัดส่งสินค้า
                    </button>
                    <button class="btn btn-success me-2" @click="updateStatus('delivered')"
                        v-if="order.status === 'shipped'">
                        <i class="fas fa-check me-1"></i>ยืนยันการส่งมอบ
                    </button>
                    <button class="btn btn-danger me-2" @click="updateStatus('cancelled')"
                        v-if="['pending', 'processing'].includes(order.status)">
                        <i class="fas fa-times me-1"></i>ยกเลิกคำสั่งซื้อ
                    </button>
                    <router-link to="/orders" class="btn btn-outline-secondary">
                        <i class="fas fa-arrow-left me-1"></i>กลับไปหน้าคำสั่งซื้อ
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const order = ref(null)
const loading = ref(false)
const error = ref(null)

// Mock order data
const mockOrders = [
    {
        id: 1,
        orderNumber: '000001',
        customerName: 'สมชาย ใจดี',
        customerEmail: 'somchai@email.com',
        customerPhone: '081-234-5678',
        shippingAddress: '123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองตัน กรุงเทพมหานคร 10110',
        date: new Date('2024-01-15'),
        items: [
            {
                id: 1,
                name: 'iPhone 15 Pro',
                quantity: 1,
                price: 39900,
                sku: 'IPH15PRO',
                image: 'https://via.placeholder.com/50'
            },
            {
                id: 2,
                name: 'AirPods Pro',
                quantity: 1,
                price: 8990,
                sku: 'AIRPRO',
                image: 'https://via.placeholder.com/50'
            }
        ],
        total: 48890,
        status: 'delivered',
        paymentMethod: 'บัตรเครดิต'
    }
]

// Computed properties
const totalItems = computed(() =>
    order.value ? order.value.items.reduce((sum, item) => sum + item.quantity, 0) : 0
)

const orderSteps = computed(() => {
    const steps = [
        { title: 'ได้รับคำสั่งซื้อ', icon: 'fas fa-receipt', completed: true, date: formatDate(order.value?.date) },
        { title: 'กำลังดำเนินการ', icon: 'fas fa-cog', completed: false },
        { title: 'จัดส่งสินค้า', icon: 'fas fa-shipping-fast', completed: false },
        { title: 'ส่งมอบเรียบร้อย', icon: 'fas fa-check-circle', completed: false }
    ]

    if (!order.value) return steps

    const statusIndex = {
        'pending': 0,
        'processing': 1,
        'shipped': 2,
        'delivered': 3,
        'cancelled': -1
    }

    const currentIndex = statusIndex[order.value.status] || 0

    steps.forEach((step, index) => {
        if (index < currentIndex) {
            step.completed = true
        } else if (index === currentIndex) {
            step.current = true
            step.completed = true
        }
    })

    return steps
})

// Helper functions
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB'
    }).format(amount)
}

const formatDate = (date) => {
    if (!date) return ''
    return new Intl.DateTimeFormat('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(date))
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

// Load order data
const loadOrder = async () => {
    loading.value = true
    error.value = null

    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        const orderId = parseInt(route.params.id)
        const foundOrder = mockOrders.find(o => o.id === orderId)

        if (!foundOrder) {
            throw new Error('ไม่พบคำสั่งซื้อที่ระบุ')
        }

        order.value = foundOrder
    } catch (err) {
        error.value = err.message || 'เกิดข้อผิดพลาดในการโหลดข้อมูล'
        console.error('Error loading order:', err)
    } finally {
        loading.value = false
    }
}

// Actions
const updateStatus = (newStatus) => {
    if (confirm(`คุณต้องการเปลี่ยนสถานะเป็น "${getStatusText(newStatus)}" หรือไม่?`)) {
        order.value.status = newStatus
        // TODO: Update status via API
        console.log('Status updated to:', newStatus)
    }
}

const editOrder = () => {
    console.log('Edit order:', order.value)
    // TODO: Implement edit functionality
}

const printOrder = () => {
    window.print()
}

onMounted(() => {
    loadOrder()
})
</script>

<style scoped>
.timeline {
    position: relative;
}

.timeline-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;
}

.timeline-item:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 15px;
    top: 30px;
    bottom: -16px;
    width: 2px;
    background-color: #dee2e6;
}

.timeline-item.active::after {
    background-color: #28a745;
}

.timeline-marker {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #dee2e6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    position: relative;
    z-index: 1;
}

.timeline-item.active .timeline-marker {
    background-color: #28a745;
    color: white;
}

.timeline-item.current .timeline-marker {
    background-color: #007bff;
    color: white;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
    }

    70% {
        box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
    }
}

.breadcrumb-item+.breadcrumb-item::before {
    content: ">";
}

@media print {

    .btn,
    .breadcrumb {
        display: none !important;
    }
}
</style>
