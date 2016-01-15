////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
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
    }
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
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

var playToFive = function () {
    console.log('Let\'s play Rock Paper Scissors');
    var playerWins = 0;
    var computerWins = 0;
    // This function should continue to play Rock Paper Scissors until either the
    // player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
    // what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {

        if (winner === 'player') {
            console.log('Player chose ' + playerMove + ' while Computer chose ' + ' ' + computerMove);
            playerWins++;
        }
        else if (winner === 'computer') {
          
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            computerWins++;
        }

        else {
            winner = null;
        }
        console.log('The winner is:' + ' ' + winner);
    }
    return [playerWins, computerWins];
}

