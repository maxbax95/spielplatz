let startTime;
let elapsedTime = 0;
let savedElapsedTime = 0;
let timerInterval;
let hours;
let minutes;
let seconds;
let milliseconds;

function updateDisplay() {
	elapsedTime = new Date().getTime() - startTime;
	hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
	minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
	seconds = Math.floor((elapsedTime / 1000) % 60);
	milliseconds = Math.floor((elapsedTime % 1000) / 10);

	const parts = [];
	if (hours > 0) parts.push(hours.toString().padStart(2, '0'));
	if (minutes > 0 || hours > 0) parts.push(minutes.toString().padStart(2, '0'));
	parts.push(seconds.toString().padStart(2, '0'));
	parts.push(milliseconds.toString().padStart(2, '0'));

	const display = parts.join(':');

	document.getElementById('display').textContent = 
		display;
	}

document.getElementById('start-btn').addEventListener('click', function() {	
	clearInterval(timerInterval);
	startTime = new Date().getTime() - savedElapsedTime;
	timerInterval = setInterval(updateDisplay, 10);
});

document.getElementById('stop-btn').addEventListener('click', function() {
    savedElapsedTime = elapsedTime;
	clearInterval(timerInterval);        
	document.getElementById('display').textContent = 
		(hours > 0 ? hours.toString().padStart(2, '0') + ':' : '') +
		(minutes > 0 ? minutes.toString().padStart(2, '0') + ':' : '') +
		seconds.toString().padStart(2, '0') + ':' +
		milliseconds.toString().padStart(2, '0');
});		

document.getElementById('reset-btn').addEventListener('click', function() {
	savedElapsedTime = 0;
	elapsedTime = 0;
	clearInterval(timerInterval);
	document.getElementById('display').textContent = 
		"00:00";
});
