let winCount = 0;
let losesCount = 0;
let computerSelection;
let playerSelection;
const choice = document.getElementById('choice');
const computer = document.getElementById('computer');
const text = document.getElementById('result');
let choiceText = document.createElement('p');
let computerText = document.createElement('p');
let textText = document.createElement('p');
let annoucement = document.createElement('p');
//console.log(game());

function computerPlay(){
    let arr = ["rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * 3)];
}
function play(playerSelection, computerSelection){
    
    choice.appendChild(choiceText);
    computer.appendChild(computerText);
    text.appendChild(textText);
    text.appendChild(annoucement);
     choiceText.textContent = `${playerSelection}`;
     computerText.textContent = `\n${computerSelection}`;

    if( playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        winCount += 1;
      textText.textContent = "You Win! Paper Beats Rock";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        losesCount += 1;
        textText.textContent= "You lose! Paper Beats Rock";
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        losesCount += 1;
        textText.textContent= "You lose! Scissors Beats Paper";
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        winCount += 1;
        textText.textContent = ("You win! Scissors Beats Paper");
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        winCount += 1;
        textText.textContent = ( "You win! Rock beats Scissors");
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        losesCount += 1;
        textText.textContent = ( "You lose! Rock beats Scissors");
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        textText.textContent = ( "it's a tie");
    }
    else{
        textText.textContent( "Enter a valid choice");
    }
    if(winCount == 5){
        if(winCount > losesCount){
            annoucement.textContent = "\nYou Won againts the computer!";
        }
        else if(winCount == losesCount){
            annoucement.textContent = "\nit's a tie between you and the computer!";
        }
        else{
            annoucement.textContent = "\nYou lost againts the computer!";
        }
    }
    
   } 
   
    let button = document.querySelectorAll('button');
    button.forEach((button) => {

    button.addEventListener('click', () => {
            play(button.id, computerPlay());
        });
        
    });
    choice.removeChild(choiceText);
    computer.removeChild(computerText);
    text.removeChild(textText);
    text.removeChild(annoucement);
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
