
window.onload = main;
let time = '00:00:00';
let intervalId;

function main() {
    const p = document.getElementById('timerPId');
    p.innerText = time;
    startTimer(); 
    const stopButton = document.getElementById('stopButtonId');
    stopButton.addEventListener('click', stopTimer);
}

function startTimer() {
    intervalId = setInterval(() => {
        let [h, m, s] = time.split(':').map(el => +el);
        s++;
        if (s === 60) {
            m++;
            s = 0;
        }
        if (m === 60) {
            h++;
            m = 0;
        }
        
        let hour = h === 0 ? '00' : h < 10 ? '0' + h : h;
        let min = m === 0 ? '00' : m < 10 ? '0' + m : m;
        let sec = s === 0 ? '00' : s < 10 ? '0' + s : s;

        time = `${hour}:${min}:${sec}`;
        const p = document.getElementById('timerPId');
        p.innerText = time;
    }, 1000);
}

function stopTimer() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
    } else if (intervalId === undefined) {
        startTimer();
    }
}


