<template>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="mb-0">
            <i class="fas fa-comments text-primary me-2"></i>
            Chat Application
          </h2>
          <button class="btn btn-primary" @click="startNewChat">
            <i class="fas fa-plus me-2"></i>New Chat
          </button>
        </div>
        
        <div class="row g-4">
          <!-- Chat List -->
          <div class="col-lg-4">
            <div class="card h-100">
              <div class="card-header bg-primary text-white">
                <h5 class="mb-0">
                  <i class="fas fa-users me-2"></i>Conversations
                </h5>
              </div>
              <div class="card-body p-0">
                <div class="list-group list-group-flush">
                  <div 
                    v-for="chat in chatList" 
                    :key="chat.id"
                    class="list-group-item list-group-item-action d-flex align-items-center p-3"
                    :class="{ 'active': activeChat?.id === chat.id }"
                    @click="selectChat(chat)"
                    style="cursor: pointer;"
                  >
                    <div class="position-relative me-3">
                      <img 
                        :src="chat.avatar" 
                        :alt="chat.name"
                        class="rounded-circle"
                        style="width: 40px; height: 40px; object-fit: cover;"
                      >
                      <span 
                        v-if="chat.online" 
                        class="position-absolute bottom-0 end-0 bg-success rounded-circle border border-2 border-white"
                        style="width: 12px; height: 12px;"
                      ></span>
                    </div>
                    <div class="flex-grow-1">
                      <div class="d-flex justify-content-between align-items-start">
                        <h6 class="mb-1">{{ chat.name }}</h6>
                        <small class="text-muted">{{ formatTime(chat.lastMessage.time) }}</small>
                      </div>
                      <p class="mb-1 text-muted small">{{ chat.lastMessage.text }}</p>
                      <span v-if="chat.unreadCount > 0" class="badge bg-danger rounded-pill">
                        {{ chat.unreadCount }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Chat Window -->
          <div class="col-lg-8">
            <div class="card h-100">
              <!-- Chat Header -->
              <div v-if="activeChat" class="card-header bg-light d-flex align-items-center">
                <img 
                  :src="activeChat.avatar" 
                  :alt="activeChat.name"
                  class="rounded-circle me-3"
                  style="width: 40px; height: 40px; object-fit: cover;"
                >
                <div class="flex-grow-1">
                  <h6 class="mb-0">{{ activeChat.name }}</h6>
                  <small class="text-success" v-if="activeChat.online">
                    <i class="fas fa-circle me-1" style="font-size: 0.5rem;"></i>Online
                  </small>
                  <small class="text-muted" v-else>Last seen {{ formatTime(activeChat.lastSeen) }}</small>
                </div>
                <div class="dropdown">
                  <button class="btn btn-outline-secondary btn-sm" data-bs-toggle="dropdown">
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"><i class="fas fa-phone me-2"></i>Voice Call</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-video me-2"></i>Video Call</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="#"><i class="fas fa-trash me-2"></i>Delete Chat</a></li>
                  </ul>
                </div>
              </div>
              
              <!-- Chat Messages -->
              <div class="card-body d-flex flex-column" style="height: 500px;">
                <div class="flex-grow-1 overflow-auto mb-3" ref="messagesContainer">
                  <div v-if="!activeChat" class="text-center text-muted mt-5">
                    <i class="fas fa-comments fa-3x mb-3"></i>
                    <h5>Select a conversation to start chatting</h5>
                  </div>
                  <div v-else>
                    <div 
                      v-for="message in activeChat.messages" 
                      :key="message.id"
                      class="mb-3"
                    >
                      <div 
                        class="d-flex"
                        :class="message.sender === 'me' ? 'justify-content-end' : 'justify-content-start'"
                      >
                        <div 
                          class="message-bubble px-3 py-2 rounded-3 max-w-75"
                          :class="message.sender === 'me' ? 'bg-primary text-white' : 'bg-light'"
                        >
                          <div>{{ message.text }}</div>
                          <small 
                            class="d-block mt-1"
                            :class="message.sender === 'me' ? 'text-light' : 'text-muted'"
                            style="font-size: 0.7rem;"
                          >
                            {{ formatMessageTime(message.time) }}
                            <i v-if="message.sender === 'me'" class="fas fa-check ms-1"></i>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Message Input -->
                <div v-if="activeChat" class="border-top pt-3">
                  <form @submit.prevent="sendMessage" class="d-flex align-items-center">
                    <button type="button" class="btn btn-outline-secondary me-2">
                      <i class="fas fa-paperclip"></i>
                    </button>
                    <div class="flex-grow-1 position-relative">
                      <input 
                        v-model="newMessage"
                        type="text" 
                        class="form-control pe-5"
                        placeholder="Type a message..."
                        :disabled="!activeChat"
                      >
                      <button 
                        type="button" 
                        class="btn btn-link position-absolute end-0 top-50 translate-middle-y"
                        style="z-index: 5;"
                      >
                        <i class="fas fa-smile text-secondary"></i>
                      </button>
                    </div>
                    <button 
                      type="submit" 
                      class="btn btn-primary ms-2"
                      :disabled="!newMessage.trim()"
                    >
                      <i class="fas fa-paper-plane"></i>
                    </button>
                  </form>
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
import { ref, nextTick, onMounted } from 'vue'

const newMessage = ref('')
const activeChat = ref(null)
const messagesContainer = ref(null)

// Sample chat data
const chatList = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    online: true,
    lastMessage: {
      text: 'That sounds great! Looking forward to it.',
      time: new Date(Date.now() - 5 * 60 * 1000)
    },
    unreadCount: 2,
    messages: [
      {
        id: 1,
        sender: 'other',
        text: 'Hi! How are you doing today?',
        time: new Date(Date.now() - 2 * 60 * 60 * 1000)
      },
      {
        id: 2,
        sender: 'me',
        text: 'I\'m doing great, thanks! How about you?',
        time: new Date(Date.now() - 2 * 60 * 60 * 1000 + 5 * 60 * 1000)
      },
      {
        id: 3,
        sender: 'other',
        text: 'Pretty good! Are we still on for the meeting tomorrow?',
        time: new Date(Date.now() - 10 * 60 * 1000)
      },
      {
        id: 4,
        sender: 'me',
        text: 'Absolutely! See you at 10 AM.',
        time: new Date(Date.now() - 8 * 60 * 1000)
      },
      {
        id: 5,
        sender: 'other',
        text: 'That sounds great! Looking forward to it.',
        time: new Date(Date.now() - 5 * 60 * 1000)
      }
    ]
  },
  {
    id: 2,
    name: 'Mike Chen',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    online: false,
    lastSeen: new Date(Date.now() - 30 * 60 * 1000),
    lastMessage: {
      text: 'Thanks for the help!',
      time: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    unreadCount: 0,
    messages: [
      {
        id: 1,
        sender: 'other',
        text: 'Hey, can you help me with the project?',
        time: new Date(Date.now() - 3 * 60 * 60 * 1000)
      },
      {
        id: 2,
        sender: 'me',
        text: 'Sure! What do you need help with?',
        time: new Date(Date.now() - 2.5 * 60 * 60 * 1000)
      },
      {
        id: 3,
        sender: 'other',
        text: 'Thanks for the help!',
        time: new Date(Date.now() - 2 * 60 * 60 * 1000)
      }
    ]
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    online: true,
    lastMessage: {
      text: 'Perfect! 👍',
      time: new Date(Date.now() - 24 * 60 * 60 * 1000)
    },
    unreadCount: 0,
    messages: [
      {
        id: 1,
        sender: 'me',
        text: 'Hi Emma! How was your weekend?',
        time: new Date(Date.now() - 25 * 60 * 60 * 1000)
      },
      {
        id: 2,
        sender: 'other',
        text: 'It was amazing! Went hiking with friends.',
        time: new Date(Date.now() - 24.5 * 60 * 60 * 1000)
      },
      {
        id: 3,
        sender: 'other',
        text: 'Perfect! 👍',
        time: new Date(Date.now() - 24 * 60 * 60 * 1000)
      }
    ]
  }
])

const selectChat = (chat) => {
  activeChat.value = chat
  chat.unreadCount = 0
  
  // Scroll to bottom after selecting chat
  nextTick(() => {
    scrollToBottom()
  })
}

const sendMessage = () => {
  if (!newMessage.value.trim() || !activeChat.value) return
  
  const message = {
    id: Date.now(),
    sender: 'me',
    text: newMessage.value.trim(),
    time: new Date()
  }
  
  activeChat.value.messages.push(message)
  activeChat.value.lastMessage = {
    text: message.text,
    time: message.time
  }
  
  newMessage.value = ''
  
  // Scroll to bottom after sending message
  nextTick(() => {
    scrollToBottom()
  })
  
  // Simulate response after 1-3 seconds
  setTimeout(() => {
    simulateResponse()
  }, Math.random() * 2000 + 1000)
}

const simulateResponse = () => {
  if (!activeChat.value) return
  
  const responses = [
    'Thanks for the message!',
    'That\'s interesting!',
    'I agree with you.',
    'Let me think about it.',
    'Sounds good to me!',
    'I\'ll get back to you on that.',
    'Great idea!',
    'That makes sense.'
  ]
  
  const response = {
    id: Date.now(),
    sender: 'other',
    text: responses[Math.floor(Math.random() * responses.length)],
    time: new Date()
  }
  
  activeChat.value.messages.push(response)
  activeChat.value.lastMessage = {
    text: response.text,
    time: response.time
  }
  
  nextTick(() => {
    scrollToBottom()
  })
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const startNewChat = () => {
  alert('Start new chat functionality would be implemented here!')
}

const formatTime = (time) => {
  const now = new Date()
  const diff = now - time
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (hours < 1) {
    const minutes = Math.floor(diff / (1000 * 60))
    return `${minutes}m`
  } else if (hours < 24) {
    return `${hours}h`
  } else {
    return `${days}d`
  }
}

const formatMessageTime = (time) => {
  return time.toLocaleTimeString('th-TH', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
}

// Select first chat on mount
onMounted(() => {
  if (chatList.value.length > 0) {
    selectChat(chatList.value[0])
  }
})
</script>

<style scoped>
.max-w-75 {
  max-width: 75%;
}

.message-bubble {
  word-wrap: break-word;
  word-break: break-word;
}

.list-group-item.active {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.list-group-item:hover {
  background-color: rgba(var(--bs-primary-rgb), 0.1);
}

/* Custom scrollbar */
.overflow-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>
