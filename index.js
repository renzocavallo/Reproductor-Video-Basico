var video = document.getElementById("video")
var reproductor = document.getElementById("reproductor")
var botonPlay = document.getElementById("btonPlay")
var botonReload = document.getElementById("btonReload")
var botonBigSmall = document.getElementById("btonBigSmall")
var botonSound = document.getElementById("silenciar")
var volumen1 = document.getElementById("Sound1")
var volumen2 = document.getElementById("Sound2")
var volumen3 = document.getElementById("Sound3")
var volumen4 = document.getElementById("Sound4")
var volumen5 = document.getElementById("Sound5")

volumen1.style.backgroundColor = "black"
volumen2.style.backgroundColor = "black"
volumen3.style.backgroundColor = "black"
video.volume = 0.4

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

botonSound.addEventListener("click",function(){
    if(botonSound.innerHTML != "NotSound"){
        botonSound.innerHTML = "NotSound"
        video.muted = true
        volumen1.style.backgroundColor = "grey"
        volumen2.style.backgroundColor = "grey"
        volumen3.style.backgroundColor = "grey"
        volumen4.style.backgroundColor = "grey"
        volumen5.style.backgroundColor = "grey"
    }else{
        botonSound.innerHTML = "Sound"
        video.muted = false
    }
})

volumen1.addEventListener("click",function(){
    if(volumen1.style.backgroundColor != "black"){
    volumen1.style.backgroundColor = "black"
    video.volume = 0.1
    if(volumen2.style.backgroundColor == "black" && 
       volumen3.style.backgroundColor == "black" && 
       volumen4.style.backgroundColor == "black" && 
       volumen5.style.backgroundColor == "black"){
       volumen2.style.backgroundColor = "grey"
       volumen3.style.backgroundColor = "grey"
       volumen4.style.backgroundColor = "grey"
       volumen5.style.backgroundColor = "grey"
       }
    }else{
    video.volume = 0.1
    volumen1.style.backgroundColor = "black"
    volumen2.style.backgroundColor = "grey"
    volumen3.style.backgroundColor = "grey"
    volumen4.style.backgroundColor = "grey"
    volumen5.style.backgroundColor = "grey"
    }
})

volumen2.addEventListener("click",function(){
    if(volumen2.style.backgroundColor != "black"){
        volumen2.style.backgroundColor = "black"
        volumen1.style.backgroundColor = "black"
        video.volume = 0.3
        if(volumen3.style.backgroundColor == "black" && 
        volumen4.style.backgroundColor == "black" && 
        volumen5.style.backgroundColor == "black"){
        volumen3.style.backgroundColor = "grey"
        volumen4.style.backgroundColor = "grey"
        volumen5.style.backgroundColor = "grey"
        }
    }else{
    video.volume = 0.3
    volumen2.style.backgroundColor = "black"
    volumen1.style.backgroundColor = "black"
    volumen3.style.backgroundColor = "grey"
    volumen4.style.backgroundColor = "grey"
    volumen5.style.backgroundColor = "grey"
    }
})

volumen3.addEventListener("click",function(){
    if(volumen3.style.backgroundColor != "black"){
        volumen3.style.backgroundColor = "black"
        volumen2.style.backgroundColor = "black"
        volumen1.style.backgroundColor = "black"
        video.volume = 0.4
        if(volumen4.style.backgroundColor == "black" && 
        volumen5.style.backgroundColor == "black"){
        volumen4.style.backgroundColor = "grey"
        volumen5.style.backgroundColor = "grey"
        }
    }else{
    video.volume = 0.4
    volumen3.style.backgroundColor = "black"
    volumen2.style.backgroundColor = "black"
    volumen1.style.backgroundColor = "black"
    volumen4.style.backgroundColor = "grey"
    volumen5.style.backgroundColor = "grey"
    }
})

volumen4.addEventListener("click",function(){
    if(volumen4.style.backgroundColor != "black"){
        volumen4.style.backgroundColor = "black"
        volumen3.style.backgroundColor = "black"
        volumen2.style.backgroundColor = "black"
        volumen1.style.backgroundColor = "black"
        video.volume = 0.5
        if(volumen5.style.backgroundColor == "black"&&
        volumen4.style.backgroundColor == "black"){
        volumen5.style.backgroundColor = "grey"
        volumen4.style.backgroundColor = "grey"
        volumen3.style.backgroundColor = "black"
        volumen2.style.backgroundColor = "black"
        volumen1.style.backgroundColor = "black"    
        }
    }else{
    video.volume = 0.5
    volumen5.style.backgroundColor = "grey"
    volumen4.style.backgroundColor = "black"
    volumen3.style.backgroundColor = "black"
    volumen2.style.backgroundColor = "black"
    volumen1.style.backgroundColor = "black"
    }
})

volumen5.addEventListener("click",function(){
    if(volumen5.style.backgroundColor != "black"){
        volumen5.style.backgroundColor = "black"
        video.volume = 0.9
        volumen1.style.backgroundColor = "black"
        volumen2.style.backgroundColor = "black"
        volumen3.style.backgroundColor = "black"
        volumen4.style.backgroundColor = "black"
        }
})

botonBigSmall.addEventListener("click",function(){
    if(botonBigSmall.innerHTML != "[]"){
    botonBigSmall.innerHTML = "[]"
    reproductor.style.transform = "scale(" + 1.8 +")"
    }else{
        botonBigSmall.innerHTML = "[---]"
        reproductor.style.transform = "scale(" + 1 +")"
    }
})