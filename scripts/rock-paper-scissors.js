
let humanScore = 0;
let computerScore = 0;

const playButton = document.getElementById("play");
const roundResultMessage = document.getElementById("message");


function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}


function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor((Math.random() * choices.length - 1) + 1);
    return choices.at(index);
}


function getHumanChoice(){
    let choice;
    do{
        choice = prompt("Please enter your choice between 'Rock', 'Paper' or 'Scissors'");
        if(choice == null){
            return null;
        }
    }
    while (!['rock', 'paper', 'scissors'].includes(choice.toLowerCase()))

    return choice.toLowerCase();
}

function checkIfWon(currentPlayerChoice, opponentChoice){
        return (currentPlayerChoice === 'rock' && opponentChoice === 'scissors')
        || (currentPlayerChoice === 'scissors' && opponentChoice === 'paper')
        || (currentPlayerChoice === 'paper' && opponentChoice === 'rock');
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() === computerChoice.toLowerCase()){
        roundResultMessage.textContent = "Its a draw!";
        console.log("Its a draw!")
    }else if(checkIfWon(computerChoice, humanChoice)){
        roundResultMessage.textContent = `You lose!${capitalize(computerChoice)}  beats ${capitalize(humanChoice)}.`;
        console.log(`You lose!${capitalize(computerChoice)}  beats ${capitalize(humanChoice)}.`);
        computerScore++;
    }else if(checkIfWon(humanChoice, computerChoice)){
        roundResultMessage.textContent = `You Win!${capitalize(humanChoice)}  beats ${capitalize(computerChoice)}.`;
        console.log(`You Win!${capitalize(humanChoice)}  beats ${capitalize(computerChoice)}.`);
        humanScore++;
    }
}

function overallWinner(){
    if(humanScore > computerScore){
        roundResultMessage.textContent = `You beat the computer!!Your score ${humanScore} to computer score ${computerScore}.`;
        console.log(`You beat the computer!!Your score ${humanScore} to computer score ${computerScore}.`)
    }else{
        roundResultMessage.textContent = `You lost!!Computor score ${computerScore}, your score ${humanScore}.`;        
        console.log(`You lost!!Computor score ${computerScore}, your score ${humanScore}.`)
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    let currentRound = 0;


    while( currentRound < 5){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        if(humanSelection === null){
            break;
        }
        playRound(humanSelection, computerSelection);
        currentRound++;
    }

    overallWinner();
}
  

document.getElementById("play").addEventListener("click", playGame,true);
  
