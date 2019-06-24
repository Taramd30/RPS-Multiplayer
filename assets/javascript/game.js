var Rock = document.getElementById('Rock').addEventListener('click', run);
var Paper = document.getElementById('Paper').addEventListener('click', run);
var Scissors = document.getElementById('Scissors').addEventListener('click', run);

var computerChoice;
var playerChoice;

var player = document.getElementById('player');
var computer = document.getElementById('computer');
var outcome = document.getElementById('outcome');

function run() {
    playerChoice = this.innerText;
    computerRun();
    compare();
}

function computerRun() {
    var dice = Math.random();
    if (dice <= 0.33) {
        computerChoice = "Rock";
    } else if (dice > 0.33 && dice <= 0.66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
}

function compare() {
    player.innerHTML = "You Picked " + playerChoice;
    computer.innerHTML = "Computer Picked " + computerChoice;

    if (playerChoice == computerChoice) {
        outcome.innerHTML = "You Tied";

    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        outcome.innerHTML = "You Lose!";
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        outcome.innerHTML = "You Win!";


    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        outcome.innerHTML = "You Win!";
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        outcome.innerHTML = "You Lose!";


    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        outcome.innerHTML = "You Lose!";
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        outcome.innerHTML = "You Win!";
    }
}

