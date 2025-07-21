import{_ as $,c as L,a as s,b as n,i as V,S as l,o as W}from"./index-a28efa19.js";import{s as e}from"./swal-52a55870.js";const H={class:"container-fluid py-4 px-5"},M={__name:"SweetAlert",setup(N){const c=()=>{l.fire("Hello World!","This is a basic SweetAlert","info")},d=()=>{e.success("สำเร็จ!","การดำเนินการเสร็จสิ้นแล้ว")},u=()=>{e.error("เกิดข้อผิดพลาด!","มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง")},m=()=>{e.warning("คำเตือน!","กรุณาตรวจสอบข้อมูลของคุณให้ถูกต้อง")},f=()=>{e.info("ข้อมูล","นี่คือข้อมูลสำคัญที่คุณควรทราบ")},b=async()=>{(await e.confirm("คุณแน่ใจหรือไม่?","การดำเนินการนี้ไม่สามารถยกเลิกได้!","ใช่, ดำเนินการ!","ยกเลิก")).isConfirmed&&e.success("ดำเนินการแล้ว!","การดำเนินการของคุณเสร็จสิ้น")},p=async()=>{const a=await e.input("กรอกชื่อของคุณ","กรอกชื่อของคุณ...");a.isConfirmed&&a.value&&e.success(`สวัสดี ${a.value}!`,"ยินดีต้อนรับ!")},v=async()=>{const{value:a}=await l.fire({title:"เลือกผลไม้ที่คุณชอบ",input:"select",inputOptions:{apples:"แอปเปิ้ล",bananas:"กล้วย",grapes:"องุ่น",oranges:"ส้ม"},inputPlaceholder:"เลือกผลไม้",showCancelButton:!0,inputValidator:t=>new Promise(i=>{t?i():i("กรุณาเลือกผลไม้!")})});a&&l.fire(`คุณเลือก: ${a}`)},w=async()=>{const{value:a}=await l.fire({title:"กรอกรหัสผ่าน",input:"password",inputLabel:"รหัสผ่าน",inputPlaceholder:"กรอกรหัสผ่านของคุณ",inputAttributes:{maxlength:10,autocapitalize:"off",autocorrect:"off"}});a&&l.fire(`รหัสผ่านของคุณ: ${a}`)},g=async()=>{const{value:a}=await l.fire({title:"ข้อมูลส่วนตัว",html:`
      <input id="swal-input1" class="swal2-input" placeholder="ชื่อ">
      <input id="swal-input2" class="swal2-input" placeholder="อีเมล">
      <input id="swal-input3" class="swal2-input" placeholder="เบอร์โทร">
    `,focusConfirm:!1,preConfirm:()=>[document.getElementById("swal-input1").value,document.getElementById("swal-input2").value,document.getElementById("swal-input3").value]});a&&l.fire(`
      ชื่อ: ${a[0]}<br>
      อีเมล: ${a[1]}<br>
      เบอร์โทร: ${a[2]}
    `)},C=()=>{let a;l.fire({title:"จะปิดอัตโนมัติ!",html:"จะปิดใน <b></b> วินาที",timer:2e3,timerProgressBar:!0,didOpen:()=>{l.showLoading();const t=l.getHtmlContainer().querySelector("b");a=setInterval(()=>{t.textContent=Math.ceil(l.getTimerLeft()/1e3)},100)},willClose:()=>{clearInterval(a)}}).then(t=>{t.dismiss===l.DismissReason.timer&&console.log("ปิดด้วย timer")})},A=async()=>{const a=["1","2","3"],t=l.mixin({confirmButtonText:"ถัดไป &rarr;",showCancelButton:!0,progressSteps:a,reverseButtons:!0}),i=[];let o;for(o=0;o<a.length;){const r=await t.fire({title:`ขั้นตอนที่ ${o+1}`,text:`ข้อมูลสำหรับขั้นตอนที่ ${o+1}`,input:"text",inputValue:i[o],showCancelButton:o>0,currentProgressStep:o});if(r.value)i[o]=r.value,o++;else if(r.dismiss===l.DismissReason.cancel)o--;else break}o===a.length&&l.fire({title:"เสร็จสิ้น!",html:`ข้อมูลของคุณ: <pre>${JSON.stringify(i,null,2)}</pre>`,confirmButtonText:"รับทราบ"})},y=()=>{l.fire({title:"สวยงาม!",text:"Alert พร้อมรูปภาพ",imageUrl:"https://unsplash.it/400/200",imageWidth:400,imageHeight:200,imageAlt:"Custom image"})},k=()=>{l.fire({title:"Alert แบบกำหนดเอง",text:"สีสันและสไตล์ที่แตกต่าง",background:"#222",color:"#fff",confirmButtonColor:"#ff6b6b",customClass:{popup:"colored-toast"}})},B=()=>{l.fire({title:"Animation แบบกำหนดเอง",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})},S=()=>{e.loading("กำลังโหลด..."),setTimeout(()=>{e.close(),e.success("เสร็จสิ้น!","โหลดข้อมูลเสร็จแล้ว")},3e3)},x=()=>{e.toast("success","บันทึกสำเร็จ!")},I=()=>{e.toast("error","เกิดข้อผิดพลาด!")},T=()=>{e.toast("warning","คำเตือน!")},h=()=>{e.toast("info","ข้อมูลใหม่!")},U=async()=>{(await e.delete("ลบรายการนี้?","คุณจะไม่สามารถกู้คืนข้อมูลนี้ได้!")).isConfirmed&&e.success("ลบแล้ว!","รายการของคุณถูกลบแล้ว")},E=async()=>{(await e.confirm("บันทึกการเปลี่ยนแปลง?","คุณต้องการบันทึกการเปลี่ยนแปลงหรือไม่?","บันทึก","ไม่บันทึก")).isConfirmed&&e.success("บันทึกแล้ว!","การเปลี่ยนแปลงของคุณถูกบันทึกแล้ว")},D=async()=>{const{value:a}=await l.fire({title:"เข้าสู่ระบบ",html:`
      <div class="mb-3">
        <input id="username" class="swal2-input" placeholder="ชื่อผู้ใช้" type="text">
      </div>
      <div class="mb-3">
        <input id="password" class="swal2-input" placeholder="รหัสผ่าน" type="password">
      </div>
    `,confirmButtonText:"เข้าสู่ระบบ",focusConfirm:!1,preConfirm:()=>{const t=document.getElementById("username").value,i=document.getElementById("password").value;return!t||!i?(l.showValidationMessage("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน"),!1):{username:t,password:i}}});a&&l.fire(`ยินดีต้อนรับ ${a.username}!`,"เข้าสู่ระบบสำเร็จ","success")},P=()=>{l.fire({title:"อัพเกรดแพ็คเกจ",text:"อัพเกรดเป็น Premium เพื่อรับสิทธิประโยชน์เพิ่มเติม",icon:"info",showCancelButton:!0,confirmButtonColor:"#ffc107",cancelButtonColor:"#6c757d",confirmButtonText:'<i class="fas fa-crown"></i> อัพเกรดเลย!',cancelButtonText:"ภายหลัง",customClass:{confirmButton:"btn btn-warning"}}).then(a=>{a.isConfirmed&&l.fire("ขอบคุณ!","เราจะติดต่อกลับในเร็วๆ นี้","success")})};return(a,t)=>(W(),L("div",H,[t[29]||(t[29]=s("div",{class:"row mb-4"},[s("div",{class:"col-12"},[s("h2",{class:"mb-0"},"SweetAlert Examples"),s("p",{class:"text-muted"},"Beautiful, responsive, customizable replacement for JavaScript's popup boxes")])],-1)),s("div",{class:"row"},[s("div",{class:"col-lg-6 mb-4"},[s("div",{class:"card"},[t[5]||(t[5]=s("div",{class:"card-header"},[s("h5",{class:"mb-0"},"Basic Alerts")],-1)),s("div",{class:"card-body"},[s("div",{class:"d-grid gap-2"},[s("button",{class:"btn btn-primary",onClick:c},t[0]||(t[0]=[s("i",{class:"fas fa-info-circle me-2"},null,-1),n("Basic Alert ")])),s("button",{class:"btn btn-success",onClick:d},t[1]||(t[1]=[s("i",{class:"fas fa-check-circle me-2"},null,-1),n("Success Alert ")])),s("button",{class:"btn btn-danger",onClick:u},t[2]||(t[2]=[s("i",{class:"fas fa-times-circle me-2"},null,-1),n("Error Alert ")])),s("button",{class:"btn btn-warning",onClick:m},t[3]||(t[3]=[s("i",{class:"fas fa-exclamation-triangle me-2"},null,-1),n("Warning Alert ")])),s("button",{class:"btn btn-info",onClick:f},t[4]||(t[4]=[s("i",{class:"fas fa-info-circle me-2"},null,-1),n("Info Alert ")]))])])])]),s("div",{class:"col-lg-6 mb-4"},[s("div",{class:"card"},[t[11]||(t[11]=s("div",{class:"card-header"},[s("h5",{class:"mb-0"},"Interactive Alerts")],-1)),s("div",{class:"card-body"},[s("div",{class:"d-grid gap-2"},[s("button",{class:"btn btn-outline-primary",onClick:b},t[6]||(t[6]=[s("i",{class:"fas fa-question-circle me-2"},null,-1),n("Confirm Dialog ")])),s("button",{class:"btn btn-outline-success",onClick:p},t[7]||(t[7]=[s("i",{class:"fas fa-keyboard me-2"},null,-1),n("Input Dialog ")])),s("button",{class:"btn btn-outline-warning",onClick:v},t[8]||(t[8]=[s("i",{class:"fas fa-list me-2"},null,-1),n("Select Dialog ")])),s("button",{class:"btn btn-outline-info",onClick:w},t[9]||(t[9]=[s("i",{class:"fas fa-lock me-2"},null,-1),n("Password Input ")])),s("button",{class:"btn btn-outline-secondary",onClick:g},t[10]||(t[10]=[s("i",{class:"fas fa-edit me-2"},null,-1),n("Multiple Inputs ")]))])])])]),s("div",{class:"col-lg-6 mb-4"},[s("div",{class:"card"},[t[17]||(t[17]=s("div",{class:"card-header"},[s("h5",{class:"mb-0"},"Advanced Alerts")],-1)),s("div",{class:"card-body"},[s("div",{class:"d-grid gap-2"},[s("button",{class:"btn btn-dark",onClick:C},t[12]||(t[12]=[s("i",{class:"fas fa-clock me-2"},null,-1),n("Auto Close Timer ")])),s("button",{class:"btn btn-purple",onClick:A},t[13]||(t[13]=[s("i",{class:"fas fa-spinner me-2"},null,-1),n("Progress Steps ")])),s("button",{class:"btn btn-gradient",onClick:y},t[14]||(t[14]=[s("i",{class:"fas fa-image me-2"},null,-1),n("With Image ")])),s("button",{class:"btn btn-custom",onClick:k},t[15]||(t[15]=[s("i",{class:"fas fa-palette me-2"},null,-1),n("Custom Styling ")])),s("button",{class:"btn btn-animation",onClick:B},t[16]||(t[16]=[s("i",{class:"fas fa-magic me-2"},null,-1),n("Custom Animation ")]))])])])]),s("div",{class:"col-lg-6 mb-4"},[s("div",{class:"card"},[t[23]||(t[23]=s("div",{class:"card-header"},[s("h5",{class:"mb-0"},"Loading & Toast")],-1)),s("div",{class:"card-body"},[s("div",{class:"d-grid gap-2"},[s("button",{class:"btn btn-secondary",onClick:S},t[18]||(t[18]=[s("i",{class:"fas fa-spinner me-2"},null,-1),n("Loading Alert ")])),s("button",{class:"btn btn-success",onClick:x},t[19]||(t[19]=[s("i",{class:"fas fa-check me-2"},null,-1),n("Success Toast ")])),s("button",{class:"btn btn-danger",onClick:I},t[20]||(t[20]=[s("i",{class:"fas fa-times me-2"},null,-1),n("Error Toast ")])),s("button",{class:"btn btn-warning",onClick:T},t[21]||(t[21]=[s("i",{class:"fas fa-exclamation me-2"},null,-1),n("Warning Toast ")])),s("button",{class:"btn btn-info",onClick:h},t[22]||(t[22]=[s("i",{class:"fas fa-info me-2"},null,-1),n("Info Toast ")]))])])])]),s("div",{class:"col-12 mb-4"},[s("div",{class:"card"},[t[28]||(t[28]=s("div",{class:"card-header"},[s("h5",{class:"mb-0"},"Real-world Examples")],-1)),s("div",{class:"card-body"},[s("div",{class:"row"},[s("div",{class:"col-md-3 mb-2"},[s("button",{class:"btn btn-danger w-100",onClick:U},t[24]||(t[24]=[s("i",{class:"fas fa-trash me-2"},null,-1),n("Delete Item ")]))]),s("div",{class:"col-md-3 mb-2"},[s("button",{class:"btn btn-success w-100",onClick:E},t[25]||(t[25]=[s("i",{class:"fas fa-save me-2"},null,-1),n("Save Changes ")]))]),s("div",{class:"col-md-3 mb-2"},[s("button",{class:"btn btn-primary w-100",onClick:D},t[26]||(t[26]=[s("i",{class:"fas fa-sign-in-alt me-2"},null,-1),n("Login Form ")]))]),s("div",{class:"col-md-3 mb-2"},[s("button",{class:"btn btn-warning w-100",onClick:P},t[27]||(t[27]=[s("i",{class:"fas fa-crown me-2"},null,-1),n("Subscription ")]))])])])])])]),t[30]||(t[30]=V(`<div class="row" data-v-67106aa0><div class="col-12" data-v-67106aa0><div class="card" data-v-67106aa0><div class="card-header" data-v-67106aa0><h5 class="mb-0" data-v-67106aa0>Code Examples</h5></div><div class="card-body" data-v-67106aa0><div class="accordion" id="codeAccordion" data-v-67106aa0><div class="accordion-item" data-v-67106aa0><h2 class="accordion-header" data-v-67106aa0><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#utilsCode" data-v-67106aa0> Using SwalUtils (Recommended) </button></h2><div id="utilsCode" class="accordion-collapse collapse" data-bs-parent="#codeAccordion" data-v-67106aa0><div class="accordion-body" data-v-67106aa0><pre data-v-67106aa0><code data-v-67106aa0>import { swalUtils } from &#39;@/utils/swal&#39;

// Success Toast
swalUtils.success(&#39;สำเร็จ!&#39;, &#39;การดำเนินการเสร็จสิ้น&#39;)

// Error Alert
swalUtils.error(&#39;ข้อผิดพลาด&#39;, &#39;มีบางอย่างผิดพลาด&#39;)

// Confirmation
const result = await swalUtils.confirm(&#39;ยืนยัน?&#39;, &#39;คุณแน่ใจหรือไม่?&#39;)
if (result.isConfirmed) {
  // User confirmed
}

// Delete Confirmation
const result = await swalUtils.delete()
if (result.isConfirmed) {
  // Delete confirmed
}

// Loading
swalUtils.loading(&#39;กำลังโหลด...&#39;)
// Later...
swalUtils.close()

// Toast
swalUtils.toast(&#39;success&#39;, &#39;บันทึกสำเร็จ!&#39;)

// Input
const result = await swalUtils.input(&#39;กรอกชื่อ&#39;, &#39;ชื่อของคุณ...&#39;)
if (result.isConfirmed) {
  console.log(result.value)
}</code></pre></div></div></div><div class="accordion-item" data-v-67106aa0><h2 class="accordion-header" data-v-67106aa0><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#basicCode" data-v-67106aa0> Basic Alert Code </button></h2><div id="basicCode" class="accordion-collapse collapse" data-bs-parent="#codeAccordion" data-v-67106aa0><div class="accordion-body" data-v-67106aa0><pre data-v-67106aa0><code data-v-67106aa0>import Swal from &#39;sweetalert2&#39;

// Basic Alert
Swal.fire(&#39;Hello world!&#39;)

// Success Alert
Swal.fire({
  icon: &#39;success&#39;,
  title: &#39;สำเร็จ!&#39;,
  text: &#39;การดำเนินการเสร็จสิ้น&#39;
})</code></pre></div></div></div><div class="accordion-item" data-v-67106aa0><h2 class="accordion-header" data-v-67106aa0><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#confirmCode" data-v-67106aa0> Confirm Dialog Code </button></h2><div id="confirmCode" class="accordion-collapse collapse" data-bs-parent="#codeAccordion" data-v-67106aa0><div class="accordion-body" data-v-67106aa0><pre data-v-67106aa0><code data-v-67106aa0>const result = await Swal.fire({
  title: &#39;คุณแน่ใจหรือไม่?&#39;,
  text: &#39;การดำเนินการนี้ไม่สามารถยกเลิกได้!&#39;,
  icon: &#39;warning&#39;,
  showCancelButton: true,
  confirmButtonText: &#39;ใช่, ลบเลย!&#39;,
  cancelButtonText: &#39;ยกเลิก&#39;
})

if (result.isConfirmed) {
  // User confirmed
}</code></pre></div></div></div></div></div></div></div></div>`,1))]))}},q=$(M,[["__scopeId","data-v-67106aa0"]]);export{q as default};
