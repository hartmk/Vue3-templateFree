<template>
  <footer class="app-footer mt-auto py-3">
    <div class="container-fluid px-4">
      <div class="row align-items-center">
        <div class="col-md-6">
          <span class="text-muted">© 2025 ระบบจัดการ Dashboard. สงวนลิขสิทธิ์.</span>
        </div>
        <div class="col-md-6 text-md-end">
          <span class="text-muted me-3">v1.0.0</span>
          <span class="text-muted">
            <i class="fas fa-heart text-danger"></i>
            Made with Vue 3 + Bootstrap
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Simple footer component
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-top: 1px solid #dee2e6;
  font-size: 0.875rem;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.05);
}

.text-muted {
  color: #6c757d !important;
}

.text-danger {
  color: #dc3545 !important;
}

.fas.fa-heart {
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .col-md-6.text-md-end {
    text-align: center !important;
    margin-top: 0.5rem;
  }
  
  .app-footer {
    text-align: center;
  }
}
</style>
