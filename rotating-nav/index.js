const container = document.querySelector('.container');
const openBtn = document.querySelector('.open-button');
const closeBtn = document.querySelector('.close-button');

openBtn.addEventListener('click', () => container.classList.add('rotate'));
closeBtn.addEventListener('click', () => container.classList.remove('rotate'));