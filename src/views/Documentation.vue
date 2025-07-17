<template>
 <div class="container-fluid px-5 py-5">
    <h2 class="mb-4">เอกสารประกอบ</h2>
    <p>คู่มือการใช้งานสำหรับโปรเจค Vue 3 Dashboard</p>
   <div class="documentation-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-icon">
          <i class="fas fa-book"></i>
        </div>
        <h1 class="hero-title">Documentation</h1>
        <p class="hero-subtitle">คู่มือการใช้งาน Vue 3 Dashboard Project</p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg me-3" @click="scrollToSection('installation')">
            <i class="fas fa-download me-2"></i>เริ่มต้นใช้งาน
          </button>
          <button class="btn btn-outline-light btn-lg" @click="scrollToSection('api')">
            <i class="fas fa-code me-2"></i>API Reference
          </button>
        </div>
      </div>
      <div class="hero-bg">
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="bg-shape shape-3"></div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="doc-nav sticky-top">
      <div class="container-fluid">
        <nav class="nav nav-pills justify-content-center">
          <a class="nav-link" :class="{ active: activeSection === 'overview' }" @click="scrollToSection('overview')">
            <i class="fas fa-eye me-1"></i>ภาพรวม
          </a>
          <a class="nav-link" :class="{ active: activeSection === 'installation' }" @click="scrollToSection('installation')">
            <i class="fas fa-download me-1"></i>การติดตั้ง
          </a>
          <a class="nav-link" :class="{ active: activeSection === 'configuration' }" @click="scrollToSection('configuration')">
            <i class="fas fa-cogs me-1"></i>การตั้งค่า
          </a>
          <a class="nav-link" :class="{ active: activeSection === 'getting-started' }" @click="scrollToSection('getting-started')">
            <i class="fas fa-play me-1"></i>เริ่มใช้งาน
          </a>
          <a class="nav-link" :class="{ active: activeSection === 'components' }" @click="scrollToSection('components')">
            <i class="fas fa-puzzle-piece me-1"></i>Components
          </a>
          <a class="nav-link" :class="{ active: activeSection === 'widgets' }" @click="scrollToSection('widgets')">
            <i class="fas fa-th me-1"></i>Widgets
          </a>
          <a class="nav-link" :class="{ active: activeSection === 'customization' }" @click="scrollToSection('customization')">
            <i class="fas fa-palette me-1"></i>ปรับแต่ง
          </a>
          <a class="nav-link" :class="{ active: activeSection === 'api' }" @click="scrollToSection('api')">
            <i class="fas fa-code me-1"></i>API
          </a>
        </nav>
      </div>
    </div>

    <!-- Content -->
    <div class="doc-content">
      <div class="container-fluid">
        
        <!-- Overview Section -->
        <section id="overview" class="doc-section">
          <div class="section-header">
            <h2><i class="fas fa-eye me-3"></i>ภาพรวมโปรเจค</h2>
            <p>Vue 3 Dashboard Project เป็น Admin Dashboard ที่สร้างด้วย Vue 3, Bootstrap 5 และ Modern UI Components</p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="feature-card">
                <div class="feature-icon bg-primary">
                  <i class="fab fa-vuejs"></i>
                </div>
                <div class="feature-content">
                  <h4>Vue 3 Composition API</h4>
                  <p>ใช้ Vue 3 เวอร์ชันล่าสุดพร้อม Composition API สำหรับการจัดการ state ที่มีประสิทธิภาพ</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="feature-card">
                <div class="feature-icon bg-success">
                  <i class="fab fa-bootstrap"></i>
                </div>
                <div class="feature-content">
                  <h4>Bootstrap 5</h4>
                  <p>UI Framework ที่ทันสมัยพร้อม Responsive Design และ Dark Mode Support</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="feature-card">
                <div class="feature-icon bg-warning">
                  <i class="fas fa-chart-bar"></i>
                </div>
                <div class="feature-content">
                  <h4>ApexCharts</h4>
                  <p>กราฟและแผนภูมิที่สวยงามและมีปฏิสัมพันธ์สูง</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="feature-card">
                <div class="feature-icon bg-info">
                  <i class="fas fa-calendar-alt"></i>
                </div>
                <div class="feature-content">
                  <h4>DateTimePicker</h4>
                  <p>Flatpickr สำหรับการเลือกวันที่และเวลาที่ทันสมัย</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tech-stack">
            <h4>เทคโนโลยีที่ใช้</h4>
            <div class="tech-grid">
              <div class="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue.js">
                <span>Vue 3</span>
              </div>
              <div class="tech-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap">
                <span>Bootstrap 5</span>
              </div>
              <div class="tech-item">
                <img src="https://vitejs.dev/logo.svg" alt="Vite">
                <span>Vite</span>
              </div>
              <div class="tech-item">
                <img src="https://apexcharts.com/media/apexcharts-logo.png" alt="ApexCharts">
                <span>ApexCharts</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Installation Section -->
        <section id="installation" class="doc-section">
          <div class="section-header">
            <h2><i class="fas fa-download me-3"></i>การติดตั้ง</h2>
            <p>ขั้นตอนการติดตั้งและเตรียมสภาพแวดล้อม</p>
          </div>

          <div class="step-container">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>ติดตั้ง Node.js</h4>
                <p>ติดตั้ง Node.js เวอร์ชัน 18 หรือใหม่กว่า</p>
                <div class="code-block">
                  <div class="code-header">
                    <span>Terminal</span>
                    <button class="btn btn-sm btn-outline-light" @click="copyCode('node-check')">
                      <i class="fas fa-copy"></i>
                    </button>
                  </div>
                  <pre><code id="node-check">node --version
npm --version</code></pre>
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Clone Repository</h4>
                <p>ดาวน์โหลดโปรเจคจาก Git Repository</p>
                <div class="code-block">
                  <div class="code-header">
                    <span>Terminal</span>
                    <button class="btn btn-sm btn-outline-light" @click="copyCode('git-clone')">
                      <i class="fas fa-copy"></i>
                    </button>
                  </div>
                  <pre><code id="git-clone">git clone https://github.com/your-repo/vue3-dashboard.git
cd vue3-dashboard</code></pre>
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>ติดตั้ง Dependencies</h4>
                <p>ติดตั้งแพ็กเกจที่จำเป็นทั้งหมด</p>
                <div class="code-block">
                  <div class="code-header">
                    <span>Terminal</span>
                    <button class="btn btn-sm btn-outline-light" @click="copyCode('npm-install')">
                      <i class="fas fa-copy"></i>
                    </button>
                  </div>
                  <pre><code id="npm-install">npm install</code></pre>
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>รันโปรเจค</h4>
                <p>เริ่มต้น Development Server</p>
                <div class="code-block">
                  <div class="code-header">
                    <span>Terminal</span>
                    <button class="btn btn-sm btn-outline-light" @click="copyCode('npm-dev')">
                      <i class="fas fa-copy"></i>
                    </button>
                  </div>
                  <pre><code id="npm-dev">npm run dev</code></pre>
                </div>
                <div class="alert alert-success mt-3">
                  <i class="fas fa-check-circle me-2"></i>
                  เปิดเบราว์เซอร์และไปที่ <strong>http://localhost:5173</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Configuration Section -->
        <section id="configuration" class="doc-section">
          <div class="section-header">
            <h2><i class="fas fa-cogs me-3"></i>การตั้งค่า</h2>
            <p>การกำหนดค่าต่างๆ ของโปรเจค</p>
          </div>

          <div class="config-grid">
            <div class="config-card">
              <h4><i class="fas fa-file-code me-2"></i>Environment Variables</h4>
              <p>ตั้งค่าตัวแปรสภาพแวดล้อม</p>
              <div class="code-block">
                <div class="code-header">
                  <span>.env</span>
                  <button class="btn btn-sm btn-outline-light" @click="copyCode('env-config')">
                    <i class="fas fa-copy"></i>
                  </button>
                </div>
                <pre><code id="env-config">VITE_APP_NAME="Vue 3 Dashboard"
VITE_API_BASE_URL="https://api.example.com"
VITE_GOOGLE_MAPS_API_KEY="your-google-maps-key"</code></pre>
              </div>
            </div>

            <div class="config-card">
              <h4><i class="fas fa-palette me-2"></i>Theme Configuration</h4>
              <p>ปรับแต่งธีมและสี</p>
              <div class="code-block">
                <div class="code-header">
                  <span>src/styles/variables.css</span>
                  <button class="btn btn-sm btn-outline-light" @click="copyCode('theme-config')">
                    <i class="fas fa-copy"></i>
                  </button>
                </div>
                <pre><code id="theme-config">:root {
  --bs-primary: #667eea;
  --bs-secondary: #6c757d;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}</code></pre>
              </div>
            </div>

            <div class="config-card">
              <h4><i class="fas fa-route me-2"></i>Router Configuration</h4>
              <p>ตั้งค่าเส้นทางและการนำทาง</p>
              <div class="code-block">
                <div class="code-header">
                  <span>src/router/index.js</span>
                  <button class="btn btn-sm btn-outline-light" @click="copyCode('router-config')">
                    <i class="fas fa-copy"></i>
                  </button>
                </div>
                <pre><code id="router-config">const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true }
  }
]</code></pre>
              </div>
            </div>

            <div class="config-card">
              <h4><i class="fas fa-shield-alt me-2"></i>Authentication</h4>
              <p>ตั้งค่าระบบยืนยันตัวตน</p>
              <div class="code-block">
                <div class="code-header">
                  <span>src/stores/auth.js</span>
                  <button class="btn btn-sm btn-outline-light" @click="copyCode('auth-config')">
                    <i class="fas fa-copy"></i>
                  </button>
                </div>
                <pre><code id="auth-config">export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token')
  })
})</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- Getting Started Section -->
        <section id="getting-started" class="doc-section">
          <div class="section-header">
            <h2><i class="fas fa-play me-3"></i>เริ่มใช้งาน</h2>
            <p>คู่มือเริ่มต้นใช้งานระบบ</p>
          </div>

          <div class="row">
            <div class="col-lg-8">
              <div class="getting-started-content">
                <h4>โครงสร้างโปรเจค</h4>
                <div class="file-tree">
                  <div class="file-item folder">
                    <i class="fas fa-folder"></i> src/
                    <div class="file-children">
                      <div class="file-item folder">
                        <i class="fas fa-folder"></i> components/
                        <div class="file-children">
                          <div class="file-item"><i class="fas fa-file-code"></i> TopNavbar.vue</div>
                          <div class="file-item"><i class="fas fa-file-code"></i> Sidebar.vue</div>
                        </div>
                      </div>
                      <div class="file-item folder">
                        <i class="fas fa-folder"></i> views/
                        <div class="file-children">
                          <div class="file-item"><i class="fas fa-file-code"></i> Dashboard.vue</div>
                          <div class="file-item"><i class="fas fa-file-code"></i> Products.vue</div>
                          <div class="file-item"><i class="fas fa-file-code"></i> Orders.vue</div>
                        </div>
                      </div>
                      <div class="file-item folder">
                        <i class="fas fa-folder"></i> stores/
                        <div class="file-children">
                          <div class="file-item"><i class="fas fa-file-code"></i> auth.js</div>
                          <div class="file-item"><i class="fas fa-file-code"></i> products.js</div>
                        </div>
                      </div>
                      <div class="file-item"><i class="fas fa-file-code"></i> App.vue</div>
                      <div class="file-item"><i class="fas fa-file-code"></i> main.js</div>
                    </div>
                  </div>
                </div>

                <h4 class="mt-4">การเพิ่มหน้าใหม่</h4>
                <p>ขั้นตอนการสร้างหน้าใหม่ในระบบ:</p>
                
                <div class="numbered-list">
                  <div class="list-item">
                    <span class="number">1</span>
                    <div class="content">
                      <strong>สร้างไฟล์ Vue Component</strong>
                      <p>สร้างไฟล์ใหม่ในโฟลเดอร์ <code>src/views/</code></p>
                    </div>
                  </div>
                  <div class="list-item">
                    <span class="number">2</span>
                    <div class="content">
                      <strong>เพิ่ม Route</strong>
                      <p>เพิ่มเส้นทางใหม่ในไฟล์ <code>src/router/index.js</code></p>
                    </div>
                  </div>
                  <div class="list-item">
                    <span class="number">3</span>
                    <div class="content">
                      <strong>เพิ่มเมนู</strong>
                      <p>เพิ่มลิงก์เมนูในไฟล์ <code>src/App.vue</code></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="quick-start-card">
                <h4><i class="fas fa-rocket me-2"></i>Quick Start</h4>
                <div class="quick-commands">
                  <div class="command-item">
                    <code>npm run dev</code>
                    <span>เริ่ม development server</span>
                  </div>
                  <div class="command-item">
                    <code>npm run build</code>
                    <span>สร้างไฟล์สำหรับ production</span>
                  </div>
                  <div class="command-item">
                    <code>npm run preview</code>
                    <span>ดูตัวอย่าง production build</span>
                  </div>
                  <div class="command-item">
                    <code>npm run lint</code>
                    <span>ตรวจสอบ code style</span>
                  </div>
                </div>
              </div>

              <div class="tips-card mt-4">
                <h4><i class="fas fa-lightbulb me-2"></i>Tips</h4>
                <ul>
                  <li>ใช้ Vue DevTools สำหรับ debugging</li>
                  <li>ตั้งค่า ESLint และ Prettier</li>
                  <li>ใช้ Composition API สำหรับ logic ที่ซับซ้อน</li>
                  <li>แยก components ให้เป็น reusable</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Components Section -->
        <section id="components" class="doc-section">
          <div class="section-header">
            <h2><i class="fas fa-puzzle-piece me-3"></i>Components</h2>
            <p>คอมโพเนนต์ที่พร้อมใช้งาน</p>
          </div>

          <div class="component-grid">
            <div class="component-card" v-for="component in components" :key="component.name">
              <div class="component-preview">
                <i :class="component.icon"></i>
              </div>
              <div class="component-info">
                <h4>{{ component.name }}</h4>
                <p>{{ component.description }}</p>
                <div class="component-tags">
                  <span v-for="tag in component.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <button class="btn btn-sm btn-outline-primary" @click="showComponentCode(component)">
                  <i class="fas fa-code me-1"></i>ดูโค้ด
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Widgets Section -->
        <section id="widgets" class="doc-section">
          <div class="section-header">
            <h2><i class="fas fa-th me-3"></i>Widgets</h2>
            <p>Widget และตัวอย่างการใช้งานสำหรับ Dashboard</p>
          </div>

          <div class="widgets-grid">
            <div class="widget-card" v-for="widget in widgets" :key="widget.name">
              <div class="widget-preview">
                <i :class="widget.icon"></i>
              </div>
              <div class="widget-info">
                <h4>{{ widget.name }}</h4>
                <p>{{ widget.description }}</p>
                <div class="widget-tags">
                  <span v-for="tag in widget.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <button class="btn btn-sm btn-outline-primary" @click="showWidgetCode(widget)">
                  <i class="fas fa-code me-1"></i>ดูโค้ด
                </button>
              </div>
            </div>
          </div>

          <!-- Widget Categories -->
          <div class="widget-categories mt-5">
            <h3 class="mb-4">หมวดหมู่ Widget</h3>
            <div class="row">
              <div class="col-lg-4" v-for="category in widgetCategories" :key="category.name">
                <div class="category-card">
                  <div class="category-icon">
                    <i :class="category.icon"></i>
                  </div>
                  <h5>{{ category.name }}</h5>
                  <p>{{ category.description }}</p>
                  <ul class="category-widgets">
                    <li v-for="widget in category.widgets" :key="widget">{{ widget }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Customization Section -->
        <section id="customization" class="doc-section">
          <div class="section-header">
            <h2><i class="fas fa-palette me-3"></i>การปรับแต่ง</h2>
            <p>วิธีการปรับแต่งและขยายฟีเจอร์</p>
          </div>

          <div class="customization-tabs">
            <nav class="nav nav-tabs" role="tablist">
              <button class="nav-link active" @click="activeTab = 'colors'" :class="{ active: activeTab === 'colors' }">
                <i class="fas fa-palette me-2"></i>สีและธีม
              </button>
              <button class="nav-link" @click="activeTab = 'layout'" :class="{ active: activeTab === 'layout' }">
                <i class="fas fa-th-large me-2"></i>เลย์เอาต์
              </button>
              <button class="nav-link" @click="activeTab = 'components'" :class="{ active: activeTab === 'components' }">
                <i class="fas fa-puzzle-piece me-2"></i>คอมโพเนนต์
              </button>
            </nav>

            <div class="tab-content">
              <div v-show="activeTab === 'colors'" class="tab-pane">
                <div class="row">
                  <div class="col-lg-6">
                    <h4>การเปลี่ยนสีหลัก</h4>
                    <div class="code-block">
                      <pre><code>:root {
  --bs-primary: #your-color;
  --bs-secondary: #your-secondary-color;
  --gradient-primary: linear-gradient(135deg, #color1 0%, #color2 100%);
}</code></pre>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h4>Color Palette</h4>
                    <div class="color-palette">
                      <div class="color-item" v-for="color in colorPalette" :key="color.name">
                        <div class="color-box" :style="{ backgroundColor: color.value }"></div>
                        <div class="color-info">
                          <span class="color-name">{{ color.name }}</span>
                          <span class="color-value">{{ color.value }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-show="activeTab === 'layout'" class="tab-pane">
                <h4>การปรับแต่งเลย์เอาต์</h4>
                <p>คุณสามารถปรับแต่งเลย์เอาต์ของ Dashboard ได้ตามต้องการ</p>
                <div class="layout-options">
                  <div class="layout-option">
                    <h5>Sidebar</h5>
                    <ul>
                      <li>เปลี่ยนความกว้างของ Sidebar</li>
                      <li>เพิ่ม/ลบเมนูย่อย</li>
                      <li>ปรับแต่งไอคอนเมนู</li>
                    </ul>
                  </div>
                  <div class="layout-option">
                    <h5>TopNavbar</h5>
                    <ul>
                      <li>เพิ่มปุ่มใหม่</li>
                      <li>ปรับแต่งการแจ้งเตือน</li>
                      <li>เปลี่ยนโลโก้</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div v-show="activeTab === 'components'" class="tab-pane">
                <h4>การสร้าง Component ใหม่</h4>
                <p>ตัวอย่างการสร้าง Component แบบ Reusable</p>
                <div class="code-block">
                  <pre><code>&lt;template&gt;
  &lt;div class="custom-card"&gt;
    &lt;div class="card-header"&gt;
      &lt;h5&gt;{{ title }}&lt;/h5&gt;
    &lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;slot&gt;&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
defineProps({
  title: String
})
&lt;/script&gt;</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- API Section -->
        <section id="api" class="doc-section">
          <div class="section-header">
            <h2><i class="fas fa-code me-3"></i>API Reference</h2>
            <p>เอกสาร API และฟังก์ชันต่างๆ</p>
          </div>

          <div class="api-grid">
            <div class="api-card" v-for="api in apiList" :key="api.name">
              <div class="api-header">
                <h4>{{ api.name }}</h4>
                <span class="api-method" :class="api.method.toLowerCase()">{{ api.method }}</span>
              </div>
              <p class="api-description">{{ api.description }}</p>
              <div class="api-example">
                <h6>ตัวอย่าง:</h6>
                <pre><code>{{ api.example }}</code></pre>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
  
  <!-- Code Modal -->
  <div 
    class="modal fade" 
    :class="{ show: showCodeModal }"
    :style="{ display: showCodeModal ? 'block' : 'none' }"
    tabindex="-1"
    v-if="showCodeModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <i :class="selectedComponent?.icon" class="me-2"></i>
            {{ selectedComponent?.name }} - ตัวอย่างโค้ด
          </h5>
          <button 
            type="button" 
            class="btn-close" 
            @click="showCodeModal = false"
          ></button>
        </div>
        <div class="modal-body">
          <div class="code-preview">
            <!-- Template Tab -->
            <nav class="nav nav-tabs code-tabs" role="tablist">
              <button 
                class="nav-link active" 
                @click="activeCodeTab = 'template'" 
                :class="{ active: activeCodeTab === 'template' }"
              >
                <i class="fas fa-code me-2"></i>Template
              </button>
              <button 
                class="nav-link" 
                @click="activeCodeTab = 'script'" 
                :class="{ active: activeCodeTab === 'script' }"
              >
                <i class="fab fa-js-square me-2"></i>Script
              </button>
            </nav>
            
            <div class="tab-content code-content">
              <!-- Template Content -->
              <div v-show="activeCodeTab === 'template'" class="tab-pane">
                <div class="code-block">
                  <div class="code-header">
                    <span>Template</span>
                    <button 
                      class="btn btn-sm btn-outline-light" 
                      @click="copyCodeToClipboard(selectedComponent?.code?.template)"
                    >
                      <i class="fas fa-copy"></i> Copy
                    </button>
                  </div>
                  <pre><code>{{ selectedComponent?.code?.template }}</code></pre>
                </div>
              </div>
              
              <!-- Script Content -->
              <div v-show="activeCodeTab === 'script'" class="tab-pane">
                <div class="code-block">
                  <div class="code-header">
                    <span>Script</span>
                    <button 
                      class="btn btn-sm btn-outline-light" 
                      @click="copyCodeToClipboard(selectedComponent?.code?.script)"
                    >
                      <i class="fas fa-copy"></i> Copy
                    </button>
                  </div>
                  <pre><code>{{ selectedComponent?.code?.script }}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button 
            type="button" 
            class="btn btn-secondary" 
            @click="showCodeModal = false"
          >
            ปิด
          </button>
          <button 
            type="button" 
            class="btn btn-primary"
            @click="copyAllCode"
          >
            <i class="fas fa-copy me-2"></i>Copy ทั้งหมด
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Modal Backdrop -->
  <div 
    class="modal-backdrop fade"
    :class="{ show: showCodeModal }"
    v-if="showCodeModal"
    @click="showCodeModal = false"
  ></div>
 </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { swalUtils } from '../utils/swal'

// Data
const activeSection = ref('overview')
const activeTab = ref('colors')
const activeCodeTab = ref('template')
const showCodeModal = ref(false)
const selectedComponent = ref(null)

const components = ref([
  {
    name: 'DateTimePicker',
    description: 'เลือกวันที่และเวลาที่ทันสมัย',
    icon: 'fas fa-calendar-alt',
    tags: ['Form', 'Date', 'Time'],
    code: {
      template: `<template>
  <div class="datetime-picker-demo">
    <div class="mb-3">
      <label class="form-label">เลือกวันที่</label>
      <flat-pickr
        v-model="selectedDate"
        :config="dateConfig"
        class="form-control"
        placeholder="เลือกวันที่..."
      ></flat-pickr>
    </div>
  </div>
</template>`,
      script: `<script setup>
import { ref } from 'vue'

const selectedDate = ref('')
const dateConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  locale: Thai
})
<\/script>`
    }
  },
  {
    name: 'DataTables',
    description: 'ตารางข้อมูลพร้อมการค้นหาและเรียงลำดับ',
    icon: 'fas fa-table',
    tags: ['Table', 'Data', 'Search'],
    code: {
      template: `<template>
  <div class="datatable-demo">
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>ชื่อ</th>
            <th>อีเมล</th>
            <th>สถานะ</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span class="badge bg-success">เปิดใช้งาน</span>
            </td>
            <td>
              <button class="btn btn-sm btn-primary me-1">แก้ไข</button>
              <button class="btn btn-sm btn-danger">ลบ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>`,
      script: `<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'จอห์น โด', email: 'john@example.com' },
  { id: 2, name: 'เจน สมิธ', email: 'jane@example.com' },
  { id: 3, name: 'บ็อบ จอห์นสัน', email: 'bob@example.com' }
])
<\/script>`
    }
  },
  {
    name: 'Charts',
    description: 'กราฟและแผนภูมิด้วย ApexCharts',
    icon: 'fas fa-chart-bar',
    tags: ['Chart', 'Graph', 'Visualization'],
    code: {
      template: `<template>
  <div class="chart-demo">
    <div class="card">
      <div class="card-header">
        <h5>ยอดขายรายเดือน</h5>
      </div>
      <div class="card-body">
        <apexchart
          type="line"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>`,
      script: `<script setup>
import { ref } from 'vue'

const series = ref([{
  name: 'ยอดขาย',
  data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
}])

const chartOptions = ref({
  chart: {
    height: 350,
    type: 'line',
    zoom: { enabled: false }
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'straight' },
  title: {
    text: 'ยอดขายรายเดือน',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.']
  }
})
<\/script>`
    }
  },
  {
    name: 'Forms',
    description: 'ฟอร์มพร้อม Validation',
    icon: 'fas fa-edit',
    tags: ['Form', 'Input', 'Validation'],
    code: {
      template: `<template>
  <div class="form-demo">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-label">ชื่อ *</label>
        <input 
          type="text" 
          class="form-control"
          :class="{ 'is-invalid': errors.name }"
          v-model="form.name"
          @blur="validateName"
        >
        <div class="invalid-feedback" v-if="errors.name">
          {{ errors.name }}
        </div>
      </div>
      
      <div class="mb-3">
        <label class="form-label">อีเมล *</label>
        <input 
          type="email" 
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          v-model="form.email"
          @blur="validateEmail"
        >
        <div class="invalid-feedback" v-if="errors.email">
          {{ errors.email }}
        </div>
      </div>
      
      <button type="submit" class="btn btn-primary">
        บันทึก
      </button>
    </form>
  </div>
</template>`,
      script: `<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: ''
})

const errors = ref({})

const validateName = () => {
  if (!form.value.name.trim()) {
    errors.value.name = 'กรุณากรอกชื่อ'
  } else {
    delete errors.value.name
  }
}

const validateEmail = () => {
  const emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/
  if (!form.value.email) {
    errors.value.email = 'กรุณากรอกอีเมล'
  } else if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'รูปแบบอีเมลไม่ถูกต้อง'
  } else {
    delete errors.value.email
  }
}

const submitForm = () => {
  validateName()
  validateEmail()
  
  if (Object.keys(errors.value).length === 0) {
    console.log('Form submitted:', form.value)
  }
}
<\/script>`
    }
  },
  {
    name: 'Modals',
    description: 'หน้าต่าง Modal และ Dialog',
    icon: 'fas fa-window-restore',
    tags: ['Modal', 'Dialog', 'Popup'],
    code: {
      template: `<template>
  <div class="modal-demo">
    <button 
      class="btn btn-primary" 
      @click="showModal = true"
    >
      เปิด Modal
    </button>
    
    <!-- Modal -->
    <div 
      class="modal fade" 
      :class="{ show: showModal }"
      :style="{ display: showModal ? 'block' : 'none' }"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">ยืนยันการดำเนินการ</h5>
            <button 
              type="button" 
              class="btn-close" 
              @click="showModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <p>คุณต้องการดำเนินการต่อหรือไม่?</p>
          </div>
          <div class="modal-footer">
            <button 
              type="button" 
              class="btn btn-secondary" 
              @click="showModal = false"
            >
              ยกเลิก
            </button>
            <button 
              type="button" 
              class="btn btn-primary"
              @click="confirmAction"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Backdrop -->
    <div 
      class="modal-backdrop fade"
      :class="{ show: showModal }"
      v-if="showModal"
      @click="showModal = false"
    ></div>
  </div>
</template>`,
      script: `<script setup>
import { ref } from 'vue'

const showModal = ref(false)

const confirmAction = () => {
  console.log('Action confirmed!')
  showModal.value = false
}
<\/script>`
    }
  },
  {
    name: 'Icons',
    description: 'ไอคอน Font Awesome',
    icon: 'fas fa-icons',
    tags: ['Icon', 'UI', 'Design'],
    code: {
      template: `<template>
  <div class="icons-demo">
    <div class="row">
      <div class="col-md-3 text-center mb-3" v-for="icon in icons" :key="icon.class">
        <div class="icon-showcase">
          <i :class="icon.class" class="icon-large"></i>
          <p class="mt-2">{{ icon.name }}</p>
          <code class="text-muted">{{ icon.class }}</code>
        </div>
      </div>
    </div>
  </div>
</template>`,
      script: `<script setup>
import { ref } from 'vue'

const icons = ref([
  { name: 'หน้าหลัก', class: 'fas fa-home' },
  { name: 'ผู้ใช้', class: 'fas fa-user' },
  { name: 'การตั้งค่า', class: 'fas fa-cog' },
  { name: 'ค้นหา', class: 'fas fa-search' },
  { name: 'รายการ', class: 'fas fa-list' },
  { name: 'กราฟ', class: 'fas fa-chart-bar' },
  { name: 'ข้อความ', class: 'fas fa-envelope' },
  { name: 'แจ้งเตือน', class: 'fas fa-bell' }
])

const widgets = ref([
  {
    name: 'Card Widget',
    description: 'การ์ดแสดงข้อมูลสถิติต่างๆ',
    icon: 'fas fa-id-card',
    tags: ['Card', 'Statistics', 'Display']
  },
  {
    name: 'Progress Widget', 
    description: 'แสดง Progress Bar และ Circle Progress',
    icon: 'fas fa-tasks',
    tags: ['Progress', 'Loading', 'Percentage']
  },
  {
    name: 'Todo Widget',
    description: 'Widget รายการงานที่ต้องทำ', 
    icon: 'fas fa-list-check',
    tags: ['Todo', 'Task', 'Checklist']
  },
  {
    name: 'Weather Widget',
    description: 'Widget แสดงสภาพอากาศ',
    icon: 'fas fa-cloud-sun', 
    tags: ['Weather', 'Temperature', 'Forecast']
  },
  {
    name: 'Notification Widget',
    description: 'Widget แสดงการแจ้งเตือนและข้อความ',
    icon: 'fas fa-bell',
    tags: ['Notification', 'Alert', 'Message']
  },
  {
    name: 'Calendar Widget',
    description: 'Widget ปฏิทินแสดงกิจกรรมและนัดหมาย',
    icon: 'fas fa-calendar',
    tags: ['Calendar', 'Event', 'Schedule']
  }
])

const widgetCategories = ref([
  {
    name: 'Data Display',
    description: 'Widgets สำหรับแสดงข้อมูลและสถิติ',
    icon: 'fas fa-chart-bar',
    widgets: ['Card Widget', 'Progress Widget', 'Charts Widget', 'Table Widget']
  },
  {
    name: 'User Interface',
    description: 'Widgets สำหรับการโต้ตอบกับผู้ใช้',
    icon: 'fas fa-mouse-pointer',
    widgets: ['Button Widget', 'Form Widget', 'Modal Widget', 'Dropdown Widget']
  },
  {
    name: 'Communication',
    description: 'Widgets สำหรับการสื่อสารและแจ้งเตือน',
    icon: 'fas fa-comments',
    widgets: ['Notification Widget', 'Chat Widget', 'Message Widget', 'Alert Widget']
  },
  {
    name: 'Productivity',
    description: 'Widgets สำหรับเพิ่มประสิทธิภาพการทำงาน',
    icon: 'fas fa-tasks',
    widgets: ['Todo Widget', 'Calendar Widget', 'Timer Widget', 'Notes Widget']
  },
  {
    name: 'Media',
    description: 'Widgets สำหรับจัดการสื่อต่างๆ',
    icon: 'fas fa-image',
    widgets: ['Image Gallery', 'Video Player', 'Audio Player', 'File Upload']
  },
  {
    name: 'External',
    description: 'Widgets ที่เชื่อมต่อกับบริการภายนอก',
    icon: 'fas fa-globe',
    widgets: ['Weather Widget', 'Map Widget', 'Social Media', 'API Widget']
  }
])
<\/script>

<style scoped>
.icon-showcase {
  padding: 1.5rem;
  border: 1px solid #e9ecef;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.icon-showcase:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}

.icon-large {
  font-size: 2rem;
  color: #667eea;
}
<\/style>`
    }
  }
])

const colorPalette = ref([
  { name: 'Primary', value: '#667eea' },
  { name: 'Secondary', value: '#6c757d' },
  { name: 'Success', value: '#28a745' },
  { name: 'Danger', value: '#dc3545' },
  { name: 'Warning', value: '#ffc107' },
  { name: 'Info', value: '#17a2b8' }
])

const apiList = ref([
  {
    name: 'useAuth',
    method: 'Composable',
    description: 'จัดการระบบ Authentication',
    example: `const { user, login, logout } = useAuth()
await login(credentials)`
  },
  {
    name: 'useProducts',
    method: 'Composable',
    description: 'จัดการข้อมูลสินค้า',
    example: `const { products, addProduct, updateProduct } = useProducts()
await addProduct(productData)`
  },
  {
    name: 'swalUtils',
    method: 'Utility',
    description: 'แสดง Alert และ Notification',
    example: `swalUtils.success('สำเร็จ!', 'บันทึกข้อมูลเรียบร้อย')
swalUtils.error('ผิดพลาด!', 'เกิดข้อผิดพลาด')`
  }
])

// Methods
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = sectionId
  }
}

const copyCode = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    navigator.clipboard.writeText(element.textContent)
      .then(() => {
        swalUtils.success('สำเร็จ!', 'คัดลอกโค้ดเรียบร้อยแล้ว')
      })
      .catch(() => {
        swalUtils.error('ผิดพลาด!', 'ไม่สามารถคัดลอกโค้ดได้')
      })
  }
}

const showComponentCode = (component) => {
  selectedComponent.value = component
  activeCodeTab.value = 'template'
  showCodeModal.value = true
}

const showWidgetCode = (widget) => {
  selectedComponent.value = widget
  activeCodeTab.value = 'template'
  showCodeModal.value = true
}

const copyCodeToClipboard = async (code) => {
  try {
    await navigator.clipboard.writeText(code)
    swalUtils.success('สำเร็จ!', 'คัดลอกโค้ดเรียบร้อยแล้ว')
  } catch (error) {
    console.error('Failed to copy code:', error)
    swalUtils.error('ผิดพลาด!', 'ไม่สามารถคัดลอกโค้ดได้')
  }
}

const copyAllCode = async () => {
  const template = selectedComponent.value?.code?.template || ''
  const script = selectedComponent.value?.code?.script || ''
  const fullCode = template + '\n\n' + script
  
  try {
    await navigator.clipboard.writeText(fullCode)
    swalUtils.success('สำเร็จ!', 'คัดลอกโค้ดทั้งหมดเรียบร้อยแล้ว')
    showCodeModal.value = false
  } catch (error) {
    console.error('Failed to copy code:', error)
    swalUtils.error('ผิดพลาด!', 'ไม่สามารถคัดลอกโค้ดได้')
  }
}

// Scroll detection
const handleScroll = () => {
  const sections = ['overview', 'installation', 'configuration', 'getting-started', 'components', 'widgets', 'customization', 'api']
  
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 200 && rect.bottom >= 200) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.documentation-page {
  min-height: 100vh;
  background: #f8f9fa;
}

/* Hero Section */
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-actions {
  margin-top: 2rem;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  top: 10%;
  right: 30%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Navigation */
.doc-nav {
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
  z-index: 1000;
}

.nav-link {
  color: #6c757d;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  margin: 0 0.25rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-link:hover {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.nav-link.active {
  color: white;
  background: #667eea;
}

/* Content */
.doc-content {
  padding: 4rem 0;
}

.doc-section {
  margin-bottom: 6rem;
  scroll-margin-top: 100px;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
}

/* Feature Cards */
.feature-card {
  display: flex;
  align-items: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.feature-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.feature-content p {
  color: #718096;
  margin: 0;
  line-height: 1.6;
}

/* Tech Stack */
.tech-stack {
  margin-top: 4rem;
  text-align: center;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  transition: transform 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-2px);
}

.tech-item img {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}

/* Steps */
.step-container {
  max-width: 800px;
  margin: 0 auto;
}

.step-item {
  display: flex;
  margin-bottom: 3rem;
  align-items: flex-start;
}

.step-number {
  width: 40px;
  height: 40px;
  background: #667eea;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 2rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h4 {
  margin-bottom: 0.5rem;
  color: #2d3748;
}

/* Code Blocks */
.code-block {
  background: #2d3748;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 1rem;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #4a5568;
  color: white;
  font-size: 0.875rem;
}

.code-block pre {
  padding: 1rem;
  margin: 0;
  background: transparent;
  color: #e2e8f0;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* Configuration Grid */
.config-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.config-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
}

.config-card h4 {
  margin-bottom: 1rem;
  color: #2d3748;
}

/* File Tree */
.file-tree {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-left: 4px solid #667eea;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.875rem;
}

.file-item {
  padding: 0.25rem 0;
  cursor: pointer;
}

.file-item.folder {
  font-weight: 600;
  color: #667eea;
}

.file-children {
  margin-left: 1.5rem;
  padding-left: 1rem;
  border-left: 1px solid #e2e8f0;
}

.file-item i {
  margin-right: 0.5rem;
  width: 16px;
}

/* Numbered List */
.numbered-list {
  margin-top: 2rem;
}

.list-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.list-item .number {
  width: 24px;
  height: 24px;
  background: #667eea;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 1rem;
  flex-shrink: 0;
}

.list-item .content {
  flex: 1;
}

/* Quick Start */
.quick-start-card, .tips-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
}

.command-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f7fafc;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.command-item code {
  background: #2d3748;
  color: #e2e8f0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.command-item span {
  font-size: 0.875rem;
  color: #718096;
}

/* Components Grid */
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.component-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  transition: transform 0.3s ease;
}

.component-card:hover {
  transform: translateY(-2px);
}

.component-preview {
  text-align: center;
  margin-bottom: 1.5rem;
}

.component-preview i {
  font-size: 3rem;
  color: #667eea;
}

.component-info h4 {
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.component-tags {
  margin: 1rem 0;
}

.tag {
  display: inline-block;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  margin-right: 0.5rem;
}

/* Customization Tabs */
.customization-tabs {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
}

.nav-tabs {
  border-bottom: 1px solid #e2e8f0;
  padding: 0 2rem;
}

.nav-tabs .nav-link {
  border: none;
  border-bottom: 3px solid transparent;
  color: #718096;
  margin: 0;
  border-radius: 0;
}

.nav-tabs .nav-link.active {
  background: transparent;
  color: #667eea;
  border-bottom-color: #667eea;
}

.tab-content {
  padding: 2rem;
}

/* Color Palette */
.color-palette {
  display: grid;
  gap: 1rem;
}

.color-item {
  display: flex;
  align-items: center;
}

.color-box {
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;
  margin-right: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.color-info {
  display: flex;
  flex-direction: column;
}

.color-name {
  font-weight: 600;
  color: #2d3748;
}

.color-value {
  font-size: 0.875rem;
  color: #718096;
  font-family: 'Monaco', 'Menlo', monospace;
}

/* Layout Options */
.layout-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.layout-option {
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 0.5rem;
}

.layout-option h5 {
  margin-bottom: 1rem;
  color: #2d3748;
}

.layout-option ul {
  margin: 0;
  padding-left: 1rem;
}

.layout-option li {
  margin-bottom: 0.5rem;
  color: #718096;
}

/* API Grid */
.api-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.api-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
}

.api-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.api-header h4 {
  margin: 0;
  color: #2d3748;
}

.api-method {
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.api-method.composable {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.api-method.utility {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.api-description {
  color: #718096;
  margin-bottom: 1rem;
}

.api-example h6 {
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.api-example pre {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #2d3748;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .step-item {
    flex-direction: column;
  }
  
  .step-number {
    margin-bottom: 1rem;
    margin-right: 0;
  }
  
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .component-grid,
  .config-grid,
  .api-grid {
    grid-template-columns: 1fr;
  }
}

/* Code Modal Styles */
.modal-xl {
  max-width: 90vw;
}

.code-preview {
  min-height: 400px;
}

.code-tabs {
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 0;
}

.code-tabs .nav-link {
  border: none;
  border-bottom: 3px solid transparent;
  color: #6c757d;
  font-weight: 500;
  padding: 1rem 1.5rem;
}

.code-tabs .nav-link:hover {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.code-tabs .nav-link.active {
  color: #667eea;
  background: white;
  border-bottom-color: #667eea;
}

.code-content {
  background: white;
}

.code-content .tab-pane {
  padding: 0;
}

.code-content .code-block {
  margin: 0;
  border-radius: 0;
}

.code-content .code-header {
  background: #4a5568;
  border-radius: 0;
}

.code-content pre {
  max-height: 400px;
  overflow-y: auto;
  margin: 0;
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-backdrop.show {
  opacity: 1;
}

.modal.show {
  display: block !important;
}

.modal-dialog {
  margin: 1.75rem auto;
}

.modal-content {
  border: none;
  border-radius: 1rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}

.modal-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 1rem 1rem 0 0;
  border-bottom: none;
}

.modal-header .btn-close {
  filter: invert(1);
  opacity: 0.8;
}

.modal-header .btn-close:hover {
  opacity: 1;
}

.modal-title {
  font-weight: 600;
}

.modal-footer {
  border-top: 1px solid #dee2e6;
  background: #f8f9fa;
  border-radius: 0 0 1rem 1rem;
}

/* Widgets Styles */
.widgets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.widget-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  transition: transform 0.3s ease;
}

.widget-card:hover {
  transform: translateY(-2px);
}

.widget-preview {
  text-align: center;
  margin-bottom: 1.5rem;
}

.widget-preview i {
  font-size: 3rem;
  color: #667eea;
}

.widget-info h4 {
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.widget-demo {
  margin: 1rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
  border: 1px solid #e9ecef;
}

.widget-tags {
  margin: 1rem 0;
}

.widget-tags .tag {
  display: inline-block;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  margin-right: 0.5rem;
}

/* Widget Categories */
.widget-categories {
  margin-top: 4rem;
}

.category-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  text-align: center;
  height: 100%;
}

.category-icon {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 1rem;
}

.category-card h5 {
  margin-bottom: 1rem;
  color: #2d3748;
}

.category-widgets {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.category-widgets li {
  padding: 0.25rem 0;
  color: #718096;
  font-size: 0.875rem;
}

/* Demo Widget Styles */
.demo-card .card {
  max-width: 280px;
  margin: 0 auto;
}

.demo-progress {
  max-width: 300px;
  margin: 0 auto;
}

.demo-progress .progress {
  height: 8px;
}

.demo-progress .circle-progress {
  position: relative;
  display: inline-block;
  margin-top: 1rem;
}

.demo-progress .progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.75rem;
  font-weight: 600;
  color: #2d3748;
}

.demo-todo .card {
  max-width: 320px;
  margin: 0 auto;
}

.demo-todo .todo-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f1f5f9;
  cursor: pointer;
  transition: background-color 0.2s;
}

.demo-todo .todo-item:hover {
  background: #f8f9fa;
}

.demo-todo .todo-item.completed .todo-text {
  text-decoration: line-through;
  opacity: 0.6;
}

.demo-todo .todo-item i {
  margin-right: 0.75rem;
  font-size: 1.1rem;
}

.demo-todo .todo-text {
  flex: 1;
  font-size: 0.875rem;
}

.demo-weather .card {
  max-width: 320px;
  margin: 0 auto;
}

.demo-notification .card {
  max-width: 350px;
  margin: 0 auto;
}

.demo-notification .notification-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-bottom: 1px solid #f1f5f9;
  cursor: pointer;
  transition: background-color 0.2s;
}

.demo-notification .notification-item:hover {
  background: #f8f9fa;
}

.demo-notification .notification-item.new {
  background: rgba(102, 126, 234, 0.05);
  border-left: 3px solid #667eea;
}

.demo-notification .notification-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.demo-notification .notification-icon i {
  color: white;
  font-size: 0.875rem;
}

.demo-notification .notification-content {
  flex: 1;
  min-width: 0;
}

.demo-notification .notification-content strong {
  font-size: 0.875rem;
  color: #2d3748;
}

.demo-notification .notification-content p {
  font-size: 0.75rem;
  line-height: 1.4;
}

.demo-calendar .card {
  max-width: 280px;
  margin: 0 auto;
}

.demo-calendar .calendar-mini {
  font-size: 0.75rem;
}

.demo-calendar .calendar-header,
.demo-calendar .calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.demo-calendar .calendar-header div {
  text-align: center;
  font-weight: 600;
  padding: 0.25rem;
  color: #6c757d;
}

.demo-calendar .calendar-body div {
  text-align: center;
  padding: 0.25rem;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.2s;
}

.demo-calendar .calendar-body div:hover {
  background: #e9ecef;
}

.demo-calendar .calendar-body div.today {
  background: #667eea;
  color: white;
  font-weight: 600;
}

/* Responsive Widgets */
@media (max-width: 768px) {
  .widgets-grid {
    grid-template-columns: 1fr;
  }
  
  .widget-categories .row {
    --bs-gutter-x: 1rem;
  }
  
  .category-card {
    margin-bottom: 1rem;
  }
}
</style>
