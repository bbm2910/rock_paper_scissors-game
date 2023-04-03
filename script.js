"use strict";

// ---------------------- Set global variables ------------------------
let choice = ["rock", "paper", "scissors"];
// let gameRound = 0;
let playerScore = 0;
let computerScore = 0;



// // -------------- Getting the computer choice from an array ---------------------
function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
};
getComputerChoice();
let computerSelection = getComputerChoice();



// // ------- Getting the player's choice from a button / Play sound on click ------------
let playerSelection = () => {
  const weapon = new Audio("sounds/weaponSound.mp3");

  const rock = document.getElementById("rock").onclick = () => {
    playerSelection = choice[0];
    playRound();
    weapon.play();
  };
  const paper = document.getElementById("paper").onclick = () => {
    playerSelection = choice[1];
    playRound();
    weapon.play();
  };
  const scissors = document.getElementById("scissors").onclick = () => {
    playerSelection = choice[2];
    playRound();
    weapon.play();
  };
  return;
};
playerSelection();


// // -------------- Play the game, change text ---------------------
function playRound() {
  computerSelection = getComputerChoice();
  const winner = ["You won the game!", "You lost the game!"];

  if (playerSelection === computerSelection) {
    // return "Tie";
    document.getElementById('result').innerHTML = `Tie! you both choose: ${playerSelection.toUpperCase()}`;
    document.getElementById('result').style.color = "#000";
    gameOverSounds();
  }

  else if ((playerSelection === choice[0] && computerSelection === choice[2]) || (playerSelection === choice[1] && computerSelection === choice[0]) || (playerSelection === choice[2] && computerSelection === choice[1])) {
    playerScore++;
    document.getElementById('result').innerHTML = "You won. Good job!!";
    document.getElementById('result').style.color = "#23C552";
    document.getElementById('playerScore').innerHTML = playerScore;
    gameOverSounds();
    stopGame();
    if (playerScore == 3) {
      document.getElementById("bannerAnounce").innerHTML = winner[0];
      document.getElementById("bannerAnounce").style.backgroundColor = "#23C552";
    }
  }

  else if ((playerSelection === choice[0] && computerSelection === choice[1]) || (playerSelection === choice[1] && computerSelection === choice[2]) || (playerSelection === choice[2] && computerSelection === choice[0])) {
    computerScore++;
    document.getElementById('result').innerHTML = "Computer won!";
    document.getElementById('result').style.color = "#F84F31";
    document.getElementById('cpuScore').innerHTML = computerScore;
    gameOverSounds();
    stopGame();
    if (computerScore == 3) {
      document.getElementById("bannerAnounce").innerHTML = winner[1]
      document.getElementById("bannerAnounce").style.backgroundColor = "#F84F31";
    }
  }
  // gameRound++;
}
playRound();



// // -------------- Play sounds at the end of the game ---------------------
function gameOverSounds() {
  const playerWon = new Audio("sounds/playerWon.mp3");
  const computerWon = new Audio("sounds/computerWon.mp3")

  if (playerScore == 3) {
    playerWon.play();
  }
  else if (computerScore == 3) {
    computerWon.play();
  }
}
gameOverSounds();


// // -------------- Stop the game / Disable buttons-weapons ---------------------
function stopGame() {
  if ((playerScore == 3) || (computerScore == 3)) {
    document.getElementById('result').style.color = "#fccb06";
    document.getElementById('result').innerHTML = "Game over! Press reset to play again.";
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
}
stopGame();


// -------------- Restart the game // Refresh the browser ---------------------
const resetButton = document.getElementById("buttonReset");
resetButton.onclick = () => {
  window.location.reload();
}