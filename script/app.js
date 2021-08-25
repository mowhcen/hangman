const puzzleEl = document.querySelector("#puzzle");
const leftGuessEl = document.querySelector("#leftGuess");
let game;

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode);
    game.makingGuess(guess);
    render();
});

const render = () => {
    puzzleEl.innerHTML = "";
    leftGuessEl.textContent = game.statusMessage;

    game.puzzle.forEach((letter) => {
        puzzleEl.innerHTML += `<span>${letter}</span>`;
    });
};

const startGame = async () => {
    const puzzle = await getPuzzle("2");
    game = new Hangman(puzzle, 5);
    render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
//     .then((puzzle) => {
//         console.log(puzzle);
//     })
//     .catch((err) => {
//         console.log(`Error: ${err}`);
//     });

// getCurrentCountry()
//     .then((country) => {
//         console.log(country);
//     })
//     .catch((err) => {
//         console.log(`Error: ${err}`);
//     });
