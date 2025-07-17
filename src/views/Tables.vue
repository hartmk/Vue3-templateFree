<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header Section -->
    <div class="row mb-4">
      <div class="col-12">
        <h1 class="text-primary mb-2">
          <i class="fas fa-table me-3"></i>Bootstrap Tables
        </h1>
        <p class="text-muted mb-0">ตัวอย่างการใช้งาน Bootstrap Table Classes แบบต่างๆ</p>
      </div>
    </div>

    <!-- Basic Table -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">
              <i class="fas fa-table me-2"></i>Basic Table
            </h5>
          </div>
          <div class="card-body">
            <p class="text-muted mb-3">ตารางพื้นฐานด้วย Bootstrap class</p>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ชื่อ</th>
                    <th scope="col">อีเมล</th>
                    <th scope="col">ตำแหน่ง</th>
                    <th scope="col">สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>นายสมชาย ใจดี</td>
                    <td>somchai@example.com</td>
                    <td>Senior Developer</td>
                    <td><span class="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>นางสาวมาลี สวยงาม</td>
                    <td>malee@example.com</td>
                    <td>UI/UX Designer</td>
                    <td><span class="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>นายวิชัย เทสเตอร์</td>
                    <td>wichai@example.com</td>
                    <td>QA Engineer</td>
                    <td><span class="badge bg-danger">Inactive</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Table Variants -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-paint-brush me-2"></i>Table Variants
        </h3>
      </div>
      
      <!-- Striped Table -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Striped Table (.table-striped)</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>iPhone 15</td>
                    <td>฿35,900</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>Samsung Galaxy S24</td>
                    <td>฿28,900</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>MacBook Air M2</td>
                    <td>฿38,900</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>iPad Pro</td>
                    <td>฿34,900</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Hover Table -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Hover Table (.table-hover)</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1001</td>
                    <td>จอห์น สมิธ</td>
                    <td>฿1,250</td>
                  </tr>
                  <tr>
                    <td>#1002</td>
                    <td>เจน โดว์</td>
                    <td>฿2,890</td>
                  </tr>
                  <tr>
                    <td>#1003</td>
                    <td>บ็อบ จอห์นสัน</td>
                    <td>฿950</td>
                  </tr>
                  <tr>
                    <td>#1004</td>
                    <td>อลิซ วิลสัน</td>
                    <td>฿3,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bordered and Borderless Tables -->
    <div class="row mb-5">
      <!-- Bordered Table -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Bordered Table (.table-bordered)</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="table-dark">
                  <tr>
                    <th>Country</th>
                    <th>Capital</th>
                    <th>Population</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ไทย</td>
                    <td>กรุงเทพมหานคร</td>
                    <td>69.8M</td>
                  </tr>
                  <tr>
                    <td>สิงคโปร์</td>
                    <td>สิงคโปร์</td>
                    <td>5.9M</td>
                  </tr>
                  <tr>
                    <td>ญี่ปุ่น</td>
                    <td>โตเกียว</td>
                    <td>125.8M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Borderless Table -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Borderless Table (.table-borderless)</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Plan</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Netflix</td>
                    <td>Premium</td>
                    <td>฿419/month</td>
                  </tr>
                  <tr>
                    <td>Spotify</td>
                    <td>Individual</td>
                    <td>฿129/month</td>
                  </tr>
                  <tr>
                    <td>Disney+</td>
                    <td>Standard</td>
                    <td>฿149/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Table Sizes -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-expand-arrows-alt me-2"></i>Table Sizes
        </h3>
      </div>
      
      <!-- Small Table -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Small Table (.table-sm)</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-sm table-striped">
                <thead class="table-primary">
                  <tr>
                    <th>Code</th>
                    <th>Language</th>
                    <th>Framework</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>JS</td>
                    <td>JavaScript</td>
                    <td>Vue.js</td>
                    <td><span class="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>PY</td>
                    <td>Python</td>
                    <td>Django</td>
                    <td><span class="badge bg-info">Development</span></td>
                  </tr>
                  <tr>
                    <td>PHP</td>
                    <td>PHP</td>
                    <td>Laravel</td>
                    <td><span class="badge bg-warning">Testing</span></td>
                  </tr>
                  <tr>
                    <td>RB</td>
                    <td>Ruby</td>
                    <td>Rails</td>
                    <td><span class="badge bg-secondary">Planned</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Regular Table for Comparison -->
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Regular Table (Default Size)</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-success">
                  <tr>
                    <th>Browser</th>
                    <th>Market Share</th>
                    <th>Engine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chrome</td>
                    <td>65.2%</td>
                    <td>Blink</td>
                  </tr>
                  <tr>
                    <td>Safari</td>
                    <td>18.9%</td>
                    <td>WebKit</td>
                  </tr>
                  <tr>
                    <td>Edge</td>
                    <td>4.8%</td>
                    <td>Blink</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Colored Tables -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-palette me-2"></i>Colored Tables
        </h3>
      </div>
      
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Table with Colored Headers</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6 mb-3">
                <h6 class="text-muted">Primary Header</h6>
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead class="table-primary">
                      <tr>
                        <th>Name</th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>John</td><td>95</td></tr>
                      <tr><td>Jane</td><td>87</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div class="col-md-6 mb-3">
                <h6 class="text-muted">Success Header</h6>
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead class="table-success">
                      <tr>
                        <th>Product</th>
                        <th>Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Product A</td><td>$1,250</td></tr>
                      <tr><td>Product B</td><td>$890</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div class="col-md-6 mb-3">
                <h6 class="text-muted">Warning Header</h6>
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead class="table-warning">
                      <tr>
                        <th>Alert</th>
                        <th>Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>CPU Usage</td><td>High</td></tr>
                      <tr><td>Memory</td><td>Medium</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div class="col-md-6 mb-3">
                <h6 class="text-muted">Danger Header</h6>
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead class="table-danger">
                      <tr>
                        <th>Error</th>
                        <th>Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>404 Error</td><td>5</td></tr>
                      <tr><td>500 Error</td><td>2</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Table with Row Colors -->
    <div class="row mb-5">
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Table with Colored Rows</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class="table-dark">
                  <tr>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-success">
                    <td>Payment Received</td>
                    <td>+฿2,500</td>
                    <td><span class="badge bg-success">Completed</span></td>
                    <td>2025-07-17</td>
                  </tr>
                  <tr class="table-warning">
                    <td>Pending Transfer</td>
                    <td>-฿1,200</td>
                    <td><span class="badge bg-warning">Pending</span></td>
                    <td>2025-07-16</td>
                  </tr>
                  <tr class="table-danger">
                    <td>Failed Payment</td>
                    <td>-฿850</td>
                    <td><span class="badge bg-danger">Failed</span></td>
                    <td>2025-07-15</td>
                  </tr>
                  <tr class="table-info">
                    <td>Refund Processed</td>
                    <td>+฿450</td>
                    <td><span class="badge bg-info">Processing</span></td>
                    <td>2025-07-14</td>
                  </tr>
                  <tr>
                    <td>Regular Transaction</td>
                    <td>-฿320</td>
                    <td><span class="badge bg-secondary">Completed</span></td>
                    <td>2025-07-13</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Tables -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-cogs me-2"></i>Advanced Tables
        </h3>
      </div>
      
      <!-- Table with Actions -->
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h6 class="mb-0">User Management Table</h6>
            <button class="btn btn-primary btn-sm">
              <i class="fas fa-plus me-1"></i>Add User
            </button>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead class="table-light">
                  <tr>
                    <th>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="selectAll">
                      </div>
                    </th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Last Login</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                      </div>
                    </td>
                    <td>
                      <div class="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center text-white" style="width: 35px; height: 35px;">
                        <i class="fas fa-user"></i>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="fw-bold">นายสมชาย ใจดี</div>
                        <small class="text-muted">ID: USR001</small>
                      </div>
                    </td>
                    <td>somchai@example.com</td>
                    <td><span class="badge bg-primary">Admin</span></td>
                    <td><span class="badge bg-success">Active</span></td>
                    <td>2 hours ago</td>
                    <td>
                      <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-primary" title="View">
                          <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-outline-success" title="Edit">
                          <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-danger" title="Delete">
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                      </div>
                    </td>
                    <td>
                      <div class="rounded-circle bg-success d-inline-flex align-items-center justify-content-center text-white" style="width: 35px; height: 35px;">
                        <i class="fas fa-user"></i>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="fw-bold">นางสาวมาลี สวยงาม</div>
                        <small class="text-muted">ID: USR002</small>
                      </div>
                    </td>
                    <td>malee@example.com</td>
                    <td><span class="badge bg-info">Editor</span></td>
                    <td><span class="badge bg-success">Active</span></td>
                    <td>1 day ago</td>
                    <td>
                      <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-primary" title="View">
                          <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-outline-success" title="Edit">
                          <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-danger" title="Delete">
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                      </div>
                    </td>
                    <td>
                      <div class="rounded-circle bg-warning d-inline-flex align-items-center justify-content-center text-white" style="width: 35px; height: 35px;">
                        <i class="fas fa-user"></i>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="fw-bold">นายวิชัย เทสเตอร์</div>
                        <small class="text-muted">ID: USR003</small>
                      </div>
                    </td>
                    <td>wichai@example.com</td>
                    <td><span class="badge bg-secondary">User</span></td>
                    <td><span class="badge bg-warning">Pending</span></td>
                    <td>3 days ago</td>
                    <td>
                      <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-primary" title="View">
                          <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-outline-success" title="Edit">
                          <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-danger" title="Delete">
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- Pagination -->
            <div class="d-flex justify-content-between align-items-center mt-3">
              <div>
                <small class="text-muted">Showing 1 to 3 of 25 entries</small>
              </div>
              <nav>
                <ul class="pagination pagination-sm mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      <i class="fas fa-chevron-left"></i>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Responsive Tables -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-mobile-alt me-2"></i>Responsive Tables
        </h3>
      </div>
      
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Responsive Table (.table-responsive)</h6>
            <small class="text-muted">ตารางจะมี scroll bar แนวนอนเมื่อหน้าจอเล็ก</small>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead class="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Supplier</th>
                    <th>Date Added</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>iPhone 15 Pro Max</td>
                    <td>Latest Apple smartphone with titanium design</td>
                    <td>Smartphones</td>
                    <td>฿48,900</td>
                    <td>25</td>
                    <td>Apple Inc.</td>
                    <td>2025-07-15</td>
                    <td><span class="badge bg-success">In Stock</span></td>
                    <td>
                      <button class="btn btn-sm btn-primary">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>MacBook Pro M3</td>
                    <td>Professional laptop for developers and creators</td>
                    <td>Laptops</td>
                    <td>฿89,900</td>
                    <td>8</td>
                    <td>Apple Inc.</td>
                    <td>2025-07-10</td>
                    <td><span class="badge bg-warning">Low Stock</span></td>
                    <td>
                      <button class="btn btn-sm btn-primary">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Samsung Galaxy Tab S9</td>
                    <td>High-performance Android tablet</td>
                    <td>Tablets</td>
                    <td>฿32,900</td>
                    <td>0</td>
                    <td>Samsung</td>
                    <td>2025-07-05</td>
                    <td><span class="badge bg-danger">Out of Stock</span></td>
                    <td>
                      <button class="btn btn-sm btn-primary">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Table Examples Summary -->
    <div class="row">
      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-header bg-info text-white">
            <h5 class="mb-0">
              <i class="fas fa-info-circle me-2"></i>Bootstrap Table Classes สรุป
            </h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h6 class="text-info">Basic Classes</h6>
                <ul class="list-unstyled">
                  <li><code>.table</code> - ตารางพื้นฐาน</li>
                  <li><code>.table-striped</code> - แถบสลับสี</li>
                  <li><code>.table-hover</code> - เอฟเฟกต์ hover</li>
                  <li><code>.table-bordered</code> - เส้นขอบ</li>
                  <li><code>.table-borderless</code> - ไม่มีเส้นขอบ</li>
                  <li><code>.table-sm</code> - ขนาดเล็ก</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h6 class="text-info">Color Classes</h6>
                <ul class="list-unstyled">
                  <li><code>.table-primary</code> - สีหลัก</li>
                  <li><code>.table-success</code> - สีเขียว</li>
                  <li><code>.table-warning</code> - สีเหลือง</li>
                  <li><code>.table-danger</code> - สีแดง</li>
                  <li><code>.table-info</code> - สีฟ้า</li>
                  <li><code>.table-light</code> - สีอ่อน</li>
                  <li><code>.table-dark</code> - สีเข้ม</li>
                </ul>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <h6 class="text-info">Responsive Classes</h6>
                <ul class="list-unstyled">
                  <li><code>.table-responsive</code> - Responsive สำหรับทุกขนาดหน้าจอ</li>
                  <li><code>.table-responsive-sm</code> - Responsive สำหรับ ≥576px</li>
                  <li><code>.table-responsive-md</code> - Responsive สำหรับ ≥768px</li>
                  <li><code>.table-responsive-lg</code> - Responsive สำหรับ ≥992px</li>
                  <li><code>.table-responsive-xl</code> - Responsive สำหรับ ≥1200px</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No reactive data needed for this showcase
</script>

<style scoped>
/* Custom table enhancements */
.table {
  --bs-table-hover-color: inherit;
}

.table > :not(caption) > * > * {
  border-bottom-width: 1px;
}

/* Enhance hover effects */
.table-hover > tbody > tr:hover > * {
  color: var(--bs-table-hover-color);
  background-color: rgba(0, 0, 0, 0.025);
}

/* Action buttons styling */
.btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
}

/* Badge enhancements */
.badge {
  font-weight: 500;
}

/* Avatar styling */
.rounded-circle {
  object-fit: cover;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .table-responsive {
    font-size: 0.875rem;
  }
  
  .btn-group-sm > .btn {
    padding: 0.125rem 0.25rem;
    font-size: 0.75rem;
  }
}

/* Custom scrollbar for table-responsive */
.table-responsive::-webkit-scrollbar {
  height: 8px;
}

.table-responsive::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.table-responsive::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.table-responsive::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Animation for tables */
.table tbody tr {
  transition: background-color 0.15s ease-in-out;
}

/* Code styling */
code {
  background-color: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
  color: #e83e8c;
}
</style>
