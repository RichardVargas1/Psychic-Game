
// Variable, that houses an array, containing the alphabet.
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Variables that record the wins, losses, # of guesses left, and which letter the user chose.
var wins = 0;
var loses = 0;
var guessesLeft
var guessedLetters 
// Established computer choise, what the user will have to guess.
var computerChoice

// onkeyup will record any pressed key the user makes.
document.onkeyup = function(event) {
  var userGuess = event.key;
  if (userGuess === computerChoice) {
    win();
    //  Subtracts each guess if the user does not make correct guess.
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    fail(userGuess);
  }

  display();
}

resetGame();
display();

// Functions that will add onto the wins and losses counter. Will also reset game if numbers run out.
function win() {
  wins++;
  resetGame();
}

function lost() {
  loses++;
  resetGame();
}

function fail(letter) {
  guessesLeft--;
  guessedLetters.push(letter);
}

function resetGame() {
  guessesLeft = 15;
  guessedLetters = [];
  computerChoice = letters[Math.floor(Math.random() * letters.length)];
}

function display() {
  // Acquiring the ids from the html (document) element. Linking this helps establish the games relationship.
  var winsP = document.getElementById("wins");
  var losesP = document.getElementById("loses");
  var numberOfGuessesLeft = document.getElementById("numberOfGuessesLeft");
  var letterGuessed = document.getElementById("lettersAlreadyGuessed");
  winsP.innerHTML = wins;
  losesP.innerHTML = loses;
  numberOfGuessesLeft.innerHTML = guessesLeft;
  letterGuessed.innerHTML = guessedLetters.join(',');
}

function win() {
  wins++;
  resetGame();
}

function lost() {
  loses++;
  resetGame();
}

function fail(letter) {
  guessesLeft--;
  guessedLetters.push(letter);
}

function resetGame() {
  // Number of guess left for the user.
  guessesLeft = 15;
  guessedLetters = [];
  computerChoice = letters[Math.floor(Math.random() * letters.length)];
}