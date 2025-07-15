import { ref, computed } from 'vue'
import { appConfig, getAppName, setAppName, getAppConfig } from '../config/appConfig'

export function useAppConfig() {
  const config = ref(getAppConfig())
  
  // Reactive app name
  const appName = computed({
    get: () => config.value.app.name,
    set: (value) => {
      config.value.app.name = value
      setAppName(value)
    }
  })
  
  // Update app name
  const updateAppName = (name) => {
    appName.value = name
  }
  
  // Get app version
  const getAppVersion = () => {
    return config.value.app.version
  }
  
  // Get app description
  const getAppDescription = () => {
    return config.value.app.description
  }
  
  // Update entire config
  const updateConfig = (newConfig) => {
    config.value = { ...config.value, ...newConfig }
    const settings = JSON.parse(localStorage.getItem('appSettings') || '{}')
    Object.assign(settings, newConfig)
    localStorage.setItem('appSettings', JSON.stringify(settings))
  }
  
  // Reset to default config
  const resetConfig = () => {
    config.value = { ...appConfig }
    localStorage.removeItem('appSettings')
  }
  
  return {
    config,
    appName,
    updateAppName,
    getAppVersion,
    getAppDescription,
    updateConfig,
    resetConfig
  }
}
