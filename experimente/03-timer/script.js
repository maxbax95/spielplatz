const timeInput = document.getElementById('time-input');
const DEFAULT_TIME = { h: 0, m: 5, s: 0 };

let remainingMilliseconds = 0;
let timerInterval = null;
let isRunning = false;
let digitBuffer = '';

function parseDigitsToComponents(digits) {
    const num = digits.replace(/\D/g, '');
    if (!num) return { h: 0, m: 0, s: 0 };

    const seconds = parseInt(num.slice(-2), 10);
    const minutes = parseInt(num.slice(-4, -2) || '0', 10);
    const hours = parseInt(num.slice(0, -4) || '0', 10);

    return { h: hours, m: minutes, s: seconds };
}

function parseDisplayToComponents(display) {
    const parts = display.split(':').map(part => parseInt(part, 10) || 0);

    if (parts.length === 3) {
        return { h: parts[0], m: parts[1], s: parts[2] };
    }
    if (parts.length === 2) {
        return { h: 0, m: parts[0], s: parts[1] };
    }
    return { ...DEFAULT_TIME };
}

function componentsToMilliseconds({ h, m, s }) {
    return (h * 3600 + m * 60 + s) * 1000;
}

function formatComponents({ h, m, s }) {
    if (h > 0) {
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function formatTimeMs(ms) {
    const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return formatComponents({ h, m, s });
}

function setTimeFromComponents(components) {
    remainingMilliseconds = componentsToMilliseconds(components);
    timeInput.value = formatComponents(components);
}

function updateInputFromBuffer() {
    if (!digitBuffer) {
        timeInput.value = '0:00';
        return;
    }
    timeInput.value = formatComponents(parseDigitsToComponents(digitBuffer));
}

function applyInputTime() {
    const components = digitBuffer
        ? parseDigitsToComponents(digitBuffer)
        : parseDisplayToComponents(timeInput.value);

    setTimeFromComponents(components);
    digitBuffer = '';
}

function setInputDisabled(disabled) {
    timeInput.disabled = disabled;
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    setInputDisabled(false);
}

function resetToDefault() {
    stopTimer();
    digitBuffer = '';
    setTimeFromComponents({ ...DEFAULT_TIME });
}

remainingMilliseconds = componentsToMilliseconds(DEFAULT_TIME);

timeInput.addEventListener('focus', function() {
    if (isRunning) return;
    digitBuffer = '';
    timeInput.select();
});

timeInput.addEventListener('keydown', function(e) {
    if (isRunning) {
        e.preventDefault();
        return;
    }

    if (e.key === 'Enter') {
        e.preventDefault();
        applyInputTime();
        timeInput.blur();
        return;
    }

    if (e.key === 'Backspace') {
        e.preventDefault();
        digitBuffer = digitBuffer.slice(0, -1);
        updateInputFromBuffer();
        return;
    }

    if (/^\d$/.test(e.key)) {
        e.preventDefault();
        if (digitBuffer.length >= 6) return;
        digitBuffer += e.key;
        updateInputFromBuffer();
        return;
    }

    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
    }
});

document.getElementById('start-btn').addEventListener('click', function() {
    if (isRunning) return;

    if (digitBuffer) {
        applyInputTime();
    }

    if (remainingMilliseconds <= 0) {
        const components = parseDisplayToComponents(timeInput.value);
        remainingMilliseconds = componentsToMilliseconds(components);
        if (remainingMilliseconds <= 0) return;
    }

    isRunning = true;
    setInputDisabled(true);
    timeInput.value = formatTimeMs(remainingMilliseconds);

    timerInterval = setInterval(function() {
        remainingMilliseconds -= 1000;
        timeInput.value = formatTimeMs(remainingMilliseconds);

        if (remainingMilliseconds <= 0) {
            remainingMilliseconds = 0;
            timeInput.value = formatTimeMs(0);
            stopTimer();
        }
    }, 1000);
});

document.getElementById('stop-btn').addEventListener('click', function() {
    stopTimer();
    timeInput.value = formatTimeMs(remainingMilliseconds);
});

document.getElementById('reset-btn').addEventListener('click', function() {
    resetToDefault();
});
