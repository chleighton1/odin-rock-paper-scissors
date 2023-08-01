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
    return alert(
      `You Win! ${playerSelection} beats ${computerSelection}\nScore - Player: ${score["player"]} Computer: ${score["computer"]}`
    );
  } else {
    score["computer"]++;
    return alert(
      `You Lose! ${computerSelection} beats ${playerSelection}\nScore - Player: ${score["player"]} Computer: ${score["computer"]}`
    );
  }
}

let score = {
  player: 0,
  computer: 0,
};
for (let x = 0; x < 5; x++) {
  let computer = getComputerChoice();
  console.log(computer);

  let player = getPlayerSelection();
  console.log(player);

  playRound(player, computer, score);
  if (score["player"] === 3) {
    alert("Round over, you win!");
    break;
  } else if (score["computer"] === 3) {
    alert("Round over, computer wins!");
    break;
  }
}
