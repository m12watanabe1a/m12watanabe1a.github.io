// headerメニューの開閉
const menuBtn = document.getElementById('menu-btn')
let menuOpen = false

menuBtn.onclick = function(){
  const header = document.getElementById('header')
  if(!menuOpen){
    document.addEventListener("mousewheel", preventEvent, { passive: false })
    document.addEventListener("touchmove", preventEvent, { passive: false })
  } else {
    document.removeEventListener("mousewheel", preventEvent, { passive: false })
    document.removeEventListener('touchmove', preventEvent, { passive: false })
  }
  header.classList.toggle('nav-open')
  menuOpen = !menuOpen
}

function preventEvent(event) {
  event.preventDefault();
}

//ファーストビューの高さの設定
document.addEventListener('DOMContentLoaded', function(){
  const isSP = /iPhone|iPod|iPad|Android|Macintosh/i.test(navigator.userAgent) && 'ontouchend' in document
  console.log(isSP)
  if(isSP){
    document.documentElement.style.setProperty(
      '--inner-height',
      `${window.innerHeight}px`
    )
  }
})
