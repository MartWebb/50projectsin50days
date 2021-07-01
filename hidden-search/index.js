const button = document.querySelector('.button');
const searchContainer = document.querySelector('.container');
const searchBar = document.querySelector('.search-bar');

button.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    searchBar.focus();
});
