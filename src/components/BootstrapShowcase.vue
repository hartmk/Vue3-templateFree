<template>
  <div class="container-fluid py-4 px-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-primary mb-4">Bootstrap UI Components</h1>
        <p class="lead text-muted">ตัวอย่างการใช้งาน Bootstrap Components แบบมาตรฐาน</p>
      </div>
    </div>



    <!-- Cards Section -->
    <div class="row mb-5">
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h6 class="mb-0"><i class="fas fa-chart-bar me-2"></i>Card Header</h6>
          </div>
          <div class="card-body">
            <h5 class="card-title">Special Card</h5>
            <p class="card-text">This is a card with standard Bootstrap styling.</p>
            <button class="btn btn-primary">Action</button>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body text-center">
            <div class="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                 style="width: 80px; height: 80px;">
              <i class="fas fa-users text-white fa-2x"></i>
            </div>
            <h5 class="card-title">Users</h5>
            <h2 class="text-primary">1,234</h2>
            <p class="text-muted">Active users this month</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="mb-0">Progress Card</h6>
              <span class="badge bg-primary">85%</span>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar bg-primary" style="width: 85%"></div>
            </div>
            <p class="text-muted mb-0">Project completion rate</p>
          </div>
        </div>
      </div>
    </div>



    <!-- List Group Section -->
    <div class="row mb-5">
      <div class="col-md-6 mx-auto">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-list me-2"></i>List Group</h5>
          </div>
          <div class="card-body p-0">
            <div class="list-group list-group-flush">
              <div class="list-group-item d-flex justify-content-between align-items-center">
                Inbox
                <span class="badge bg-primary rounded-pill">14</span>
              </div>
              <div class="list-group-item d-flex justify-content-between align-items-center">
                Sent
                <span class="badge bg-success rounded-pill">2</span>
              </div>
              <div class="list-group-item d-flex justify-content-between align-items-center">
                Spam
                <span class="badge bg-danger rounded-pill">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Section -->
    <div class="row mb-5">
      <div class="col-md-8 mx-auto">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-edit me-2"></i>Form Elements</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control" placeholder="Enter your name">
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" placeholder="Enter your email">
                </div>
              </div>
              
              <div class="mb-3">
                <label class="form-label">Select Option</label>
                <select class="form-select">
                  <option selected>Choose...</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
              
              <div class="mb-3">
                <label class="form-label">Message</label>
                <textarea class="form-control" rows="3" placeholder="Enter your message"></textarea>
              </div>
              
                            
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  I agree to the terms and conditions
                </label>
              </div>
              
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-outline-secondary me-md-2" type="button">Cancel</button>
                <button class="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Accordion Section -->
    <!-- Accordion Section -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-list-ul me-2"></i>Accordion</h5>
          </div>
          <div class="card-body">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Breadcrumb Section -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-sitemap me-2"></i>Breadcrumb</h5>
          </div>
          <div class="card-body">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
            
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Products</a></li>
                <li class="breadcrumb-item active" aria-current="page">Laptops</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>



    <!-- Carousel Section -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-images me-2"></i>Carousel</h5>
          </div>
          <div class="card-body">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="bg-primary d-flex align-items-center justify-content-center text-white" style="height: 300px;">
                    <div class="text-center">
                      <h3>First slide</h3>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="bg-success d-flex align-items-center justify-content-center text-white" style="height: 300px;">
                    <div class="text-center">
                      <h3>Second slide</h3>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="bg-info d-flex align-items-center justify-content-center text-white" style="height: 300px;">
                    <div class="text-center">
                      <h3>Third slide</h3>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dropdown Section -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-caret-down me-2"></i>Dropdowns</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <h6>Basic Dropdown</h6>
                <div class="dropdown mb-3">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              
              <div class="col-md-4">
                <h6>Split Dropdown</h6>
                <div class="btn-group mb-3">
                  <button type="button" class="btn btn-danger">Action</button>
                  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              
              <div class="col-md-4">
                <h6>Dropup</h6>
                <div class="btn-group dropup mb-3">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                    Dropup
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar Section -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-bars me-2"></i>Navbar</h5>
          </div>
          <div class="card-body">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-3">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <i class="fas fa-rocket me-2"></i>Brand
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                        Dropdown
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Light Navbar</a>
                <div class="navbar-nav">
                  <a class="nav-link active" href="#">Home</a>
                  <a class="nav-link" href="#">Link</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas Section -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-bars me-2"></i>Offcanvas</h5>
          </div>
          <div class="card-body">
            <button class="btn btn-primary me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
              <i class="fas fa-arrow-right me-2"></i>Toggle left offcanvas
            </button>
            <button class="btn btn-secondary me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop">
              <i class="fas fa-arrow-down me-2"></i>Toggle top offcanvas
            </button>
            <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
              <i class="fas fa-arrow-left me-2"></i>Toggle right offcanvas
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress Bars Section -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-tasks me-2"></i>Progress Bars</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h6>Basic Progress</h6>
                <div class="progress mb-3">
                  <div class="progress-bar" style="width: 25%"></div>
                </div>
                <div class="progress mb-3">
                  <div class="progress-bar bg-success" style="width: 50%"></div>
                </div>
                <div class="progress mb-3">
                  <div class="progress-bar bg-info" style="width: 75%"></div>
                </div>
                
                <h6>Labeled Progress</h6>
                <div class="progress mb-3">
                  <div class="progress-bar" style="width: 85%">85%</div>
                </div>
              </div>
              
              <div class="col-md-6">
                <h6>Striped Progress</h6>
                <div class="progress mb-3">
                  <div class="progress-bar progress-bar-striped" style="width: 40%"></div>
                </div>
                <div class="progress mb-3">
                  <div class="progress-bar progress-bar-striped bg-success" style="width: 60%"></div>
                </div>
                
                <h6>Animated Progress</h6>
                <div class="progress mb-3">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
                </div>
                
                <h6>Multiple Bars</h6>
                <div class="progress">
                  <div class="progress-bar" style="width: 15%"></div>
                  <div class="progress-bar bg-success" style="width: 30%"></div>
                  <div class="progress-bar bg-info" style="width: 20%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Spinners Section -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-spinner me-2"></i>Spinners</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h6>Border Spinners</h6>
                <div class="d-flex align-items-center mb-3">
                  <div class="spinner-border text-primary me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border text-secondary me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border text-success me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border text-danger me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                
                <h6>Small Spinners</h6>
                <div class="d-flex align-items-center mb-3">
                  <div class="spinner-border spinner-border-sm text-primary me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border spinner-border-sm text-success me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6">
                <h6>Growing Spinners</h6>
                <div class="d-flex align-items-center mb-3">
                  <div class="spinner-grow text-primary me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-secondary me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-success me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-danger me-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                
                <h6>Button Spinners</h6>
                <div class="d-flex gap-2">
                  <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                    Loading...
                  </button>
                  <button class="btn btn-outline-secondary" type="button" disabled>
                    <span class="spinner-grow spinner-grow-sm me-2" role="status"></span>
                    Loading...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Section -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-comment me-2"></i>Toasts</h5>
          </div>
          <div class="card-body">
            <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
            
            <div class="toast-container position-fixed bottom-0 end-0 p-3">
              <div id="liveToast" class="toast" role="alert">
                <div class="toast-header">
                  <div class="rounded me-2 bg-primary" style="width: 20px; height: 20px;"></div>
                  <strong class="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body">
                  Hello, world! This is a toast message.
                </div>
              </div>
            </div>
            
            <!-- Static Toast Examples -->
            <div class="mt-3">
              <div class="toast show" role="alert">
                <div class="toast-header">
                  <div class="rounded me-2 bg-success" style="width: 20px; height: 20px;"></div>
                  <strong class="me-auto">Success</strong>
                  <small class="text-muted">just now</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body">
                  Your action was completed successfully!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tooltip & Popover Section -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0"><i class="fas fa-info-circle me-2"></i>Tooltips & Popovers</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h6>Tooltips</h6>
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                    Top
                  </button>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
                    Right
                  </button>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
                    Bottom
                  </button>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
                    Left
                  </button>
                </div>
              </div>
              
              <div class="col-md-6">
                <h6>Popovers</h6>
                <div class="d-flex flex-wrap gap-2">
                  <button type="button" class="btn btn-danger" data-bs-toggle="popover" data-bs-placement="top" 
                          title="Popover title" data-bs-content="This is a popover with some content.">
                    Top
                  </button>
                  <button type="button" class="btn btn-danger" data-bs-toggle="popover" data-bs-placement="right" 
                          title="Popover title" data-bs-content="This is a popover with some content.">
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Trigger -->
    <div class="row mb-5">
      <div class="col-12 text-center">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i class="fas fa-external-link-alt me-2"></i>Launch Demo Modal
        </button>
      </div>
    </div>

    <!-- Demo Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">Modal Title</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>This is a demo modal with Bootstrap styling. You can put any content here.</p>
            <div class="alert alert-info">
              <i class="fas fa-lightbulb me-2"></i>
              This modal uses standard Bootstrap CSS.
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas Elements -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Offcanvas Left</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you have chosen.
        </div>
        <div class="dropdown mt-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Offcanvas Top</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          This is an offcanvas that slides down from the top.
        </div>
      </div>
    </div>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Offcanvas Right</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          This is an offcanvas that slides in from the right.
        </div>
        <div class="mt-3">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">
              Active item
            </a>
            <a href="#" class="list-group-item list-group-item-action">A second item</a>
            <a href="#" class="list-group-item list-group-item-action">A third item</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Tooltip, Popover, Toast } from 'bootstrap'

onMounted(() => {
  console.log('Bootstrap UI Components loaded')
  
  // Initialize tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
  
  // Initialize popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl))
  
  // Toast functionality
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  
  if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
      const toast = new Toast(toastLiveExample)
      toast.show()
    })
  }
})
</script>

<style scoped>
/* ใช้ Bootstrap หลักเท่านั้น */
</style>
