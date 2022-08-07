const synth = window.speechSynthesis
let mode = 0
const TextIn = document.getElementById("InputText")
let ReadBtn = document.getElementById("read")
function ToggleMode(){
    let mode = document.getElementById("mode").checked
    if(mode){
        S2T()
    } else{
        T2S()
    }
}

function T2S(){
    mode = 0
    document.getElementById("Text2Speech").style.display = "flex"
    document.getElementById("Speech2Text").style.display = "none"
}

function S2T(){
    mode = 1
    document.getElementById("Speech2Text").style.display = "block"
    document.getElementById("Text2Speech").style.display = "none"
}

function Read(){
    if(TextIn.nodeValue !== ""){
        textToSpeech(TextIn.value)
    }
}

function textToSpeech(inp){
    let utternance = new SpeechSynthesisUtterance(inp)
    speechSynthesis.speak(utternance)
}