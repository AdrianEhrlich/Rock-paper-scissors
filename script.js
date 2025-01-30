let playerScore = 0
let computerScore = 0

// Create buttons for each selection & Add an event listener to each button

const rckBtn = document.querySelector(".rck");
const pprBtn = document.querySelector(".ppr");
const scsrsBtn = document.querySelector(".scsrs");
const rsltDiv = document.querySelector(".results")


rckBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

pprBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scsrsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

// Functions to get computer choice and play each round

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Make player's choice case-insensitive
    computerSelection = computerSelection.toLowerCase();

    let resultText;

    if (playerSelection === computerSelection) {
        resultText = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {

        playerScore++;
        resultText = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        resultText = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    updateResults(resultText);
}

function updateResults(resultText) {
    // Clear previous result 
    rsltDiv.textContent = "";

    // Add result text and score to div

    const resultMessage = document.createElement("p");
    resultMessage.textContent = `${resultText} - Player: ${playerScore} - Computer: ${computerScore}`;
    rsltDiv.appendChild(resultMessage);

    if (playerScore === 5) {
        const winMsg = document.createElement("p");
        winMsg.textContent = `You won the game! Final Score: Player ${playerScore} - Computer ${computerScore}`;
        rsltDiv.appendChild(winMsg);
        disableButtons();
    }
    else if (computerScore === 5) {
        const winMsg = document.createElement("p");
        winMsg.textContent = `Computer won the game! Final Score: Player ${playerScore} - Computer ${computerScore}`;
        rsltDiv.appendChild(winMsg);
        disableButtons();
    }
}

function disableButtons() {
    rckBtn.disabled = true;
    pprBtn.disabled = true;
    scsrsBtn.disabled = true;
}