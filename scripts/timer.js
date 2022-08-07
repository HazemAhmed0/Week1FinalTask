let out = document.getElementById("timer")
let countDownDate

function setTime(){
    let inp = document.getElementById("inp").value
    countDownDate = new Date(inp).getTime()
    tick()
}

function tick(){
    let now = new Date().getTime();
    let TimeL= countDownDate - now;
    let days = Math.floor(TimeL / (1000 * 60 * 60 * 24 ))
    let hours = Math.floor((TimeL % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((TimeL % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((TimeL % (1000 * 60)) / 1000)
    let weeks = Math.floor(days/7)
    days = days % 7

    out.innerText =  weeks + "w " + days + "d " + hours + "h "+ minutes + "m " + seconds + "s "
    setInterval(tick, 1000)
}