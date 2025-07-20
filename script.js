let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);
  let ms = Math.floor((time % 1000) / 10);

  return (
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs) + "." +
    (ms < 10 ? "0" + ms : ms)
  );
}

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    isRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  print("00:00:00.00");
  elapsedTime = 0;
  isRunning = false;
  document.getElementById("laps").innerHTML = '';
}

function lapTime() {
  if (isRunning) {
    const lapTime = timeToString(elapsedTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = "Lap: " + lapTime;
    document.getElementById("laps").appendChild(lapItem);
  }
}
