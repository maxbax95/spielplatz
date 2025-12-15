const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  fractionalSecondDigits: 3
};

document.getElementById('test-btn').addEventListener('click', function() {
            document.getElementById('output').textContent = 
                'Hallo, heute ist der ' + new Date().toLocaleString("de-DE", options);
        });