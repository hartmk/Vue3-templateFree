// Template Configuration for Reusable Projects
export const templateConfig = {
  // Project Information
  project: {
    name: 'Vue 3 Dashboard Template',
    version: '1.0.0',
    description: 'Modern Vue 3 dashboard template with Bootstrap 5, Pinia, and SweetAlert2',
    author: 'Your Name',
    license: 'MIT'
  },

  // Theme Configuration
  theme: {
    primaryColor: '#667eea',
    secondaryColor: '#6c757d',
    darkMode: false,
    animations: true,
    compactMode: false
  },

  // Feature Flags
  features: {
    authentication: true,
    routing: true,
    stateManagement: true, // Pinia
    notifications: true,   // SweetAlert2
    charts: true,
    tables: true,
    forms: true,
    fileUpload: false,
    realTimeUpdates: false,
    multiLanguage: false,
    darkModeToggle: false
  },

  // Layout Configuration
  layout: {
    sidebar: {
      enabled: true,
      collapsible: true,
      width: '250px',
      position: 'left' // left, right
    },
    navbar: {
      enabled: true,
      fixed: true,
      height: '60px'
    },
    footer: {
      enabled: false,
      fixed: false
    },
    breadcrumbs: {
      enabled: true,
      showHome: true
    }
  },

  // API Configuration
  api: {
    baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
    retries: 3,
    mockData: true // Set to false for production
  },

  // Security Configuration
  security: {
    tokenStorage: 'localStorage', // localStorage, sessionStorage, cookie
    tokenKey: 'token',
    refreshToken: true,
    autoLogout: true,
    sessionTimeout: 24 * 60 * 60 * 1000 // 24 hours
  },

  // Performance Configuration
  performance: {
    lazyLoading: true,
    imageOptimization: true,
    bundleSplitting: true,
    caching: true
  },

  // Development Configuration
  development: {
    hotReload: true,
    sourceMap: true,
    errorOverlay: true,
    debugMode: process.env.NODE_ENV === 'development'
  },

  // Build Configuration
  build: {
    target: 'es2015',
    minify: true,
    sourcemap: false,
    analyzeBundle: false
  },

  // Default Menu Items (can be customized)
  defaultMenuItems: [
    { 
      id: 'dashboard', 
      name: 'แดชบอร์ด', 
      icon: 'fas fa-tachometer-alt', 
      route: '/dashboard',
      permission: 'read'
    },
    { 
      id: 'products', 
      name: 'สินค้า', 
      icon: 'fas fa-box', 
      route: '/products',
      permission: 'read'
    },
    { 
      id: 'orders', 
      name: 'คำสั่งซื้อ', 
      icon: 'fas fa-shopping-cart', 
      route: '/orders',
      permission: 'read'
    },
    { 
      id: 'customers', 
      name: 'ลูกค้า', 
      icon: 'fas fa-users', 
      route: '/customers',
      permission: 'read'
    },
    { 
      id: 'analytics', 
      name: 'รายงาน', 
      icon: 'fas fa-chart-bar', 
      route: '/analytics',
      permission: 'analytics'
    },
    { 
      id: 'settings', 
      name: 'ตั้งค่า', 
      icon: 'fas fa-cog', 
      route: '/settings',
      permission: 'admin'
    }
  ],

  // Default User Roles
  defaultRoles: [
    {
      id: 'admin',
      name: 'ผู้ดูแลระบบ',
      permissions: ['read', 'write', 'delete', 'admin', 'analytics', 'manage_users']
    },
    {
      id: 'manager',
      name: 'ผู้จัดการ',
      permissions: ['read', 'write', 'delete', 'analytics']
    },
    {
      id: 'user',
      name: 'ผู้ใช้งาน',
      permissions: ['read']
    }
  ],

  // Notification Configuration
  notifications: {
    position: 'top-end',
    timer: 3000,
    showProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true
  },

  // Table Configuration
  table: {
    pagination: {
      enabled: true,
      perPage: 10,
      showSizeChanger: true,
      showQuickJumper: true
    },
    sorting: {
      enabled: true,
      multiSort: false
    },
    filtering: {
      enabled: true,
      showSearch: true,
      showColumnFilters: false
    },
    export: {
      enabled: true,
      formats: ['excel', 'csv', 'pdf']
    }
  },

  // Form Configuration
  forms: {
    validation: {
      enabled: true,
      realTime: true,
      showErrors: true
    },
    autoSave: {
      enabled: false,
      interval: 30000 // 30 seconds
    }
  }
}

// Environment-specific overrides
if (process.env.NODE_ENV === 'production') {
  templateConfig.api.mockData = false
  templateConfig.development.debugMode = false
  templateConfig.build.sourcemap = false
}

if (process.env.NODE_ENV === 'development') {
  templateConfig.api.mockData = true
  templateConfig.development.debugMode = true
  templateConfig.build.sourcemap = true
}
