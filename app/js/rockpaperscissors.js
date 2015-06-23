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
    var playerMove;
    if (move)
        {playerMove = move;
        } else {playerMove = getInput();
        } return playerMove;
}

function getComputerMove(move) {
    var computerMove;
    if (move)
    {computerMove = move;
    } else {computerMove = randomPlay();
    } return computerMove;
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
    while(playerWins < 5 && computerWins < 5) {
        console.log('Player chose ' + playerMove + ' & Computer chose ' + computerMove);
        console.log(winner + ' wins the round');
        if(winner='player') {playerWins +=1;}
        else if (winner = 'computer') {computerWins +=1;}
        else {playerWins +=0 && computerWins+=0;}
    }   console.log('Current score: Player ' + playerWins + ', Computer ' + computerWins)
    return [playerWins, computerWins];
}

