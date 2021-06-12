document.addEventListener('DOMContentLoaded', ()=>{
  const nav = document.querySelector('nav')
, menu_btn = document.querySelector('#menu-btn')
  showNav = ()=>{
    if(nav.style.display === 'block'){
      menu_btn.classList.add('close')
      menu_btn.classList.remove('open')
      nav.style.display = 'none'
    }
    else{
      menu_btn.classList.remove('close')
      menu_btn.classList.add('open')
      nav.style.display = 'block'
    }
  }
  nav.addEventListener('blur', hideNav = ()=>{
    if(nav.style.display === 'block'){
      menu_btn.classList.remove('open')
      menu_btn.classList.add('close')
      nav.style.display = 'none'
    }
  })
})