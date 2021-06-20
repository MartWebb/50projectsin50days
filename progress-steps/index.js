const progressBar = document.querySelector('.progress-bar');
const circles = document.querySelectorAll('.circle');
const activeList = document.querySelectorAll('.active');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const startingPoint = 1;
let activeCount = 1;

const progressUpdate = () => {
    const activeList = document.querySelectorAll('.active');
    progressBar.style.width = (activeList.length -1) / (circles.length - 1) * 100 + '%';
};

const btnAccessToggler = () => {
    if (activeCount === 1) {
        prevBtn.disabled = true;
    } else if (activeCount === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
};

const changeActive = () => {
    circles.forEach((circle, index) => {
        if (index < activeCount) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    progressUpdate();
    btnAccessToggler();
};

prevBtn.addEventListener('click', () => {
    activeCount--;
    if (activeCount < startingPoint) {
        activeCount = startingPoint;
    }
    changeActive();
});

nextBtn.addEventListener('click', () => {
    activeCount++;
    if (activeCount > circles.length) {
        activeCount = circles.length;
    }
    changeActive();
});


