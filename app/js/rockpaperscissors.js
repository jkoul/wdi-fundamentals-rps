////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playermove;
    if (move)
        {playermove = move;
        } else {playermove = getInput();
        } return playermove;
}

function getComputerMove(move) {
    var computermove;
    if (move)
    {computermove = move;
    } else {computermove = randomPlay();
    } return computermove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    switch (playerMove) {
            case 'rock':
            if (computerMove = 'rock') {winner = 'tie';
            } else if (computerMove = 'paper') {winner = 'computer';
            } else {winner = 'player';};
            break;
        case 'paper':
            if (computerMove = 'rock') {winner = 'player';
            } else if (computerMove = 'paper') {winner = 'tie';
            } else {winner = 'computer';};
            break;
        default:
            if (computerMove = 'rock') {winner = 'computer';
            } else if (computerMove = 'paper') {winner = 'player';
            } else {winner = 'tie';};
    } return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

