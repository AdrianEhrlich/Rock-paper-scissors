function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Make player's choice case-insensitive
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Create buttons for each selection & Add an event listener to each button

const rckBtn = document.querySelector(".rck");
const pprBtn = document.querySelector(".ppr");
const scsrsBtn = document.querySelector(".scsrs");
const rsltDiv = document.querySelector(".results")

rckBtn.addEventListener("click", () => {
    rsltDiv.textContent = playRound("rock", getComputerChoice());
});

pprBtn.addEventListener("click", () => {
    rsltDiv.textContent = playRound("paper", getComputerChoice());
});

scsrs.addEventListener("click", () => {
    rsltDiv.textContent = playRound("scissors", getComputerChoice());
});
// Start the game
game();