<template>
  <div class="container-fluid py-4 px-5">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="mb-1">Academy Dashboard</h2>
        <p class="text-muted">ระบบจัดการการเรียนออนไลน์และการฝึกอบรม</p>
      </div>
    </div>

    <!-- Statistics Cards -->
    <div class="row mb-4">
      <div class="col-xl-3 col-lg-6 col-md-6 mb-4">
        <div class="card gradient-card gradient-primary h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h3 class="text-white fw-bold mb-1">{{ stats.totalCourses.toLocaleString() }}</h3>
                <p class="text-white-50 mb-0">Total Courses</p>
              </div>
              <div class="avatar avatar-lg">
                <div class="avatar-initial bg-white bg-opacity-25 rounded">
                  <i class="fas fa-graduation-cap fa-2x text-white"></i>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <span class="badge bg-white bg-opacity-25 text-white">
                <i class="fas fa-arrow-up me-1"></i>
                +{{ stats.courseGrowth }}% this month
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 mb-4">
        <div class="card gradient-card gradient-success h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h3 class="text-white fw-bold mb-1">{{ stats.totalStudents.toLocaleString() }}</h3>
                <p class="text-white-50 mb-0">Total Students</p>
              </div>
              <div class="avatar avatar-lg">
                <div class="avatar-initial bg-white bg-opacity-25 rounded">
                  <i class="fas fa-users fa-2x text-white"></i>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <span class="badge bg-white bg-opacity-25 text-white">
                <i class="fas fa-arrow-up me-1"></i>
                +{{ stats.studentGrowth }}% this month
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 mb-4">
        <div class="card gradient-card gradient-warning h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h3 class="text-white fw-bold mb-1">{{ stats.totalInstructors.toLocaleString() }}</h3>
                <p class="text-white-50 mb-0">Total Instructors</p>
              </div>
              <div class="avatar avatar-lg">
                <div class="avatar-initial bg-white bg-opacity-25 rounded">
                  <i class="fas fa-chalkboard-teacher fa-2x text-white"></i>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <span class="badge bg-white bg-opacity-25 text-white">
                <i class="fas fa-arrow-up me-1"></i>
                +{{ stats.instructorGrowth }}% this month
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 mb-4">
        <div class="card gradient-card gradient-info h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h3 class="text-white fw-bold mb-1">${{ stats.totalRevenue.toLocaleString() }}</h3>
                <p class="text-white-50 mb-0">Total Revenue</p>
              </div>
              <div class="avatar avatar-lg">
                <div class="avatar-initial bg-white bg-opacity-25 rounded">
                  <i class="fas fa-dollar-sign fa-2x text-white"></i>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <span class="badge bg-white bg-opacity-25 text-white">
                <i class="fas fa-arrow-up me-1"></i>
                +{{ stats.revenueGrowth }}% this month
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Course Performance & Popular Courses -->
    <div class="row mb-4">
      <div class="col-lg-8 mb-4">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Course Performance</h5>
            <div class="dropdown">
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                This Month
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">This Week</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>
          </div>
          <div class="card-body">
            <div id="coursePerformanceChart" style="height: 350px;"></div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">Popular Courses</h5>
          </div>
          <div class="card-body">
            <div class="course-item mb-3" v-for="course in popularCourses" :key="course.id">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-sm me-3">
                  <img :src="course.image" :alt="course.title" class="rounded">
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-1">{{ course.title }}</h6>
                  <small class="text-muted">{{ course.instructor }}</small>
                </div>
                <div class="text-end">
                  <span class="badge" :class="getCourseTypeBadge(course.type)">
                    {{ course.type }}
                  </span>
                  <div class="small text-muted mt-1">
                    {{ course.students }} students
                  </div>
                </div>
              </div>
              <div class="progress mt-2" style="height: 4px;">
                <div class="progress-bar" :style="{ width: course.progress + '%' }" :class="getProgressColor(course.progress)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Course Categories & Recent Activity -->
    <div class="row mb-4">
      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">Course Categories</h5>
          </div>
          <div class="card-body">
            <div id="categoriesChart" style="height: 300px;"></div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Recent Activity</h5>
            <button class="btn btn-sm btn-outline-primary">View All</button>
          </div>
          <div class="card-body">
            <div class="timeline">
              <div class="timeline-item" v-for="activity in recentActivities" :key="activity.id">
                <div class="timeline-marker" :class="getActivityMarkerClass(activity.type)">
                  <i :class="activity.icon"></i>
                </div>
                <div class="timeline-content">
                  <h6 class="mb-1">{{ activity.title }}</h6>
                  <p class="text-muted small mb-1">{{ activity.description }}</p>
                  <small class="text-muted">{{ activity.time }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Top Instructors & Assignment Reviews -->
    <div class="row mb-4">
      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">Top Instructors</h5>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th>Instructor</th>
                    <th>Courses</th>
                    <th>Rating</th>
                    <th>Students</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="instructor in topInstructors" :key="instructor.id">
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm me-3">
                          <img :src="instructor.avatar" :alt="instructor.name" class="rounded-circle">
                        </div>
                        <div>
                          <h6 class="mb-0">{{ instructor.name }}</h6>
                          <small class="text-muted">{{ instructor.specialty }}</small>
                        </div>
                      </div>
                    </td>
                    <td>{{ instructor.courses }}</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <span class="me-1">{{ instructor.rating }}</span>
                        <div class="text-warning">
                          <i v-for="n in 5" :key="n" 
                             :class="n <= Math.floor(instructor.rating) ? 'fas fa-star' : 'far fa-star'"></i>
                        </div>
                      </div>
                    </td>
                    <td>{{ instructor.students.toLocaleString() }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">Assignment Reviews</h5>
          </div>
          <div class="card-body">
            <div class="assignment-item mb-3" v-for="assignment in assignmentReviews" :key="assignment.id">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 class="mb-1">{{ assignment.title }}</h6>
                  <small class="text-muted">{{ assignment.course }}</small>
                </div>
                <span class="badge" :class="getAssignmentStatusBadge(assignment.status)">
                  {{ assignment.status }}
                </span>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="avatar avatar-xs me-2">
                    <img :src="assignment.studentAvatar" :alt="assignment.studentName" class="rounded-circle">
                  </div>
                  <small class="text-muted">{{ assignment.studentName }}</small>
                </div>
                <small class="text-muted">{{ assignment.submittedAt }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Learning Progress & Upcoming Events -->
    <div class="row mb-4">
      <div class="col-lg-8 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">Learning Progress</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6" v-for="progress in learningProgress" :key="progress.id">
                <div class="progress-item mb-4">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="mb-0">{{ progress.subject }}</h6>
                    <span class="text-primary fw-bold">{{ progress.percentage }}%</span>
                  </div>
                  <div class="progress mb-1" style="height: 8px;">
                    <div class="progress-bar" 
                         :style="{ width: progress.percentage + '%' }"
                         :class="getProgressBarClass(progress.percentage)"></div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <small class="text-muted">{{ progress.completed }}/{{ progress.total }} lessons</small>
                    <small class="text-muted">{{ progress.timeLeft }} left</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="mb-0">Upcoming Events</h5>
          </div>
          <div class="card-body">
            <div class="event-item mb-3" v-for="event in upcomingEvents" :key="event.id">
              <div class="d-flex">
                <div class="event-date text-center me-3">
                  <div class="date-number text-primary fw-bold">{{ event.date }}</div>
                  <div class="date-month text-muted small">{{ event.month }}</div>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-1">{{ event.title }}</h6>
                  <p class="text-muted small mb-1">{{ event.description }}</p>
                  <div class="d-flex align-items-center">
                    <i class="fas fa-clock text-muted me-1"></i>
                    <small class="text-muted">{{ event.time }}</small>
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
import { ref, onMounted, onUnmounted } from 'vue'
import ApexCharts from 'apexcharts'

// Stats data
const stats = ref({
  totalCourses: 284,
  courseGrowth: 15.8,
  totalStudents: 12450,
  studentGrowth: 22.1,
  totalInstructors: 57,
  instructorGrowth: 8.3,
  totalRevenue: 68500,
  revenueGrowth: 28.9
})

// Popular courses
const popularCourses = ref([
  {
    id: 1,
    title: 'React Development',
    instructor: 'John Smith',
    type: 'Development',
    students: 1250,
    progress: 78,
    image: 'https://via.placeholder.com/40x40/667eea/ffffff?text=R'
  },
  {
    id: 2,
    title: 'UI/UX Design',
    instructor: 'Sarah Johnson',
    type: 'Design',
    students: 890,
    progress: 65,
    image: 'https://via.placeholder.com/40x40/f093fb/ffffff?text=U'
  },
  {
    id: 3,
    title: 'Data Science',
    instructor: 'Mike Wilson',
    type: 'Data',
    students: 756,
    progress: 82,
    image: 'https://via.placeholder.com/40x40/4facfe/ffffff?text=D'
  },
  {
    id: 4,
    title: 'Digital Marketing',
    instructor: 'Emily Davis',
    type: 'Marketing',
    students: 643,
    progress: 54,
    image: 'https://via.placeholder.com/40x40/ff6b6b/ffffff?text=M'
  },
  {
    id: 5,
    title: 'Machine Learning',
    instructor: 'David Brown',
    type: 'AI/ML',
    students: 512,
    progress: 91,
    image: 'https://via.placeholder.com/40x40/51cf66/ffffff?text=ML'
  }
])

// Recent activities
const recentActivities = ref([
  {
    id: 1,
    type: 'course',
    title: 'New Course Added',
    description: 'Vue.js Advanced Concepts course has been published',
    time: '2 hours ago',
    icon: 'fas fa-plus-circle'
  },
  {
    id: 2,
    type: 'student',
    title: 'Student Enrolled',
    description: '25 new students enrolled in React Development',
    time: '4 hours ago',
    icon: 'fas fa-user-plus'
  },
  {
    id: 3,
    type: 'assignment',
    title: 'Assignment Submitted',
    description: 'JavaScript Fundamentals assignment completed',
    time: '6 hours ago',
    icon: 'fas fa-file-alt'
  },
  {
    id: 4,
    type: 'certificate',
    title: 'Certificate Issued',
    description: '12 students received UI/UX Design certificates',
    time: '1 day ago',
    icon: 'fas fa-certificate'
  }
])

// Top instructors
const topInstructors = ref([
  {
    id: 1,
    name: 'John Smith',
    specialty: 'Frontend Development',
    courses: 12,
    rating: 4.9,
    students: 2340,
    avatar: 'https://via.placeholder.com/32x32/667eea/ffffff?text=JS'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    specialty: 'UI/UX Design',
    courses: 8,
    rating: 4.8,
    students: 1890,
    avatar: 'https://via.placeholder.com/32x32/f093fb/ffffff?text=SJ'
  },
  {
    id: 3,
    name: 'Mike Wilson',
    specialty: 'Data Science',
    courses: 15,
    rating: 4.7,
    students: 1654,
    avatar: 'https://via.placeholder.com/32x32/4facfe/ffffff?text=MW'
  },
  {
    id: 4,
    name: 'Emily Davis',
    specialty: 'Digital Marketing',
    courses: 6,
    rating: 4.6,
    students: 1432,
    avatar: 'https://via.placeholder.com/32x32/ff6b6b/ffffff?text=ED'
  }
])

// Assignment reviews
const assignmentReviews = ref([
  {
    id: 1,
    title: 'React Project',
    course: 'React Development',
    status: 'Pending Review',
    studentName: 'Alex Turner',
    studentAvatar: 'https://via.placeholder.com/24x24/667eea/ffffff?text=AT',
    submittedAt: '2 hours ago'
  },
  {
    id: 2,
    title: 'Portfolio Design',
    course: 'UI/UX Design',
    status: 'Approved',
    studentName: 'Lisa Wong',
    studentAvatar: 'https://via.placeholder.com/24x24/f093fb/ffffff?text=LW',
    submittedAt: '5 hours ago'
  },
  {
    id: 3,
    title: 'Data Analysis',
    course: 'Data Science',
    status: 'Needs Revision',
    studentName: 'Tom Anderson',
    studentAvatar: 'https://via.placeholder.com/24x24/4facfe/ffffff?text=TA',
    submittedAt: '1 day ago'
  }
])

// Learning progress
const learningProgress = ref([
  {
    id: 1,
    subject: 'JavaScript',
    percentage: 85,
    completed: 17,
    total: 20,
    timeLeft: '3 days'
  },
  {
    id: 2,
    subject: 'React',
    percentage: 62,
    completed: 12,
    total: 18,
    timeLeft: '1 week'
  },
  {
    id: 3,
    subject: 'Node.js',
    percentage: 43,
    completed: 8,
    total: 16,
    timeLeft: '2 weeks'
  },
  {
    id: 4,
    subject: 'Python',
    percentage: 78,
    completed: 14,
    total: 18,
    timeLeft: '5 days'
  }
])

// Upcoming events
const upcomingEvents = ref([
  {
    id: 1,
    date: '24',
    month: 'JUL',
    title: 'Web Development Webinar',
    description: 'Learn latest trends in web development',
    time: '10:00 AM'
  },
  {
    id: 2,
    date: '28',
    month: 'JUL',
    title: 'UI/UX Workshop',
    description: 'Hands-on design thinking workshop',
    time: '2:00 PM'
  },
  {
    id: 3,
    date: '02',
    month: 'AUG',
    title: 'Data Science Conference',
    description: 'Annual data science and AI conference',
    time: '9:00 AM'
  }
])

// Chart instances
let coursePerformanceChart = null
let categoriesChart = null

// Methods
const getCourseTypeBadge = (type) => {
  const badges = {
    'Development': 'bg-primary',
    'Design': 'bg-warning',
    'Data': 'bg-info',
    'Marketing': 'bg-danger',
    'AI/ML': 'bg-success'
  }
  return badges[type] || 'bg-secondary'
}

const getProgressColor = (progress) => {
  if (progress >= 80) return 'bg-success'
  if (progress >= 60) return 'bg-warning'
  return 'bg-danger'
}

const getActivityMarkerClass = (type) => {
  const classes = {
    'course': 'bg-primary',
    'student': 'bg-success',
    'assignment': 'bg-warning',
    'certificate': 'bg-info'
  }
  return classes[type] || 'bg-secondary'
}

const getAssignmentStatusBadge = (status) => {
  const badges = {
    'Pending Review': 'bg-warning',
    'Approved': 'bg-success',
    'Needs Revision': 'bg-danger'
  }
  return badges[status] || 'bg-secondary'
}

const getProgressBarClass = (percentage) => {
  if (percentage >= 80) return 'bg-success'
  if (percentage >= 60) return 'bg-primary'
  if (percentage >= 40) return 'bg-warning'
  return 'bg-danger'
}

const initCoursePerformanceChart = () => {
  const options = {
    series: [{
      name: 'Course Enrollments',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 75, 85, 90]
    }, {
      name: 'Course Completions',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 62, 68]
    }],
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    colors: ['#667eea', '#764ba2'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
      title: {
        text: 'Number of Students'
      }
    },
    legend: {
      position: 'top'
    }
  }

  coursePerformanceChart = new ApexCharts(document.querySelector("#coursePerformanceChart"), options)
  coursePerformanceChart.render()
}

const initCategoriesChart = () => {
  const options = {
    series: [44, 28, 20, 18, 15, 12],
    chart: {
      type: 'donut',
      height: 300
    },
    labels: ['Development', 'Design', 'Marketing', 'Data Science', 'Business', 'Others'],
    colors: ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#38d9a9', '#f093b0'],
    plotOptions: {
      pie: {
        donut: {
          size: '65%'
        }
      }
    },
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(1) + "%"
      }
    }
  }

  categoriesChart = new ApexCharts(document.querySelector("#categoriesChart"), options)
  categoriesChart.render()
}

onMounted(() => {
  // Initialize charts after a short delay to ensure DOM is ready
  setTimeout(() => {
    initCoursePerformanceChart()
    initCategoriesChart()
  }, 100)
})

onUnmounted(() => {
  if (coursePerformanceChart) {
    coursePerformanceChart.destroy()
  }
  if (categoriesChart) {
    categoriesChart.destroy()
  }
})
</script>

<style scoped>
.gradient-card {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  border: none;
  color: white;
}

.gradient-primary {
  --gradient-start: #667eea;
  --gradient-end: #764ba2;
}

.gradient-success {
  --gradient-start: #43e97b;
  --gradient-end: #38d9a9;
}

.gradient-warning {
  --gradient-start: #f093fb;
  --gradient-end: #f5576c;
}

.gradient-info {
  --gradient-start: #4facfe;
  --gradient-end: #00f2fe;
}

.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.avatar-xs {
  width: 1.5rem;
  height: 1.5rem;
}

.avatar-sm {
  width: 2rem;
  height: 2rem;
}

.avatar-lg {
  width: 3.5rem;
  height: 3.5rem;
}

.avatar-initial {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: 600;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card {
  border: 1px solid #e3e6f0;
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.card-header {
  background-color: #f8f9fc;
  border-bottom: 1px solid #e3e6f0;
  padding: 1.25rem;
}

.card-body {
  padding: 1.25rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline-item {
  position: relative;
  margin-bottom: 1.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: -1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #e3e6f0;
}

.course-item,
.assignment-item,
.event-item {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f8f9fc;
  transition: all 0.3s ease;
}

.course-item:hover,
.assignment-item:hover,
.event-item:hover {
  background-color: #e3e6f0;
  transform: translateY(-2px);
}

.progress {
  border-radius: 0.5rem;
  overflow: hidden;
}

.progress-bar {
  border-radius: 0.5rem;
  transition: width 0.6s ease;
}

.event-date {
  min-width: 3rem;
}

.date-number {
  font-size: 1.25rem;
  line-height: 1;
}

.date-month {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.table th {
  border-top: none;
  font-weight: 600;
  color: #5a5c69;
  font-size: 0.875rem;
  padding: 0.75rem;
}

.table td {
  padding: 0.75rem;
  vertical-align: middle;
  border-top: 1px solid #e3e6f0;
}

.badge {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
}

.btn {
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.7) !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-body {
    padding: 1rem;
  }
  
  .timeline {
    padding-left: 1.5rem;
  }
  
  .timeline-marker {
    left: -1.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .timeline::before {
    left: -0.75rem;
  }
}
</style>
