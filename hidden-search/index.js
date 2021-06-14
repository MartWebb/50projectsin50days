const search = document.querySelectorAll('.search');
const btn = document.querySelectorAll('.btn');
const input = document.querySelectorAll('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});