// JavaScript code
let minutes = 0;
let seconds = 0;
let hours = 0;
let intervalId = null;

// Select buttons by their IDs
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let display = document.querySelector('.display');

// Add event listeners to buttons
startButton.addEventListener('click', function() {
    if (!intervalId) {
        intervalId = setInterval(startwatch, 1000);
    }
});

stopButton.addEventListener('click', function() {
    clearInterval(intervalId);
    intervalId = null;
});

resetButton.addEventListener('click', function() {
    clearInterval(intervalId);
    intervalId = null;
    minutes = 0;
    seconds = 0;
    hours = 0;
    displayWatch(); // Update display after resetting
});

function startwatch() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
    }
    displayWatch();
}

function displayWatch() {
    let formattedTime = "";

    if (hours < 10) {
        formattedTime += "0" + hours;
    } else {
        formattedTime += hours;
    }

    formattedTime += ":";

    if (minutes < 10) {
        formattedTime += "0" + minutes;
    } else {
        formattedTime += minutes;
    }

    formattedTime += ":";

    if (seconds < 10) {
        formattedTime += "0" + seconds;
    } else {
        formattedTime += seconds;
    }

    display.textContent = formattedTime;
}
