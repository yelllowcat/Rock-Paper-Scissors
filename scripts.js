let choices = ["scissor", "paper", "rock"];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let choice = choices[random];
  return choice;
}
/*
function playerChoice() {
  let response = "choice your option: scissor, paper, rock";
  response.toLowerCase;
  return response;
}*/

//let humanSelection = playerChoice();
let ComputerSelection = getComputerChoice();
let ganador;
let gameWinner = "";
function playRound(computer, human) {
  console.log("computer choice " + computer);
  console.log("you choice " + human);

  if (computer == "paper" && human == "rock") {
    console.log("computer win");
    ganador = "computer win";
    ++computerScore;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "rock" && human == "rock") {
    console.log("draw");
    ganador = "draw";

    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "scissor" && human == "rock") {
    console.log("player win");
    ganador = "player win";
    ++playerScore;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "scissor" && human == "paper") {
    console.log("computer win");
    ganador = "computer win";

    ++computerScore;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "scissor" && human == "scissor") {
    console.log("draw");
    ganador = "draw";
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "rock" && human == "scissor") {
    console.log("computer win");
    ganador = "computer win";

    ++computerScore;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "rock" && human == "paper") {
    console.log("player win");
    ganador = "player win";

    ++playerScore;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "paper" && human == "paper") {
    console.log("draw");
    ganador = "draw";
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computer == "paper" && human == "scissor") {
    console.log("player win");
    ganador = "player win";

    ++playerScore;
    console.log(
      "player score: " + playerScore + " computer score: " + computerScore
    );
  }
  if (computerScore == 5 || playerScore == 5) {
    if (computerScore == 5) {
      gameWinner = "computer win the game";
    }
  }
  if (playerScore == 5) {
    result.gameWinner = "player win the game";
  }
}

const rockBtn = document.createElement("button");
rockBtn.textContent = "rock";
const scissorBtn = document.createElement("button");
scissorBtn.textContent = "scissor";
const paperBtn = document.createElement("button");
paperBtn.textContent = "paper";
const bod = document.querySelector("body");

bod.appendChild(rockBtn);
bod.appendChild(scissorBtn);
bod.appendChild(paperBtn);

const buttons = document.querySelectorAll("button");

const result = document.createElement("div");
bod.appendChild(result);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    ComputerSelection = getComputerChoice();

    playRound(ComputerSelection, button.textContent);
    result.textContent =
      "player score: " + playerScore + " computer score: " + computerScore;
    result.appendChild(document.createElement("br"));
    result.appendChild(
      document.createTextNode(
        "computer choice :" +
          ComputerSelection +
          ",                 player choice: " +
          button.textContent
      )
    );
    result.appendChild(document.createElement("br"));
    result.appendChild(document.createTextNode(ganador));
    result.appendChild(document.createElement("br"));
    result.appendChild(document.createTextNode(gameWinner));
  });
});
