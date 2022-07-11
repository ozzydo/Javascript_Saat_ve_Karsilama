let myName = prompt("İsminizi giriniz:") 
let info = document.querySelector("#myName")
info.innerHTML = `${myName}`

let clock = document.querySelector("#myClock")

function time(){
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let day = now.getDay()
    let today;
    switch(day){
        case 1: today = "Pazartesi"; break;
        case 2: today = "Salı"
        case 3: today = "Çarşamba"; break;
        case 4: today = "Perşembe"; break;
        case 5: today = "Cuma"; break;
        case 6: today = "Cumartesi"; break;
        case 7: today = "Pazar"; break;
    }
    clock.innerHTML= `${hour}:${minute}:${second} ${today}` 
}
setInterval(time,1000)
