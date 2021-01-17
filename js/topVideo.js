// トップのビデオ再生
const fileName = {
    lg: "hxtop.mp4",
    md: "hxtop_md.mp4",
    sm: "hxtop_sm.mp4"
   }
   
   function getFilePath(fileName){
     return  document.location.protocol + "//" + document.location.host + "/img/" + fileName
   }
   
   const windowWidth = window.innerWidth
   const windowHeight = window.innerHeight

   console.log(windowWidth)
   console.log(windowHeight)
   const topVideo = document.getElementById('hh-video')

   if (windowWidth < 560 && windowHeight*0.9/windowWidth < 16/9 ){
     topVideo.classList.add("resize-video")
   }
   
   if (windowWidth >= 1025){
     topVideo.src = getFilePath(fileName.lg)
   } else if(windowWidth >= 560) {
     topVideo.src = getFilePath(fileName.md)
   } else {
     topVideo.src = getFilePath(fileName.sm)
   }
   topVideo.load();