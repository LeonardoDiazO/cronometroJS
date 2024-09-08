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
    }else {
        playPauseButton.classList.remove('running');
        pause();
    }

}

const pause = () =>{
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);

}

const stop = () =>{
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}


const start = () =>{
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval(()=>{
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime =>{
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");
    
    return `${display_minutes}:${display_seconds}`
}

const changeColor = () => {
    const colorPicker = document.getElementById('colorPicker').value;

    let backgroundColor;
    let circleColor;

    switch (colorPicker) {
        case 'lightblue':
            backgroundColor = 'lightblue';
            circleColor = '#ffffff';
            break;
        case 'lightpink':
            backgroundColor = 'lightpink';
            circleColor = '#ffffff';
            break;
        case 'lightgreen':
            backgroundColor = 'lightgreen';
            circleColor = '#ffffff';
            break;
        case 'lightyellow':
            backgroundColor = 'lightyellow';
            circleColor = '#000000';
            break;
        case 'lightcoral':
            backgroundColor = 'lightcoral';
            circleColor = '#ffffff';
            break;
        default:
            backgroundColor = 'black';
            circleColor = '#ffffff';
    }

    document.documentElement.style.setProperty('--background-color', backgroundColor);
    document.documentElement.style.setProperty('--circle-color', circleColor);
}