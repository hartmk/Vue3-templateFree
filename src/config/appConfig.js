// Application Configuration
export const appConfig = {
  // Application Info
  app: {
    name: 'ระบบจัดการ Dashboard',
    shortName: 'Dashboard',
    description: 'ระบบจัดการครบครันสำหรับธุรกิจของคุณ',
    version: '1.0.0',
    author: 'Your Company',
    logo: '/logo.png'
  },
  
  // Navigation
  navigation: {
    showBreadcrumb: true,
    showSidebarToggle: true,
    sidebarCollapsible: true
  },
  
  // Features
  features: {
    notifications: true,
    userProfile: true,
    themeSelector: true,
    multiLanguage: false,
    darkMode: true
  },
  
  // API Configuration
  api: {
    baseURL: process.env.NODE_ENV === 'production' 
      ? 'https://api.yourdomain.com' 
      : 'http://localhost:3000',
    timeout: 10000
  },
  
  // Pagination
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [5, 10, 20, 50, 100]
  },
  
  // Date & Time
  dateTime: {
    locale: 'th-TH',
    timezone: 'Asia/Bangkok',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm:ss',
    dateTimeFormat: 'DD/MM/YYYY HH:mm:ss'
  },
  
  // File Upload
  upload: {
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
    multiple: true
  }
}

// Get app name
export const getAppName = () => {
  const saved = localStorage.getItem('appSettings')
  if (saved) {
    const settings = JSON.parse(saved)
    return settings.appName || appConfig.app.name
  }
  return appConfig.app.name
}

// Set app name
export const setAppName = (name) => {
  const settings = JSON.parse(localStorage.getItem('appSettings') || '{}')
  settings.appName = name
  localStorage.setItem('appSettings', JSON.stringify(settings))
  
  // Update config
  appConfig.app.name = name
}

// Get app config with overrides from localStorage
export const getAppConfig = () => {
  const saved = localStorage.getItem('appSettings')
  if (saved) {
    const settings = JSON.parse(saved)
    return {
      ...appConfig,
      app: {
        ...appConfig.app,
        name: settings.appName || appConfig.app.name
      }
    }
  }
  return appConfig
}

export default appConfig
