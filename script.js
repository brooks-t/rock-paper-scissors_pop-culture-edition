var rps = ["r", "p", "s"];
var random = 0;
var score = {
    wins: 0,
    losses: 0,
    ties: 0
}

function rockPaperScissors() {
    var player1 = prompt("Play 'R' for rock. 'P' for paper. 'S' for scissors");
    if (player1 !== "r" && player1 !=="R" && player1 !== "p" && player1 !== "P" && player1 !== "s" && "S") {
        alert("Please enter a valid input.");
        rockPaperScissors();
    } else {
            random = Math.floor(Math.random()*3);
        if (random === 0 && player1 === rps[0]) {
            score.ties += 1;
            alert ("You played rock.\nThe computer played rock.\nIt's a tie!");
        } else if (random === 0 && player1 === rps[1]) {
            score.wins += 1;
            alert ("You played paper.\nThe computer played rock.\nYou won!");
        } else if (random === 0 && player1 === rps[2]) {
            score.losses += 1;
            alert ("You played scissors.\nThe computer played rock.\nYou lost!");
        } else if (random === 1 && player1 === rps[0]) {
            score.losses +=1;
            alert ("You played rock.\nThe computer played paper.\nYou lost!");
        } else if (random === 1 && player1 === rps[1]) {
            score.ties +=1;
            alert ("You played paper.\nThe computer played paper.\nIt's a tie!");
        } else if (random === 1 && player1 === rps[2]) {
            score.wins +=1;
            alert ("You played scissors.\nThe computer played paper.\nYou won!");
        } else if (random === 2 && player1 === rps[0]) {
            score.wins +=1;
            alert ("You played rock.\nThe computer played scissors.\nYou won!");
        } else if (random === 2 && player1 === rps[1]) {
            score.losses +=1;
            alert ("You played paper.\nThe computer played scissors.\nYou lost!");
        } else if (random === 2 && player1 === rps[2]) {
            score.ties +=1;
            alert ("You played scissors.\nThe computer played scissors.\nYou tied!");
        }
        
        result = window.confirm("Would you like to keep playing?\nWins: " + score.wins + "\nLosses: " + score.losses + "\nTies: " + score.ties);

        if (result === true) {
            rockPaperScissors();
        }
        else {
            alert("Thanks for playing!")
        }
    }
}

rockPaperScissors();


