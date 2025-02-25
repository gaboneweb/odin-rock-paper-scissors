function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor((Math.random() * choices.length - 1) + 1);
    return choices.at(index);
}



function getHumanChoice(){
    let choice;
    do{
        choice = prompt("Please enter your choice between 'Rock', 'Paper' or 'Scissors'");
    }
    while (!['rock', 'paper', 'scissors'].includes(choice.toLocaleLowerCase()))

    return choice;
}


console.log(getHumanChoice());