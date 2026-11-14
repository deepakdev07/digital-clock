const clock = document.getElementById("clock");

function showTime(){

const time = new Date();
const hour = time.getHours();
const min = time.getMinutes();
const sec = time.getSeconds();

let period;

if(hour >= 12) {
    period = "PM";
} else {
    period = "AM";
}

const currentTime = hour + ":" + min + ":" + sec + " " + period;

clock.textContent = currentTime;
}
showTime();
setInterval(showTime, 1000);
