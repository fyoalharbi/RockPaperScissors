let winCount = 0;
let losesCount = 0;
let computerSelection;
let playerSelection;

//console.log(game());

function computerPlay(){
    let arr = ["rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * 3)];
}
function play(playerSelection, computerSelection){

     console.log("You chose: " + playerSelection,"\n the computer chose: " + computerSelection);

    if( playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        winCount += 1;
        console.log( "You Win! Paper Beats Rock");
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        losesCount += 1;
        console.log( "You lose! Paper Beats Rock");
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        losesCount += 1;
        console.log( "You lose! Scissors Beats Paper");
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        winCount += 1;
        console.log( "You win! Scissors Beats Paper");
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        winCount += 1;
        console.log( "You win! Rock beats Scissors");
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        losesCount += 1;
        console.log( "You lose! Rock beats Scissors");
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        console.log( "it's a tie");
    }
    else{
        console.log( "Enter a valid choice");
    }
    
   } 
   
    let button = document.querySelectorAll('button');
    button.forEach((button) => {

    button.addEventListener('click', () => {
            play(button.id, computerPlay());
        });
        
    });
   

/*function game(){
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
    
}*/
