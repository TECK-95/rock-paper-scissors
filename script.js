function getComputerChoice(choice) {
    choice = Math.floor((Math.random()*3)+1)
    if (choice===1) {
        computerChooses = "Rock";
    } else if (choice===2) {
        computerChooses = "Paper";
    } else if (choice===3) {
        computerChooses = "Scissors";
    }
    return "The Computer Chose: " + computerChooses;
}

function playerSelection() {
    plChoice = prompt("Welcome to Rock, Paper, Scissors! Make your choice below:")
    plChoice = plChoice.charAt(0).toUpperCase() + plChoice.slice(1)
    return "You Chose: " + plChoice
}

function playRound(playerSelection, getComputerChoice) {
    playerSelection()
    getComputerChoice()
    if (computerChooses===plChoice) {
        console.log("It's a Draw!");
    } else if (computerChooses==="Rock"&&plChoice==="Paper") {
        console.log("You Win!");
    } else if (computerChooses==="Rock"&&plChoice==="Scissors") {
        console.log("You Lose!");
    } else if (computerChooses==="Paper"&&plChoice==="Scissors") {
        console.log("You Win!");
    } else if (computerChooses==="Paper"&&plChoice==="Rock") {
        console.log("You Lose!");
    } else if (computerChooses==="Scissors"&&plChoice==="Rock") {
        console.log("You Win!");
    } else if (computerChooses==="Scissors"&&plChoice==="Paper") {
        console.log("You Lose!");
    }
}