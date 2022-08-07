let btn = document.getElementById("listen")
let out = document.getElementById("Output")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = () => {
    btn.innerHTML = "&#128308"
    console.log("listening")
}

recognition.onresult = (event) => {
    btn.innerHTML = "&#128266"
    const curr = event.resultIndex
    const transcript = event.results[curr][0].transcript
    out.textContent = transcript
}


function listen(){
    recognition.start()
}