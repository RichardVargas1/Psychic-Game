    // Array containing the choices the computer has to make, based off of user responses.
    var computerChoices = ["r", "p", "s"];

    // Variables that record the score for the game. Before game starts, counters start at the number 0.
    var wins = 0;
    var losses = 0;
    var ties = 0;

    // These variables will display references from the user/computer choices. It also contains the references for
    // Wins, losses, and ties.
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var tiesText = document.getElementById("ties-text");

    // Onkeyup is run whenever the user presses down onto key. It will record any result.
    document.onkeyup = function(event) {

    // Helps the computer process whatever key the user touched. It will then respond with a guess of it's own:
    var userGuess = event.key;

    // After the user makers their guess, the computer will then make it's own guess.
    //The computer will only make choices from the array created on the code line #2.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This is the overall background of the game. This will help the computer process the results of each game.
    // Also, after each win/loss/or tie, the game wil reset without having to hit the refresh button. The game can go on for as long as the user wants.
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r") && (computerGuess === "s")) {
        wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
        losses++;
        } else if ((userGuess === "s") && (computerGuess === "r")) {
        losses++;
        } else if ((userGuess === "s") && (computerGuess === "p")) {
        wins++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
        wins++;
        } else if ((userGuess === "p") && (computerGuess === "s")) {
        losses++;
        } else if (userGuess === computerGuess) {
        ties++;
        }


        // Illustrates user/computer guesses. Including the wins, losses, and ties for bth parties.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
        // Alert notifying the user to press certain keys to play the game.
        // (This helps notify the user to turn off caps, or to not hold down the shift key).
        // This alert pops up at anytime the user has caps lock, or the shift key, on.
    } else {
        alert("Please choose r, p, or s");
    }
};