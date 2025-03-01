
const MAX_ROUNDS = 5;

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

const playButton = document.querySelector(".play");
const rePlayButton = document.querySelector(".replay");
const roundResultMessage = document.querySelector(".result");
const currentChoices = document.querySelector(".selection");


const gameDialog = document.querySelector(".game");

const playerScore = document.querySelector(".player-score");
const compScore = document.querySelector(".computer-score");
const gameRound = document.querySelector(".round-number");

const selectionButton = document.querySelector(".buttons");



function showGame()
{
    gameDialog.show();
    gameDialog.classList.toggle("game-dialog");
}

function closeGame(){
    gameDialog.classList.toggle("game")
}

function reset(){
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
}


function initialiseGameDialogInfo(){
    gameRound.textContent = 0;
    playerScore.textContent = 0;
    compScore.textContent = 0;

    currentChoices.textContent = `Press the butttons below to start the round!`;
    roundResultMessage.textContent = ``;
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}


function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor((Math.random() * choices.length - 1) + 1);
    return choices.at(index);
}


function getHumanChoice(event){
    return event.target.id;
}

function checkIfWon(currentPlayerChoice, opponentChoice){
        return (currentPlayerChoice === 'rock' && opponentChoice === 'scissors')
        || (currentPlayerChoice === 'scissors' && opponentChoice === 'paper')
        || (currentPlayerChoice === 'paper' && opponentChoice === 'rock');
}

function playRound(humanChoice, computerChoice) {

    gameRound.textContent = currentRound;

    currentChoices.textContent = `${capitalize(humanChoice)} vs ${capitalize(computerChoice)}`;

    if(humanChoice.toLowerCase() === computerChoice.toLowerCase()){
        roundResultMessage.textContent = "Its a draw!";
    }else if(checkIfWon(humanChoice, computerChoice)){
        roundResultMessage.textContent = `You Win!${capitalize(humanChoice)}  beats ${capitalize(computerChoice)}.`;
        humanScore++;
        playerScore.textContent = humanScore;
    }else {
        roundResultMessage.textContent = `You lose!${capitalize(computerChoice)}  beats ${capitalize(humanChoice)}.`;
        computerScore++;
        compScore.textContent = computerScore;
    }
}

function overallWinner(){
    if(humanScore > computerScore){
        roundResultMessage.textContent = `You beat the computer!!Your score ${humanScore} to computer score ${computerScore}.`;
    }else{
        roundResultMessage.textContent = `You lost!!Computor score ${computerScore}, your score ${humanScore}.`;        
    }
}



document.addEventListener("DOMContentLoaded", () => {
    
    playButton.addEventListener("click", ()=>{
        reset();
        initialiseGameDialogInfo();
        showGame();
        playButton.classList.toggle("hide");
        rePlayButton.classList.toggle("show")
    });


    rePlayButton.addEventListener("click", ()=>{
        if(currentRound >= MAX_ROUNDS){
            reset();
            initialiseGameDialogInfo();
        }else {
            currentChoices.textContent = `Please finish current game before RePlay!!`;
        }
    });


    selectionButton.addEventListener("click", (event) =>{
        currentRound++;
        if(currentRound <= MAX_ROUNDS){
            let playerSelection = event.target.id;
            let computerChoice = getComputerChoice();
            playRound(playerSelection, computerChoice);
        }else{
            currentChoices.textContent = `Press RePlay to start again!!`;
        }

        if(currentRound === MAX_ROUNDS){
            overallWinner();  
        }
    });
})



  


  
