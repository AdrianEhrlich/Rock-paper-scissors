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

const rckBtn = document.querySelector(".rck");
const pprBtn = document.querySelector(".ppr");
const scsrsBtn = document.querySelector(".scsrs");

rckBtn.addEventListener("click", () => {
    console.log(playRound("rock", getComputerChoice()));
});

pprBtn.addEventListener("click", () => {
    console.log(playRound("paper", getComputerChoice()));
});

scsrs.addEventListener("click", () => {
    console.log(playRound("scissors", getComputerChoice()));
});


// Start the game
game();