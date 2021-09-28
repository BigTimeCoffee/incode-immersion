function rockPaperScissors(player1, player2) {
    if(player1 == player2) {
        console.log("It's a draw!")
    } 
    if (((player1 == "paper" && player2 == "rock")) || ((player1 == "rock" && player2 == "scissors")) || ((player1 == "scissors" && player2 == "paper"))){
        console.log("Player one wins!");
    } 
    if (((player2 == "paper" && player1 == "rock")) || ((player2 == "rock" && player1 == "scissors")) || ((player2 == "scissors" && player1 == "paper"))){
    console.log("Player two wins!");
    }
    else {
        return console.log("Argument error");
    }
}


rockPaperScissors("paper", "scissors");
rockPaperScissors("rock", "potatoes");
rockPaperScissors("rock", "rock");