let winCount = 0;
let losesCount = 0;
console.log(game());

function computerPlay(){
    let arr = ["rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * 3)];
}
function play(playerSelection, computerSelection){

     playerSelection = prompt("Enter: Rock or paper or scissors: ");
     computerSelection = computerPlay();
    if( playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        winCount += 1;
        return "You Win! Paper Beats Rock";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        losesCount += 1;
        return "You lose! Paper Beats Rock";
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        losesCount += 1;
        return "You lose! Scissors Beats Paper";
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        winCount += 1;
        return "You win! Scissors Beats Paper";
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        winCount += 1;
        return "You win! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        losesCount += 1;
        return "You lose! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "it's a tie";
    }
    else{
        return "Enter a valid choice";
    }
}
function game(){
    for (let i = 1; i <= 5 ; i++){
        play();
        
    }
    if(winCount > losesCount){
        console.log("you have won!");
    }
    else if(winCount == losesCount){
        console.log("It's a tie!");
    }
    else if(winCount < losesCount){
        console.log("You have lost!")
    }
    
}
