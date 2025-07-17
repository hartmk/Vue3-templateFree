<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header Section -->
    <div class="row mb-4">
      <div class="col-12">
        <h1 class="text-primary mb-2">
          <i class="fas fa-id-card me-3"></i>Card Components
        </h1>
        <p class="text-muted mb-0">ตัวอย่างการใช้งาน Card Components แบบต่างๆ ด้วย Bootstrap</p>
      </div>
    </div>

    <!-- Basic Cards -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-rectangle-wide me-2"></i>Basic Cards
        </h3>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" @click.prevent>Go somewhere</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Card with Header</h6>
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-success" @click.prevent>Action</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card with Footer</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer text-muted">
            Last updated 3 mins ago
          </div>
        </div>
      </div>
    </div>

    <!-- Cards with Images -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-image me-2"></i>Cards with Images
        </h3>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-img-placeholder bg-primary d-flex align-items-center justify-content-center text-white" style="height: 200px;">
            <div class="text-center">
              <i class="fas fa-image fa-3x mb-2"></i>
              <div>Image Placeholder</div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Card with Image Top</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" @click.prevent>Read More</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card with Image Bottom</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-info" @click.prevent>Learn More</a>
          </div>
          <div class="card-img-placeholder bg-info d-flex align-items-center justify-content-center text-white" style="height: 150px;">
            <div class="text-center">
              <i class="fas fa-chart-bar fa-2x mb-1"></i>
              <div>Chart Image</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-img-placeholder bg-success d-flex align-items-center justify-content-center text-white" style="height: 200px;">
            <div class="text-center">
              <i class="fas fa-play-circle fa-3x mb-2"></i>
              <div>Video Thumbnail</div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Video Card</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Colored Cards -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-palette me-2"></i>Colored Cards
        </h3>
      </div>
      
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-white bg-primary">
          <div class="card-header">Primary Card</div>
          <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-white bg-success">
          <div class="card-header">Success Card</div>
          <div class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-white bg-danger">
          <div class="card-header">Danger Card</div>
          <div class="card-body">
            <h5 class="card-title">Danger card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card text-white bg-warning">
          <div class="card-header">Warning Card</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Special Cards -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-star me-2"></i>Special Cards
        </h3>
      </div>
      
      <!-- Profile Card -->
      <div class="col-lg-4 mb-4">
        <div class="card border-0 shadow">
          <div class="card-body text-center">
            <div class="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center text-white mb-3" style="width: 80px; height: 80px;">
              <i class="fas fa-user fa-2x"></i>
            </div>
            <h5 class="card-title">นายสมชาย ใจดี</h5>
            <p class="text-muted mb-3">Senior Developer</p>
            <div class="d-flex justify-content-center gap-2">
              <button class="btn btn-primary btn-sm">
                <i class="fas fa-envelope me-1"></i>Email
              </button>
              <button class="btn btn-outline-primary btn-sm">
                <i class="fas fa-phone me-1"></i>Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Card -->
      <div class="col-lg-4 mb-4">
        <div class="card border-0 shadow">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h6 class="text-muted mb-1">Total Revenue</h6>
                <h3 class="text-primary mb-0">$45,250</h3>
              </div>
              <div class="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                <i class="fas fa-dollar-sign text-primary"></i>
              </div>
            </div>
            <div class="progress mb-2" style="height: 8px;">
              <div class="progress-bar bg-primary" style="width: 75%"></div>
            </div>
            <div class="d-flex justify-content-between">
              <small class="text-muted">Progress</small>
              <small class="text-primary fw-bold">75%</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Card -->
      <div class="col-lg-4 mb-4">
        <div class="card border-0 shadow h-100">
          <div class="card-body d-flex flex-column">
            <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center text-success mb-3" style="width: 60px; height: 60px;">
              <i class="fas fa-shield-alt fa-2x"></i>
            </div>
            <h5 class="card-title">Security</h5>
            <p class="card-text flex-grow-1">Advanced security features to protect your data and ensure privacy.</p>
            <div class="mt-auto">
              <a href="#" class="btn btn-success w-100" @click.prevent>Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Cards -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-mouse-pointer me-2"></i>Interactive Cards
        </h3>
      </div>
      
      <!-- Flip Card -->
      <div class="col-lg-4 mb-4">
        <div class="flip-card" style="height: 300px;">
          <div class="flip-card-inner">
            <div class="flip-card-front card">
              <div class="card-body d-flex flex-column justify-content-center text-center">
                <i class="fas fa-magic fa-3x text-primary mb-3"></i>
                <h5 class="card-title">Hover to Flip</h5>
                <p class="card-text">This card has a flip animation on hover</p>
              </div>
            </div>
            <div class="flip-card-back card bg-primary text-white">
              <div class="card-body d-flex flex-column justify-content-center text-center">
                <i class="fas fa-star fa-3x mb-3"></i>
                <h5 class="card-title">Back Side</h5>
                <p class="card-text">Hidden content revealed!</p>
                <button class="btn btn-light">Action</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hover Effect Card -->
      <div class="col-lg-4 mb-4">
        <div class="card hover-card border-0 shadow-sm">
          <div class="card-body text-center">
            <div class="icon-wrapper bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
              <i class="fas fa-rocket fa-2x text-info"></i>
            </div>
            <h5 class="card-title">Hover Effect</h5>
            <p class="card-text">This card transforms on hover with smooth animations</p>
            <button class="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>

      <!-- Gradient Card -->
      <div class="col-lg-4 mb-4">
        <div class="card border-0 shadow gradient-card text-white">
          <div class="card-body">
            <h5 class="card-title">Gradient Card</h5>
            <p class="card-text">Beautiful gradient background with semi-transparent overlay</p>
            <button class="btn btn-light">Explore</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Card Groups and Layouts -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-th me-2"></i>Card Groups & Layouts
        </h3>
      </div>
      
      <!-- Card Group -->
      <div class="col-12 mb-4">
        <h5 class="text-secondary mb-3">Card Group</h5>
        <div class="card-group">
          <div class="card">
            <div class="card-img-placeholder bg-info d-flex align-items-center justify-content-center text-white" style="height: 180px;">
              <i class="fas fa-camera fa-2x"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <div class="card-img-placeholder bg-success d-flex align-items-center justify-content-center text-white" style="height: 180px;">
              <i class="fas fa-video fa-2x"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <div class="card-img-placeholder bg-warning d-flex align-items-center justify-content-center text-white" style="height: 180px;">
              <i class="fas fa-music fa-2x"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Deck Alternative with Grid -->
      <div class="col-12 mb-4">
        <h5 class="text-secondary mb-3">Equal Height Cards (Grid)</h5>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="card-img-placeholder bg-primary d-flex align-items-center justify-content-center text-white" style="height: 200px;">
                <i class="fas fa-laptop fa-3x"></i>
              </div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Web Development</h5>
                <p class="card-text flex-grow-1">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                <button class="btn btn-primary mt-auto">Learn More</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-img-placeholder bg-success d-flex align-items-center justify-content-center text-white" style="height: 200px;">
                <i class="fas fa-mobile-alt fa-3x"></i>
              </div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Mobile Apps</h5>
                <p class="card-text flex-grow-1">This is a short card.</p>
                <button class="btn btn-success mt-auto">Get Started</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-img-placeholder bg-info d-flex align-items-center justify-content-center text-white" style="height: 200px;">
                <i class="fas fa-cloud fa-3x"></i>
              </div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Cloud Services</h5>
                <p class="card-text flex-grow-1">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer than the others.</p>
                <button class="btn btn-info mt-auto">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Cards -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-gem me-2"></i>Advanced Cards
        </h3>
      </div>
      
      <!-- Card with Tabs -->
      <div class="col-lg-6 mb-4">
        <div class="card border-0 shadow">
          <div class="card-header bg-white">
            <ul class="nav nav-tabs card-header-tabs" role="tablist">
              <li class="nav-item">
                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab1" type="button">
                  <i class="fas fa-home me-1"></i>Home
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab2" type="button">
                  <i class="fas fa-user me-1"></i>Profile
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab3" type="button">
                  <i class="fas fa-cog me-1"></i>Settings
                </button>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content">
              <div class="tab-pane fade show active" id="tab1">
                <h5 class="card-title">Home Content</h5>
                <p class="card-text">Welcome to the home tab! This is where you'll find the main content.</p>
                <button class="btn btn-primary">Get Started</button>
              </div>
              <div class="tab-pane fade" id="tab2">
                <h5 class="card-title">Profile Information</h5>
                <p class="card-text">Here you can view and edit your profile information.</p>
                <button class="btn btn-success">Edit Profile</button>
              </div>
              <div class="tab-pane fade" id="tab3">
                <h5 class="card-title">Settings Panel</h5>
                <p class="card-text">Configure your application settings here.</p>
                <button class="btn btn-warning">Save Settings</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card with Timeline -->
      <div class="col-lg-6 mb-4">
        <div class="card border-0 shadow">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">
              <i class="fas fa-history me-2"></i>Activity Timeline
            </h5>
          </div>
          <div class="card-body">
            <div class="timeline">
              <div class="timeline-item d-flex mb-3">
                <div class="timeline-marker me-3">
                  <div class="bg-success rounded-circle d-flex align-items-center justify-content-center text-white" style="width: 30px; height: 30px;">
                    <i class="fas fa-check"></i>
                  </div>
                </div>
                <div class="timeline-content">
                  <h6 class="mb-1">Task Completed</h6>
                  <p class="text-muted mb-1 small">Project setup finished successfully</p>
                  <small class="text-muted">2 hours ago</small>
                </div>
              </div>
              <div class="timeline-item d-flex mb-3">
                <div class="timeline-marker me-3">
                  <div class="bg-info rounded-circle d-flex align-items-center justify-content-center text-white" style="width: 30px; height: 30px;">
                    <i class="fas fa-info"></i>
                  </div>
                </div>
                <div class="timeline-content">
                  <h6 class="mb-1">Meeting Scheduled</h6>
                  <p class="text-muted mb-1 small">Team standup at 3 PM</p>
                  <small class="text-muted">4 hours ago</small>
                </div>
              </div>
              <div class="timeline-item d-flex">
                <div class="timeline-marker me-3">
                  <div class="bg-warning rounded-circle d-flex align-items-center justify-content-center text-white" style="width: 30px; height: 30px;">
                    <i class="fas fa-exclamation"></i>
                  </div>
                </div>
                <div class="timeline-content">
                  <h6 class="mb-1">Deadline Reminder</h6>
                  <p class="text-muted mb-1 small">Project due in 2 days</p>
                  <small class="text-muted">1 day ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="row mb-5">
      <div class="col-12">
        <h3 class="text-primary mb-3">
          <i class="fas fa-tags me-2"></i>Pricing Cards
        </h3>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card border-0 shadow h-100">
          <div class="card-body text-center d-flex flex-column">
            <h5 class="card-title text-muted">Basic</h5>
            <div class="mb-3">
              <span class="h1 text-primary">฿299</span>
              <span class="text-muted">/month</span>
            </div>
            <ul class="list-unstyled flex-grow-1">
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>10 GB Storage</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Basic Support</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>1 User</li>
              <li class="mb-2"><i class="fas fa-times text-danger me-2"></i>Advanced Features</li>
              <li class="mb-2"><i class="fas fa-times text-danger me-2"></i>Priority Support</li>
            </ul>
            <button class="btn btn-outline-primary mt-auto">Choose Plan</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card border-primary shadow h-100 position-relative">
          <div class="position-absolute top-0 start-50 translate-middle">
            <span class="badge bg-primary px-3 py-2">Most Popular</span>
          </div>
          <div class="card-body text-center d-flex flex-column pt-4">
            <h5 class="card-title text-primary">Pro</h5>
            <div class="mb-3">
              <span class="h1 text-primary">฿599</span>
              <span class="text-muted">/month</span>
            </div>
            <ul class="list-unstyled flex-grow-1">
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>100 GB Storage</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Priority Support</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>5 Users</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Advanced Features</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Analytics</li>
            </ul>
            <button class="btn btn-primary mt-auto">Choose Plan</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card border-0 shadow h-100">
          <div class="card-body text-center d-flex flex-column">
            <h5 class="card-title text-muted">Enterprise</h5>
            <div class="mb-3">
              <span class="h1 text-primary">฿999</span>
              <span class="text-muted">/month</span>
            </div>
            <ul class="list-unstyled flex-grow-1">
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Unlimited Storage</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>24/7 Support</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Unlimited Users</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>All Features</li>
              <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Custom Integrations</li>
            </ul>
            <button class="btn btn-outline-primary mt-auto">Contact Sales</button>
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
/* Flip Card Styles */
.flip-card {
  background-color: transparent;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: none;
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* Hover Effect Card */
.hover-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.hover-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

.hover-card:hover .icon-wrapper {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Gradient Card */
.gradient-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

/* Timeline Styles */
.timeline-item:not(:last-child) {
  position: relative;
}

.timeline-item:not(:last-child):before {
  content: '';
  position: absolute;
  left: 14px;
  top: 40px;
  height: calc(100% - 10px);
  width: 2px;
  background: #e9ecef;
  z-index: 0;
}

.timeline-marker {
  z-index: 1;
}

/* Card Enhancements */
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Image Placeholder Styling */
.card-img-placeholder {
  border-radius: 0.375rem 0.375rem 0 0;
}

.card:last-child .card-img-placeholder {
  border-radius: 0 0 0.375rem 0.375rem;
}

/* Pricing Card Special Styling */
.card.border-primary {
  border-width: 2px !important;
}

/* Custom Tab Styling */
.nav-tabs .nav-link {
  border-radius: 0.5rem 0.5rem 0 0;
  border: none;
  color: #6c757d;
  background: transparent;
}

.nav-tabs .nav-link.active {
  background: white;
  color: #495057;
  border-bottom: 2px solid #007bff;
}

.nav-tabs .nav-link:hover {
  background: #f8f9fa;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .flip-card {
    height: auto !important;
    min-height: 250px;
  }
  
  .card-group {
    flex-direction: column;
  }
  
  .card-group .card {
    margin-bottom: 1rem;
  }
}

/* Animation for cards */
.card {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Shadow variations */
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

/* Custom button styles within cards */
.card .btn {
  transition: all 0.3s ease;
}

.card .btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
