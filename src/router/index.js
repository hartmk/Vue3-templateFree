import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../composables/useAuth'

// Lazy load components for better performance
const Dashboard = () => import('../views/Dashboard.vue')
const Buttons = () => import('../views/Buttons.vue')
const Alerts = () => import('../views/Alerts.vue')
const Products = () => import('../views/Products.vue')
const ProductDetail = () => import('../views/ProductDetail.vue')
const Orders = () => import('../views/Orders.vue')
const OrderDetail = () => import('../views/OrderDetail.vue')
const Customers = () => import('../views/Customers.vue')
const CustomerDetail = () => import('../views/CustomerDetail.vue')
const Analytics = () => import('../views/Analytics.vue')
const Settings = () => import('../views/Settings.vue')
const Profile = () => import('../views/Profile.vue')
const Login = () => import('../views/Login.vue')
const NotFound = () => import('../views/NotFound.vue')
const Documentation = () => import('../views/Documentation.vue')
const Chat = () => import('../views/Chat.vue')
const Calendar = () => import('../views/Calendar.vue')
const Kanban = () => import('../views/Kanban.vue')
const Cards = () => import('../views/Cards.vue')
const Tables = () => import('../views/Tables.vue')

// Widget components
const CardWidgets = () => import('../views/widgets/CardWidgets.vue')
const ProgressWidgets = () => import('../views/widgets/ProgressWidgets.vue')
const TodoWidgets = () => import('../views/widgets/TodoWidgets.vue')
const WeatherWidgets = () => import('../views/widgets/WeatherWidgets.vue')
const NotificationWidgets = () => import('../views/widgets/NotificationWidgets.vue')
const CalendarWidgets = () => import('../views/widgets/CalendarWidgets.vue')
const ChartWidgets = () => import('../views/widgets/ChartWidgets.vue')
const SocialWidgets = () => import('../views/widgets/SocialWidgets.vue')

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { 
      requiresAuth: false,
      title: 'เข้าสู่ระบบ'
    }
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { 
      requiresAuth: true,
      title: 'แดชบอร์ด',
      icon: 'fas fa-tachometer-alt'
    }
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons,
    meta: { 
      requiresAuth: true,
      title: 'Buttons & Badges',
      icon: 'fas fa-square'
    }
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: Alerts,
    meta: { 
      requiresAuth: true,
      title: 'Alerts',
      icon: 'fas fa-exclamation-triangle'
    }
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards,
    meta: { 
      requiresAuth: true,
      title: 'Cards',
      icon: 'fas fa-id-card'
    }
  },
  {
    path: '/bootstrap-table',
    name: 'BootstrapTable',
    component: Tables,
    meta: { 
      requiresAuth: true,
      title: 'Bootstrap Table',
      icon: 'fas fa-table'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: { 
      requiresAuth: true,
      title: 'จัดการสินค้า',
      icon: 'fas fa-box'
    }
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    meta: { 
      requiresAuth: true,
      title: 'รายละเอียดสินค้า',
      showInMenu: false
    },
    props: true
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { 
      requiresAuth: true,
      title: 'คำสั่งซื้อ',
      icon: 'fas fa-shopping-cart'
    }
  },
  {
    path: '/orders/:id',
    name: 'OrderDetail',
    component: OrderDetail,
    meta: { 
      requiresAuth: true,
      title: 'รายละเอียดคำสั่งซื้อ',
      showInMenu: false
    },
    props: true
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
    meta: { 
      requiresAuth: true,
      title: 'ลูกค้า',
      icon: 'fas fa-users'
    }
  },
  {
    path: '/customers/:id',
    name: 'CustomerDetail',
    component: CustomerDetail,
    meta: { 
      requiresAuth: true,
      title: 'รายละเอียดลูกค้า',
      showInMenu: false
    },
    props: true
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics,
    meta: { 
      requiresAuth: true,
      title: 'รายงาน',
      icon: 'fas fa-chart-bar'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { 
      requiresAuth: true,
      title: 'ตั้งค่า',
      icon: 'fas fa-cog'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { 
      requiresAuth: true,
      title: 'โปรไฟล์',
      showInMenu: false
    }
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../components/BootstrapShowcase.vue'),
    meta: { 
      requiresAuth: true,
      title: 'UI Components',
      icon: 'fas fa-puzzle-piece',
      breadcrumb: 'Components'
    }
  },
  {
    path: '/charts',
    name: 'Charts',
    component: () => import('../components/ChartShowcase.vue'),
    meta: { 
      requiresAuth: true,
      title: 'Charts & Graphs',
      icon: 'fas fa-chart-line',
      breadcrumb: 'Charts'
    }
  },
  {
    path: '/apexcharts',
    name: 'ApexCharts',
    component: () => import('../views/ApexCharts.vue'),
    meta: { 
      requiresAuth: true,
      title: 'ApexCharts',
      icon: 'fas fa-chart-area',
      breadcrumb: 'ApexCharts'
    }
  },
  {
    path: '/sweetalert',
    name: 'SweetAlert',
    component: () => import('../views/SweetAlert.vue'),
    meta: { 
      requiresAuth: true,
      title: 'SweetAlert',
      icon: 'fas fa-bell',
      breadcrumb: 'SweetAlert'
    }
  },
  {
    path: '/forminput',
    name: 'FormInput',
    component: () => import('../views/FormInput.vue'),
    meta: { 
      requiresAuth: true,
      title: 'Form Input',
      icon: 'fas fa-edit',
      breadcrumb: 'Form Input'
    }
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('../views/Icons.vue'),
    meta: { 
      requiresAuth: true,
      title: 'Icons',
      icon: 'fas fa-icons',
      breadcrumb: 'Icons'
    }
  },
  {
    path: '/datetimepicker',
    name: 'DateTimePicker',
    component: () => import('../views/DateTimePicker.vue'),
    meta: { 
      requiresAuth: true,
      title: 'DateTime Picker',
      icon: 'fas fa-calendar-alt',
      breadcrumb: 'DateTime Picker'
    }
  },
  {
    path: '/modals',
    name: 'Modals',
    component: () => import('../views/Modals.vue'),
    meta: { 
      requiresAuth: true,
      title: 'Modals',
      icon: 'fas fa-window-restore',
      breadcrumb: 'Modals'
    }
  },
  {
    path: '/dayjs',
    name: 'DayJS',
    component: () => import('../views/DayJS.vue'),
    meta: { 
      requiresAuth: true,
      title: 'Day.js',
      icon: 'fas fa-calendar-alt',
      breadcrumb: 'Day.js'
    }
  },
  {
    path: '/googlemaps',
    name: 'GoogleMaps',
    component: () => import('../views/GoogleMaps.vue'),
    meta: { 
      requiresAuth: true,
      title: 'Google Maps',
      icon: 'fas fa-map-marked-alt',
      breadcrumb: 'Google Maps'
    }
  },
  {
    path: '/academy-dashboard',
    name: 'AcademyDashboard',
    component: () => import('../views/AcademyDashboard.vue'),
    meta: { 
      requiresAuth: true,
      title: 'Academy Dashboard',
      icon: 'fas fa-graduation-cap',
      breadcrumb: 'Academy Dashboard'
    }
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation,
    meta: { 
      requiresAuth: true,
      title: 'Documentation',
      icon: 'fas fa-book',
      breadcrumb: 'Documentation'
    }
  },
  // Widget Routes
  {
    path: '/widgets/cards',
    name: 'CardWidgets',
    component: CardWidgets,
    meta: { 
      requiresAuth: true,
      title: 'Card Widgets',
      icon: 'fas fa-id-card',
      breadcrumb: 'Card Widgets'
    }
  },
  {
    path: '/widgets/progress',
    name: 'ProgressWidgets',
    component: ProgressWidgets,
    meta: { 
      requiresAuth: true,
      title: 'Progress Widgets',
      icon: 'fas fa-tasks',
      breadcrumb: 'Progress Widgets'
    }
  },
  {
    path: '/widgets/todo',
    name: 'TodoWidgets',
    component: TodoWidgets,
    meta: { 
      requiresAuth: true,
      title: 'Todo Widgets',
      icon: 'fas fa-check-square',
      breadcrumb: 'Todo Widgets'
    }
  },
  {
    path: '/widgets/weather',
    name: 'WeatherWidgets',
    component: WeatherWidgets,
    meta: { 
      requiresAuth: true,
      title: 'Weather Widgets',
      icon: 'fas fa-cloud-sun',
      breadcrumb: 'Weather Widgets'
    }
  },
  {
    path: '/widgets/notifications',
    name: 'NotificationWidgets',
    component: NotificationWidgets,
    meta: { 
      requiresAuth: true,
      title: 'Notification Widgets',
      icon: 'fas fa-bell',
      breadcrumb: 'Notification Widgets'
    }
  },
  {
    path: '/widgets/calendar',
    name: 'CalendarWidgets',
    component: CalendarWidgets,
    meta: { 
      requiresAuth: true,
      title: 'Calendar Widgets',
      icon: 'fas fa-calendar-alt',
      breadcrumb: 'Calendar Widgets'
    }
  },
  {
    path: '/widgets/charts',
    name: 'ChartWidgets',
    component: ChartWidgets,
    meta: { 
      requiresAuth: true,
      title: 'Chart Widgets',
      icon: 'fas fa-chart-bar',
      breadcrumb: 'Chart Widgets'
    }
  },
  {
    path: '/widgets/social',
    name: 'SocialWidgets',
    component: SocialWidgets,
    meta: { 
      requiresAuth: true,
      title: 'Social Widgets',
      icon: 'fas fa-users',
      breadcrumb: 'Social Widgets'
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: { 
      requiresAuth: true,
      title: 'Chat Application',
      icon: 'fas fa-comments',
      breadcrumb: 'Chat'
    }
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    meta: { 
      requiresAuth: true,
      title: 'Calendar',
      icon: 'fas fa-calendar-alt',
      breadcrumb: 'Calendar'
    }
  },
  {
    path: '/kanban',
    name: 'Kanban',
    component: Kanban,
    meta: { 
      requiresAuth: true,
      title: 'Kanban Board',
      icon: 'fas fa-columns',
      breadcrumb: 'Kanban'
    }
  },
  {
    path: '/datatables',
    name: 'DataTables',
    component: () => import('../components/DataTableShowcase.vue'),
    meta: { 
      requiresAuth: true,
      title: 'DataTables',
      icon: 'fas fa-table',
      breadcrumb: 'DataTables'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { 
      requiresAuth: false,
      title: 'ไม่พบหน้า',
      showInMenu: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guard for authentication
router.beforeEach(async (to, from, next) => {
  const { isAuthenticated, initializeAuth } = useAuth()
  
  // Initialize auth state if not done yet
  if (!isAuthenticated.value && localStorage.getItem('auth_token')) {
    await initializeAuth()
  }
  
  // Check if route requires authentication
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/login')
  } else if (to.name === 'Login' && isAuthenticated.value) {
    next('/dashboard')
  } else {
    next()
  }
})

// Add route title to document
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} - ระบบจัดการร้านค้า` : 'ระบบจัดการร้านค้า'
})

export default router
