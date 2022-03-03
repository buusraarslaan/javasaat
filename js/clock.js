let userName = prompt("Adinizi Giriniz:");
let isim = document.querySelector("#myName").innerHTML = userName


const gunler = [
    "pazar",
    "pazartesi",
    "salı",
    "çarşamba",
    "perşembe",
    "cuma",
    "cumartesi",
];

function showTime() {
    let date = new Date();
    let zaman = date.toLocaleTimeString();
    let d = gunler[date.getDay()]
    let clock = zaman + ' ' + d
    document.getElementById("myClock").innerHTML = clock
    let time = setTimeout(function() { showTime() }, 1000);
}
showTime();