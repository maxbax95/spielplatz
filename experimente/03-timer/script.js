const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const displayEl = document.querySelector('#display p');

let remainingMilliseconds = 0;
let timerInterval = null;
let isRunning = false;

function getTotalMilliseconds() {
    const h = parseInt(hoursInput.value) || 0;
    const m = parseInt(minutesInput.value) || 0;
    const s = parseInt(secondsInput.value) || 0;
    return (h * 3600 + m * 60 + s) * 1000;
}

function formatTime(ms) {
    const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return [h, m, s].map(n => n.toString().padStart(2, '0')).join(':');
}

function updateDisplay() {
    displayEl.textContent = formatTime(remainingMilliseconds);
}

function setInputsDisabled(disabled) {
    hoursInput.disabled = disabled;
    minutesInput.disabled = disabled;
    secondsInput.disabled = disabled;
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    setInputsDisabled(false);
}

remainingMilliseconds = getTotalMilliseconds();
updateDisplay();

document.getElementById('start-btn').addEventListener('click', function() {
    if (isRunning) return;

    if (remainingMilliseconds <= 0) {
        remainingMilliseconds = getTotalMilliseconds();
        if (remainingMilliseconds <= 0) return;
    }

    isRunning = true;
    setInputsDisabled(true);

    timerInterval = setInterval(function() {
        remainingMilliseconds -= 1000;
        updateDisplay();

        if (remainingMilliseconds <= 0) {
            remainingMilliseconds = 0;
            updateDisplay();
            stopTimer();
        }
    }, 1000);
});

document.getElementById('stop-btn').addEventListener('click', function() {
    stopTimer();
});

document.getElementById('reset-btn').addEventListener('click', function() {
    stopTimer();
    remainingMilliseconds = getTotalMilliseconds();
    updateDisplay();
});
