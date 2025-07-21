import{_ as L,r as g,d as U,K as O,o as n,c as d,a,b as e,n as l,i as V,F as T,e as I,t as i,w as A,v as $,B as j,h as E}from"./index-a28efa19.js";import{s as h}from"./swal-52a55870.js";const q={class:"container-fluid px-5 py-5"},G={class:"documentation-page"},Y={class:"hero-section"},K={class:"hero-content"},Q={class:"hero-actions"},W={class:"doc-nav sticky-top"},H={class:"container-fluid"},J={class:"nav nav-pills justify-content-center"},X={class:"doc-content"},Z={class:"container-fluid"},_={id:"installation",class:"doc-section"},aa={class:"step-container"},sa={class:"step-item"},ta={class:"step-content"},ea={class:"code-block"},la={class:"code-header"},oa={class:"step-item"},ia={class:"step-content"},na={class:"code-block"},da={class:"code-header"},va={class:"step-item"},ra={class:"step-content"},ca={class:"code-block"},ua={class:"code-header"},pa={class:"step-item"},ma={class:"step-content"},fa={class:"code-block"},ba={class:"code-header"},ga={id:"configuration",class:"doc-section"},ka={class:"config-grid"},ya={class:"config-card"},ha={class:"code-block"},Ca={class:"code-header"},wa={class:"config-card"},xa={class:"code-block"},Da={class:"code-header"},Aa={class:"config-card"},$a={class:"code-block"},Pa={class:"code-header"},Ta={class:"config-card"},Ia={class:"code-block"},Va={class:"code-header"},Sa={id:"components",class:"doc-section"},Ma={class:"component-grid"},ja={class:"component-preview"},Ea={class:"component-info"},za={class:"component-tags"},Fa=["onClick"],Ba={id:"customization",class:"doc-section"},Na={class:"customization-tabs"},Ra={class:"nav nav-tabs",role:"tablist"},La={class:"tab-content"},Ua={class:"tab-pane"},Oa={class:"row"},qa={class:"col-lg-6"},Ga={class:"color-palette"},Ya={class:"color-info"},Ka={class:"color-name"},Qa={class:"color-value"},Wa={class:"tab-pane"},Ha={class:"tab-pane"},Ja={class:"code-block"},Xa={id:"api",class:"doc-section"},Za={class:"api-grid"},_a={class:"api-header"},as={class:"api-description"},ss={class:"api-example"},ts={class:"modal-dialog modal-xl"},es={class:"modal-content"},ls={class:"modal-header"},os={class:"modal-title"},is={class:"modal-body"},ns={class:"code-preview"},ds={class:"nav nav-tabs code-tabs",role:"tablist"},vs={class:"tab-content code-content"},rs={class:"tab-pane"},cs={class:"code-block"},us={class:"code-header"},ps={class:"tab-pane"},ms={class:"code-block"},fs={class:"code-header"},bs={class:"modal-footer"},gs={__name:"Documentation",setup(ks){const r=g("overview"),c=g("colors"),k=g("template"),v=g(!1),u=g(null),z=g([{name:"DateTimePicker",description:"เลือกวันที่และเวลาที่ทันสมัย",icon:"fas fa-calendar-alt",tags:["Form","Date","Time"],code:{template:`<template>
  <div class="datetime-picker-demo">
    <div class="mb-3">
      <label class="form-label">เลือกวันที่</label>
      <flat-pickr
        v-model="selectedDate"
        :config="dateConfig"
        class="form-control"
        placeholder="เลือกวันที่..."
      ></flat-pickr>
    </div>
  </div>
</template>`,script:`<script setup>
import { ref } from 'vue'

const selectedDate = ref('')
const dateConfig = ref({
  dateFormat: 'Y-m-d',
  altInput: true,
  altFormat: 'j F Y',
  locale: Thai
})
<\/script>`}},{name:"DataTables",description:"ตารางข้อมูลพร้อมการค้นหาและเรียงลำดับ",icon:"fas fa-table",tags:["Table","Data","Search"],code:{template:`<template>
  <div class="datatable-demo">
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>ชื่อ</th>
            <th>อีเมล</th>
            <th>สถานะ</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span class="badge bg-success">เปิดใช้งาน</span>
            </td>
            <td>
              <button class="btn btn-sm btn-primary me-1">แก้ไข</button>
              <button class="btn btn-sm btn-danger">ลบ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>`,script:`<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'จอห์น โด', email: 'john@example.com' },
  { id: 2, name: 'เจน สมิธ', email: 'jane@example.com' },
  { id: 3, name: 'บ็อบ จอห์นสัน', email: 'bob@example.com' }
])
<\/script>`}},{name:"Charts",description:"กราฟและแผนภูมิด้วย ApexCharts",icon:"fas fa-chart-bar",tags:["Chart","Graph","Visualization"],code:{template:`<template>
  <div class="chart-demo">
    <div class="card">
      <div class="card-header">
        <h5>ยอดขายรายเดือน</h5>
      </div>
      <div class="card-body">
        <apexchart
          type="line"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>`,script:`<script setup>
import { ref } from 'vue'

const series = ref([{
  name: 'ยอดขาย',
  data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
}])

const chartOptions = ref({
  chart: {
    height: 350,
    type: 'line',
    zoom: { enabled: false }
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'straight' },
  title: {
    text: 'ยอดขายรายเดือน',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.']
  }
})
<\/script>`}},{name:"Forms",description:"ฟอร์มพร้อม Validation",icon:"fas fa-edit",tags:["Form","Input","Validation"],code:{template:`<template>
  <div class="form-demo">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-label">ชื่อ *</label>
        <input 
          type="text" 
          class="form-control"
          :class="{ 'is-invalid': errors.name }"
          v-model="form.name"
          @blur="validateName"
        >
        <div class="invalid-feedback" v-if="errors.name">
          {{ errors.name }}
        </div>
      </div>
      
      <div class="mb-3">
        <label class="form-label">อีเมล *</label>
        <input 
          type="email" 
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          v-model="form.email"
          @blur="validateEmail"
        >
        <div class="invalid-feedback" v-if="errors.email">
          {{ errors.email }}
        </div>
      </div>
      
      <button type="submit" class="btn btn-primary">
        บันทึก
      </button>
    </form>
  </div>
</template>`,script:`<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: ''
})

const errors = ref({})

const validateName = () => {
  if (!form.value.name.trim()) {
    errors.value.name = 'กรุณากรอกชื่อ'
  } else {
    delete errors.value.name
  }
}

const validateEmail = () => {
  const emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/
  if (!form.value.email) {
    errors.value.email = 'กรุณากรอกอีเมล'
  } else if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'รูปแบบอีเมลไม่ถูกต้อง'
  } else {
    delete errors.value.email
  }
}

const submitForm = () => {
  validateName()
  validateEmail()
  
  if (Object.keys(errors.value).length === 0) {
    console.log('Form submitted:', form.value)
  }
}
<\/script>`}},{name:"Modals",description:"หน้าต่าง Modal และ Dialog",icon:"fas fa-window-restore",tags:["Modal","Dialog","Popup"],code:{template:`<template>
  <div class="modal-demo">
    <button 
      class="btn btn-primary" 
      @click="showModal = true"
    >
      เปิด Modal
    </button>
    
    <!-- Modal -->
    <div 
      class="modal fade" 
      :class="{ show: showModal }"
      :style="{ display: showModal ? 'block' : 'none' }"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">ยืนยันการดำเนินการ</h5>
            <button 
              type="button" 
              class="btn-close" 
              @click="showModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <p>คุณต้องการดำเนินการต่อหรือไม่?</p>
          </div>
          <div class="modal-footer">
            <button 
              type="button" 
              class="btn btn-secondary" 
              @click="showModal = false"
            >
              ยกเลิก
            </button>
            <button 
              type="button" 
              class="btn btn-primary"
              @click="confirmAction"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Backdrop -->
    <div 
      class="modal-backdrop fade"
      :class="{ show: showModal }"
      v-if="showModal"
      @click="showModal = false"
    ></div>
  </div>
</template>`,script:`<script setup>
import { ref } from 'vue'

const showModal = ref(false)

const confirmAction = () => {
  console.log('Action confirmed!')
  showModal.value = false
}
<\/script>`}},{name:"Icons",description:"ไอคอน Font Awesome",icon:"fas fa-icons",tags:["Icon","UI","Design"],code:{template:`<template>
  <div class="icons-demo">
    <div class="row">
      <div class="col-md-3 text-center mb-3" v-for="icon in icons" :key="icon.class">
        <div class="icon-showcase">
          <i :class="icon.class" class="icon-large"></i>
          <p class="mt-2">{{ icon.name }}</p>
          <code class="text-muted">{{ icon.class }}</code>
        </div>
      </div>
    </div>
  </div>
</template>`,script:`<script setup>
import { ref } from 'vue'

const icons = ref([
  { name: 'หน้าหลัก', class: 'fas fa-home' },
  { name: 'ผู้ใช้', class: 'fas fa-user' },
  { name: 'การตั้งค่า', class: 'fas fa-cog' },
  { name: 'ค้นหา', class: 'fas fa-search' },
  { name: 'รายการ', class: 'fas fa-list' },
  { name: 'กราฟ', class: 'fas fa-chart-bar' },
  { name: 'ข้อความ', class: 'fas fa-envelope' },
  { name: 'แจ้งเตือน', class: 'fas fa-bell' }
])
<\/script>

<style scoped>
.icon-showcase {
  padding: 1.5rem;
  border: 1px solid #e9ecef;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.icon-showcase:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}

.icon-large {
  font-size: 2rem;
  color: #667eea;
}
</style>`}}]),F=g([{name:"Primary",value:"#667eea"},{name:"Secondary",value:"#6c757d"},{name:"Success",value:"#28a745"},{name:"Danger",value:"#dc3545"},{name:"Warning",value:"#ffc107"},{name:"Info",value:"#17a2b8"}]),B=g([{name:"useAuth",method:"Composable",description:"จัดการระบบ Authentication",example:`const { user, login, logout } = useAuth()
await login(credentials)`},{name:"useProducts",method:"Composable",description:"จัดการข้อมูลสินค้า",example:`const { products, addProduct, updateProduct } = useProducts()
await addProduct(productData)`},{name:"swalUtils",method:"Utility",description:"แสดง Alert และ Notification",example:`swalUtils.success('สำเร็จ!', 'บันทึกข้อมูลเรียบร้อย')
swalUtils.error('ผิดพลาด!', 'เกิดข้อผิดพลาด')`}]),p=o=>{const s=document.getElementById(o);s&&(s.scrollIntoView({behavior:"smooth"}),r.value=o)},f=o=>{const s=document.getElementById(o);s&&navigator.clipboard.writeText(s.textContent).then(()=>{h.success("สำเร็จ!","คัดลอกโค้ดเรียบร้อยแล้ว")}).catch(()=>{h.error("ผิดพลาด!","ไม่สามารถคัดลอกโค้ดได้")})},N=o=>{u.value=o,k.value="template",v.value=!0},S=async o=>{try{await navigator.clipboard.writeText(o),h.success("สำเร็จ!","คัดลอกโค้ดเรียบร้อยแล้ว")}catch(s){console.error("Failed to copy code:",s),h.error("ผิดพลาด!","ไม่สามารถคัดลอกโค้ดได้")}},R=async()=>{var b,C,w,x;const o=((C=(b=u.value)==null?void 0:b.code)==null?void 0:C.template)||"",s=((x=(w=u.value)==null?void 0:w.code)==null?void 0:x.script)||"",y=o+`

`+s;try{await navigator.clipboard.writeText(y),h.success("สำเร็จ!","คัดลอกโค้ดทั้งหมดเรียบร้อยแล้ว"),v.value=!1}catch(P){console.error("Failed to copy code:",P),h.error("ผิดพลาด!","ไม่สามารถคัดลอกโค้ดได้")}},M=()=>{const o=["overview","installation","configuration","getting-started","components","customization","api"];for(const s of o){const y=document.getElementById(s);if(y){const b=y.getBoundingClientRect();if(b.top<=200&&b.bottom>=200){r.value=s;break}}}};return U(()=>{window.addEventListener("scroll",M)}),O(()=>{window.removeEventListener("scroll",M)}),(o,s)=>{var y,b,C,w,x,P;return n(),d("div",q,[s[109]||(s[109]=a("h2",{class:"mb-4"},"เอกสารประกอบ",-1)),s[110]||(s[110]=a("p",null,"คู่มือการใช้งานสำหรับโปรเจค Vue 3 Dashboard",-1)),a("div",G,[a("div",Y,[a("div",K,[s[29]||(s[29]=a("div",{class:"hero-icon"},[a("i",{class:"fas fa-book"})],-1)),s[30]||(s[30]=a("h1",{class:"hero-title"},"Documentation",-1)),s[31]||(s[31]=a("p",{class:"hero-subtitle"},"คู่มือการใช้งาน Vue 3 Dashboard Project",-1)),a("div",Q,[a("button",{class:"btn btn-primary btn-lg me-3",onClick:s[0]||(s[0]=t=>p("installation"))},s[27]||(s[27]=[a("i",{class:"fas fa-download me-2"},null,-1),e("เริ่มต้นใช้งาน ")])),a("button",{class:"btn btn-outline-light btn-lg",onClick:s[1]||(s[1]=t=>p("api"))},s[28]||(s[28]=[a("i",{class:"fas fa-code me-2"},null,-1),e("API Reference ")]))])]),s[32]||(s[32]=a("div",{class:"hero-bg"},[a("div",{class:"bg-shape shape-1"}),a("div",{class:"bg-shape shape-2"}),a("div",{class:"bg-shape shape-3"})],-1))]),a("div",W,[a("div",H,[a("nav",J,[a("a",{class:l(["nav-link",{active:r.value==="overview"}]),onClick:s[2]||(s[2]=t=>p("overview"))},s[33]||(s[33]=[a("i",{class:"fas fa-eye me-1"},null,-1),e("ภาพรวม ")]),2),a("a",{class:l(["nav-link",{active:r.value==="installation"}]),onClick:s[3]||(s[3]=t=>p("installation"))},s[34]||(s[34]=[a("i",{class:"fas fa-download me-1"},null,-1),e("การติดตั้ง ")]),2),a("a",{class:l(["nav-link",{active:r.value==="configuration"}]),onClick:s[4]||(s[4]=t=>p("configuration"))},s[35]||(s[35]=[a("i",{class:"fas fa-cogs me-1"},null,-1),e("การตั้งค่า ")]),2),a("a",{class:l(["nav-link",{active:r.value==="getting-started"}]),onClick:s[5]||(s[5]=t=>p("getting-started"))},s[36]||(s[36]=[a("i",{class:"fas fa-play me-1"},null,-1),e("เริ่มใช้งาน ")]),2),a("a",{class:l(["nav-link",{active:r.value==="components"}]),onClick:s[6]||(s[6]=t=>p("components"))},s[37]||(s[37]=[a("i",{class:"fas fa-puzzle-piece me-1"},null,-1),e("Components ")]),2),a("a",{class:l(["nav-link",{active:r.value==="customization"}]),onClick:s[7]||(s[7]=t=>p("customization"))},s[38]||(s[38]=[a("i",{class:"fas fa-palette me-1"},null,-1),e("ปรับแต่ง ")]),2),a("a",{class:l(["nav-link",{active:r.value==="api"}]),onClick:s[8]||(s[8]=t=>p("api"))},s[39]||(s[39]=[a("i",{class:"fas fa-code me-1"},null,-1),e("API ")]),2)])])]),a("div",X,[a("div",Z,[s[100]||(s[100]=V('<section id="overview" class="doc-section" data-v-8a735e60><div class="section-header" data-v-8a735e60><h2 data-v-8a735e60><i class="fas fa-eye me-3" data-v-8a735e60></i>ภาพรวมโปรเจค</h2><p data-v-8a735e60>Vue 3 Dashboard Project เป็น Admin Dashboard ที่สร้างด้วย Vue 3, Bootstrap 5 และ Modern UI Components</p></div><div class="row" data-v-8a735e60><div class="col-lg-6" data-v-8a735e60><div class="feature-card" data-v-8a735e60><div class="feature-icon bg-primary" data-v-8a735e60><i class="fab fa-vuejs" data-v-8a735e60></i></div><div class="feature-content" data-v-8a735e60><h4 data-v-8a735e60>Vue 3 Composition API</h4><p data-v-8a735e60>ใช้ Vue 3 เวอร์ชันล่าสุดพร้อม Composition API สำหรับการจัดการ state ที่มีประสิทธิภาพ</p></div></div></div><div class="col-lg-6" data-v-8a735e60><div class="feature-card" data-v-8a735e60><div class="feature-icon bg-success" data-v-8a735e60><i class="fab fa-bootstrap" data-v-8a735e60></i></div><div class="feature-content" data-v-8a735e60><h4 data-v-8a735e60>Bootstrap 5</h4><p data-v-8a735e60>UI Framework ที่ทันสมัยพร้อม Responsive Design และ Dark Mode Support</p></div></div></div><div class="col-lg-6" data-v-8a735e60><div class="feature-card" data-v-8a735e60><div class="feature-icon bg-warning" data-v-8a735e60><i class="fas fa-chart-bar" data-v-8a735e60></i></div><div class="feature-content" data-v-8a735e60><h4 data-v-8a735e60>ApexCharts</h4><p data-v-8a735e60>กราฟและแผนภูมิที่สวยงามและมีปฏิสัมพันธ์สูง</p></div></div></div><div class="col-lg-6" data-v-8a735e60><div class="feature-card" data-v-8a735e60><div class="feature-icon bg-info" data-v-8a735e60><i class="fas fa-calendar-alt" data-v-8a735e60></i></div><div class="feature-content" data-v-8a735e60><h4 data-v-8a735e60>DateTimePicker</h4><p data-v-8a735e60>Flatpickr สำหรับการเลือกวันที่และเวลาที่ทันสมัย</p></div></div></div></div><div class="tech-stack" data-v-8a735e60><h4 data-v-8a735e60>เทคโนโลยีที่ใช้</h4><div class="tech-grid" data-v-8a735e60><div class="tech-item" data-v-8a735e60><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue.js" data-v-8a735e60><span data-v-8a735e60>Vue 3</span></div><div class="tech-item" data-v-8a735e60><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" data-v-8a735e60><span data-v-8a735e60>Bootstrap 5</span></div><div class="tech-item" data-v-8a735e60><img src="https://vitejs.dev/logo.svg" alt="Vite" data-v-8a735e60><span data-v-8a735e60>Vite</span></div><div class="tech-item" data-v-8a735e60><img src="https://apexcharts.com/media/apexcharts-logo.png" alt="ApexCharts" data-v-8a735e60><span data-v-8a735e60>ApexCharts</span></div></div></div></section>',1)),a("section",_,[s[65]||(s[65]=a("div",{class:"section-header"},[a("h2",null,[a("i",{class:"fas fa-download me-3"}),e("การติดตั้ง")]),a("p",null,"ขั้นตอนการติดตั้งและเตรียมสภาพแวดล้อม")],-1)),a("div",aa,[a("div",sa,[s[45]||(s[45]=a("div",{class:"step-number"},"1",-1)),a("div",ta,[s[43]||(s[43]=a("h4",null,"ติดตั้ง Node.js",-1)),s[44]||(s[44]=a("p",null,"ติดตั้ง Node.js เวอร์ชัน 18 หรือใหม่กว่า",-1)),a("div",ea,[a("div",la,[s[41]||(s[41]=a("span",null,"Terminal",-1)),a("button",{class:"btn btn-sm btn-outline-light",onClick:s[9]||(s[9]=t=>f("node-check"))},s[40]||(s[40]=[a("i",{class:"fas fa-copy"},null,-1)]))]),s[42]||(s[42]=a("pre",null,[a("code",{id:"node-check"},`node --version
npm --version`)],-1))])])]),a("div",oa,[s[51]||(s[51]=a("div",{class:"step-number"},"2",-1)),a("div",ia,[s[49]||(s[49]=a("h4",null,"Clone Repository",-1)),s[50]||(s[50]=a("p",null,"ดาวน์โหลดโปรเจคจาก Git Repository",-1)),a("div",na,[a("div",da,[s[47]||(s[47]=a("span",null,"Terminal",-1)),a("button",{class:"btn btn-sm btn-outline-light",onClick:s[10]||(s[10]=t=>f("git-clone"))},s[46]||(s[46]=[a("i",{class:"fas fa-copy"},null,-1)]))]),s[48]||(s[48]=a("pre",null,[a("code",{id:"git-clone"},`git clone https://github.com/your-repo/vue3-dashboard.git
cd vue3-dashboard`)],-1))])])]),a("div",va,[s[57]||(s[57]=a("div",{class:"step-number"},"3",-1)),a("div",ra,[s[55]||(s[55]=a("h4",null,"ติดตั้ง Dependencies",-1)),s[56]||(s[56]=a("p",null,"ติดตั้งแพ็กเกจที่จำเป็นทั้งหมด",-1)),a("div",ca,[a("div",ua,[s[53]||(s[53]=a("span",null,"Terminal",-1)),a("button",{class:"btn btn-sm btn-outline-light",onClick:s[11]||(s[11]=t=>f("npm-install"))},s[52]||(s[52]=[a("i",{class:"fas fa-copy"},null,-1)]))]),s[54]||(s[54]=a("pre",null,[a("code",{id:"npm-install"},"npm install")],-1))])])]),a("div",pa,[s[64]||(s[64]=a("div",{class:"step-number"},"4",-1)),a("div",ma,[s[61]||(s[61]=a("h4",null,"รันโปรเจค",-1)),s[62]||(s[62]=a("p",null,"เริ่มต้น Development Server",-1)),a("div",fa,[a("div",ba,[s[59]||(s[59]=a("span",null,"Terminal",-1)),a("button",{class:"btn btn-sm btn-outline-light",onClick:s[12]||(s[12]=t=>f("npm-dev"))},s[58]||(s[58]=[a("i",{class:"fas fa-copy"},null,-1)]))]),s[60]||(s[60]=a("pre",null,[a("code",{id:"npm-dev"},"npm run dev")],-1))]),s[63]||(s[63]=a("div",{class:"alert alert-success mt-3"},[a("i",{class:"fas fa-check-circle me-2"}),e(" เปิดเบราว์เซอร์และไปที่ "),a("strong",null,"http://localhost:5173")],-1))])])])]),a("section",ga,[s[86]||(s[86]=a("div",{class:"section-header"},[a("h2",null,[a("i",{class:"fas fa-cogs me-3"}),e("การตั้งค่า")]),a("p",null,"การกำหนดค่าต่างๆ ของโปรเจค")],-1)),a("div",ka,[a("div",ya,[s[69]||(s[69]=a("h4",null,[a("i",{class:"fas fa-file-code me-2"}),e("Environment Variables")],-1)),s[70]||(s[70]=a("p",null,"ตั้งค่าตัวแปรสภาพแวดล้อม",-1)),a("div",ha,[a("div",Ca,[s[67]||(s[67]=a("span",null,".env",-1)),a("button",{class:"btn btn-sm btn-outline-light",onClick:s[13]||(s[13]=t=>f("env-config"))},s[66]||(s[66]=[a("i",{class:"fas fa-copy"},null,-1)]))]),s[68]||(s[68]=a("pre",null,[a("code",{id:"env-config"},`VITE_APP_NAME="Vue 3 Dashboard"
VITE_API_BASE_URL="https://api.example.com"
VITE_GOOGLE_MAPS_API_KEY="your-google-maps-key"`)],-1))])]),a("div",wa,[s[74]||(s[74]=a("h4",null,[a("i",{class:"fas fa-palette me-2"}),e("Theme Configuration")],-1)),s[75]||(s[75]=a("p",null,"ปรับแต่งธีมและสี",-1)),a("div",xa,[a("div",Da,[s[72]||(s[72]=a("span",null,"src/styles/variables.css",-1)),a("button",{class:"btn btn-sm btn-outline-light",onClick:s[14]||(s[14]=t=>f("theme-config"))},s[71]||(s[71]=[a("i",{class:"fas fa-copy"},null,-1)]))]),s[73]||(s[73]=a("pre",null,[a("code",{id:"theme-config"},`:root {
  --bs-primary: #667eea;
  --bs-secondary: #6c757d;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`)],-1))])]),a("div",Aa,[s[79]||(s[79]=a("h4",null,[a("i",{class:"fas fa-route me-2"}),e("Router Configuration")],-1)),s[80]||(s[80]=a("p",null,"ตั้งค่าเส้นทางและการนำทาง",-1)),a("div",$a,[a("div",Pa,[s[77]||(s[77]=a("span",null,"src/router/index.js",-1)),a("button",{class:"btn btn-sm btn-outline-light",onClick:s[15]||(s[15]=t=>f("router-config"))},s[76]||(s[76]=[a("i",{class:"fas fa-copy"},null,-1)]))]),s[78]||(s[78]=a("pre",null,[a("code",{id:"router-config"},`const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true }
  }
]`)],-1))])]),a("div",Ta,[s[84]||(s[84]=a("h4",null,[a("i",{class:"fas fa-shield-alt me-2"}),e("Authentication")],-1)),s[85]||(s[85]=a("p",null,"ตั้งค่าระบบยืนยันตัวตน",-1)),a("div",Ia,[a("div",Va,[s[82]||(s[82]=a("span",null,"src/stores/auth.js",-1)),a("button",{class:"btn btn-sm btn-outline-light",onClick:s[16]||(s[16]=t=>f("auth-config"))},s[81]||(s[81]=[a("i",{class:"fas fa-copy"},null,-1)]))]),s[83]||(s[83]=a("pre",null,[a("code",{id:"auth-config"},`export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token')
  })
})`)],-1))])])])]),s[101]||(s[101]=V('<section id="getting-started" class="doc-section" data-v-8a735e60><div class="section-header" data-v-8a735e60><h2 data-v-8a735e60><i class="fas fa-play me-3" data-v-8a735e60></i>เริ่มใช้งาน</h2><p data-v-8a735e60>คู่มือเริ่มต้นใช้งานระบบ</p></div><div class="row" data-v-8a735e60><div class="col-lg-8" data-v-8a735e60><div class="getting-started-content" data-v-8a735e60><h4 data-v-8a735e60>โครงสร้างโปรเจค</h4><div class="file-tree" data-v-8a735e60><div class="file-item folder" data-v-8a735e60><i class="fas fa-folder" data-v-8a735e60></i> src/ <div class="file-children" data-v-8a735e60><div class="file-item folder" data-v-8a735e60><i class="fas fa-folder" data-v-8a735e60></i> components/ <div class="file-children" data-v-8a735e60><div class="file-item" data-v-8a735e60><i class="fas fa-file-code" data-v-8a735e60></i> TopNavbar.vue</div><div class="file-item" data-v-8a735e60><i class="fas fa-file-code" data-v-8a735e60></i> Sidebar.vue</div></div></div><div class="file-item folder" data-v-8a735e60><i class="fas fa-folder" data-v-8a735e60></i> views/ <div class="file-children" data-v-8a735e60><div class="file-item" data-v-8a735e60><i class="fas fa-file-code" data-v-8a735e60></i> Dashboard.vue</div><div class="file-item" data-v-8a735e60><i class="fas fa-file-code" data-v-8a735e60></i> Products.vue</div><div class="file-item" data-v-8a735e60><i class="fas fa-file-code" data-v-8a735e60></i> Orders.vue</div></div></div><div class="file-item folder" data-v-8a735e60><i class="fas fa-folder" data-v-8a735e60></i> stores/ <div class="file-children" data-v-8a735e60><div class="file-item" data-v-8a735e60><i class="fas fa-file-code" data-v-8a735e60></i> auth.js</div><div class="file-item" data-v-8a735e60><i class="fas fa-file-code" data-v-8a735e60></i> products.js</div></div></div><div class="file-item" data-v-8a735e60><i class="fas fa-file-code" data-v-8a735e60></i> App.vue</div><div class="file-item" data-v-8a735e60><i class="fas fa-file-code" data-v-8a735e60></i> main.js</div></div></div></div><h4 class="mt-4" data-v-8a735e60>การเพิ่มหน้าใหม่</h4><p data-v-8a735e60>ขั้นตอนการสร้างหน้าใหม่ในระบบ:</p><div class="numbered-list" data-v-8a735e60><div class="list-item" data-v-8a735e60><span class="number" data-v-8a735e60>1</span><div class="content" data-v-8a735e60><strong data-v-8a735e60>สร้างไฟล์ Vue Component</strong><p data-v-8a735e60>สร้างไฟล์ใหม่ในโฟลเดอร์ <code data-v-8a735e60>src/views/</code></p></div></div><div class="list-item" data-v-8a735e60><span class="number" data-v-8a735e60>2</span><div class="content" data-v-8a735e60><strong data-v-8a735e60>เพิ่ม Route</strong><p data-v-8a735e60>เพิ่มเส้นทางใหม่ในไฟล์ <code data-v-8a735e60>src/router/index.js</code></p></div></div><div class="list-item" data-v-8a735e60><span class="number" data-v-8a735e60>3</span><div class="content" data-v-8a735e60><strong data-v-8a735e60>เพิ่มเมนู</strong><p data-v-8a735e60>เพิ่มลิงก์เมนูในไฟล์ <code data-v-8a735e60>src/App.vue</code></p></div></div></div></div></div><div class="col-lg-4" data-v-8a735e60><div class="quick-start-card" data-v-8a735e60><h4 data-v-8a735e60><i class="fas fa-rocket me-2" data-v-8a735e60></i>Quick Start</h4><div class="quick-commands" data-v-8a735e60><div class="command-item" data-v-8a735e60><code data-v-8a735e60>npm run dev</code><span data-v-8a735e60>เริ่ม development server</span></div><div class="command-item" data-v-8a735e60><code data-v-8a735e60>npm run build</code><span data-v-8a735e60>สร้างไฟล์สำหรับ production</span></div><div class="command-item" data-v-8a735e60><code data-v-8a735e60>npm run preview</code><span data-v-8a735e60>ดูตัวอย่าง production build</span></div><div class="command-item" data-v-8a735e60><code data-v-8a735e60>npm run lint</code><span data-v-8a735e60>ตรวจสอบ code style</span></div></div></div><div class="tips-card mt-4" data-v-8a735e60><h4 data-v-8a735e60><i class="fas fa-lightbulb me-2" data-v-8a735e60></i>Tips</h4><ul data-v-8a735e60><li data-v-8a735e60>ใช้ Vue DevTools สำหรับ debugging</li><li data-v-8a735e60>ตั้งค่า ESLint และ Prettier</li><li data-v-8a735e60>ใช้ Composition API สำหรับ logic ที่ซับซ้อน</li><li data-v-8a735e60>แยก components ให้เป็น reusable</li></ul></div></div></div></section>',1)),a("section",Sa,[s[88]||(s[88]=a("div",{class:"section-header"},[a("h2",null,[a("i",{class:"fas fa-puzzle-piece me-3"}),e("Components")]),a("p",null,"คอมโพเนนต์ที่พร้อมใช้งาน")],-1)),a("div",Ma,[(n(!0),d(T,null,I(z.value,t=>(n(),d("div",{class:"component-card",key:t.name},[a("div",ja,[a("i",{class:l(t.icon)},null,2)]),a("div",Ea,[a("h4",null,i(t.name),1),a("p",null,i(t.description),1),a("div",za,[(n(!0),d(T,null,I(t.tags,m=>(n(),d("span",{key:m,class:"tag"},i(m),1))),128))]),a("button",{class:"btn btn-sm btn-outline-primary",onClick:m=>N(t)},s[87]||(s[87]=[a("i",{class:"fas fa-code me-1"},null,-1),e("ดูโค้ด ")]),8,Fa)])]))),128))])]),a("section",Ba,[s[97]||(s[97]=a("div",{class:"section-header"},[a("h2",null,[a("i",{class:"fas fa-palette me-3"}),e("การปรับแต่ง")]),a("p",null,"วิธีการปรับแต่งและขยายฟีเจอร์")],-1)),a("div",Na,[a("nav",Ra,[a("button",{class:l(["nav-link active",{active:c.value==="colors"}]),onClick:s[17]||(s[17]=t=>c.value="colors")},s[89]||(s[89]=[a("i",{class:"fas fa-palette me-2"},null,-1),e("สีและธีม ")]),2),a("button",{class:l(["nav-link",{active:c.value==="layout"}]),onClick:s[18]||(s[18]=t=>c.value="layout")},s[90]||(s[90]=[a("i",{class:"fas fa-th-large me-2"},null,-1),e("เลย์เอาต์ ")]),2),a("button",{class:l(["nav-link",{active:c.value==="components"}]),onClick:s[19]||(s[19]=t=>c.value="components")},s[91]||(s[91]=[a("i",{class:"fas fa-puzzle-piece me-2"},null,-1),e("คอมโพเนนต์ ")]),2)]),a("div",La,[A(a("div",Ua,[a("div",Oa,[s[93]||(s[93]=a("div",{class:"col-lg-6"},[a("h4",null,"การเปลี่ยนสีหลัก"),a("div",{class:"code-block"},[a("pre",null,[a("code",null,`:root {
  --bs-primary: #your-color;
  --bs-secondary: #your-secondary-color;
  --gradient-primary: linear-gradient(135deg, #color1 0%, #color2 100%);
}`)])])],-1)),a("div",qa,[s[92]||(s[92]=a("h4",null,"Color Palette",-1)),a("div",Ga,[(n(!0),d(T,null,I(F.value,t=>(n(),d("div",{class:"color-item",key:t.name},[a("div",{class:"color-box",style:j({backgroundColor:t.value})},null,4),a("div",Ya,[a("span",Ka,i(t.name),1),a("span",Qa,i(t.value),1)])]))),128))])])])],512),[[$,c.value==="colors"]]),A(a("div",Wa,s[94]||(s[94]=[V('<h4 data-v-8a735e60>การปรับแต่งเลย์เอาต์</h4><p data-v-8a735e60>คุณสามารถปรับแต่งเลย์เอาต์ของ Dashboard ได้ตามต้องการ</p><div class="layout-options" data-v-8a735e60><div class="layout-option" data-v-8a735e60><h5 data-v-8a735e60>Sidebar</h5><ul data-v-8a735e60><li data-v-8a735e60>เปลี่ยนความกว้างของ Sidebar</li><li data-v-8a735e60>เพิ่ม/ลบเมนูย่อย</li><li data-v-8a735e60>ปรับแต่งไอคอนเมนู</li></ul></div><div class="layout-option" data-v-8a735e60><h5 data-v-8a735e60>TopNavbar</h5><ul data-v-8a735e60><li data-v-8a735e60>เพิ่มปุ่มใหม่</li><li data-v-8a735e60>ปรับแต่งการแจ้งเตือน</li><li data-v-8a735e60>เปลี่ยนโลโก้</li></ul></div></div>',3)]),512),[[$,c.value==="layout"]]),A(a("div",Ha,[s[95]||(s[95]=a("h4",null,"การสร้าง Component ใหม่",-1)),s[96]||(s[96]=a("p",null,"ตัวอย่างการสร้าง Component แบบ Reusable",-1)),a("div",Ja,[a("pre",null,[a("code",null,`<template>
  <div class="custom-card">
    <div class="card-header">
      <h5>`+i(o.title)+`</h5>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
<\/script>`,1)])])],512),[[$,c.value==="components"]])])])]),a("section",Xa,[s[99]||(s[99]=a("div",{class:"section-header"},[a("h2",null,[a("i",{class:"fas fa-code me-3"}),e("API Reference")]),a("p",null,"เอกสาร API และฟังก์ชันต่างๆ")],-1)),a("div",Za,[(n(!0),d(T,null,I(B.value,t=>(n(),d("div",{class:"api-card",key:t.name},[a("div",_a,[a("h4",null,i(t.name),1),a("span",{class:l(["api-method",t.method.toLowerCase()])},i(t.method),3)]),a("p",as,i(t.description),1),a("div",ss,[s[98]||(s[98]=a("h6",null,"ตัวอย่าง:",-1)),a("pre",null,[a("code",null,i(t.example),1)])])]))),128))])])])])]),v.value?(n(),d("div",{key:0,class:l(["modal fade",{show:v.value}]),style:j({display:v.value?"block":"none"}),tabindex:"-1"},[a("div",ts,[a("div",es,[a("div",ls,[a("h5",os,[a("i",{class:l([(y=u.value)==null?void 0:y.icon,"me-2"])},null,2),e(" "+i((b=u.value)==null?void 0:b.name)+" - ตัวอย่างโค้ด ",1)]),a("button",{type:"button",class:"btn-close",onClick:s[20]||(s[20]=t=>v.value=!1)})]),a("div",is,[a("div",ns,[a("nav",ds,[a("button",{class:l(["nav-link active",{active:k.value==="template"}]),onClick:s[21]||(s[21]=t=>k.value="template")},s[102]||(s[102]=[a("i",{class:"fas fa-code me-2"},null,-1),e("Template ")]),2),a("button",{class:l(["nav-link",{active:k.value==="script"}]),onClick:s[22]||(s[22]=t=>k.value="script")},s[103]||(s[103]=[a("i",{class:"fab fa-js-square me-2"},null,-1),e("Script ")]),2)]),a("div",vs,[A(a("div",rs,[a("div",cs,[a("div",us,[s[105]||(s[105]=a("span",null,"Template",-1)),a("button",{class:"btn btn-sm btn-outline-light",onClick:s[23]||(s[23]=t=>{var m,D;return S((D=(m=u.value)==null?void 0:m.code)==null?void 0:D.template)})},s[104]||(s[104]=[a("i",{class:"fas fa-copy"},null,-1),e(" Copy ")]))]),a("pre",null,[a("code",null,i((w=(C=u.value)==null?void 0:C.code)==null?void 0:w.template),1)])])],512),[[$,k.value==="template"]]),A(a("div",ps,[a("div",ms,[a("div",fs,[s[107]||(s[107]=a("span",null,"Script",-1)),a("button",{class:"btn btn-sm btn-outline-light",onClick:s[24]||(s[24]=t=>{var m,D;return S((D=(m=u.value)==null?void 0:m.code)==null?void 0:D.script)})},s[106]||(s[106]=[a("i",{class:"fas fa-copy"},null,-1),e(" Copy ")]))]),a("pre",null,[a("code",null,i((P=(x=u.value)==null?void 0:x.code)==null?void 0:P.script),1)])])],512),[[$,k.value==="script"]])])])]),a("div",bs,[a("button",{type:"button",class:"btn btn-secondary",onClick:s[25]||(s[25]=t=>v.value=!1)}," ปิด "),a("button",{type:"button",class:"btn btn-primary",onClick:R},s[108]||(s[108]=[a("i",{class:"fas fa-copy me-2"},null,-1),e("Copy ทั้งหมด ")]))])])])],6)):E("",!0),v.value?(n(),d("div",{key:1,class:l(["modal-backdrop fade",{show:v.value}]),onClick:s[26]||(s[26]=t=>v.value=!1)},null,2)):E("",!0)])}}},Cs=L(gs,[["__scopeId","data-v-8a735e60"]]);export{Cs as default};
