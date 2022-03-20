let computerCounter=0;
let playerCounter=0;
let i=0;

let close=document.getElementById("close");
let modalContainer=document.querySelector(".modal-container");
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.comp-score');
let finalScore = document.querySelector('.display-message');
let winner = document.getElementById('winner');
let displayText;
let audio = document.querySelectorAll('audio');
/*
function: computerPlay 
output: randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
*/

function computerPlay()
{
    items=['Rock','Paper','Scissors']
    var item = items[Math.floor(Math.random()*items.length)];
    return item;
}

/*
Input: playerSelection and computerSelection
Output: return a string that declares the winner of the round: 
"You Lose! Paper beats Rock"
*/
function playRound(playerSelection,computerSelection)
{
    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();

    var winner="tie";
    
    if((player=="rock") && (computer=='scissors')) 
        {
            winner='You Win! Rock beats Scissors';
        }
        else if((computer=="rock") && (player=='scissors')) 
        {
            winner='You Lose! Rock beats Scissors';
        }
        else if((player=="paper") && (computer=='rock')) 
        {
            winner='You Win! Paper beats Rock';
        }
        else if((computer=="paper") && (player=='rock')) 
        {
            winner='You Lose! Paper beats Rock';
        }
        else if((player=="scissors") && (computer=='paper')) 
        {
            winner='You Win! Scissors beats Paper';
        }        
        else if((computer=="scissors") && (player=='paper')) 
        {
            winner='You Lose! Scissors beats Paper';
        }
        return winner;
}

function game(player)
{
    let computer = computerPlay();
    let winner= playRound(player,computer);
    let splitString = winner.split(" ")[1];
        
    if (splitString=="Win!")
    {
        playerCounter+=1;
    }
    else if(splitString=="Lose!")
    {
        computerCounter+=1;
    }
    else if(winner=="tie")
    {
        computerCounter+=1;
        playerCounter+=1;
    }
    console.log("Player: "+ playerCounter + " Computer: "+ computerCounter);
    console.log("Iteration " + i + " has completed");
    playerScore.textContent="Player: "+ playerCounter;
    computerScore.textContent="Computer: "+ computerCounter;
    

    console.log("Final Tally:\nPlayer: "+ playerCounter + " Computer: "+ computerCounter);

    if(playerCounter>computerCounter)
    {
        console.log("Player won the game.");
        finalScore.textContent = "Player won the game";
    }
    else if(computerCounter>playerCounter)
    {
        console.log("Computer won the game.");
        finalScore.textContent = "Computer won the game";
    }
    else if(playerCounter==computerCounter)
    {
        /*let response = prompt("It is a tie. Do you want to play again?(yes/no)");
        if(response.toLowerCase()=="yes")
        {
            console.clear();
            game();
        }*/
        finalScore.textContent = "It is a tie";
    }
    else
    {
        console.log("Couldn't determine who won");
        finalScore.textContent = "Couldn't determine who won";
    }
}

/*console.log(game());*/

function removeTransition(e)
{
    setTimeout(function(){
        console.log("Removing");
    }, 2000);
    e.classList.remove('played');
}

function playGame(clickedID)
{
    console.log(clickedID);
    if(computerCounter>=5 & playerCounter<5)
    {
        displayText="You lost";
        modalBox(displayText);
    }
    else if(computerCounter<5 & playerCounter>=5)
    {
        displayText="You won";
        modalBox(displayText);
    }

    game(clickedID);
}

function modalBox(displayText)
{
    modalContainer.classList.add('show');
    winner.textContent=displayText;
    if(displayText=="You won")
    {
        let winSound = document.getElementById('winSound');
        winSound.currentTime = 0;
        winSound.play();
    }
    else if (displayText=="You lost")
    {
        let loseSound = document.getElementById('loseSound');
        loseSound.currentTime = 0;
        loseSound.play();
    }

}

close.addEventListener('click',()=>{
    const audios = Array.from(audio)
    audios.forEach(a => a.pause());
    modalContainer.classList.remove('show');
    playerCounter=0;
    computerCounter=0;
    
    playerScore.textContent="Player: "+ playerCounter;
    computerScore.textContent="Computer: "+ computerCounter;
    finalScore.textContent = "Whoever gets 5 points first wins the game";
});
