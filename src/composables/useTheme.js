import { ref, onMounted } from 'vue'
import { themeConfig, applyTheme, loadThemeSettings, saveThemeSettings, updateThemeColors } from '../config/themeConfig'

export function useTheme() {
  const currentTheme = ref('default')
  const customColors = ref({ ...themeConfig.colors })
  
  // Initialize theme
  onMounted(() => {
    loadTheme()
  })
  
  // Load theme from localStorage
  const loadTheme = () => {
    const saved = loadThemeSettings()
    if (saved) {
      currentTheme.value = saved.currentTheme || 'default'
      if (saved.customColors) {
        customColors.value = { ...saved.customColors }
        updateThemeColors(saved.customColors)
      }
    }
    applyTheme(currentTheme.value)
  }
  
  // Set theme
  const setTheme = (themeName) => {
    currentTheme.value = themeName
    
    // Get theme colors and update customColors
    const themeColors = themeConfig.themes[themeName]?.colors || themeConfig.themes.default.colors
    customColors.value = { ...themeColors }
    
    applyTheme(themeName)
    updateThemeColors(customColors.value)
    
    const settings = loadThemeSettings() || {}
    settings.currentTheme = themeName
    settings.customColors = customColors.value
    saveThemeSettings(settings)
  }
  
  // Update custom colors
  const updateColors = (colors) => {
    Object.assign(customColors.value, colors)
    updateThemeColors(colors)
    
    // Force immediate update by adding a timestamp CSS variable
    const root = document.documentElement
    root.style.setProperty('--theme-update', Date.now())
    
    // Force all elements to recalculate styles
    setTimeout(() => {
      const elements = document.querySelectorAll('*')
      elements.forEach(el => {
        if (el.style) {
          el.style.display = el.style.display
        }
      })
    }, 10)
    
    const settings = loadThemeSettings() || {}
    settings.customColors = customColors.value
    settings.currentTheme = currentTheme.value
    saveThemeSettings(settings)
  }
  
  // Reset to default theme
  const resetTheme = () => {
    currentTheme.value = 'default'
    customColors.value = { ...themeConfig.colors }
    applyTheme('default')
    updateThemeColors(customColors.value)
    
    localStorage.removeItem('themeSettings')
  }
  
  // Get available themes
  const getAvailableThemes = () => {
    return Object.entries(themeConfig.themes).map(([key, theme]) => ({
      value: key,
      label: theme.name,
      colors: theme.colors
    }))
  }
  
  return {
    currentTheme,
    customColors,
    setTheme,
    updateColors,
    resetTheme,
    getAvailableThemes,
    loadTheme
  }
}
