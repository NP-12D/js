let choices = ["Rock", "Paper", "Scissors"];
let playerDisplay = document.querySelector(".playerDisplay");
let computerDisplay = document.querySelector(".computerDisplay");
let resultDisplay = document.querySelector("#resultDisplay");
let playerScoreDisplay = document.querySelector("#playerScoreDisplay");
let computerScoreDisplay = document.querySelector("#computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choices button").forEach(b => {

  b.addEventListener("click", function () {
    b.style.transition = "transform 0.5s ease";
b.style.transform = "scale(1.2)";

setTimeout(() => {
  b.style.transform = "scale(1)";
}, 500);


 
    const playerChoice = b.dataset.info;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

   
    playerDisplay.textContent = playerChoice;
    computerDisplay.textContent = computerChoice;

    if (playerChoice === computerChoice) {
      resultDisplay.textContent = "It’s a tie!";
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      resultDisplay.textContent = "You win!";
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
    } else {
      resultDisplay.textContent = "Computer wins!";
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
     
  });
 
});

