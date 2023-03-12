function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

function comparePlayerChoice(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 0;
    }

    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "paper") {
            return -1;
        } else return 1;
    }

    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "scissors") {
            return -1;
        } else return 1;
    }

    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            return -1;
        } else return 1;
    }
}

function playRound(playerSelection, computerSelection)  {
    result = comparePlayerChoice(playerSelection, computerSelection);

    if (result == 0) {
        return "It's a tie!"
    } else if (result == 1) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function takeUserChoice() {
    return prompt("Enter your choice! Choices are Rock, Paper and Scissors");
}

function game() {

    let result = 0;

    for (let index = 0; index < 5; index++) {
        let userChoice = takeUserChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(userChoice, computerChoice));

        result = result + comparePlayerChoice(userChoice, computerChoice);
    }

    if (result == 0) {
        console.log("It's a tie");
    } else if (result > 0) {
        console.log("Player won!");
    } else console.log("Player lost!");
}