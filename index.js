var video = document.getElementById("video")
var reproductor = document.getElementById("reproductor")
var botonPlay = document.getElementById("btonPlay")
var botonReload = document.getElementById("btonReload")
var botonBigSmall = document.getElementById("btonBigSmall")

botonPlay.addEventListener("click",function(){
    if(botonPlay.innerHTML != "Pause"){
    botonPlay.innerHTML = "Pause"
    video.play()
    }else{
        botonPlay.innerHTML = "Play"
        video.pause()
    }
})

botonReload.addEventListener("click",function(){
    botonPlay.innerHTML = "Pause"
    video.load()
    video.play()
})

botonBigSmall.addEventListener("click",function(){
    if(botonBigSmall.innerHTML != "[]"){
    botonBigSmall.innerHTML = "[]"
    var x = 1.8
    reproductor.style.transform = "scale(" + x +")"
    }else{
        botonBigSmall.innerHTML = "[---]"
        var x = 1
        reproductor.style.transform = "scale(" + x +")"
    }
})