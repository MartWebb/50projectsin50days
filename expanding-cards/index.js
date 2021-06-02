const card = document.querySelectorAll('.card');

card.forEach(card => {
    card.addEventListener('click', () => {
        removeActive();
        card.classList.toggle('active');
    });
});

const removeActive = () => {
    card.forEach(card => {    
        card.classList.remove('active');
    });
};
