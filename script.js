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

function game()
{
    let computerCounter=0;
    let playerCounter=0;

    for(let i=0;i<5;i++)
    {
        let player = prompt("Enter your move (Rock/Paper/Scissors)");
        let computer = computerPlay();
        console.log("Player entered:" + player);
        console.log("Computer entered:" + computer);

        let winner = playRound(player,computer);
        console.log(winner);
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
    }

    console.log("Final Tally:\nPlayer: "+ playerCounter + " Computer: "+ computerCounter);

    if(playerCounter>computerCounter)
    {
        console.log("Player won the game.");
    }
    else if(computerCounter>playerCounter)
    {
        console.log("Computer won the game.");
    }
    else if(playerCounter==computerCounter)
    {
        let response = prompt("It is a tie. Do you want to play again?(yes/no)");
        if(response.toLowerCase()=="yes")
        {
            console.clear();
            game();
        }
    }
    else
    {
        console.log("Couldn't determine who won");
    }
}

console.log(game());