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
        let result = "Draw!";
        games++;
        console.log("It's a " + result);
        console.log("Games:" + games + " Score: You:" + playerScore + " Computer:" + computerScore);
        return "It's a " + result;
    } else if (computerChooses==="Rock"&&plChoice==="Paper") {
        let result = "Win!";
        games++;
        playerScore++;
        console.log("You " + result);
        console.log("Games:" + games + " Score: You:" + playerScore + " Computer:" + computerScore);
        return "You " + result;
    } else if (computerChooses==="Rock"&&plChoice==="Scissors") {
        let result = "Lose!";
        games++;
        computerScore++;
        console.log("You " + result + " Rock Beats Scissors");
        console.log("Games:" + games + " Score: You:" + playerScore + " Computer:" + computerScore);
        return "You " + result + "  Rock Beats Scissors!";
    } else if (computerChooses==="Paper"&&plChoice==="Scissors") {
        let result = "Win!";
        games++;
        playerScore++;
        console.log("You " + result);
        console.log("Games:" + games + " Score: You:" + playerScore + " Computer:" + computerScore);
        return "You " + result;
    } else if (computerChooses==="Paper"&&plChoice==="Rock") {
        let result = "Lose!";
        games++;
        computerScore++;
        console.log("You " + result + " Paper Beats Rock!");
        console.log("Games:" + games + " Score: You:" + playerScore + " Computer:" + computerScore);
        return "You " + result + " Paper Beats Rock!";
    } else if (computerChooses==="Scissors"&&plChoice==="Rock") {
        let result = "Win!";
        games++;
        playerScore++;
        console.log("You " + result);
        console.log("Games:" + games + " Score: You:" + playerScore + " Computer:" + computerScore);
        return "You " + result;
    } else if (computerChooses==="Scissors"&&plChoice==="Paper") {
        let result = "Lose!";
        games++;
        computerScore++;
        console.log("You " + result + " Scissors Beats Paper!");
        console.log("Games:" + games + " Score: You:" + playerScore + " Computer:" + computerScore);
        return "You " + result + " Scissors Beats Paper!";
    }
}   

function game(playRound) {
    console.log("Games:" + games + " Score: You:" + playerScore + " Computer:" + computerScore)
    for (playerScore===0&&computerScore===0&&games===0; playerScore<5||computerScore<5;) {
        if (playerScore===5) {
            alert ("You Win! Ultimate Victory!");
        } else if (computerScore===5) {
            alert ("You Lose! Ultimate Defeat!");
        } else {
            playRound(playerSelection,getComputerChoice)
        }
    }
}

game(playRound)