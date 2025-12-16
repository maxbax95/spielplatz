let startTime;
let elapsedTime = 0;
let savedElapsedTime = 0;
let timerInterval;
let hours;
let minutes;
let seconds;

function updateDisplay() {
	elapsedTime = new Date().getTime() - startTime;
	hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
	minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
	seconds = Math.floor((elapsedTime / 1000) % 60);
	document.getElementById('display').textContent = 
		hours.toString().padStart(2, '0') + ':' +
		minutes.toString().padStart(2, '0') + ':' +
		seconds.toString().padStart(2, '0');
	}

document.getElementById('start-btn').addEventListener('click', function() {	
		startTime = new Date().getTime() - savedElapsedTime;
		timerInterval = setInterval(updateDisplay, 1000);
});

document.getElementById('stop-btn').addEventListener('click', function() {
    savedElapsedTime = elapsedTime;
	clearInterval(timerInterval);        
	document.getElementById('display').textContent = 
		hours.toString().padStart(2, '0') + ':' +
		minutes.toString().padStart(2, '0') + ':' +
		seconds.toString().padStart(2, '0');
});		

document.getElementById('reset-btn').addEventListener('click', function() {
	savedElapsedTime = 0;
	elapsedTime = 0;
	clearInterval(timerInterval);
	document.getElementById('display').textContent = 
		"00:00:00";
});
