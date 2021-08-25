class Hangman {
    constructor(word, guessAttempt) {
        this.word = word.toLowerCase().split("");
        this.guessAttempt = guessAttempt;
        this.guessLetters = [];
        this.status = "playing";
    }

    get puzzle() {
        let puzzle = [];

        this.word.forEach((letter) => {
            letter === " " || this.guessLetters.includes(letter)
                ? puzzle.push(letter)
                : puzzle.push("*");
        });
        return puzzle;
    }

    liveStatus() {
        if (this.guessAttempt === 0) {
            this.status = "failed";
        } else {
            let findMatch = this.word.every(
                (letter) => this.guessLetters.includes(letter) || letter === " "
            );
            if (findMatch) {
                this.status = "finished";
            }
        }
    }

    makingGuess(guess) {
        guess = guess.toLowerCase();

        const isUnique = !this.guessLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (this.status !== "playing") {
            return;
        }

        if (isUnique) {
            this.guessLetters.push(guess);
        }

        if (isBadGuess && isUnique) {
            this.guessAttempt--;
        }

        this.liveStatus();
    }

    get statusMessage() {
        if (this.status === "playing") {
            return `Guesses left: ${this.guessAttempt}`;
        } else if (this.status === "finished") {
            return "Great work! You guessed the word";
        } else if (this.status === "failed") {
            return `Nice try! The word was "${this.word.join("")}"`;
        }
    }
}
