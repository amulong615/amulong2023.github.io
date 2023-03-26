
const notifications = document.querySelector('.notifications'),
buttons = document.querySelectorAll('.buttons .btn'),
toastDetails = {
  timer: 5000,
  success:{
    icon: 'fa-circle-check',
    text: 'Success: This is a success toast.'
  },
  error:{
    icon: 'fa-circle-xmark',
    text: 'Error: This is a error toast.'
  },
  warning:{
    icon: 'fa-circle-exclamation',
    text: 'Warning: This is a warning toast.'
  },
  info:{
    icon: 'fa-circle-info',
    text: 'Info: This is a info toast.'
  }
},
removeToast = (toast) =>{
  toast.classList.add('hide')
  if( toast.timeoutId) clearTimeout(toast.timeoutId) // 清楚setTimeout
  // 移除li元素
  setTimeout(() => {
    toast.remove()
  },500)

}


const createToast = (id) => {
  // console.log(id)
 const {icon, text} = toastDetails[id]
 const toast = document.createElement('li') // 创建li元素
 toast.className = `toast ${id}` // 为li元素新增样式
 toast.innerHTML = `<div class="column">
 <i class="fa-solid ${icon}"></i>
 <span>${text}</span>
</div>
<i class="fa-solid fa-xmark" onClick="removeToast(this.parentElement)"></i>`
  notifications.appendChild(toast) // 添加元素到 notifications ul
  // 5秒后 隐藏toast
  toast.timeoutId = setTimeout(()=> removeToast(toast), toastDetails.timer)
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => createToast(btn.id))
})