<template>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-12">
        <!-- Header Section -->
        <div class="mb-4">
          <h2 class="mb-1">
            <i class="fas fa-square text-primary me-2"></i>
            Buttons & Badges
          </h2>
          <p class="text-muted mb-0">ตัวอย่างการใช้งาน Buttons และ Badges ทั้งหมดของ Bootstrap 5</p>
        </div>

        <!-- Basic Buttons -->
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-palette text-primary me-2"></i>
                  Basic Buttons
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">ปุ่มพื้นฐานในสีต่างๆ ของ Bootstrap</p>
                <div class="d-flex flex-wrap gap-2 mb-4">
                  <button type="button" class="btn btn-primary">Primary</button>
                  <button type="button" class="btn btn-secondary">Secondary</button>
                  <button type="button" class="btn btn-success">Success</button>
                  <button type="button" class="btn btn-danger">Danger</button>
                  <button type="button" class="btn btn-warning">Warning</button>
                  <button type="button" class="btn btn-info">Info</button>
                  <button type="button" class="btn btn-light">Light</button>
                  <button type="button" class="btn btn-dark">Dark</button>
                  <button type="button" class="btn btn-link">Link</button>
                </div>
                
                <div class="bg-light p-3 rounded">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;button type="button" class="btn btn-primary"&gt;Primary&lt;/button&gt;<br>
                    &lt;button type="button" class="btn btn-success"&gt;Success&lt;/button&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Outline Buttons -->
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-circle-o text-success me-2"></i>
                  Outline Buttons
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">ปุ่มแบบ outline มีเฉพาะขอบ</p>
                <div class="d-flex flex-wrap gap-2 mb-4">
                  <button type="button" class="btn btn-outline-primary">Primary</button>
                  <button type="button" class="btn btn-outline-secondary">Secondary</button>
                  <button type="button" class="btn btn-outline-success">Success</button>
                  <button type="button" class="btn btn-outline-danger">Danger</button>
                  <button type="button" class="btn btn-outline-warning">Warning</button>
                  <button type="button" class="btn btn-outline-info">Info</button>
                  <button type="button" class="btn btn-outline-light">Light</button>
                  <button type="button" class="btn btn-outline-dark">Dark</button>
                </div>
                
                <div class="bg-light p-3 rounded">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;button type="button" class="btn btn-outline-primary"&gt;Primary&lt;/button&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Button Sizes -->
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-expand-arrows-alt text-warning me-2"></i>
                  Button Sizes
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">ขนาดของปุ่มต่างๆ</p>
                <div class="d-flex flex-column align-items-start gap-3">
                  <button type="button" class="btn btn-primary btn-lg">Large Button</button>
                  <button type="button" class="btn btn-primary">Default Button</button>
                  <button type="button" class="btn btn-primary btn-sm">Small Button</button>
                </div>
                
                <div class="bg-light p-3 rounded mt-4">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;button class="btn btn-primary btn-lg"&gt;Large&lt;/button&gt;<br>
                    &lt;button class="btn btn-primary btn-sm"&gt;Small&lt;/button&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>

          <!-- Button States -->
          <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-toggle-on text-info me-2"></i>
                  Button States
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">สถานะต่างๆ ของปุ่ม</p>
                <div class="d-flex flex-column align-items-start gap-3">
                  <button type="button" class="btn btn-primary">Normal State</button>
                  <button type="button" class="btn btn-primary" disabled>Disabled</button>
                  <button type="button" class="btn btn-primary active">Active State</button>
                  <div class="spinner-border spinner-border-sm text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                
                <div class="bg-light p-3 rounded mt-4">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;button class="btn btn-primary" disabled&gt;Disabled&lt;/button&gt;<br>
                    &lt;button class="btn btn-primary active"&gt;Active&lt;/button&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Button Groups -->
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-layer-group text-purple me-2"></i>
                  Button Groups
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">การจัดกลุ่มปุ่มแบบต่างๆ</p>
                
                <div class="mb-4">
                  <h6>Basic Group:</h6>
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary">Left</button>
                    <button type="button" class="btn btn-outline-primary">Middle</button>
                    <button type="button" class="btn btn-outline-primary">Right</button>
                  </div>
                </div>
                
                <div class="mb-4">
                  <h6>Toolbar:</h6>
                  <div class="btn-toolbar" role="toolbar">
                    <div class="btn-group me-2" role="group">
                      <button type="button" class="btn btn-primary">1</button>
                      <button type="button" class="btn btn-primary">2</button>
                      <button type="button" class="btn btn-primary">3</button>
                    </div>
                    <div class="btn-group me-2" role="group">
                      <button type="button" class="btn btn-secondary">4</button>
                      <button type="button" class="btn btn-secondary">5</button>
                    </div>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-info">6</button>
                    </div>
                  </div>
                </div>
                
                <div class="mb-4">
                  <h6>Vertical Group:</h6>
                  <div class="btn-group-vertical" role="group">
                    <button type="button" class="btn btn-outline-success">Button 1</button>
                    <button type="button" class="btn btn-outline-success">Button 2</button>
                    <button type="button" class="btn btn-outline-success">Button 3</button>
                  </div>
                </div>
                
                <div class="bg-light p-3 rounded">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;div class="btn-group" role="group"&gt;<br>
                    &nbsp;&nbsp;&lt;button class="btn btn-outline-primary"&gt;Left&lt;/button&gt;<br>
                    &nbsp;&nbsp;&lt;button class="btn btn-outline-primary"&gt;Right&lt;/button&gt;<br>
                    &lt;/div&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Icon Buttons -->
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-icons text-danger me-2"></i>
                  Icon Buttons
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">ปุ่มที่มีไอคอน</p>
                
                <div class="mb-4">
                  <h6>Icon + Text:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <button type="button" class="btn btn-primary">
                      <i class="fas fa-download me-2"></i>Download
                    </button>
                    <button type="button" class="btn btn-success">
                      <i class="fas fa-check me-2"></i>Save
                    </button>
                    <button type="button" class="btn btn-danger">
                      <i class="fas fa-trash me-2"></i>Delete
                    </button>
                    <button type="button" class="btn btn-warning">
                      <i class="fas fa-edit me-2"></i>Edit
                    </button>
                  </div>
                </div>
                
                <div class="mb-4">
                  <h6>Icon Only:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <button type="button" class="btn btn-primary">
                      <i class="fas fa-home"></i>
                    </button>
                    <button type="button" class="btn btn-secondary">
                      <i class="fas fa-search"></i>
                    </button>
                    <button type="button" class="btn btn-success">
                      <i class="fas fa-plus"></i>
                    </button>
                    <button type="button" class="btn btn-info">
                      <i class="fas fa-cog"></i>
                    </button>
                  </div>
                </div>
                
                <div class="mb-4">
                  <h6>Rounded Icon Buttons:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <button type="button" class="btn btn-primary rounded-circle" style="width: 45px; height: 45px;">
                      <i class="fas fa-heart"></i>
                    </button>
                    <button type="button" class="btn btn-danger rounded-circle" style="width: 45px; height: 45px;">
                      <i class="fas fa-times"></i>
                    </button>
                    <button type="button" class="btn btn-success rounded-circle" style="width: 45px; height: 45px;">
                      <i class="fas fa-check"></i>
                    </button>
                  </div>
                </div>
                
                <div class="bg-light p-3 rounded">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;button class="btn btn-primary"&gt;<br>
                    &nbsp;&nbsp;&lt;i class="fas fa-download me-2"&gt;&lt;/i&gt;Download<br>
                    &lt;/button&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Basic Badges -->
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-tag text-success me-2"></i>
                  Basic Badges
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">แท็กและป้ายกำกับในสีต่างๆ</p>
                
                <div class="mb-4">
                  <h6>Standard Badges:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <span class="badge bg-primary">Primary</span>
                    <span class="badge bg-secondary">Secondary</span>
                    <span class="badge bg-success">Success</span>
                    <span class="badge bg-danger">Danger</span>
                    <span class="badge bg-warning text-dark">Warning</span>
                    <span class="badge bg-info text-dark">Info</span>
                    <span class="badge bg-light text-dark">Light</span>
                    <span class="badge bg-dark">Dark</span>
                  </div>
                </div>
                
                <div class="mb-4">
                  <h6>Rounded Pills:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <span class="badge rounded-pill bg-primary">Primary</span>
                    <span class="badge rounded-pill bg-secondary">Secondary</span>
                    <span class="badge rounded-pill bg-success">Success</span>
                    <span class="badge rounded-pill bg-danger">Danger</span>
                    <span class="badge rounded-pill bg-warning text-dark">Warning</span>
                    <span class="badge rounded-pill bg-info text-dark">Info</span>
                    <span class="badge rounded-pill bg-light text-dark">Light</span>
                    <span class="badge rounded-pill bg-dark">Dark</span>
                  </div>
                </div>
                
                <div class="bg-light p-3 rounded">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;span class="badge bg-primary"&gt;Primary&lt;/span&gt;<br>
                    &lt;span class="badge rounded-pill bg-success"&gt;Success&lt;/span&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Badge Examples -->
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-bell text-warning me-2"></i>
                  Notification Badges
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">แบดจ์สำหรับการแจ้งเตือน</p>
                
                <div class="d-flex flex-column gap-3">
                  <div class="d-flex align-items-center">
                    <button type="button" class="btn btn-primary position-relative">
                      Inbox
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                      </span>
                    </button>
                  </div>
                  
                  <div class="d-flex align-items-center">
                    <button type="button" class="btn btn-secondary position-relative">
                      Messages
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                        5
                      </span>
                    </button>
                  </div>
                  
                  <div class="d-flex align-items-center">
                    <span class="fs-4">
                      Profile 
                      <span class="badge bg-success ms-2">Online</span>
                    </span>
                  </div>
                  
                  <div class="d-flex align-items-center">
                    <h5>
                      Shopping Cart 
                      <span class="badge bg-info ms-2">3 items</span>
                    </h5>
                  </div>
                </div>
                
                <div class="bg-light p-3 rounded mt-4">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;button class="btn btn-primary position-relative"&gt;<br>
                    &nbsp;&nbsp;Inbox<br>
                    &nbsp;&nbsp;&lt;span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"&gt;99+&lt;/span&gt;<br>
                    &lt;/button&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>

          <!-- Status Badges -->
          <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-info-circle text-info me-2"></i>
                  Status Badges
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">แบดจ์สำหรับแสดงสถานะ</p>
                
                <div class="d-flex flex-column gap-3">
                  <div class="d-flex justify-content-between align-items-center p-3 border rounded">
                    <span>Order #12345</span>
                    <span class="badge bg-success">Completed</span>
                  </div>
                  
                  <div class="d-flex justify-content-between align-items-center p-3 border rounded">
                    <span>Order #12346</span>
                    <span class="badge bg-warning text-dark">Pending</span>
                  </div>
                  
                  <div class="d-flex justify-content-between align-items-center p-3 border rounded">
                    <span>Order #12347</span>
                    <span class="badge bg-danger">Cancelled</span>
                  </div>
                  
                  <div class="d-flex justify-content-between align-items-center p-3 border rounded">
                    <span>Order #12348</span>
                    <span class="badge bg-info">Processing</span>
                  </div>
                  
                  <div class="d-flex justify-content-between align-items-center p-3 border rounded">
                    <span>Order #12349</span>
                    <span class="badge bg-secondary">Draft</span>
                  </div>
                </div>
                
                <div class="bg-light p-3 rounded mt-4">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;span class="badge bg-success"&gt;Completed&lt;/span&gt;<br>
                    &lt;span class="badge bg-warning text-dark"&gt;Pending&lt;/span&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Badges -->
        <div class="row g-4 mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-mouse-pointer text-primary me-2"></i>
                  Interactive Badges
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">แบดจ์ที่สามารถคลิกได้</p>
                
                <div class="mb-4">
                  <h6>Clickable Badges:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <a href="#" class="badge bg-primary text-decoration-none">Link Badge</a>
                    <a href="#" class="badge bg-secondary text-decoration-none">Category</a>
                    <a href="#" class="badge bg-success text-decoration-none">Tag</a>
                    <a href="#" class="badge bg-info text-decoration-none">Filter</a>
                  </div>
                </div>
                
                <div class="mb-4">
                  <h6>Dismissible Badges:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <span class="badge bg-primary d-flex align-items-center">
                      JavaScript
                      <button type="button" class="btn-close btn-close-white ms-2 small" style="font-size: 0.6em;"></button>
                    </span>
                    <span class="badge bg-success d-flex align-items-center">
                      Vue.js
                      <button type="button" class="btn-close btn-close-white ms-2 small" style="font-size: 0.6em;"></button>
                    </span>
                    <span class="badge bg-warning text-dark d-flex align-items-center">
                      Bootstrap
                      <button type="button" class="btn-close ms-2 small" style="font-size: 0.6em;"></button>
                    </span>
                  </div>
                </div>
                
                <div class="mb-4">
                  <h6>Badge with Icons:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <span class="badge bg-primary">
                      <i class="fas fa-user me-1"></i>Admin
                    </span>
                    <span class="badge bg-success">
                      <i class="fas fa-check me-1"></i>Verified
                    </span>
                    <span class="badge bg-warning text-dark">
                      <i class="fas fa-star me-1"></i>Premium
                    </span>
                    <span class="badge bg-danger">
                      <i class="fas fa-fire me-1"></i>Hot
                    </span>
                  </div>
                </div>
                
                <div class="bg-light p-3 rounded">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;a href="#" class="badge bg-primary text-decoration-none"&gt;Link Badge&lt;/a&gt;<br>
                    &lt;span class="badge bg-success"&gt;<br>
                    &nbsp;&nbsp;&lt;i class="fas fa-check me-1"&gt;&lt;/i&gt;Verified<br>
                    &lt;/span&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Styled Badges -->
        <div class="row g-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h5 class="mb-0">
                  <i class="fas fa-paint-brush text-purple me-2"></i>
                  Custom Styled Badges
                </h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">แบดจ์ที่ปรับแต่งสไตล์เพิ่มเติม</p>
                
                <div class="mb-4">
                  <h6>Gradient Badges:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <span class="badge text-white" style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);">Gradient Blue</span>
                    <span class="badge text-white" style="background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);">Gradient Pink</span>
                    <span class="badge text-white" style="background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);">Gradient Cyan</span>
                    <span class="badge text-white" style="background: linear-gradient(45deg, #43e97b 0%, #38f9d7 100%);">Gradient Green</span>
                  </div>
                </div>
                
                <div class="mb-4">
                  <h6>Shadow Badges:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <span class="badge bg-primary" style="box-shadow: 0 4px 8px rgba(0,123,255,0.3);">Shadow Primary</span>
                    <span class="badge bg-success" style="box-shadow: 0 4px 8px rgba(40,167,69,0.3);">Shadow Success</span>
                    <span class="badge bg-warning text-dark" style="box-shadow: 0 4px 8px rgba(255,193,7,0.3);">Shadow Warning</span>
                    <span class="badge bg-danger" style="box-shadow: 0 4px 8px rgba(220,53,69,0.3);">Shadow Danger</span>
                  </div>
                </div>
                
                <div class="mb-4">
                  <h6>Size Variations:</h6>
                  <div class="d-flex flex-wrap align-items-center gap-2">
                    <span class="badge bg-primary" style="font-size: 0.6em;">XS Badge</span>
                    <span class="badge bg-primary" style="font-size: 0.75em;">Small Badge</span>
                    <span class="badge bg-primary">Normal Badge</span>
                    <span class="badge bg-primary" style="font-size: 1.1em;">Large Badge</span>
                    <span class="badge bg-primary" style="font-size: 1.3em;">XL Badge</span>
                  </div>
                </div>
                
                <div class="bg-light p-3 rounded">
                  <small class="text-muted d-block mb-2"><strong>Code Example:</strong></small>
                  <code class="text-dark">
                    &lt;span class="badge text-white" style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);"&gt;Gradient&lt;/span&gt;<br>
                    &lt;span class="badge bg-primary" style="box-shadow: 0 4px 8px rgba(0,123,255,0.3);"&gt;Shadow&lt;/span&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional JavaScript needed for this showcase
</script>

<style scoped>
.text-purple {
  color: #6f42c1 !important;
}

.btn:hover {
  transform: translateY(-1px);
  transition: transform 0.2s ease;
}

.badge {
  transition: all 0.3s ease;
}

.badge:hover {
  transform: scale(1.05);
}

code {
  font-size: 0.85em;
  line-height: 1.4;
}

.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
}

@media (max-width: 768px) {
  .d-flex.flex-wrap.gap-2 {
    gap: 0.5rem !important;
  }
  
  .btn-group {
    flex-wrap: wrap;
  }
  
  .btn-toolbar {
    flex-wrap: wrap;
  }
}
</style>
