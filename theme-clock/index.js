const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const modeElement = document.querySelector('.mode');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

modeElement.addEventListener('click', (event) => {
    const html = document.querySelector('html');
    console.log(html);
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        event.target.textContent = "Dark Mode";
    } else {
        html.classList.add('dark');
        event.target.textContent = "Light Mode";
    }
});

const setTime = () => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const hours = date.getHours();
    const twelveHour = hours >= 13 ?hours % 12 : hours;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(twelveHour, 0, 11, 0, 360)}deg)`;
minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}de)`;

// timeElement.innerHTML = `${twelveHour}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
// dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
timeElement.innerHTML = `${twelveHour}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}



const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime, 1000);