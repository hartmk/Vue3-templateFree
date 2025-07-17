<template>
  <div class="container-fluid px-5 py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="mb-2">Social Widgets</h2>
        <p class="text-muted">วิดเจ็ตโซเชียลมีเดียและการโต้ตอบผู้ใช้</p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
          <li class="breadcrumb-item">Widgets</li>
          <li class="breadcrumb-item active">Social Widgets</li>
        </ol>
      </nav>
    </div>

    <!-- Social Media Stats -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Social Media Statistics</h4>
      </div>
      <div class="col-lg-3 col-md-6 mb-4" v-for="platform in socialPlatforms" :key="platform.name">
        <div class="card social-card" :class="platform.cardClass">
          <div class="card-body text-white">
            <div class="social-header">
              <div class="social-icon">
                <i class="fab" :class="platform.icon"></i>
              </div>
              <div class="social-actions">
                <button class="btn btn-sm btn-outline-light">
                  <i class="fas fa-external-link-alt"></i>
                </button>
              </div>
            </div>
            <div class="social-stats">
              <h3>{{ platform.followers }}</h3>
              <p class="mb-2">{{ platform.name }}</p>
              <div class="social-growth" :class="platform.growthClass">
                <i class="fas" :class="platform.growthIcon"></i>
                {{ platform.growth }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Feed -->
    <div class="row mb-5">
      <div class="col-lg-8 mb-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Social Feed</h5>
            <button class="btn btn-primary btn-sm" @click="refreshFeed">
              <i class="fas fa-sync-alt me-1"></i>Refresh
            </button>
          </div>
          <div class="card-body p-0">
            <div class="social-feed">
              <div v-for="post in socialFeed" :key="post.id" class="feed-item">
                <div class="feed-header">
                  <div class="user-avatar">
                    <img :src="post.avatar" :alt="post.author" class="avatar">
                    <div class="platform-badge" :class="getPlatformBadgeClass(post.platform)">
                      <i class="fab" :class="getPlatformIcon(post.platform)"></i>
                    </div>
                  </div>
                  <div class="user-info">
                    <h6 class="author-name">{{ post.author }}</h6>
                    <p class="post-time">{{ formatPostTime(post.timestamp) }}</p>
                  </div>
                  <div class="post-actions">
                    <button class="btn btn-sm btn-outline-secondary">
                      <i class="fas fa-ellipsis-h"></i>
                    </button>
                  </div>
                </div>
                <div class="feed-content">
                  <p>{{ post.content }}</p>
                  <div v-if="post.image" class="post-image">
                    <img :src="post.image" :alt="post.content" class="img-fluid rounded">
                  </div>
                </div>
                <div class="feed-footer">
                  <div class="engagement-stats">
                    <span class="stat-item">
                      <i class="fas fa-heart text-danger"></i>
                      {{ post.likes }}
                    </span>
                    <span class="stat-item">
                      <i class="fas fa-comment text-primary"></i>
                      {{ post.comments }}
                    </span>
                    <span class="stat-item">
                      <i class="fas fa-share text-success"></i>
                      {{ post.shares }}
                    </span>
                  </div>
                  <div class="engagement-actions">
                    <button class="btn btn-sm btn-outline-danger" @click="toggleLike(post)">
                      <i class="fas" :class="post.liked ? 'fa-heart' : 'fa-heart'"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-primary">
                      <i class="fas fa-comment"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-success">
                      <i class="fas fa-share"></i>
                    </button>
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
            <h5 class="mb-0">Engagement Analytics</h5>
          </div>
          <div class="card-body">
            <div class="engagement-overview">
              <div class="engagement-metric">
                <div class="metric-icon bg-danger">
                  <i class="fas fa-heart text-white"></i>
                </div>
                <div class="metric-info">
                  <h4>{{ totalLikes }}</h4>
                  <p>Total Likes</p>
                  <small class="text-success">+15.2% this week</small>
                </div>
              </div>
              
              <div class="engagement-metric">
                <div class="metric-icon bg-primary">
                  <i class="fas fa-comment text-white"></i>
                </div>
                <div class="metric-info">
                  <h4>{{ totalComments }}</h4>
                  <p>Total Comments</p>
                  <small class="text-success">+8.7% this week</small>
                </div>
              </div>
              
              <div class="engagement-metric">
                <div class="metric-icon bg-success">
                  <i class="fas fa-share text-white"></i>
                </div>
                <div class="metric-info">
                  <h4>{{ totalShares }}</h4>
                  <p>Total Shares</p>
                  <small class="text-warning">-2.3% this week</small>
                </div>
              </div>
            </div>
            
            <div class="platform-performance mt-4">
              <h6>Platform Performance</h6>
              <div class="platform-stats">
                <div v-for="platform in platformPerformance" :key="platform.name" class="platform-stat">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="platform-info">
                      <i class="fab" :class="[platform.icon, platform.colorClass]"></i>
                      <span class="ms-2">{{ platform.name }}</span>
                    </div>
                    <span class="engagement-rate">{{ platform.engagement }}%</span>
                  </div>
                  <div class="progress" style="height: 6px;">
                    <div class="progress-bar" :class="platform.progressClass"
                         :style="{ width: platform.engagement + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Activity -->
    <div class="row mb-5">
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Team Activity</h5>
          </div>
          <div class="card-body">
            <div class="team-activity">
              <div v-for="activity in teamActivity" :key="activity.id" class="activity-item">
                <div class="activity-avatar">
                  <img :src="activity.avatar" :alt="activity.user" class="avatar">
                  <div class="activity-status" :class="getActivityStatusClass(activity.type)">
                    <i class="fas" :class="getActivityIcon(activity.type)"></i>
                  </div>
                </div>
                <div class="activity-content">
                  <p class="activity-text">
                    <strong>{{ activity.user }}</strong> {{ activity.action }}
                  </p>
                  <small class="activity-time">{{ formatPostTime(activity.timestamp) }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Online Users</h5>
          </div>
          <div class="card-body">
            <div class="online-users">
              <div class="users-count">
                <h3 class="text-success">{{ onlineUsersCount }}</h3>
                <p class="text-muted">ผู้ใช้ออนไลน์ตอนนี้</p>
              </div>
              
              <div class="users-list">
                <div v-for="user in onlineUsers" :key="user.id" class="user-item">
                  <div class="user-avatar">
                    <img :src="user.avatar" :alt="user.name" class="avatar">
                    <div class="online-indicator"></div>
                  </div>
                  <div class="user-info">
                    <h6 class="user-name">{{ user.name }}</h6>
                    <p class="user-status">{{ user.status }}</p>
                  </div>
                  <div class="user-actions">
                    <button class="btn btn-sm btn-outline-primary">
                      <i class="fas fa-comment"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Tools -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Social Tools</h4>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Post Scheduler</h5>
          </div>
          <div class="card-body">
            <div class="post-composer">
              <div class="mb-3">
                <label class="form-label">Post Content</label>
                <textarea class="form-control" v-model="newPost.content" rows="4" 
                          placeholder="เขียนโพสต์ของคุณ..."></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Platform</label>
                <div class="platform-selector">
                  <div v-for="platform in ['facebook', 'twitter', 'instagram', 'linkedin']" :key="platform"
                       class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" 
                           :id="platform" v-model="newPost.platforms" :value="platform">
                    <label class="form-check-label" :for="platform">
                      <i class="fab" :class="getPlatformIcon(platform)"></i>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Schedule Time</label>
                <input type="datetime-local" class="form-control" v-model="newPost.scheduleTime">
              </div>
              <button class="btn btn-primary w-100" @click="schedulePost">
                <i class="fas fa-clock me-1"></i>Schedule Post
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Hashtag Trends</h5>
          </div>
          <div class="card-body">
            <div class="hashtag-trends">
              <div v-for="(hashtag, index) in trendingHashtags" :key="index" class="hashtag-item">
                <div class="hashtag-rank">{{ index + 1 }}</div>
                <div class="hashtag-info">
                  <h6 class="hashtag-name">{{ hashtag.tag }}</h6>
                  <p class="hashtag-posts">{{ hashtag.posts }} posts</p>
                </div>
                <div class="hashtag-trend">
                  <i class="fas" :class="hashtag.trending ? 'fa-arrow-up text-success' : 'fa-arrow-down text-danger'"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 mb-4">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Social Mentions</h5>
          </div>
          <div class="card-body">
            <div class="mentions-overview">
              <div class="mentions-stats">
                <div class="stat-item">
                  <h4 class="text-primary">{{ totalMentions }}</h4>
                  <p>Total Mentions</p>
                </div>
                <div class="stat-item">
                  <h4 class="text-success">{{ positiveMentions }}</h4>
                  <p>Positive</p>
                </div>
                <div class="stat-item">
                  <h4 class="text-danger">{{ negativeMentions }}</h4>
                  <p>Negative</p>
                </div>
              </div>
              
              <div class="sentiment-chart">
                <div class="sentiment-bar">
                  <div class="positive-bar" :style="{ width: (positiveMentions / totalMentions * 100) + '%' }"></div>
                  <div class="negative-bar" :style="{ width: (negativeMentions / totalMentions * 100) + '%' }"></div>
                </div>
                <div class="sentiment-labels">
                  <span class="positive-label">Positive {{ Math.round(positiveMentions / totalMentions * 100) }}%</span>
                  <span class="negative-label">Negative {{ Math.round(negativeMentions / totalMentions * 100) }}%</span>
                </div>
              </div>
              
              <div class="recent-mentions">
                <h6>Recent Mentions</h6>
                <div v-for="mention in recentMentions" :key="mention.id" class="mention-item">
                  <div class="mention-text">{{ mention.text }}</div>
                  <div class="mention-meta">
                    <span class="mention-platform">{{ mention.platform }}</span>
                    <span class="mention-sentiment" :class="getSentimentClass(mention.sentiment)">
                      {{ mention.sentiment }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Influencer Dashboard -->
    <div class="row mb-5">
      <div class="col-12">
        <h4 class="mb-3">Influencer Dashboard</h4>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">Top Influencers</h5>
          </div>
          <div class="card-body">
            <div class="influencers-grid">
              <div v-for="influencer in topInfluencers" :key="influencer.id" class="influencer-card">
                <div class="influencer-avatar">
                  <img :src="influencer.avatar" :alt="influencer.name" class="avatar">
                  <div class="verification-badge" v-if="influencer.verified">
                    <i class="fas fa-check"></i>
                  </div>
                </div>
                <div class="influencer-info">
                  <h6 class="influencer-name">{{ influencer.name }}</h6>
                  <p class="influencer-category">{{ influencer.category }}</p>
                  <div class="influencer-stats">
                    <div class="stat">
                      <span class="stat-value">{{ influencer.followers }}</span>
                      <span class="stat-label">Followers</span>
                    </div>
                    <div class="stat">
                      <span class="stat-value">{{ influencer.engagement }}%</span>
                      <span class="stat-label">Engagement</span>
                    </div>
                  </div>
                </div>
                <div class="influencer-actions">
                  <button class="btn btn-primary btn-sm">Contact</button>
                  <button class="btn btn-outline-secondary btn-sm">View Profile</button>
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
import { ref, computed, reactive } from 'vue'

const socialPlatforms = reactive([
  {
    name: 'Facebook',
    icon: 'fa-facebook-f',
    followers: '12.5K',
    growth: '+8.2%',
    growthIcon: 'fa-arrow-up',
    growthClass: 'positive',
    cardClass: 'facebook-card'
  },
  {
    name: 'Twitter',
    icon: 'fa-twitter',
    followers: '8.3K',
    growth: '+5.7%',
    growthIcon: 'fa-arrow-up',
    growthClass: 'positive',
    cardClass: 'twitter-card'
  },
  {
    name: 'Instagram',
    icon: 'fa-instagram',
    followers: '15.2K',
    growth: '+12.1%',
    growthIcon: 'fa-arrow-up',
    growthClass: 'positive',
    cardClass: 'instagram-card'
  },
  {
    name: 'LinkedIn',
    icon: 'fa-linkedin-in',
    followers: '6.8K',
    growth: '-2.3%',
    growthIcon: 'fa-arrow-down',
    growthClass: 'negative',
    cardClass: 'linkedin-card'
  }
])

const socialFeed = ref([
  {
    id: 1,
    author: 'John Smith',
    avatar: 'https://via.placeholder.com/40x40',
    platform: 'facebook',
    content: 'เพิ่งเปิดตัวฟีเจอร์ใหม่ที่น่าตื่นเต้นมาก! ทีมเราทำงานหนักมากสำหรับโปรเจ็กต์นี้',
    image: 'https://via.placeholder.com/400x200',
    timestamp: new Date(Date.now() - 30 * 60000),
    likes: 124,
    comments: 18,
    shares: 7,
    liked: false
  },
  {
    id: 2,
    author: 'Sarah Johnson',
    avatar: 'https://via.placeholder.com/40x40',
    platform: 'twitter',
    content: 'Tips สำหรับการทำ marketing ในยุค digital: 1) เข้าใจ audience 2) สร้าง content ที่มีคุณค่า 3) วิเคราะห์ผลลัพธ์อย่างสม่ำเสมอ',
    timestamp: new Date(Date.now() - 60 * 60000),
    likes: 89,
    comments: 12,
    shares: 23,
    liked: true
  },
  {
    id: 3,
    author: 'Tech Insider',
    avatar: 'https://via.placeholder.com/40x40',
    platform: 'instagram',
    content: 'Behind the scenes ของการพัฒนาแอพพลิเคชั่นใหม่ ใช้เวลา 6 เดือนในการวางแผนและพัฒนา',
    image: 'https://via.placeholder.com/400x300',
    timestamp: new Date(Date.now() - 120 * 60000),
    likes: 256,
    comments: 45,
    shares: 12,
    liked: false
  }
])

const teamActivity = ref([
  {
    id: 1,
    user: 'สมชาย ใจดี',
    avatar: 'https://via.placeholder.com/32x32',
    action: 'โพสต์บน Facebook',
    type: 'post',
    timestamp: new Date(Date.now() - 15 * 60000)
  },
  {
    id: 2,
    user: 'สุดา เก่งมาก',
    avatar: 'https://via.placeholder.com/32x32',
    action: 'ตอบกลับคอมเมนต์',
    type: 'comment',
    timestamp: new Date(Date.now() - 25 * 60000)
  },
  {
    id: 3,
    user: 'วิชัย ทดสอบ',
    avatar: 'https://via.placeholder.com/32x32',
    action: 'แชร์โพสต์',
    type: 'share',
    timestamp: new Date(Date.now() - 45 * 60000)
  }
])

const onlineUsers = ref([
  {
    id: 1,
    name: 'อันนา สมิท',
    avatar: 'https://via.placeholder.com/32x32',
    status: 'กำลังเขียนโพสต์...'
  },
  {
    id: 2,
    name: 'จอห์น โดว์',
    avatar: 'https://via.placeholder.com/32x32',
    status: 'ออนไลน์'
  },
  {
    id: 3,
    name: 'เมรี่ เจนส์',
    avatar: 'https://via.placeholder.com/32x32',
    status: 'กำลังดูคอนเทนต์'
  }
])

const trendingHashtags = ref([
  { tag: '#DigitalMarketing', posts: '15.2K', trending: true },
  { tag: '#SocialMedia', posts: '12.8K', trending: true },
  { tag: '#Technology', posts: '9.5K', trending: false },
  { tag: '#Innovation', posts: '7.3K', trending: true },
  { tag: '#Business', posts: '6.1K', trending: false }
])

const recentMentions = ref([
  {
    id: 1,
    text: 'บริษัทนี้ให้บริการดีมาก แนะนำเลย!',
    platform: 'Facebook',
    sentiment: 'positive'
  },
  {
    id: 2,
    text: 'ผลิตภัณฑ์ใหม่น่าสนใจ รอใช้งาน',
    platform: 'Twitter',
    sentiment: 'positive'
  },
  {
    id: 3,
    text: 'การบริการช้าไปหน่อย',
    platform: 'Instagram',
    sentiment: 'negative'
  }
])

const topInfluencers = ref([
  {
    id: 1,
    name: 'Tech Guru',
    avatar: 'https://via.placeholder.com/60x60',
    category: 'Technology',
    followers: '1.2M',
    engagement: '8.5',
    verified: true
  },
  {
    id: 2,
    name: 'Marketing Pro',
    avatar: 'https://via.placeholder.com/60x60',
    category: 'Marketing',
    followers: '890K',
    engagement: '7.2',
    verified: true
  },
  {
    id: 3,
    name: 'Business Leader',
    avatar: 'https://via.placeholder.com/60x60',
    category: 'Business',
    followers: '650K',
    engagement: '6.8',
    verified: false
  }
])

const newPost = ref({
  content: '',
  platforms: [],
  scheduleTime: ''
})

const platformPerformance = ref([
  { name: 'Facebook', icon: 'fa-facebook-f', engagement: 85, colorClass: 'text-primary', progressClass: 'bg-primary' },
  { name: 'Instagram', icon: 'fa-instagram', engagement: 92, colorClass: 'text-danger', progressClass: 'bg-danger' },
  { name: 'Twitter', icon: 'fa-twitter', engagement: 68, colorClass: 'text-info', progressClass: 'bg-info' },
  { name: 'LinkedIn', icon: 'fa-linkedin-in', engagement: 74, colorClass: 'text-primary', progressClass: 'bg-primary' }
])

const totalLikes = computed(() => socialFeed.value.reduce((sum, post) => sum + post.likes, 0))
const totalComments = computed(() => socialFeed.value.reduce((sum, post) => sum + post.comments, 0))
const totalShares = computed(() => socialFeed.value.reduce((sum, post) => sum + post.shares, 0))
const onlineUsersCount = computed(() => onlineUsers.value.length)
const totalMentions = computed(() => recentMentions.value.length)
const positiveMentions = computed(() => recentMentions.value.filter(m => m.sentiment === 'positive').length)
const negativeMentions = computed(() => recentMentions.value.filter(m => m.sentiment === 'negative').length)

const getPlatformIcon = (platform) => {
  const icons = {
    'facebook': 'fa-facebook-f',
    'twitter': 'fa-twitter',
    'instagram': 'fa-instagram',
    'linkedin': 'fa-linkedin-in'
  }
  return icons[platform] || 'fa-globe'
}

const getPlatformBadgeClass = (platform) => {
  const classes = {
    'facebook': 'facebook-badge',
    'twitter': 'twitter-badge',
    'instagram': 'instagram-badge',
    'linkedin': 'linkedin-badge'
  }
  return classes[platform] || 'default-badge'
}

const getActivityIcon = (type) => {
  const icons = {
    'post': 'fa-edit',
    'comment': 'fa-comment',
    'share': 'fa-share',
    'like': 'fa-heart'
  }
  return icons[type] || 'fa-circle'
}

const getActivityStatusClass = (type) => {
  const classes = {
    'post': 'bg-primary',
    'comment': 'bg-success',
    'share': 'bg-warning',
    'like': 'bg-danger'
  }
  return classes[type] || 'bg-secondary'
}

const getSentimentClass = (sentiment) => {
  return sentiment === 'positive' ? 'text-success' : 'text-danger'
}

const formatPostTime = (timestamp) => {
  const now = new Date()
  const diff = now - timestamp
  const minutes = Math.floor(diff / 60000)
  
  if (minutes < 1) return 'เมื่อกี้นี้'
  if (minutes < 60) return `${minutes} นาทีที่แล้ว`
  
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} ชั่วโมงที่แล้ว`
  
  const days = Math.floor(hours / 24)
  return `${days} วันที่แล้ว`
}

const toggleLike = (post) => {
  if (post.liked) {
    post.likes--
  } else {
    post.likes++
  }
  post.liked = !post.liked
}

const refreshFeed = () => {
  // Simulate feed refresh
  console.log('Refreshing social feed...')
}

const schedulePost = () => {
  if (newPost.value.content && newPost.value.platforms.length > 0) {
    console.log('Scheduling post:', newPost.value)
    // Reset form
    newPost.value = {
      content: '',
      platforms: [],
      scheduleTime: ''
    }
    alert('โพสต์ถูกจัดเวลาเรียบร้อยแล้ว!')
  } else {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน')
  }
}
</script>

<style scoped>
.social-card {
  border: none;
  transition: transform 0.2s ease;
}

.social-card:hover {
  transform: translateY(-2px);
}

.facebook-card {
  background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
}

.twitter-card {
  background: linear-gradient(135deg, #1da1f2 0%, #64b5f6 100%);
}

.instagram-card {
  background: linear-gradient(135deg, #e1306c 0%, #fd1d1d 50%, #fcb045 100%);
}

.linkedin-card {
  background: linear-gradient(135deg, #0077b5 0%, #00a0dc 100%);
}

.social-header {
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 20px;
}

.social-icon {
  font-size: 2rem;
}

.social-stats h3 {
  margin-bottom: 5px;
  font-size: 2.5rem;
  font-weight: 300;
}

.social-growth {
  font-size: 0.9rem;
  font-weight: 600;
}

.social-growth.positive {
  color: rgba(255, 255, 255, 0.9);
}

.social-growth.negative {
  color: rgba(255, 255, 255, 0.7);
}

.social-feed {
  max-height: 600px;
  overflow-y: auto;
}

.feed-item {
  padding: 20px;
  border-bottom: 1px solid #f8f9fa;
}

.feed-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.user-avatar {
  position: relative;
  margin-right: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.platform-badge {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  color: white;
  border: 2px solid white;
}

.facebook-badge { background: #1877f2; }
.twitter-badge { background: #1da1f2; }
.instagram-badge { background: #e1306c; }
.linkedin-badge { background: #0077b5; }

.user-info {
  flex: 1;
}

.author-name {
  margin-bottom: 2px;
  font-size: 1rem;
}

.post-time {
  margin-bottom: 0;
  font-size: 0.85rem;
  color: #6c757d;
}

.feed-content {
  margin-bottom: 15px;
}

.post-image {
  margin-top: 10px;
}

.feed-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.engagement-stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  font-size: 0.9rem;
  color: #6c757d;
}

.engagement-actions {
  display: flex;
  gap: 8px;
}

.engagement-overview {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.engagement-metric {
  display: flex;
  align-items: center;
}

.metric-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.metric-info h4 {
  margin-bottom: 2px;
  color: #495057;
}

.metric-info p {
  margin-bottom: 5px;
  color: #6c757d;
  font-size: 0.9rem;
}

.platform-stat {
  margin-bottom: 15px;
}

.platform-info {
  display: flex;
  align-items: center;
}

.engagement-rate {
  font-weight: bold;
  color: #495057;
}

.team-activity {
  max-height: 400px;
  overflow-y: auto;
}

.activity-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.activity-avatar {
  position: relative;
  margin-right: 12px;
}

.activity-status {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: white;
  border: 2px solid white;
}

.activity-content {
  flex: 1;
}

.activity-text {
  margin-bottom: 2px;
  font-size: 0.9rem;
}

.activity-time {
  color: #6c757d;
  font-size: 0.8rem;
}

.users-count {
  text-align: center;
  margin-bottom: 20px;
}

.users-count h3 {
  font-size: 2.5rem;
  margin-bottom: 5px;
}

.users-list {
  max-height: 300px;
  overflow-y: auto;
}

.user-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 8px;
}

.online-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background: #28a745;
  border: 2px solid white;
  border-radius: 50%;
}

.user-info {
  flex: 1;
  margin-left: 12px;
}

.user-name {
  margin-bottom: 2px;
  font-size: 0.95rem;
}

.user-status {
  margin-bottom: 0;
  font-size: 0.8rem;
  color: #6c757d;
}

.post-composer textarea {
  resize: vertical;
}

.platform-selector {
  display: flex;
  gap: 15px;
}

.platform-selector .form-check-label {
  font-size: 1.2rem;
  cursor: pointer;
}

.hashtag-trends {
  max-height: 300px;
  overflow-y: auto;
}

.hashtag-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 8px;
}

.hashtag-rank {
  width: 30px;
  height: 30px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
}

.hashtag-info {
  flex: 1;
}

.hashtag-name {
  margin-bottom: 2px;
  color: #007bff;
  font-size: 0.95rem;
}

.hashtag-posts {
  margin-bottom: 0;
  font-size: 0.8rem;
  color: #6c757d;
}

.mentions-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  text-align: center;
}

.stat-item h4 {
  margin-bottom: 5px;
}

.stat-item p {
  margin-bottom: 0;
  font-size: 0.9rem;
  color: #6c757d;
}

.sentiment-chart {
  margin-bottom: 20px;
}

.sentiment-bar {
  height: 20px;
  background: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
}

.positive-bar {
  background: #28a745;
  transition: width 0.3s ease;
}

.negative-bar {
  background: #dc3545;
  transition: width 0.3s ease;
}

.sentiment-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 0.85rem;
}

.positive-label {
  color: #28a745;
}

.negative-label {
  color: #dc3545;
}

.recent-mentions h6 {
  margin-bottom: 15px;
}

.mention-item {
  margin-bottom: 15px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 6px;
}

.mention-text {
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.mention-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #6c757d;
}

.mention-sentiment {
  font-weight: 600;
}

.influencers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.influencer-card {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  text-align: center;
}

.influencer-avatar {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
}

.influencer-avatar .avatar {
  width: 60px;
  height: 60px;
}

.verification-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  border: 2px solid white;
}

.influencer-name {
  margin-bottom: 5px;
}

.influencer-category {
  color: #6c757d;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.influencer-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
}

.stat-label {
  font-size: 0.8rem;
  color: #6c757d;
}

.influencer-actions {
  display: flex;
  gap: 8px;
  justify-content: center;
}
</style>
