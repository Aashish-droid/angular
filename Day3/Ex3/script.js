var stopwatch = {
  timer: null,
  seconds: 0,
  minutes: 0,
  hours: 0,
  running: false,
  display: document.querySelector('.display'),
  startBtn: document.querySelector('.start'),
  stopBtn: document.querySelector('.stop'),
  resetBtn: document.querySelector('.reset'),
  
  start: function() {
    if (!stopwatch.running) {
      stopwatch.running = true;
      stopwatch.timer = setInterval(function() {
        stopwatch.seconds++;
        if (stopwatch.seconds === 60) {
          stopwatch.seconds = 0;
          stopwatch.minutes++;
          if (stopwatch.minutes === 60) {
            stopwatch.minutes = 0;
            stopwatch.hours++;
          }
        }
        stopwatch.display.textContent = stopwatch.formatTime(stopwatch.hours) + ':' + stopwatch.formatTime(stopwatch.minutes) + ':' + stopwatch.formatTime(stopwatch.seconds);
      }, 1000);
    }
  },
  
  stop: function() {
    if (stopwatch.running) {
      stopwatch.running = false;
      clearInterval(stopwatch.timer);
    }
  },
  
  reset: function() {
    if (stopwatch.running) {
      stopwatch.running = false;
      clearInterval(stopwatch.timer);
    }
    stopwatch.seconds = 0;
    stopwatch.minutes = 0;
    stopwatch.hours = 0;
    stopwatch.display.textContent = '00:00:00';
  },
  
  formatTime: function(time) {
    return time < 10 ? '0' + time : time;
  }
};

stopwatch.startBtn.addEventListener('click', stopwatch.start);
stopwatch.stopBtn.addEventListener('click', stopwatch.stop);
stopwatch.resetBtn.addEventListener('click', stopwatch.reset);
