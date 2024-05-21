// script.js
document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const newJokeButton = document.getElementById('newJoke');

    async function fetchRandomJoke() {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            jokeElement.textContent = `${data.setup} ${data.punchline}`;
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    }

    newJokeButton.addEventListener('click', fetchRandomJoke);
    fetchRandomJoke(); 
});
