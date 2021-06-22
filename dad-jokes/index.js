const getJokeBtn = document.querySelector('.get-joke');



getJokeBtn.addEventListener('click', () => {
    getJoke();
});

async function getJoke () {
const response = await fetch("https://icanhazdadjoke.com/");
console.log(response)
}
