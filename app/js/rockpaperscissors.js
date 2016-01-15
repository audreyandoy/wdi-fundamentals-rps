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
    // Write an expression that operates on a variable called `move`
    var move;
    // If a `move` has a value, your expression should evaluate to that value.
    }
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    else if (move == null) {
        return getInput();
    }
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move;
    // If a `move` has a value, your expression should evaluate to that value.
    if (move > 0) {
        return randomPlay;
    }
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    else if (move == null) {
        return randomPlay();
    }
}

function getWinner(playerMove, computerMove) {


    if (playerMove === computerMove) {
        return 'Tie!';
    }
    else {
        switch (playerMove) {

            case "rock":
                switch (computerMove) {
                    case "rock": return 'tie';
                    case "paper": return 'computer';
                        //  break;
                    case "scissors": return 'player';
                        //  break;

                }
                break;

            case "paper":
                switch (computerMove) {
                    case "paper": return 'tie';
                    case "rock": return 'player';
                        //    break;
                    case "scissors": return 'computer';
                        //break;

                }
                break;
            case "scissors":
                switch (computerMove) {
                    case "scissors": return 'tie';
                    case "rock": return 'computer';
                        //      break;
                    case "paper": return 'player';
                        //                    break;

                }
                break;
        }


    }



}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

