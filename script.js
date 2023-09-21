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

/*function playerSelection() {
    plChoice = prompt("Welcome to Rock, Paper, Scissors! Make Your Choice Below:")
    plChoice = plChoice.charAt(0).toUpperCase() + plChoice.slice(1)
    return "You Chose: " + plChoice;
}*/

/*function playRound(playerSelection, getComputerChoice) {
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
}*/  

/*function game(playRound) {
    games = 0;
    playerScore = 0;
    computerScore = 0;
    console.log("Games:" + games + " Score: You:" + playerScore + " Computer:" + computerScore)
    for (playerScore===0&&computerScore===0&&games===0; playerScore<5&&computerScore<5;) {
        playRound(playerSelection,getComputerChoice)
    }
    if (playerScore===5) {
        console.log("You Win! Ultimate Victory!");
    } else if (computerScore===5) {
        console.log("You Lose! Ultimate Defeat!");
    }
}*/

const game = document.querySelector(".game");
const plChoices = document.createElement("div");
const comChoices = document.createElement("div");
const message = document.createElement("div");
plChoices.classList.add("plChoices");
plChoices.style["display:flex;"];
comChoices.classList.add("comChoices");
comChoices.style["display:flex;"];
message.classList.add("message");
message.style["display:flex;"]

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    let plChoice = "Rock";
    console.log(plChoice);
    getComputerChoice();
    console.log(computerChooses);
    if (computerChooses===plChoice) {
        let plScore = document.querySelector(".plScore");
        let comScore = document.querySelector(".comScore");
        plScore.textContent = playerScore;
        plScore.append;
        comScore.textContent = computerScore;
        comScore.append;
        plChoices.textContent = ("You Chose: " + plChoice);
        game.appendChild(plChoices);
        comChoices.textContent = ("The Computer Chose: " + computerChooses);
        game.appendChild(comChoices);
        message.textContent = "It's a Draw!";
        game.appendChild(message);
    } else if (computerChooses==="Paper") {
        computerScore++;
        let plScore = document.querySelector(".plScore");
        let comScore = document.querySelector(".comScore");
        comScore.textContent = computerScore;
        comScore.append;
        plChoices.textContent = ("You Chose: " + plChoice);
        game.appendChild(plChoices);
        comChoices.textContent = ("The Computer Chose: " + computerChooses);
        game.appendChild(comChoices);
        message.textContent = "You Lose!"
        game.appendChild(message);
    } else if (computerChooses==="Scissors") {
        playerScore++;
        let plScore = document.querySelector(".plScore");
        let comScore = document.querySelector(".comScore");
        plScore.textContent = playerScore;
        plScore.append;
        plChoices.textContent = ("You Chose: " + plChoice);
        game.appendChild(plChoices);
        comChoices.textContent = ("The Computer Chose: " + computerChooses);
        game.appendChild(comChoices);
        message.textContent = "You Win!";
        game.appendChild(message);
    }
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    let plChoice = "Paper";
    console.log(plChoice);
    getComputerChoice();
    console.log(computerChooses);
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    let plChoice = "Scissors";
    console.log(plChoice);
    getComputerChoice();
    console.log(computerChooses);
});