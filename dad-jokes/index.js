const jokeBtn = document.querySelector('.joke-btn');
const joke = document.querySelector('.joke');


jokeBtn.addEventListener('click', () => {
    getJoke();
});

async function getJoke () {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            "Accept": "application/json"
        }
    });

    const data = await response.json();
    joke.textContent = data.joke;
}

getJoke();
