import Hangman from "./hangman";
import getPuzzle from "./requests";
import isEmail from "validator/lib/isEmail";

console.log(isEmail("mowhcen@gmail.com"));

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
