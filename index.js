let choice = ["Rock", "Paper", "Scissors"];

const results = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

function getComputerChoice(arr = choice) {
  return arr[Math.floor(arr.length * Math.random())];
}

function getPlayerSelection(arr = choice) {
  while (true) {
    let playerSelection = prompt("Please choose: Rock, Paper or Scissors");
    for (let x = 0; x < 3; x++) {
      if (playerSelection.toLowerCase() === arr[x].toLowerCase()) {
        return arr[x];
      }
    }
    alert("I am sorry, that is not an option. Please try again.");
  }
}

function playRound(playerSelection, computerSelection, score) {
  if (playerSelection === computerSelection) {
    return alert("Tie game. Try again");
  } else if (results[playerSelection] === computerSelection) {
    score["player"]++;
    return alert(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else {
    score["computer"]++;
    return alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function updateScore(playerScore, computerScore) {
  playerScore.textContent = `Player: ${score["player"]}`;
  computerScore.textContent = `Computer: ${score["computer"]}`;
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let score = {
  player: 0,
  computer: 0,
};

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

updateScore(playerScore, computerScore);

rock.addEventListener("click", () => {
  let computer = getComputerChoice();
  console.log(computer);

  let player = "Rock";
  console.log(player);

  playRound(player, computer, score);
  updateScore(playerScore, computerScore);
  if (score["player"] === 3) {
    alert("Round over, you win!");
    score = {
      player: 0,
      computer: 0,
    };
  } else if (score["computer"] === 3) {
    alert("Round over, computer wins!");
    score = {
      player: 0,
      computer: 0,
    };
  }
  updateScore(playerScore, computerScore);
});

paper.addEventListener("click", () => {
  let computer = getComputerChoice();
  console.log(computer);

  let player = "Paper";
  console.log(player);

  playRound(player, computer, score);
  updateScore(playerScore, computerScore);
  if (score["player"] === 3) {
    alert("Round over, you win!");
    score = {
      player: 0,
      computer: 0,
    };
  } else if (score["computer"] === 3) {
    alert("Round over, computer wins!");
    score = {
      player: 0,
      computer: 0,
    };
  }
  updateScore(playerScore, computerScore);
});

scissors.addEventListener("click", () => {
  let computer = getComputerChoice();
  console.log(computer);

  let player = "Scissors";
  console.log(player);

  playRound(player, computer, score);
  updateScore(playerScore, computerScore);
  if (score["player"] === 3) {
    alert("Round over, you win!");
    score = {
      player: 0,
      computer: 0,
    };
  } else if (score["computer"] === 3) {
    alert("Round over, computer wins!");
    score = {
      player: 0,
      computer: 0,
    };
  }
  updateScore(playerScore, computerScore);
});
