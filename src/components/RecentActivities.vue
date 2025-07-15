<template>
  <div class="col-lg-4 mb-4">
    <div class="card">
      <div class="card-header bg-transparent">
        <h5 class="card-title mb-0">กิจกรรมล่าสุด</h5>
      </div>
      <div class="card-body">
        <div class="activity-timeline">
          <div v-for="activity in activities" :key="activity.id" class="d-flex mb-3">
            <div class="flex-shrink-0">
              <div class="activity-icon rounded-circle d-flex align-items-center justify-content-center" :class="activity.type">
                <i :class="activity.icon"></i>
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <h6 class="mb-1">{{ activity.title }}</h6>
              <p class="text-muted small mb-0">{{ activity.description }}</p>
              <small class="text-muted">{{ activity.time }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  activities: Array
})
</script>
