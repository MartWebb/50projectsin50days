const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.background');

let loadingNumber = 0;

let interval = setInterval(blurScreen, 30);

function blurScreen() {
    loadingNumber++

    if(loadingNumber > 99) {
        clearInterval(interval);
    }

    loadingText.textContent = `${loadingNumber}%`;
    loadingText.style.opacity = scale(loadingNumber, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(loadingNumber, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}