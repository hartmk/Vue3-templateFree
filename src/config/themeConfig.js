// Theme Configuration

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

export const themeConfig = {
  // Website Information
  siteName: 'ระบบจัดการ Dashboard',
  siteDescription: 'ระบบจัดการครบครันสำหรับธุรกิจของคุณ',
  version: 'v1.0.0',
  
  // Bootstrap Colors
  colors: {
    primary: '#0d6efd',
    secondary: '#6c757d',
    success: '#198754',
    info: '#0dcaf0',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#212529'
  },
  
  // Custom Colors
  customColors: {
    sidebarBg: '#2c3e50',
    sidebarText: '#ffffff',
    sidebarActive: '#3498db',
    navbarBg: '#ffffff',
    navbarText: '#333333',
    footerBg: '#f8f9fa',
    footerText: '#6c757d'
  },
  
  // Layout Settings
  layout: {
    sidebarWidth: '250px',
    sidebarCollapsedWidth: '60px',
    navbarHeight: '60px',
    footerHeight: '60px'
  },
  
  // Theme Variants
  themes: {
    default: {
      name: 'Default',
      colors: {
        primary: '#0d6efd',
        secondary: '#6c757d',
        success: '#198754',
        info: '#0dcaf0',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#212529'
      }
    },
    dark: {
      name: 'Dark',
      colors: {
        primary: '#375a7f',
        secondary: '#444',
        success: '#00bc8c',
        info: '#3498db',
        warning: '#f39c12',
        danger: '#e74c3c',
        light: '#6c757d',
        dark: '#212529'
      }
    },
    purple: {
      name: 'Purple',
      colors: {
        primary: '#6f42c1',
        secondary: '#6c757d',
        success: '#198754',
        info: '#6610f2',
        warning: '#fd7e14',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#212529'
      }
    },
    green: {
      name: 'Green',
      colors: {
        primary: '#198754',
        secondary: '#6c757d',
        success: '#20c997',
        info: '#0dcaf0',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#212529'
      }
    }
  }
}

// Apply theme to CSS variables
export const applyTheme = (themeName = 'default') => {
  const theme = themeConfig.themes[themeName] || themeConfig.themes.default
  const root = document.documentElement
  
  // Apply Bootstrap colors with all variants
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--bs-${key}`, value)
    
    // Set RGB values for transparency support
    const rgb = hexToRgb(value)
    if (rgb) {
      root.style.setProperty(`--bs-${key}-rgb`, `${rgb.r},${rgb.g},${rgb.b}`)
    }
    
    // Generate and apply all Bootstrap color variants
    applyBootstrapColorVariants(key, value, rgb)
  })
  
  // Apply custom colors
  Object.entries(themeConfig.customColors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value)
  })
  
  // Apply layout variables
  Object.entries(themeConfig.layout).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value)
  })
}

// Apply Bootstrap color variants (text, bg, border emphasis)
const applyBootstrapColorVariants = (colorName, hexValue, rgb) => {
  const root = document.documentElement
  
  if (!rgb) return
  
  // Generate lighter and darker shades
  const lighten = (r, g, b, percent) => {
    const amount = Math.round(2.55 * percent)
    return {
      r: Math.min(255, r + amount),
      g: Math.min(255, g + amount),
      b: Math.min(255, b + amount)
    }
  }
  
  const darken = (r, g, b, percent) => {
    const amount = Math.round(2.55 * percent)
    return {
      r: Math.max(0, r - amount),
      g: Math.max(0, g - amount),
      b: Math.max(0, b - amount)
    }
  }
  
  // Generate color variants
  const subtle = lighten(rgb.r, rgb.g, rgb.b, 40)
  const emphasis = darken(rgb.r, rgb.g, rgb.b, 20)
  const border = lighten(rgb.r, rgb.g, rgb.b, 20)
  
  // Apply text emphasis colors
  root.style.setProperty(`--bs-${colorName}-text-emphasis`, `rgb(${emphasis.r}, ${emphasis.g}, ${emphasis.b})`)
  
  // Apply background subtle colors
  root.style.setProperty(`--bs-${colorName}-bg-subtle`, `rgb(${subtle.r}, ${subtle.g}, ${subtle.b})`)
  
  // Apply border subtle colors
  root.style.setProperty(`--bs-${colorName}-border-subtle`, `rgb(${border.r}, ${border.g}, ${border.b})`)
}

// Save theme settings to localStorage
export const saveThemeSettings = (settings) => {
  localStorage.setItem('themeSettings', JSON.stringify(settings))
}

// Load theme settings from localStorage
export const loadThemeSettings = () => {
  const saved = localStorage.getItem('themeSettings')
  return saved ? JSON.parse(saved) : null
}

// Update theme colors dynamically
export const updateThemeColors = (colors) => {
  const root = document.documentElement
  
  // Update CSS variables for Bootstrap colors with all variants
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--bs-${key}`, value)
    
    // Set RGB values for transparency support
    const rgb = hexToRgb(value)
    if (rgb) {
      root.style.setProperty(`--bs-${key}-rgb`, `${rgb.r},${rgb.g},${rgb.b}`)
    }
    
    // Generate and apply all Bootstrap color variants
    applyBootstrapColorVariants(key, value, rgb)
  })
  
  // Update the config object
  Object.assign(themeConfig.colors, colors)
  
  // Force browser to recalculate styles
  document.body.style.display = 'none'
  document.body.offsetHeight // Trigger reflow
  document.body.style.display = ''
}

// Get current theme
export const getCurrentTheme = () => {
  const saved = loadThemeSettings()
  return saved?.currentTheme || 'default'
}

// Set current theme
export const setCurrentTheme = (themeName) => {
  const settings = loadThemeSettings() || {}
  settings.currentTheme = themeName
  saveThemeSettings(settings)
  applyTheme(themeName)
}

export default themeConfig
