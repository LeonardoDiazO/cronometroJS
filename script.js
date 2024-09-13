const stopwatch = document.getElementById('stopwacth');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');

let stopwatchInterval;
let runningTime = 0;

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');

    if(isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
};

const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
};

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
};

const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval(() => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 100); // Actualiza cada 100 ms
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = (total_minutes % 60).toString().padStart(2, "0");
    const display_hours = total_hours.toString().padStart(2, "0");

    return total_hours > 0 
        ? `${display_hours}:${display_minutes}:${display_seconds}` 
        : `${display_minutes}:${display_seconds}:${Math.floor((runningTime % 1000) / 10).toString().padStart(2, "0")}`;
}


// Atajos de teclado
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 's') playPause(); // 'S' para iniciar/pausar
    if (key === 'r') stop();      // 'R' para resetear
    if (key === 'd') document.body.classList.toggle('dark-mode'); // 'D' para modo oscuro
});
