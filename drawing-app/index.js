const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

console.log(ctx)
let size = 10;
colorEl.value = '#000000';
let color = colorEl.value;
let x;
let y;
let isPressed = false;

canvas.addEventListener('mousedown', (event) => {
    isPressed = true;

    x = event.offsetX;
    y = event.offsetY;

    console.log(isPressed, x, y)
});

canvas.addEventListener('mouseup', (event) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (event) => {
    if (isPressed) {
        const x2 = event.offsetX;
        const y2 = event.offsetY;
        console.log( x2, y2)
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
   ctx.beginPath();
   ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle
   ctx.fillStyle = color;
   ctx.fill();
}

function drawLine (x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();

}

console.log(colorEl)

function updateSizeOnScreen() {
    sizeEL.innerText = size;
}
increaseBtn.addEventListener('click', (event) => {
    size += 5;

    if (size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', (event) => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }
    updateSizeOnScreen();
});

colorEl.addEventListener('change', (event) => color = event.target.value);

clearEl.addEventListener('click', (event) => ctx.clearRect(0, 0, canvas.width, canvas.height));