// トップのビデオ再生
const fileName = {
    lg: "hxtop.mp4",
    md: "hxtop_md.mp4",
    sm: "hxtop_sm.mp4"
   }
   
   function getFilePath(fileName){
     return  document.location.protocol + "//" + document.location.host + "/img/" + fileName
   }
   
   const windowWidth = window.outerWidth
   const topVideo = document.getElementById('hh-video')
   
   if (windowWidth >= 1025){
     topVideo.src = getFilePath(fileName.lg)
   } else if(windowWidth >= 560) {
     topVideo.src = getFilePath(fileName.md)
   } else {
     topVideo.src = getFilePath(fileName.sm)
   }
   topVideo.load();