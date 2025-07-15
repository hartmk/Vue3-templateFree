<template>
  <div class="container-fluid py-4 px-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-primary mb-4">DataTables Examples</h1>
        <p class="lead text-muted">ตัวอย่างการใช้งาน DataTables พร้อมฟีเจอร์ขั้นสูง</p>
      </div>
    </div>

    <!-- Basic DataTable -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0"><i class="fas fa-table me-2"></i>Basic DataTable</h5>
          </div>
          <div class="card-body">
            <table id="basicTable" class="table table-striped table-hover" style="width:100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <!-- Data will be loaded via DataTables -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced DataTable with Buttons -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-success text-white">
            <h5 class="mb-0"><i class="fas fa-download me-2"></i>Advanced DataTable with Export Buttons</h5>
          </div>
          <div class="card-body">
            <table id="advancedTable" class="table table-striped table-hover" style="width:100%">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <!-- Data will be loaded via DataTables -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Responsive DataTable -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-info text-white">
            <h5 class="mb-0"><i class="fas fa-mobile-alt me-2"></i>Responsive DataTable</h5>
          </div>
          <div class="card-body">
            <table id="responsiveTable" class="table table-striped table-hover" style="width:100%">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Position</th>
                  <th>Hire Date</th>
                  <th>Salary</th>
                  <th>Performance</th>
                  <th>Manager</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <!-- Data will be loaded via DataTables -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Server-side Processing Simulation -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-warning text-dark">
            <h5 class="mb-0"><i class="fas fa-server me-2"></i>Server-side Processing (Simulated)</h5>
          </div>
          <div class="card-body">
            <table id="serverSideTable" class="table table-striped table-hover" style="width:100%">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Order Date</th>
                </tr>
              </thead>
              <tbody>
                <!-- Data will be loaded via server-side processing -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Styling DataTable -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-dark text-white">
            <h5 class="mb-0"><i class="fas fa-palette me-2"></i>Custom Styled DataTable</h5>
          </div>
          <div class="card-body">
            <table id="styledTable" class="table table-dark table-striped table-hover" style="width:100%">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <!-- Data will be loaded via DataTables -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import $ from 'jquery'

// Import DataTables
import DataTable from 'datatables.net-bs5'
import 'datatables.net-buttons-bs5'
import 'datatables.net-responsive-bs5'

// Import DataTables CSS
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css'
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css'

// Store DataTable instances for cleanup
let tables = []

onMounted(() => {
  console.log('DataTables Examples loaded')
  
  // Initialize all DataTables
  initBasicTable()
  initAdvancedTable()
  initResponsiveTable()
  initServerSideTable()
  initStyledTable()
})

onUnmounted(() => {
  // Destroy all DataTable instances
  tables.forEach(table => {
    if (table && typeof table.destroy === 'function') {
      table.destroy()
    }
  })
  tables = []
})

function initBasicTable() {
  const table = new DataTable('#basicTable', {
    data: generateBasicData(),
    columns: [
      { data: 'name' },
      { data: 'position' },
      { data: 'office' },
      { data: 'age' },
      { data: 'start_date' },
      { 
        data: 'salary',
        render: function(data) {
          return '$' + parseFloat(data).toLocaleString()
        }
      }
    ],
    pageLength: 10,
    order: [[0, 'asc']],
    language: {
      search: "ค้นหา:",
      lengthMenu: "แสดง _MENU_ รายการ",
      info: "แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ",
      paginate: {
        first: "หน้าแรก",
        last: "หน้าสุดท้าย",
        next: "ถัดไป",
        previous: "ก่อนหน้า"
      }
    }
  })
  tables.push(table)
}

function initAdvancedTable() {
  const table = new DataTable('#advancedTable', {
    data: generateAdvancedData(),
    columns: [
      { data: 'id' },
      { data: 'customer' },
      { data: 'product' },
      { data: 'category' },
      { data: 'quantity' },
      { 
        data: 'price',
        render: function(data) {
          return '$' + parseFloat(data).toFixed(2)
        }
      },
      { 
        data: 'total',
        render: function(data) {
          return '$' + parseFloat(data).toFixed(2)
        }
      },
      { 
        data: 'status',
        render: function(data) {
          const badges = {
            'Pending': 'warning',
            'Completed': 'success',
            'Cancelled': 'danger',
            'Processing': 'info'
          }
          return `<span class="badge bg-${badges[data] || 'secondary'}">${data}</span>`
        }
      },
      { data: 'date' },
      {
        data: null,
        render: function(data, type, row) {
          return `
            <button class="btn btn-sm btn-outline-primary me-1" onclick="editRecord(${row.id})">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger" onclick="deleteRecord(${row.id})">
              <i class="fas fa-trash"></i>
            </button>
          `
        }
      }
    ],
    dom: 'Bfrtip',
    buttons: [
      'copy', 'csv', 'excel', 'pdf', 'print'
    ],
    pageLength: 25,
    order: [[0, 'desc']],
    language: {
      search: "ค้นหา:",
      lengthMenu: "แสดง _MENU_ รายการ",
      info: "แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ",
      buttons: {
        copy: 'คัดลอก',
        csv: 'CSV',
        excel: 'Excel',
        pdf: 'PDF',
        print: 'พิมพ์'
      }
    }
  })
  tables.push(table)
}

function initResponsiveTable() {
  const table = new DataTable('#responsiveTable', {
    data: generateEmployeeData(),
    columns: [
      { data: 'emp_id' },
      { data: 'full_name' },
      { data: 'email' },
      { data: 'department' },
      { data: 'position' },
      { data: 'hire_date' },
      { 
        data: 'salary',
        render: function(data) {
          return '$' + parseFloat(data).toLocaleString()
        }
      },
      { 
        data: 'performance',
        render: function(data) {
          const colors = {
            'Excellent': 'success',
            'Good': 'info',
            'Average': 'warning',
            'Poor': 'danger'
          }
          return `<span class="badge bg-${colors[data] || 'secondary'}">${data}</span>`
        }
      },
      { data: 'manager' },
      { 
        data: 'status',
        render: function(data) {
          return data === 'Active' ? 
            '<span class="badge bg-success">Active</span>' : 
            '<span class="badge bg-secondary">Inactive</span>'
        }
      }
    ],
    responsive: true,
    pageLength: 15,
    language: {
      search: "ค้นหา:",
      lengthMenu: "แสดง _MENU_ รายการ",
      info: "แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ"
    }
  })
  tables.push(table)
}

function initServerSideTable() {
  const table = new DataTable('#serverSideTable', {
    processing: true,
    serverSide: true,
    ajax: function(data, callback, settings) {
      // Simulate server-side processing
      setTimeout(() => {
        const allData = generateOrderData()
        
        // Apply search
        let filteredData = allData
        if (data.search.value) {
          const searchTerm = data.search.value.toLowerCase()
          filteredData = allData.filter(item => 
            Object.values(item).some(val => 
              val.toString().toLowerCase().includes(searchTerm)
            )
          )
        }
        
        // Apply sorting
        if (data.order.length > 0) {
          const columnIndex = data.order[0].column
          const direction = data.order[0].dir
          const columnName = data.columns[columnIndex].data
          
          filteredData.sort((a, b) => {
            const aVal = a[columnName]
            const bVal = b[columnName]
            if (direction === 'asc') {
              return aVal < bVal ? -1 : aVal > bVal ? 1 : 0
            } else {
              return aVal > bVal ? -1 : aVal < bVal ? 1 : 0
            }
          })
        }
        
        // Apply pagination
        const start = data.start
        const length = data.length
        const pagedData = filteredData.slice(start, start + length)
        
        callback({
          draw: data.draw,
          recordsTotal: allData.length,
          recordsFiltered: filteredData.length,
          data: pagedData
        })
      }, 500) // Simulate network delay
    },
    columns: [
      { data: 'order_id' },
      { data: 'customer_name' },
      { data: 'product' },
      { 
        data: 'amount',
        render: function(data) {
          return '$' + parseFloat(data).toFixed(2)
        }
      },
      { 
        data: 'status',
        render: function(data) {
          const badges = {
            'Pending': 'warning',
            'Shipped': 'info',
            'Delivered': 'success',
            'Cancelled': 'danger'
          }
          return `<span class="badge bg-${badges[data] || 'secondary'}">${data}</span>`
        }
      },
      { data: 'order_date' }
    ],
    pageLength: 10,
    language: {
      processing: "กำลังประมวลผล...",
      search: "ค้นหา:",
      lengthMenu: "แสดง _MENU_ รายการ",
      info: "แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ",
      loadingRecords: "กำลังโหลด...",
      zeroRecords: "ไม่พบข้อมูล"
    }
  })
  tables.push(table)
}

function initStyledTable() {
  const table = new DataTable('#styledTable', {
    data: generateProductData(),
    columns: [
      { data: 'product_id' },
      { data: 'product_name' },
      { data: 'category' },
      { data: 'brand' },
      { 
        data: 'price',
        render: function(data) {
          return '$' + parseFloat(data).toFixed(2)
        }
      },
      { 
        data: 'stock',
        render: function(data) {
          return data < 10 ? 
            `<span class="text-danger fw-bold">${data}</span>` : 
            `<span class="text-success">${data}</span>`
        }
      },
      { 
        data: 'rating',
        render: function(data) {
          let stars = ''
          for (let i = 1; i <= 5; i++) {
            stars += i <= data ? '<i class="fas fa-star text-warning"></i>' : '<i class="far fa-star text-muted"></i>'
          }
          return `${stars} <small>(${data}/5)</small>`
        }
      },
      {
        data: null,
        render: function(data, type, row) {
          return `
            <div class="btn-group" role="group">
              <button class="btn btn-sm btn-outline-light" onclick="viewProduct(${row.product_id})">
                <i class="fas fa-eye"></i>
              </button>
              <button class="btn btn-sm btn-outline-warning" onclick="editProduct(${row.product_id})">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${row.product_id})">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `
        }
      }
    ],
    pageLength: 20,
    language: {
      search: "ค้นหา:",
      lengthMenu: "แสดง _MENU_ รายการ",
      info: "แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ"
    }
  })
  tables.push(table)
}

// Data generation functions
function generateBasicData() {
  const names = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'David Brown', 'Lisa Garcia', 'Tom Anderson', 'Emma Davis', 'Chris Lee', 'Amy Taylor']
  const positions = ['Manager', 'Developer', 'Designer', 'Analyst', 'Coordinator']
  const offices = ['New York', 'London', 'Tokyo', 'Sydney', 'Paris']
  
  return Array.from({length: 50}, (_, i) => ({
    name: names[Math.floor(Math.random() * names.length)],
    position: positions[Math.floor(Math.random() * positions.length)],
    office: offices[Math.floor(Math.random() * offices.length)],
    age: Math.floor(Math.random() * 40) + 25,
    start_date: new Date(2015 + Math.floor(Math.random() * 8), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
    salary: (Math.floor(Math.random() * 100000) + 40000).toString()
  }))
}

function generateAdvancedData() {
  const customers = ['Acme Corp', 'Tech Solutions', 'Global Inc', 'Startup Co', 'Enterprise Ltd']
  const products = ['Laptop', 'Desktop', 'Monitor', 'Keyboard', 'Mouse', 'Tablet', 'Phone']
  const categories = ['Electronics', 'Computers', 'Accessories', 'Mobile']
  const statuses = ['Pending', 'Completed', 'Cancelled', 'Processing']
  
  return Array.from({length: 100}, (_, i) => {
    const quantity = Math.floor(Math.random() * 10) + 1
    const price = Math.floor(Math.random() * 1000) + 100
    return {
      id: i + 1,
      customer: customers[Math.floor(Math.random() * customers.length)],
      product: products[Math.floor(Math.random() * products.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      quantity,
      price,
      total: quantity * price,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      date: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0]
    }
  })
}

function generateEmployeeData() {
  const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Tom', 'Emma', 'Chris', 'Amy']
  const lastNames = ['Smith', 'Johnson', 'Wilson', 'Brown', 'Garcia', 'Davis', 'Anderson', 'Taylor', 'Lee', 'Clark']
  const departments = ['IT', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations']
  const positions = ['Manager', 'Senior', 'Junior', 'Lead', 'Specialist']
  const performance = ['Excellent', 'Good', 'Average', 'Poor']
  const managers = ['John Smith', 'Jane Doe', 'Mike Johnson', 'Sarah Wilson']
  
  return Array.from({length: 75}, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const fullName = `${firstName} ${lastName}`
    
    return {
      emp_id: `EMP${(i + 1).toString().padStart(3, '0')}`,
      full_name: fullName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
      department: departments[Math.floor(Math.random() * departments.length)],
      position: positions[Math.floor(Math.random() * positions.length)],
      hire_date: new Date(2018 + Math.floor(Math.random() * 5), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      salary: (Math.floor(Math.random() * 80000) + 50000).toString(),
      performance: performance[Math.floor(Math.random() * performance.length)],
      manager: managers[Math.floor(Math.random() * managers.length)],
      status: Math.random() > 0.1 ? 'Active' : 'Inactive'
    }
  })
}

function generateOrderData() {
  const customers = ['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Wilson', 'Eva Brown']
  const products = ['MacBook Pro', 'iPhone 14', 'iPad Air', 'AirPods Pro', 'Apple Watch']
  const statuses = ['Pending', 'Shipped', 'Delivered', 'Cancelled']
  
  return Array.from({length: 200}, (_, i) => ({
    order_id: `ORD${(i + 1).toString().padStart(4, '0')}`,
    customer_name: customers[Math.floor(Math.random() * customers.length)],
    product: products[Math.floor(Math.random() * products.length)],
    amount: (Math.floor(Math.random() * 2000) + 100).toString(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    order_date: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0]
  }))
}

function generateProductData() {
  const products = ['MacBook Pro', 'iPhone 14', 'iPad Air', 'AirPods Pro', 'Apple Watch', 'iMac', 'Mac Mini']
  const categories = ['Laptops', 'Smartphones', 'Tablets', 'Audio', 'Wearables', 'Desktops']
  const brands = ['Apple', 'Samsung', 'Google', 'Microsoft', 'Sony']
  
  return Array.from({length: 30}, (_, i) => ({
    product_id: i + 1,
    product_name: products[Math.floor(Math.random() * products.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    brand: brands[Math.floor(Math.random() * brands.length)],
    price: (Math.floor(Math.random() * 2000) + 100).toString(),
    stock: Math.floor(Math.random() * 100),
    rating: Math.floor(Math.random() * 5) + 1
  }))
}

// Global functions for button actions
window.editRecord = function(id) {
  alert(`Edit record ID: ${id}`)
}

window.deleteRecord = function(id) {
  if (confirm(`Delete record ID: ${id}?`)) {
    alert(`Record ${id} deleted!`)
  }
}

window.viewProduct = function(id) {
  alert(`View product ID: ${id}`)
}

window.editProduct = function(id) {
  alert(`Edit product ID: ${id}`)
}

window.deleteProduct = function(id) {
  if (confirm(`Delete product ID: ${id}?`)) {
    alert(`Product ${id} deleted!`)
  }
}
</script>

<style scoped>
/* Custom DataTables styling */
:deep(.dataTables_wrapper) {
  font-family: inherit;
}

:deep(.dataTables_filter) {
  margin-bottom: 1rem;
}

:deep(.dataTables_length) {
  margin-bottom: 1rem;
}

:deep(.dt-buttons) {
  margin-bottom: 1rem;
}

:deep(.dt-button) {
  margin-right: 0.5rem;
}

:deep(.table-dark) {
  --bs-table-bg: #212529;
}
</style>
