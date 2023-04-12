let countdown = 30;
let countdownInterval;
countdownInterval = setInterval(updateTimer, 1000);

function updateTimer() {
     document.getElementById("timer").innerHTML = countdown;
        if (countdown === 0) {
           clearInterval(countdownInterval);
           document.getElementById("timer").innerHTML = "Let The Fun Begins";
           document.getElementById("jpg").style.display = "block";
        } 
        else {
           countdown--;
        }

}
