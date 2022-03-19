function computerPlay() {
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber<=33) { computerPlay = "rock"
}   else if (randomNumber <=66) { computerPlay = "paper"
}   else if (randomNumber<=99) {computerPlay = "scissors"
}
    return computerPlay;
}

console.log(computerPlay())

let answer = window.prompt("Please choose either rock, paper or scissors")
    answerFixed = answer.toLowerCase()
    switch (answerFixed) {
        case "rock": 
            console.log("rock");
            answerFixed = "rock";
            break;
        case "paper":
            console.log("paper")
            answerFixed = "paper"
            break;
        case "scissors":
            console.log("scissors")
            answerFixed = "scissors"
            break;
        default:
            alert("Please enter rock, paper or scissors");
    }

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay;
    playerSelection = answerFixed;
    if (playerSelection === computerSelection) {return "Draw!!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {return "You Lose! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "rock") {return "You Win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {return "You Win! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {return "You Lose! Rock beats Scissors"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {return "You Win! Rock beats Scissors"
    } 
}

console.log(playRound())


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

