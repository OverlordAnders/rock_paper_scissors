let playerSelection = prompt('Rock, Paper, Scissors?').toLowerCase();
let computerSelection = getComputerChoice();
let roundWinner = '';
let playerScore = 0;
let computerScore = 0;

function getComputerChoice (){
 const choice = ["Rock", "Paper", "Scissors"]
 return choice[Math.floor(Math.random() * choice.length)];
}
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        roundWinner = 'Its a draw'
    }
    else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ){
        playerScore++
        roundWinner="You've won!"
    }
    else{
        computerScore++
        roundWinner="The Computer has Won"
    }
    return (computerScore, playerScore,roundWinner)
}
console.log(playRound(playerSelection, computerSelection))

function game(){
    for(let i=0 ; i < 5; i++){
        playRound()
    }
}