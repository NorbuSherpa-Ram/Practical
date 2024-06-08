let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1); // update time every millisecond
        startStopButton.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(tInterval);
        startStopButton.textContent = 'Start';
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopButton.textContent = 'Start';
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    millisecondsDisplay.textContent = '00';
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let milliseconds = Math.floor((difference % 1000) / 10);
    let seconds = Math.floor((difference / 1000) % 60);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);

    millisecondsDisplay.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
}
