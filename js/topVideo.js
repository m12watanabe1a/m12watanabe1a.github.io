// トップのビデオ再生
const fileName = {
    lg: "hxtop.mp4",
    md: "hxtop_md.mp4",
    sm: "hxtop_sm.mp4"
}

const breakpoint = {
  md: 560,
  lg: 1024
}

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const topVideo = document.getElementById('hh-video')

window.addEventListener('load', function(){
  loadVideo()
  topVideo.muted = true
  topVideo.loop = true
  topVideo.autoplay = true
})

topVideo.addEventListener('canplaythrough', (event) => {
  topVideo.play()
})

window.addEventListener('blur', function(){
  topVideo.pause()
})

window.addEventListener('focus', (event) =>{
  topVideo.play()
});

function getFilePath(fileName){
  return  document.location.protocol + "//" + document.location.host + "/img/" + fileName
}

function adjustVideoSize(width, height){
  if (width < 560 && height*0.9/width < 16/9 ){
    topVideo.classList.add("resize-video")
  }
}

function loadVideo(){
  if (windowWidth > 1024){
    topVideo.src = getFilePath(fileName.lg)
  } else if(windowWidth >= 560) {
    topVideo.src = getFilePath(fileName.md)
  } else {
    topVideo.src = getFilePath(fileName.sm)
  }
  topVideo.load()
  adjustVideoSize(windowWidth, windowHeight)
}