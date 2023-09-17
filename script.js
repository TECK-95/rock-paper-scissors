let playerScore = 0;
let computerScore = 0;
let games = 0;

function getComputerChoice() {
    let choice = Math.floor((Math.random()*3)+1)
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
    plChoice = prompt("Welcome to Rock, Paper, Scissors! Make Your Choice Below:")
    plChoice = plChoice.charAt(0).toUpperCase() + plChoice.slice(1)
    return "You Chose: " + plChoice
}

function playRound(playerSelection, getComputerChoice) {
    console.log(playerSelection())
    console.log(getComputerChoice())
    if (computerChooses===plChoice) {
        games++;
        console.log("It's a Draw!");
    } else if (computerChooses==="Rock"&&plChoice==="Paper") {
        playerScore++;
        games++;
        console.log("You Win!");
    } else if (computerChooses==="Rock"&&plChoice==="Scissors") {
        computerScore++;
        games++;
        console.log("You Lose! Rock Beats Scissors!");
    } else if (computerChooses==="Paper"&&plChoice==="Scissors") {
        playerScore++;
        games++;
        console.log("You Win!");
    } else if (computerChooses==="Paper"&&plChoice==="Rock") {
        computerScore++;
        games++;
        console.log("You Lose! Paper Beats Rock!");
    } else if (computerChooses==="Scissors"&&plChoice==="Rock") {
        playerScore++;
        games++
        console.log("You Win!");
    } else if (computerChooses==="Scissors"&&plChoice==="Paper") {
        computerScore++;
        games++;
        console.log("You Lose! Scissors Beats Paper!");
    } else if (playerScore=5) {
        console.log("You Win! Ultimate Victory!");
        let playerScore = playerScore - playerScore;
        let computerScore = computerScore - computerScore;
        let games = games - games;
    } else if (computerScore=5) {
        console.log("You Lose! Ultimate Defeat!");
        let playerScore = playerScore - playerScore;
        let computerScore = computerScore - computerScore;
        let games = games - games;
    }
}

function game(playRound) {
    playRound(playerSelection,getComputerChoice)
    gameScore = "After " + games + " games, the score is You: " + playerScore + " - Computer: " + computerScore;
    console.log(gameScore);
    playRound(playerSelection,getComputerChoice)
    console.log(gameScore);
    playRound(playerSelection,getComputerChoice)
    console.log(gameScore);
    playRound(playerSelection,getComputerChoice)
    console.log(gameScore);
    playRound(playerSelection,getComputerChoice)
    console.log(gameScore);
    playRound(playerSelection,getComputerChoice)
    console.log(gameScore);
    playRound(playerSelection,getComputerChoice)
    console.log(gameScore);
    playRound(playerSelection,getComputerChoice)
    console.log(gameScore);
    playRound(playerSelection,getComputerChoice)
    console.log(gameScore);
}