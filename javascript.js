let playerScore = 0
let computerScore = 0

function game() {
    for(let i = 1 ; playerScore <5 && computerScore <5; i++) {
    playRound(i);
    }
    finalWinner()
    console.log("------------------------------------------------------")
    if (computerScore === 5 || playerScore === 5) {computerScore = 0; playerScore = 0
    }
    game()
}

function playRound(round) {
    
    const playerSelection = playerPlay()
    const computerSelection = computerPlay()
    const winner = checkWinner(playerSelection, computerSelection);
    const how = checkHow(playerSelection, computerSelection)
    if (winner === "Computer") {
        ++computerScore
    } else if (winner === "Player") {
        ++playerScore
    }
    logRoundProcess(computerSelection, playerSelection, winner, how, computerScore, playerScore, round);

}

function finalWinner() {
    if (playerScore === 5) {console.log("YOU  WIN! You scored five points, you're the winner!!")
    } else  if (computerScore === 5) {console.log ("COMPUTER WINS! The computer scored five points, you lose!")}
}

function playerPlay() {
    let input = prompt("Please choose either rock, paper or scissors");
    input = input.toLowerCase();
    return input;
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*100); 
    if (randomNumber<=33) {comp = "rock"
    } else if (randomNumber<=66) {comp = "paper"
    } else if (randomNumber<=99) {comp = "scissors"
    }
    return comp;
}

function checkWinner(a, b) {
    if (a === b) {return "N/A!";
    } else if (a === "rock" && b === "paper") {return "Computer"
    } else if (a === "paper" && b === "rock") {return "Player"
    } else if (a === "paper" && b === "scissors") {return "Computer"
    } else if (a === "scissors" && b === "paper") {return "Player"
    } else if (a === "scissors" && b === "rock") {return "Computer"
    } else if (a === "rock" && b === "scissors") {return "Player"
    } 
}

function checkHow(a, b) {
    if (a === b) {return "Draw!";
    } else if (a === "rock" && b === "paper") {return "You lose! Paper beats Rock!"
    } else if (a === "paper" && b === "rock") {return "You win! Paper beats Rock!"
    } else if (a === "paper" && b === "scissors") {return "You lose! Scissors beats Paper!"
    } else if (a === "scissors" && b === "paper") {return "You win! Scissors beats Paper!"
    } else if (a === "scissors" && b === "rock") {return "You lose! Rock beats Scissors!"
    } else if (a === "rock" && b === "scissors") {return "You win! Rock beats Scissors!"
    } 
}

function logRoundProcess(computerSelection, playerSelection, winner, how, computerScore, playerScore, round) {
    console.log("Computer Choice: " + computerSelection);
    console.log("Player choice: " + playerSelection);
    console.log(how);
    console.log("Winner: " + winner);
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    console.log("Round: " + round)
    console.log("---------------------------------------------");
} 

/*
    roundWins()
        function roundWins() {
            let score = scoreCalculate(winner, computerScore, playerScore);
            console.log(score);
            console.log("------------------------------------------------------")
    } 

function scoreCalculate(c, d, e) {
    if (c === "Computer") {return "Computer Points: " + ++d + "  Player Points: " + e
    } else if (c === "Player") {return "Player Points: " + ++e + "  Computer Points: " + d
    } else  {return  "Player Points: " + e + "  Computer Points: " + d
    }
}
*/

game();

/*

THINGS TO ADD:
-limit prompt input options to rock, paper and scissors
-display final winner
-create reset option


let playerEntry = prompt("Please choose either rock, paper or scissors"); 
let playerSelection = playerEntry.toLowerCase()
let computerSelection = computerNumber;
let result = oneRound(playerSelection, computerSelection) 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {return "You lose! Paper beats Rock!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {return "You win! Paper beats Rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {return "You lose! Scissors beats Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {return "You win! Scissors beats Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {return "You lose! Rock beats Scissors!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {return "You win! Rock beats Scissors!"
    } 
}

function oneRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {return "computer"
    } else if (playerSelection === "paper" && computerSelection === "rock") {return "user"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {return "computer"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {return "use"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {return "computer"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {return "user"
    } 
}
function game() {
    let playerScore = 0;
    let computerScore = 0;  
    

    if (result === "user") {
        playerScore++; 
    } else if (result === "computer") {
        computerScore++;
    } 

    while (playerScore < 5 && computerScore < 5) {
        playRound(playerSelection,  computerSelection)
    }

console.log(playerSelection)
console.log(playRound(playerSelection,  computerSelection))
console.log(result)
console.log(playerScore)
console.log(computerScore)
console.log(scores)
}


console.log(game())






function game() {
    for (let i = 0; i < 5; i++) {
        if (i = 1) {message = "Round: "
        } else if (playRound() = "Draw") {message = "draw! retry! " 
        } else {message = "yay"} 
    }
    console.log(message + (i))
    console.log(i)
}
const matches = Number(playRound.value);
console.log(game())

*/