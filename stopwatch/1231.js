var timerElement = document.getElementById("timer");
var startButton = document.getElementById("startbutton");
var stopButton = document.getElementById("stopbutton");

var timer;
var startTime;
var isTimerRunning = false;

function startTimer() {
  if (isTimerRunning) return;
  
  startTime = Date.now();
  isTimerRunning = true;
  
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isTimerRunning = false;
  timerElement.innerHTML = "00:00:00";
}

function updateTimer() {
  var currentTime = Date.now() - startTime;
  var hours = Math.floor(currentTime / (1000 * 60 * 60));
  var minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((currentTime % (1000 * 60)) / 1000);

  var timeString = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
  timerElement.innerHTML = timeString;
}

function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
