<template>
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card stat-card" :class="stat.type">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h6 class="card-title text-uppercase opacity-75">{{ stat.title }}</h6>
            <h2 class="mb-0">{{ stat.value }}</h2>
            <small class="opacity-75">
              <i :class="stat.trend.icon" class="me-1"></i>
              {{ stat.trend.value }}% จากเดือนที่แล้ว
            </small>
          </div>
          <div class="fs-1 opacity-25">
            <i :class="stat.icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stat: Object
})
</script>
