const output = document.getElementById("timer");
const start = document.getElementById("startbutton");
const stop = document.getElementById("stopbutton");
let seconds = 0;
let minutes = 0;
let isTimerRunning = false;
let currenttime;

function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function updateTimer() {
  seconds++;
  if (seconds >= 60){
    minutes += Math.floor(seconds/60);
    seconds = seconds - (Math.floor(seconds/60)*60);
  }
  currenttime = minutes + ":" + seconds;
  output.textContent = currenttime;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
