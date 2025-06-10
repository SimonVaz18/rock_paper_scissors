/**
 * Rock Paper Scissors Game - Best of 10
 * 
 */

/**
 * DOM Element Selectors
 */

const options = ["🪨", "📄", "✂️"];
const buttons = document.querySelectorAll(".options button");

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");

const scoreDisplay = document.getElementById("score");
const roundDisplay = document.getElementById("round");
const finalResultDisplay = document.getElementById("final-result");
const totalWinsDisplay = document.getElementById("total-wins");
const restartButton = document.getElementById("restart");


/**
 * Game Start Figures
 */
let userScore = 0;
let computerScore = 0;
let round = 0;

let totalUserWins = 0;
let totalComputerWins = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.textContent;
        const computerChoice = options[Math.floor(Math.random() * options.length)];

        userChoiceDisplay.textContent = `Your choice: ${userChoice}`;
        computerChoiceDisplay.textContent = `Computer's choice: ${computerChoice}`;

        const result = decideWinner(userChoice, computerChoice);
        resultText.textContent = result;


        /**
         * Change text colour when user wins, loses or ties
         */

        if (result === "You win!") {
            resultText.style.color = "lightgreen";
            userScore++;
        } else if (result === "You lose!") {
            resultText.style.color = "red";
            computerScore++;
        } else {
            resultText.style.color = "#ffcc00";
        }

        /** 
         * Reset animation glow for result
         * */ 

        resultText.style.animation = "none";
        setTimeout(() => {
            resultText.style.animation = "glow 1.5s infinite alternate";
        }, 10);

        /**
         * Update scoreboard
         */

        round++;
        scoreDisplay.textContent = `Score - You ${userScore} | Computer ${computerScore}`;
        roundDisplay.textContent = `Round ${round} / 10`; 

        if (round === 10) {
            endGame();
        }
    });
});

function decideWinner(user, computer) {
    if (user === computer) return "It's a tie!";
    if (
        (user === "🪨" && computer === "✂️") ||
        (user === "📄" && computer === "🪨") ||
        (user === "✂️" && computer === "📄")
    ) {
        return "You win!";
    }
    return "You lose!";
}

/**
 * End of game after 10 rounds
 */

function endGame() {
    let message; 
    if (userScore > computerScore) {
        message = "You won this game!"
        totalUserWins++;
    } else if (computerScore > userScore) {
        message = "Computer won this game!";
        totalComputerWins++;
    } else {
        message = "It's a draw!";
    }

    finalResultDisplay.textContent = message;
    totalWinsDisplay.textContent = `Games Won - You ${totalUserWins} | Computer: ${totalComputerWins}`;
    restartButton.style.display = "inline-block";
}

/**
 * Restart round and keep total score
 */
restartButton.addEventListener("click", resetGame);

function resetGame() {
    userScore = 0;
    computerScore = 0;
    round = 0;

    userChoiceDisplay.textContent = "Your Choice:";
    computerChoiceDisplay.textContent = "Computer's choice:";
    resultText.textContent = "";
    finalResultDisplay.textContent = "";
    resultText.style.color = "";
    scoreDisplay.textContent = "Score - You: 0 | Computer: 0";
    roundDisplay.textContent = "Round: 0 / 10";

    restartButton.style.display = "none";
}