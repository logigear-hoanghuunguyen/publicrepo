console.log("loading javascript");

function startButton() {
  console.log("onclick --- called");
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
}

document.onload = function () {
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSecond = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-resest");
  var Interval;

  console.log("--button start");
  console.log(buttonStart);
  console.log("--button start---");

  function startButton() {
    console.log("onclick --- called");
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  buttonstart.onclick = startButton;

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSecond.innerHTML = seconds;
  };
  function starTimer() {
    tens++;
    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
