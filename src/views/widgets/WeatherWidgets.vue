<template>
  <div class="container-fluid px-5 py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="mb-2">Weather Widgets</h2>
        <p class="text-muted">วิดเจ็ตสภาพอากาศและพยากรณ์อากาศ</p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
          <li class="breadcrumb-item">Widgets</li>
          <li class="breadcrumb-item active">Weather Widgets</li>
        </ol>
      </nav>
    </div>

    <!-- Current Weather Cards -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Current Weather</h4>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card weather-card current-weather">
          <div class="card-body">
            <div class="weather-header">
              <h5 class="location">{{ currentWeather.location }}</h5>
              <small class="text-muted">{{ currentDate }}</small>
            </div>
            <div class="weather-main">
              <div class="temperature">
                <span class="temp-value">{{ currentWeather.temperature }}</span>
                <span class="temp-unit">°C</span>
              </div>
              <div class="weather-icon">
                <i class="fas" :class="getWeatherIcon(currentWeather.condition)"></i>
              </div>
            </div>
            <div class="weather-condition">
              <p class="condition-text">{{ currentWeather.condition }}</p>
              <p class="feels-like">รู้สึกเหมือน {{ currentWeather.feelsLike }}°C</p>
            </div>
            <div class="weather-details">
              <div class="detail-item">
                <i class="fas fa-eye"></i>
                <span>{{ currentWeather.visibility }} กม.</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-tint"></i>
                <span>{{ currentWeather.humidity }}%</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-wind"></i>
                <span>{{ currentWeather.windSpeed }} กม./ชม.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card weather-card compact-weather">
          <div class="card-body">
            <div class="compact-weather-content">
              <div class="weather-info">
                <h6 class="location">เชียงใหม่</h6>
                <div class="temp-compact">28°C</div>
                <small class="condition">แดดจัด</small>
              </div>
              <div class="weather-icon-compact">
                <i class="fas fa-sun text-warning"></i>
              </div>
            </div>
            <div class="weather-stats">
              <div class="stat">
                <i class="fas fa-thermometer-half text-danger"></i>
                <span>สูงสุด 32°C</span>
              </div>
              <div class="stat">
                <i class="fas fa-thermometer-quarter text-primary"></i>
                <span>ต่ำสุด 24°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="card weather-card mini-weather">
          <div class="card-body p-3">
            <div class="mini-weather-item" v-for="city in miniWeatherCities" :key="city.name">
              <div class="city-info">
                <span class="city-name">{{ city.name }}</span>
                <small class="city-condition">{{ city.condition }}</small>
              </div>
              <div class="city-temp">
                <span class="temp">{{ city.temp }}°C</span>
                <i class="fas" :class="getWeatherIcon(city.condition)"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Weekly Forecast -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Weekly Forecast</h4>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="forecast-container">
              <div class="forecast-day" v-for="day in weeklyForecast" :key="day.day">
                <div class="day-name">{{ day.day }}</div>
                <div class="day-icon">
                  <i class="fas" :class="getWeatherIcon(day.condition)"></i>
                </div>
                <div class="day-condition">{{ day.condition }}</div>
                <div class="day-temps">
                  <span class="high-temp">{{ day.high }}°</span>
                  <span class="low-temp">{{ day.low }}°</span>
                </div>
                <div class="rain-chance">
                  <i class="fas fa-tint text-primary"></i>
                  <span>{{ day.rainChance }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Weather Details Dashboard -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Weather Details</h4>
      </div>
      <div class="col-lg-8 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Hourly Forecast</h5>
          </div>
          <div class="card-body">
            <div class="hourly-forecast">
              <div class="hourly-item" v-for="hour in hourlyForecast" :key="hour.time">
                <div class="hour-time">{{ hour.time }}</div>
                <div class="hour-icon">
                  <i class="fas" :class="getWeatherIcon(hour.condition)"></i>
                </div>
                <div class="hour-temp">{{ hour.temp }}°</div>
                <div class="hour-rain">{{ hour.rain }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">Weather Metrics</h5>
          </div>
          <div class="card-body">
            <div class="weather-metric">
              <div class="metric-header">
                <i class="fas fa-thermometer-half text-danger"></i>
                <span>อุณหภูมิ</span>
              </div>
              <div class="metric-value">{{ currentWeather.temperature }}°C</div>
              <div class="metric-chart">
                <div class="temp-bar" :style="{ width: (currentWeather.temperature / 50 * 100) + '%' }"></div>
              </div>
            </div>
            
            <div class="weather-metric">
              <div class="metric-header">
                <i class="fas fa-tint text-primary"></i>
                <span>ความชื้น</span>
              </div>
              <div class="metric-value">{{ currentWeather.humidity }}%</div>
              <div class="metric-chart">
                <div class="humidity-bar" :style="{ width: currentWeather.humidity + '%' }"></div>
              </div>
            </div>
            
            <div class="weather-metric">
              <div class="metric-header">
                <i class="fas fa-wind text-info"></i>
                <span>ความเร็วลม</span>
              </div>
              <div class="metric-value">{{ currentWeather.windSpeed }} กม./ชม.</div>
              <div class="metric-chart">
                <div class="wind-bar" :style="{ width: (currentWeather.windSpeed / 50 * 100) + '%' }"></div>
              </div>
            </div>
            
            <div class="weather-metric">
              <div class="metric-header">
                <i class="fas fa-compress-arrows-alt text-warning"></i>
                <span>ความกดอากาศ</span>
              </div>
              <div class="metric-value">{{ currentWeather.pressure }} hPa</div>
              <div class="metric-chart">
                <div class="pressure-bar" :style="{ width: ((currentWeather.pressure - 950) / 100 * 100) + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Weather Map Widget -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Weather Map</h4>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Thailand Weather Map</h5>
            <div class="map-controls">
              <button class="btn btn-sm" :class="mapLayer === 'temperature' ? 'btn-primary' : 'btn-outline-primary'"
                      @click="mapLayer = 'temperature'">อุณหภูมิ</button>
              <button class="btn btn-sm" :class="mapLayer === 'rain' ? 'btn-primary' : 'btn-outline-primary'"
                      @click="mapLayer = 'rain'">ฝน</button>
              <button class="btn btn-sm" :class="mapLayer === 'wind' ? 'btn-primary' : 'btn-outline-primary'"
                      @click="mapLayer = 'wind'">ลม</button>
            </div>
          </div>
          <div class="card-body">
            <div class="weather-map">
              <div class="map-placeholder">
                <div class="map-content">
                  <i class="fas fa-map-marked-alt fa-3x text-muted mb-3"></i>
                  <h5>แผนที่สภาพอากาศ</h5>
                  <p class="text-muted">แสดงข้อมูล{{ getMapLayerText(mapLayer) }}ทั่วประเทศไทย</p>
                </div>
              </div>
              <div class="map-legend">
                <h6>คำอธิบาย</h6>
                <div class="legend-items" v-if="mapLayer === 'temperature'">
                  <div class="legend-item">
                    <div class="legend-color" style="background: #0066cc;"></div>
                    <span>ต่ำกว่า 20°C</span>
                  </div>
                  <div class="legend-item">
                    <div class="legend-color" style="background: #00cc66;"></div>
                    <span>20-25°C</span>
                  </div>
                  <div class="legend-item">
                    <div class="legend-color" style="background: #ffcc00;"></div>
                    <span>25-30°C</span>
                  </div>
                  <div class="legend-item">
                    <div class="legend-color" style="background: #ff6600;"></div>
                    <span>30-35°C</span>
                  </div>
                  <div class="legend-item">
                    <div class="legend-color" style="background: #cc0000;"></div>
                    <span>สูงกว่า 35°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const mapLayer = ref('temperature')

const currentWeather = ref({
  location: 'กรุงเทพมหานคร',
  temperature: 32,
  feelsLike: 36,
  condition: 'Partly Cloudy',
  humidity: 68,
  windSpeed: 12,
  visibility: 8,
  pressure: 1013
})

const miniWeatherCities = ref([
  { name: 'ภูเก็ต', condition: 'Sunny', temp: 30 },
  { name: 'หาดใหญ่', condition: 'Rainy', temp: 26 },
  { name: 'ขอนแก่น', condition: 'Cloudy', temp: 28 },
  { name: 'อุดรธานี', condition: 'Partly Cloudy', temp: 29 }
])

const weeklyForecast = ref([
  { day: 'วันนี้', condition: 'Partly Cloudy', high: 34, low: 26, rainChance: 20 },
  { day: 'พรุ่งนี้', condition: 'Sunny', high: 35, low: 27, rainChance: 10 },
  { day: 'จันทร์', condition: 'Rainy', high: 30, low: 24, rainChance: 80 },
  { day: 'อังคาร', condition: 'Thunderstorm', high: 28, low: 23, rainChance: 90 },
  { day: 'พุธ', condition: 'Cloudy', high: 31, low: 25, rainChance: 40 },
  { day: 'พฤหัส', condition: 'Partly Cloudy', high: 33, low: 26, rainChance: 30 },
  { day: 'ศุกร์', condition: 'Sunny', high: 34, low: 27, rainChance: 15 }
])

const hourlyForecast = ref([
  { time: '9:00', condition: 'Sunny', temp: 28, rain: 5 },
  { time: '10:00', condition: 'Sunny', temp: 30, rain: 5 },
  { time: '11:00', condition: 'Partly Cloudy', temp: 32, rain: 10 },
  { time: '12:00', condition: 'Partly Cloudy', temp: 34, rain: 15 },
  { time: '13:00', condition: 'Cloudy', temp: 35, rain: 25 },
  { time: '14:00', condition: 'Cloudy', temp: 34, rain: 30 },
  { time: '15:00', condition: 'Rainy', temp: 32, rain: 60 },
  { time: '16:00', condition: 'Rainy', temp: 30, rain: 70 }
])

const currentDate = computed(() => {
  return new Date().toLocaleDateString('th-TH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const getWeatherIcon = (condition) => {
  const icons = {
    'Sunny': 'fa-sun text-warning',
    'Partly Cloudy': 'fa-cloud-sun text-info',
    'Cloudy': 'fa-cloud text-secondary',
    'Rainy': 'fa-cloud-rain text-primary',
    'Thunderstorm': 'fa-bolt text-warning',
    'แดดจัด': 'fa-sun text-warning',
    'มีเมฆบางส่วน': 'fa-cloud-sun text-info'
  }
  return icons[condition] || 'fa-cloud text-secondary'
}

const getMapLayerText = (layer) => {
  const texts = {
    'temperature': 'อุณหภูมิ',
    'rain': 'การตกของฝน',
    'wind': 'ทิศทางและความเร็วลม'
  }
  return texts[layer] || ''
}
</script>

<style scoped>
.weather-card {
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.weather-card:hover {
  transform: translateY(-2px);
}

.current-weather {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.weather-header {
  text-align: center;
  margin-bottom: 20px;
}

.weather-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.temperature {
  display: flex;
  align-items: baseline;
}

.temp-value {
  font-size: 3rem;
  font-weight: 300;
}

.temp-unit {
  font-size: 1.5rem;
  margin-left: 5px;
}

.weather-icon {
  font-size: 3rem;
  opacity: 0.8;
}

.weather-condition {
  text-align: center;
  margin-bottom: 20px;
}

.condition-text {
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.feels-like {
  font-size: 0.9rem;
  opacity: 0.8;
}

.weather-details {
  display: flex;
  justify-content: space-around;
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.85rem;
}

.detail-item i {
  margin-bottom: 5px;
  opacity: 0.8;
}

.compact-weather-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.temp-compact {
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
}

.weather-icon-compact {
  font-size: 2.5rem;
}

.weather-stats {
  display: flex;
  justify-content: space-between;
}

.stat {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
}

.stat i {
  margin-right: 5px;
}

.mini-weather-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f8f9fa;
}

.mini-weather-item:last-child {
  border-bottom: none;
}

.city-info {
  display: flex;
  flex-direction: column;
}

.city-name {
  font-weight: 500;
}

.city-condition {
  color: #6c757d;
  font-size: 0.8rem;
}

.city-temp {
  display: flex;
  align-items: center;
}

.temp {
  font-weight: bold;
  margin-right: 10px;
}

.forecast-container {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  padding: 20px 0;
}

.forecast-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  text-align: center;
}

.day-name {
  font-weight: 500;
  margin-bottom: 10px;
  color: #495057;
}

.day-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.day-condition {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 10px;
}

.day-temps {
  margin-bottom: 10px;
}

.high-temp {
  font-weight: bold;
  margin-right: 10px;
}

.low-temp {
  color: #6c757d;
}

.rain-chance {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #6c757d;
}

.rain-chance i {
  margin-right: 5px;
}

.hourly-forecast {
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
}

.hourly-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  margin-right: 20px;
  text-align: center;
}

.hour-time {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 10px;
}

.hour-icon {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.hour-temp {
  font-weight: bold;
  margin-bottom: 5px;
}

.hour-rain {
  font-size: 0.8rem;
  color: #007bff;
}

.weather-metric {
  margin-bottom: 25px;
}

.metric-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.metric-header i {
  margin-right: 8px;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.metric-chart {
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.temp-bar {
  height: 100%;
  background: linear-gradient(90deg, #007bff 0%, #dc3545 100%);
  transition: width 0.5s ease;
}

.humidity-bar {
  height: 100%;
  background: #007bff;
  transition: width 0.5s ease;
}

.wind-bar {
  height: 100%;
  background: #17a2b8;
  transition: width 0.5s ease;
}

.pressure-bar {
  height: 100%;
  background: #ffc107;
  transition: width 0.5s ease;
}

.weather-map {
  position: relative;
  min-height: 400px;
}

.map-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
}

.map-content {
  text-align: center;
}

.map-legend {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 150px;
}

.legend-items {
  margin-top: 10px;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.85rem;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  margin-right: 8px;
}

.map-controls {
  display: flex;
  gap: 5px;
}
</style>
