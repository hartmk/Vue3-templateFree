<template>
  <div class="col-lg-8 mb-4">
    <div class="card">
      <div class="card-header bg-transparent">
        <h5 class="card-title mb-0">ออร์เดอร์ล่าสุด</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>หมายเลขออร์เดอร์</th>
                <th>ลูกค้า</th>
                <th>จำนวนเงิน</th>
                <th>สถานะ</th>
                <th>วันที่</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.id">
                <td><strong>{{ order.id }}</strong></td>
                <td>{{ order.customer }}</td>
                <td>{{ formatCurrency(order.amount) }}</td>
                <td>
                  <span class="badge" :class="getStatusClass(order.status)">
                    {{ order.status }}
                  </span>
                </td>
                <td>{{ formatDate(order.date) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  orders: Array
})

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

const getStatusClass = (status) => {
  const statusClasses = {
    'รอชำระเงิน': 'bg-warning',
    'ชำระแล้ว': 'bg-success',
    'จัดส่งแล้ว': 'bg-info',
    'เสร็จสิ้น': 'bg-primary',
    'ยกเลิก': 'bg-danger'
  }
  return statusClasses[status] || 'bg-secondary'
}
</script>
