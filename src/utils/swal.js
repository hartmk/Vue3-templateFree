import Swal from 'sweetalert2'

// Sweet Alert 2 Utility Functions
export const swalUtils = {
  // Success Alert
  success: (title, text = '', timer = 2000) => {
    return Swal.fire({
      icon: 'success',
      title,
      text,
      timer,
      showConfirmButton: false,
      toast: true,
      position: 'top-end'
    })
  },

  // Error Alert
  error: (title, text = '') => {
    return Swal.fire({
      icon: 'error',
      title,
      text,
      confirmButtonText: 'ตกลง'
    })
  },

  // Warning Alert
  warning: (title, text = '') => {
    return Swal.fire({
      icon: 'warning',
      title,
      text,
      confirmButtonText: 'ตกลง'
    })
  },

  // Info Alert
  info: (title, text = '') => {
    return Swal.fire({
      icon: 'info',
      title,
      text,
      confirmButtonText: 'ตกลง'
    })
  },

  // Confirmation Dialog
  confirm: (title, text = '', confirmText = 'ตกลง', cancelText = 'ยกเลิก') => {
    return Swal.fire({
      icon: 'question',
      title,
      text,
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    })
  },

  // Delete Confirmation
  delete: (title = 'ลบข้อมูล', text = 'คุณต้องการลบข้อมูลนี้หรือไม่?') => {
    return Swal.fire({
      icon: 'warning',
      title,
      text,
      showCancelButton: true,
      confirmButtonText: 'ลบ',
      cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    })
  },

  // Loading Alert
  loading: (title = 'กำลังดำเนินการ...') => {
    return Swal.fire({
      title,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })
  },

  // Close Loading
  close: () => {
    Swal.close()
  },

  // Custom Toast
  toast: (icon, title, position = 'top-end', timer = 3000) => {
    return Swal.fire({
      icon,
      title,
      toast: true,
      position,
      showConfirmButton: false,
      timer,
      timerProgressBar: true
    })
  },

  // Input Dialog
  input: (title, placeholder = '', inputType = 'text') => {
    return Swal.fire({
      title,
      input: inputType,
      inputPlaceholder: placeholder,
      showCancelButton: true,
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก',
      inputValidator: (value) => {
        if (!value) {
          return 'กรุณากรอกข้อมูล'
        }
      }
    })
  }
}
