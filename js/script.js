class CountdownTimer {
  constructor(minutes, seconds) {
    this.totalSeconds = minutes * 60 + seconds;
    this.timerId = null;
    this.display = document.querySelector("#timer");
  }

  start() {
    this.updateDisplay();

    this.timerId = setInterval(() => {
      this.totalSeconds--;

      if (this.totalSeconds <= 0) {
        clearTimeout(this.timerId);
        this.display.textContent = "00:00";
        console.log("The timer has ended!");
      } else {
        this.updateDisplay();
      }
    }, 1000);
  }

  updateDisplay() {
    const minutes = Math.floor(this.totalSeconds / 60);
    const seconds = this.totalSeconds % 60;

    const formatteMinutes = String(minutes).padStart(2, "0");
    const formatteSeconds = String(seconds).padStart(2, "0");

    this.display.textContent = `${formatteMinutes}:${formatteSeconds}`;
  }
}

const timer = new CountdownTimer(1, 25);
timer.start();
