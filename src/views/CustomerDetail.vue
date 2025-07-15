<template>
  <div class="container-fluid p-4">
    <h2 class="mb-4">รายละเอียดลูกค้า</h2>
    <div class="text-center py-5">
      <i class="fas fa-user fa-3x text-muted mb-3"></i>
      <h5 class="text-muted">รายละเอียดลูกค้า ID: {{ $route.params.id }}</h5>
      <p class="text-muted">หน้านี้อยู่ในระหว่างการพัฒนา</p>
      <router-link to="/customers" class="btn btn-secondary">
        <i class="fas fa-arrow-left me-1"></i>กลับไปหน้าลูกค้า
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Customer detail page - placeholder
</script>
