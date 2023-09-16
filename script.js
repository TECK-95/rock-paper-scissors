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