const hoursInput = document.getElementById('hours');
const hours = parseInt(hoursInput.value) || 0; // || 0 = Fallback auf 0 wenn NaN
const minutesInput = document.getElementById('minutes');
const minutes = parseInt(minutesInput.value) || 0;
const secondsInput = document.getElementById('seconds');
const seconds = parseInt(secondsInput.value) || 0;
let totalMilliseconds;
let remainingMilliseconds;
let timerInterval = null;

function getTotalMilliseconds() {
    const h = parseInt(document.getElementById('hours').value) || 0;
    const m = parseInt(document.getElementById('minutes').value) || 0;
    const s = parseInt(document.getElementById('seconds').value) || 0;
    return (h * 3600 + m * 60 + s) * 1000;
}

totalMilliseconds = getTotalMilliseconds();
remainingMilliseconds = totalMilliseconds;

document.getElementById('start-btn').addEventListener('click', function() {	
	
});

document.getElementById('stop-btn').addEventListener('click', function() {	
	
});

document.getElementById('reset-btn').addEventListener('click', function() {	
	
});