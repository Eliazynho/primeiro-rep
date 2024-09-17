let timer;
let seconds = 18;

function startTimer() {
  //Timer 30 sec
  clearInterval(timer);
  seconds = 18;

  timer = setInterval(function () {
    seconds--;

    if (seconds <= 0) {
      clearInterval(timer);
        videoAd()
    }
  }, 1000);
}





function videoAd(){
    let video = document.getElementById('videoAd')
    video.innerText = ""
}


window.onload = startTimer()