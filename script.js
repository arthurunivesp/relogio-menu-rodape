let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;

    const binaryHour = parseInt(hours, 10).toString(2).padStart(6, '0');
    const binaryMinute = parseInt(minutes, 10).toString(2).padStart(6, '0');

    document.getElementById('binary-hour').textContent = `Hora em Binário: ${binaryHour}`;
    document.getElementById('binary-minute').textContent = `Minutos em Binário: ${binaryMinute}`;

    if (alarmTime && timeString === alarmTime) {
        document.getElementById('alarm-sound').play();
    }
}

function setAlarm() {
    const alarmInput = document.getElementById('alarm-time').value;
    if (alarmInput) {
        alarmTime = alarmInput + ':00';
        alert(`Alarme definido para ${alarmTime}`);
    }
}

function stopAlarm() {
    const alarmSound = document.getElementById('alarm-sound');
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmTime = null;
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }
}

document.getElementById('set-alarm').addEventListener('click', setAlarm);
document.getElementById('stop-alarm').addEventListener('click', stopAlarm);

setInterval(updateTime, 1000);
updateTime();