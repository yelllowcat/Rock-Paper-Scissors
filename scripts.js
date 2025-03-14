let choices = ["scissor", "paper", "rock"];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let choice = choices[random];
  return choice;
}

function playerChoice() {
  let response = prompt("choice your option: scissor, paper, rock");
  response.toLowerCase;
  return response;
}

let humanSelection = playerChoice();
let ComputerSelection = getComputerChoice();

function playRound(computer, human) {
  console.log("computer choice " + computer);
  console.log("you choice " + human);

  if (computer == "paper" && human == "rock") {
    console.log("computer win");
    computerScore++;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "rock" && human == "rock") {
    console.log("draw");
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "scissor" && human == "rock") {
    console.log("player win");
    playerScore++;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "scissor" && human == "paper") {
    console.log("computer win");
    computerScore++;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "scissor" && human == "scissor") {
    console.log("draw");
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "rock" && human == "scissor") {
    console.log("computer win");
    computerScore++;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "rock" && human == "paper") {
    console.log("player win");
    playerScore++;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "paper" && human == "paper") {
    console.log("draw");

    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "paper" && human == "scissor") {
    console.log("player win");
    playerScore++;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
}
function playGame() {
  playRound(ComputerSelection, humanSelection);
  console.log("");
  humanSelection = playerChoice();
  ComputerSelection = getComputerChoice();
  playRound(ComputerSelection, humanSelection);

  console.log("");
  humanSelection = playerChoice();
  ComputerSelection = getComputerChoice();
  playRound(ComputerSelection, humanSelection);
  console.log("");
  humanSelection = playerChoice();
  ComputerSelection = getComputerChoice();
  playRound(ComputerSelection, humanSelection);
  console.log("");
  humanSelection = playerChoice();
  ComputerSelection = getComputerChoice();
  playRound(ComputerSelection, humanSelection);

  console.log("");
  if (computerScore > playerScore) {
    console.log("computer win");
  } else {
    console.log("player win");
  }
}

playGame();
