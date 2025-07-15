<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="mb-0">
          <i class="fas fa-map-marked-alt me-2"></i>
          Google Maps Examples
        </h2>
        <p class="text-muted">ตัวอย่างการใช้งาน Google Maps JavaScript API แบบต่างๆ</p>
      </div>
    </div>

    <!-- API Key Notice -->
    <div class="row mb-4" v-if="!hasApiKey">
      <div class="col-12">
        <div class="alert alert-warning">
          <i class="fas fa-exclamation-triangle me-2"></i>
          <strong>หมายเหตุ:</strong> ในการใช้งาน Google Maps จริง คุณต้องมี API Key จาก Google Cloud Platform
          <br>
          <small>ตัวอย่างนี้ใช้ Demo Map เนื่องจากไม่มี API Key</small>
        </div>
      </div>
    </div>

    <!-- Map Controls -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-cog me-2"></i>
              Map Controls
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-lg-3 col-md-6">
                <label class="form-label">Map Type</label>
                <select class="form-select" v-model="mapOptions.mapTypeId" @change="updateMapType">
                  <option value="roadmap">Roadmap</option>
                  <option value="satellite">Satellite</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="terrain">Terrain</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-6">
                <label class="form-label">Zoom Level</label>
                <div class="input-group">
                  <input 
                    type="range" 
                    class="form-range" 
                    min="1" 
                    max="20" 
                    v-model="mapOptions.zoom"
                    @input="updateZoom"
                  >
                  <span class="input-group-text">{{ mapOptions.zoom }}</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <label class="form-label">Quick Locations</label>
                <select class="form-select" @change="goToLocation($event.target.value)">
                  <option value="">เลือกสถานที่</option>
                  <option value="bangkok">กรุงเทพฯ</option>
                  <option value="chiangmai">เชียงใหม่</option>
                  <option value="phuket">ภูเก็ต</option>
                  <option value="pattaya">พัทยา</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-6">
                <label class="form-label">Actions</label>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary btn-sm" @click="getCurrentLocation">
                    <i class="fas fa-location-arrow me-1"></i>
                    ตำแหน่งปัจจุบัน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Map -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-map me-2"></i>
              Interactive Map
            </h5>
          </div>
          <div class="card-body p-0">
            <div 
              id="map" 
              class="w-100"
              style="height: 500px; background-color: #e5e5e5; border-radius: 0.375rem;"
            >
              <!-- Demo Map Placeholder -->
              <div class="d-flex align-items-center justify-content-center h-100 text-muted">
                <div class="text-center">
                  <i class="fas fa-map fa-4x mb-3"></i>
                  <h5>Google Maps Demo</h5>
                  <p>กรุงเทพมหานคร ประเทศไทย</p>
                  <div class="btn-group" role="group">
                    <button class="btn btn-outline-primary btn-sm" @click="addDemoMarker">
                      <i class="fas fa-map-marker-alt me-1"></i>เพิ่ม Marker
                    </button>
                    <button class="btn btn-outline-success btn-sm" @click="showTrafficDemo">
                      <i class="fas fa-road me-1"></i>Traffic
                    </button>
                    <button class="btn btn-outline-info btn-sm" @click="showDirectionsDemo">
                      <i class="fas fa-route me-1"></i>Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Features -->
    <div class="row mb-4">
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-map-pin me-2"></i>
              Markers & Info Windows
            </h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">เพิ่ม Marker ใหม่</label>
              <div class="row g-2">
                <div class="col-4">
                  <input 
                    type="text" 
                    class="form-control" 
                    placeholder="ชื่อสถานที่"
                    v-model="newMarker.title"
                  >
                </div>
                <div class="col-3">
                  <input 
                    type="number" 
                    class="form-control" 
                    placeholder="Latitude"
                    v-model="newMarker.lat"
                    step="0.000001"
                  >
                </div>
                <div class="col-3">
                  <input 
                    type="number" 
                    class="form-control" 
                    placeholder="Longitude"
                    v-model="newMarker.lng"
                    step="0.000001"
                  >
                </div>
                <div class="col-2">
                  <button class="btn btn-primary w-100" @click="addMarker">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="table-responsive">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>ชื่อ</th>
                    <th>Coordinates</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(marker, index) in markers" :key="index">
                    <td>{{ marker.title }}</td>
                    <td class="font-monospace small">
                      {{ marker.lat.toFixed(6) }}, {{ marker.lng.toFixed(6) }}
                    </td>
                    <td>
                      <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-primary" @click="panToMarker(marker)">
                          <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-outline-danger" @click="removeMarker(index)">
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="markers.length === 0">
                    <td colspan="3" class="text-center text-muted">ยังไม่มี Markers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-search-location me-2"></i>
              Places Search
            </h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">ค้นหาสถานที่</label>
              <div class="input-group">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="เช่น: ร้านอาหาร, โรงแรม, ห้างสรรพสินค้า"
                  v-model="searchQuery"
                  @keyup.enter="searchPlaces"
                >
                <button class="btn btn-primary" @click="searchPlaces">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">หมวดหมู่</label>
              <div class="d-flex flex-wrap gap-2">
                <button 
                  v-for="category in placeCategories" 
                  :key="category.value"
                  class="btn btn-sm btn-outline-secondary"
                  @click="searchByCategory(category.value)"
                >
                  <i :class="category.icon + ' me-1'"></i>
                  {{ category.name }}
                </button>
              </div>
            </div>

            <div v-if="searchResults.length > 0">
              <h6>ผลการค้นหา</h6>
              <div class="list-group list-group-flush">
                <div 
                  v-for="(place, index) in searchResults.slice(0, 5)" 
                  :key="index"
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{{ place.name }}</strong><br>
                    <small class="text-muted">{{ place.address }}</small>
                  </div>
                  <button class="btn btn-sm btn-primary" @click="goToPlace(place)">
                    <i class="fas fa-location-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Features -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-layer-group me-2"></i>
              Advanced Features
            </h5>
          </div>
          <div class="card-body">
            <div class="row g-4">
              <!-- Directions -->
              <div class="col-lg-4">
                <div class="card border-primary">
                  <div class="card-header bg-primary text-white">
                    <h6 class="mb-0">
                      <i class="fas fa-route me-2"></i>
                      Directions
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-2">
                      <label class="form-label small">จาก</label>
                      <input 
                        type="text" 
                        class="form-control form-control-sm" 
                        placeholder="จุดเริ่มต้น"
                        v-model="directions.origin"
                      >
                    </div>
                    <div class="mb-2">
                      <label class="form-label small">ถึง</label>
                      <input 
                        type="text" 
                        class="form-control form-control-sm" 
                        placeholder="จุดหมาย"
                        v-model="directions.destination"
                      >
                    </div>
                    <div class="mb-3">
                      <select class="form-select form-select-sm" v-model="directions.travelMode">
                        <option value="DRIVING">ขับรถ</option>
                        <option value="WALKING">เดิน</option>
                        <option value="BICYCLING">ปั่นจักรยาน</option>
                        <option value="TRANSIT">ขนส่งสาธารณะ</option>
                      </select>
                    </div>
                    <button class="btn btn-primary btn-sm w-100" @click="getDirections">
                      <i class="fas fa-search me-1"></i>หาเส้นทาง
                    </button>
                    <div v-if="directionsResult" class="mt-2">
                      <small class="text-success">
                        <i class="fas fa-check me-1"></i>
                        ระยะทาง: {{ directionsResult.distance }}<br>
                        เวลา: {{ directionsResult.duration }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Drawing Tools -->
              <div class="col-lg-4">
                <div class="card border-success">
                  <div class="card-header bg-success text-white">
                    <h6 class="mb-0">
                      <i class="fas fa-draw-polygon me-2"></i>
                      Drawing Tools
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="d-grid gap-2">
                      <button class="btn btn-outline-secondary btn-sm" @click="enableDrawing('marker')">
                        <i class="fas fa-map-marker-alt me-1"></i>Marker
                      </button>
                      <button class="btn btn-outline-secondary btn-sm" @click="enableDrawing('polyline')">
                        <i class="fas fa-route me-1"></i>Polyline
                      </button>
                      <button class="btn btn-outline-secondary btn-sm" @click="enableDrawing('polygon')">
                        <i class="fas fa-draw-polygon me-1"></i>Polygon
                      </button>
                      <button class="btn btn-outline-secondary btn-sm" @click="enableDrawing('circle')">
                        <i class="fas fa-circle me-1"></i>Circle
                      </button>
                      <button class="btn btn-outline-secondary btn-sm" @click="enableDrawing('rectangle')">
                        <i class="fas fa-square me-1"></i>Rectangle
                      </button>
                      <button class="btn btn-danger btn-sm" @click="clearDrawings">
                        <i class="fas fa-trash me-1"></i>Clear All
                      </button>
                    </div>
                    <div v-if="drawingMode" class="mt-2">
                      <small class="text-info">
                        <i class="fas fa-info-circle me-1"></i>
                        Drawing mode: {{ drawingMode }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Street View -->
              <div class="col-lg-4">
                <div class="card border-warning">
                  <div class="card-header bg-warning text-dark">
                    <h6 class="mb-0">
                      <i class="fas fa-street-view me-2"></i>
                      Street View
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-2">
                      <label class="form-label small">Location</label>
                      <input 
                        type="text" 
                        class="form-control form-control-sm" 
                        placeholder="ชื่อสถานที่"
                        v-model="streetView.location"
                      >
                    </div>
                    <div class="row g-2 mb-3">
                      <div class="col-6">
                        <label class="form-label small">Heading</label>
                        <input 
                          type="range" 
                          class="form-range" 
                          min="0" 
                          max="360" 
                          v-model="streetView.heading"
                        >
                        <small>{{ streetView.heading }}°</small>
                      </div>
                      <div class="col-6">
                        <label class="form-label small">Pitch</label>
                        <input 
                          type="range" 
                          class="form-range" 
                          min="-90" 
                          max="90" 
                          v-model="streetView.pitch"
                        >
                        <small>{{ streetView.pitch }}°</small>
                      </div>
                    </div>
                    <button class="btn btn-warning btn-sm w-100" @click="showStreetView">
                      <i class="fas fa-eye me-1"></i>Show Street View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Information -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-info-circle me-2"></i>
              Map Information
            </h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <h6>Current Map State</h6>
                <table class="table table-borderless table-sm">
                  <tbody>
                    <tr>
                      <td><strong>Center:</strong></td>
                      <td class="font-monospace">{{ mapState.center.lat.toFixed(6) }}, {{ mapState.center.lng.toFixed(6) }}</td>
                    </tr>
                    <tr>
                      <td><strong>Zoom:</strong></td>
                      <td>{{ mapState.zoom }}</td>
                    </tr>
                    <tr>
                      <td><strong>Map Type:</strong></td>
                      <td>{{ mapState.mapType }}</td>
                    </tr>
                    <tr>
                      <td><strong>Bounds:</strong></td>
                      <td class="font-monospace small">
                        NE: {{ mapState.bounds.ne.lat.toFixed(3) }}, {{ mapState.bounds.ne.lng.toFixed(3) }}<br>
                        SW: {{ mapState.bounds.sw.lat.toFixed(3) }}, {{ mapState.bounds.sw.lng.toFixed(3) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg-6">
                <h6>Map Statistics</h6>
                <table class="table table-borderless table-sm">
                  <tbody>
                    <tr>
                      <td><strong>Total Markers:</strong></td>
                      <td>{{ markers.length }}</td>
                    </tr>
                    <tr>
                      <td><strong>Last Click:</strong></td>
                      <td class="font-monospace">{{ lastClick.lat.toFixed(6) }}, {{ lastClick.lng.toFixed(6) }}</td>
                    </tr>
                    <tr>
                      <td><strong>Map Clicks:</strong></td>
                      <td>{{ mapClicks }}</td>
                    </tr>
                    <tr>
                      <td><strong>User Location:</strong></td>
                      <td>
                        <span v-if="userLocation.lat" class="font-monospace">
                          {{ userLocation.lat.toFixed(6) }}, {{ userLocation.lng.toFixed(6) }}
                        </span>
                        <span v-else class="text-muted">ไม่พบ</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Code Examples -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="fas fa-code me-2"></i>
              Code Examples
            </h5>
          </div>
          <div class="card-body">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#basic-map">Basic Map</button>
              </li>
              <li class="nav-item">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#markers">Markers</button>
              </li>
              <li class="nav-item">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#directions">Directions</button>
              </li>
              <li class="nav-item">
                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#places">Places</button>
              </li>
            </ul>
            <div class="tab-content mt-3">
              <div class="tab-pane fade show active" id="basic-map">
                <pre><code>// Basic Map Setup
import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
  apiKey: 'YOUR_API_KEY',
  version: 'weekly'
})

loader.load().then(() => {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 13.7563, lng: 100.5018 }, // Bangkok
    zoom: 10,
    mapTypeId: 'roadmap'
  })
})</code></pre>
              </div>
              <div class="tab-pane fade" id="markers">
                <pre><code>// Adding Markers
const marker = new google.maps.Marker({
  position: { lat: 13.7563, lng: 100.5018 },
  map: map,
  title: 'Bangkok'
})

// Info Window
const infoWindow = new google.maps.InfoWindow({
  content: '&lt;h5&gt;Bangkok&lt;/h5&gt;&lt;p&gt;Capital of Thailand&lt;/p&gt;'
})

marker.addListener('click', () => {
  infoWindow.open(map, marker)
})</code></pre>
              </div>
              <div class="tab-pane fade" id="directions">
                <pre><code>// Directions Service
const directionsService = new google.maps.DirectionsService()
const directionsRenderer = new google.maps.DirectionsRenderer()

directionsRenderer.setMap(map)

const request = {
  origin: 'Bangkok',
  destination: 'Chiang Mai',
  travelMode: google.maps.TravelMode.DRIVING
}

directionsService.route(request, (result, status) => {
  if (status === 'OK') {
    directionsRenderer.setDirections(result)
  }
})</code></pre>
              </div>
              <div class="tab-pane fade" id="places">
                <pre><code>// Places Search
const service = new google.maps.places.PlacesService(map)

const request = {
  location: map.getCenter(),
  radius: 5000,
  type: 'restaurant'
}

service.nearbySearch(request, (results, status) => {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    results.forEach(place => {
      new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name
      })
    })
  }
})</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { swalUtils } from '../utils/swal'

// Google Maps API Key (ในการใช้งานจริงต้องใส่ API Key)
const API_KEY = ''
const hasApiKey = ref(false)

// Map instance
let map = null
let markersOnMap = []

// Map options
const mapOptions = ref({
  center: { lat: 13.7563, lng: 100.5018 }, // Bangkok
  zoom: 10,
  mapTypeId: 'roadmap'
})

// Map state
const mapState = ref({
  center: { lat: 13.7563, lng: 100.5018 },
  zoom: 10,
  mapType: 'roadmap',
  bounds: {
    ne: { lat: 13.8, lng: 100.6 },
    sw: { lat: 13.7, lng: 100.4 }
  }
})

// Markers
const markers = ref([
  { title: 'Grand Palace', lat: 13.7500, lng: 100.4930 },
  { title: 'Wat Arun', lat: 13.7437, lng: 100.4887 },
  { title: 'Chatuchak Market', lat: 13.7998, lng: 100.5540 },
  { title: 'Siam Paragon', lat: 13.7460, lng: 100.5340 }
])

const newMarker = ref({
  title: '',
  lat: 13.7563,
  lng: 100.5018
})

// Map interactions
const lastClick = ref({ lat: 13.7563, lng: 100.5018 })
const mapClicks = ref(0)
const userLocation = ref({ lat: 0, lng: 0 })

// Search
const searchQuery = ref('')
const searchResults = ref([])

const placeCategories = [
  { name: 'ร้านอาหาร', value: 'restaurant', icon: 'fas fa-utensils' },
  { name: 'โรงแรม', value: 'hotel', icon: 'fas fa-bed' },
  { name: 'ปั๊มน้ำมัน', value: 'gas_station', icon: 'fas fa-gas-pump' },
  { name: 'โรงพยาบาล', value: 'hospital', icon: 'fas fa-hospital' },
  { name: 'ATM', value: 'atm', icon: 'fas fa-credit-card' },
  { name: 'ช้อปปิ้ง', value: 'shopping_mall', icon: 'fas fa-shopping-bag' }
]

// Directions
const directions = ref({
  origin: '',
  destination: '',
  travelMode: 'DRIVING'
})

const directionsResult = ref(null)

// Drawing
const drawingMode = ref('')

// Street View
const streetView = ref({
  location: 'Grand Palace Bangkok',
  heading: 0,
  pitch: 0
})

// Famous locations in Thailand
const locations = {
  bangkok: { lat: 13.7563, lng: 100.5018, name: 'กรุงเทพมหานคร' },
  chiangmai: { lat: 18.7883, lng: 98.9853, name: 'เชียงใหม่' },
  phuket: { lat: 7.8804, lng: 98.3923, name: 'ภูเก็ต' },
  pattaya: { lat: 12.9236, lng: 100.8825, name: 'พัทยา' }
}

// Methods
const initMap = () => {
  // Demo implementation without actual Google Maps API
  swalUtils.info('Demo Mode', 'แสดงตัวอย่าง Google Maps Interface')
  
  // Initialize demo markers
  markers.value.forEach(marker => {
    console.log(`Added marker: ${marker.title} at ${marker.lat}, ${marker.lng}`)
  })
}

const updateMapType = () => {
  mapState.value.mapType = mapOptions.value.mapTypeId
  swalUtils.success('Map Type Changed', `เปลี่ยนเป็น ${mapOptions.value.mapTypeId}`)
}

const updateZoom = () => {
  mapState.value.zoom = mapOptions.value.zoom
  console.log(`Zoom changed to: ${mapOptions.value.zoom}`)
}

const goToLocation = (locationKey) => {
  if (!locationKey) return
  
  const location = locations[locationKey]
  if (location) {
    mapState.value.center = { lat: location.lat, lng: location.lng }
    swalUtils.success('Location Changed', `ไปยัง ${location.name}`)
  }
}

const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        
        userLocation.value = { lat, lng }
        mapState.value.center = { lat, lng }
        
        swalUtils.success('Location Found', `พบตำแหน่ง: ${lat.toFixed(6)}, ${lng.toFixed(6)}`)
      },
      (error) => {
        console.error('Geolocation error:', error)
        swalUtils.error('Location Error', 'ไม่สามารถหาตำแหน่งปัจจุบันได้')
      }
    )
  } else {
    swalUtils.error('Not Supported', 'เบราว์เซอร์ไม่รองรับ Geolocation')
  }
}

const addMarker = () => {
  if (!newMarker.value.title) {
    swalUtils.warning('Missing Title', 'กรุณาใส่ชื่อสถานที่')
    return
  }
  
  const marker = {
    title: newMarker.value.title,
    lat: parseFloat(newMarker.value.lat),
    lng: parseFloat(newMarker.value.lng)
  }
  
  markers.value.push(marker)
  
  // Reset form
  newMarker.value = {
    title: '',
    lat: 13.7563,
    lng: 100.5018
  }
  
  swalUtils.success('Marker Added', `เพิ่ม ${marker.title} แล้ว`)
}

const addDemoMarker = () => {
  const demoMarker = {
    title: `Demo Marker ${markers.value.length + 1}`,
    lat: 13.7563 + (Math.random() - 0.5) * 0.1,
    lng: 100.5018 + (Math.random() - 0.5) * 0.1
  }
  
  markers.value.push(demoMarker)
  swalUtils.success('Demo Marker', `เพิ่ม ${demoMarker.title}`)
}

const removeMarker = (index) => {
  const marker = markers.value[index]
  markers.value.splice(index, 1)
  swalUtils.success('Marker Removed', `ลบ ${marker.title} แล้ว`)
}

const panToMarker = (marker) => {
  mapState.value.center = { lat: marker.lat, lng: marker.lng }
  swalUtils.info('Pan to Marker', `ไปยัง ${marker.title}`)
}

const searchPlaces = () => {
  if (!searchQuery.value.trim()) {
    swalUtils.warning('Empty Query', 'กรุณาใส่คำค้นหา')
    return
  }
  
  // Demo search results
  const demoResults = [
    { name: `${searchQuery.value} Place 1`, address: 'Bangkok, Thailand' },
    { name: `${searchQuery.value} Place 2`, address: 'Sukhumvit Road' },
    { name: `${searchQuery.value} Place 3`, address: 'Silom Road' }
  ]
  
  searchResults.value = demoResults
  swalUtils.success('Search Complete', `พบ ${demoResults.length} ผลลัพธ์`)
}

const searchByCategory = (category) => {
  searchQuery.value = category
  searchPlaces()
}

const goToPlace = (place) => {
  // Demo coordinates
  const demoLat = 13.7563 + (Math.random() - 0.5) * 0.1
  const demoLng = 100.5018 + (Math.random() - 0.5) * 0.1
  
  mapState.value.center = { lat: demoLat, lng: demoLng }
  swalUtils.success('Go to Place', `ไปยัง ${place.name}`)
}

const getDirections = () => {
  if (!directions.value.origin || !directions.value.destination) {
    swalUtils.warning('Missing Data', 'กรุณาใส่จุดเริ่มต้นและจุดหมาย')
    return
  }
  
  // Demo directions result
  directionsResult.value = {
    distance: '45.2 km',
    duration: '1 hr 15 mins'
  }
  
  swalUtils.success('Directions Found', 'พบเส้นทางแล้ว')
}

const enableDrawing = (mode) => {
  drawingMode.value = mode
  swalUtils.info('Drawing Mode', `เปิดโหมดวาด: ${mode}`)
}

const clearDrawings = () => {
  drawingMode.value = ''
  swalUtils.success('Cleared', 'ลบภาพวาดทั้งหมดแล้ว')
}

const showStreetView = () => {
  if (!streetView.value.location) {
    swalUtils.warning('Missing Location', 'กรุณาใส่ตำแหน่ง')
    return
  }
  
  swalUtils.success('Street View', `แสดง Street View: ${streetView.value.location}`)
}

const showTrafficDemo = () => {
  swalUtils.info('Traffic Layer', 'แสดงข้อมูลการจราจร')
}

const showDirectionsDemo = () => {
  swalUtils.info('Directions', 'แสดงตัวอย่างการหาเส้นทาง')
}

// Mock map click handler
const handleMapClick = () => {
  mapClicks.value++
  lastClick.value = {
    lat: 13.7563 + (Math.random() - 0.5) * 0.1,
    lng: 100.5018 + (Math.random() - 0.5) * 0.1
  }
}

onMounted(() => {
  initMap()
  
  // Simulate map clicks for demo
  const clickInterval = setInterval(() => {
    if (Math.random() < 0.1) { // 10% chance every second
      handleMapClick()
    }
  }, 1000)
  
  // Store interval for cleanup
  window.demoClickInterval = clickInterval
})

onUnmounted(() => {
  if (window.demoClickInterval) {
    clearInterval(window.demoClickInterval)
  }
})
</script>

<style scoped>
.card {
  border: 1px solid #e3e6f0;
  border-radius: 0.35rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
  transition: all 0.3s;
}

.card:hover {
  box-shadow: 0 0.25rem 2rem 0 rgba(58, 59, 69, 0.2);
}

.card-header {
  background-color: #f8f9fc;
  border-bottom: 1px solid #e3e6f0;
}

.card-header h5, .card-header h6 {
  color: #5a5c69;
  font-weight: 600;
}

.form-control:focus,
.form-select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.table th {
  border-top: none;
  font-weight: 600;
  color: #5a5c69;
}

.font-monospace {
  font-family: 'Courier New', monospace;
}

.alert {
  border: none;
  border-radius: 0.35rem;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  border-color: #6c757d;
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-radius: 0.25rem 0.25rem 0 0;
  color: #5a5c69;
}

.nav-tabs .nav-link.active {
  background-color: #667eea;
  border-color: #667eea;
  color: white;
}

pre {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.375rem;
  overflow-x: auto;
}

code {
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  color: #e83e8c;
}

.form-range::-webkit-slider-thumb {
  background-color: #667eea;
}

.form-range::-moz-range-thumb {
  background-color: #667eea;
}

#map {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}
</style>
