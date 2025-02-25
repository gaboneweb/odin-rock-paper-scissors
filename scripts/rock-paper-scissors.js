function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor((Math.random() * choices.length - 1) + 1);
    return choices.at(index);
}

