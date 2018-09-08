/*Instructions:

1. The game starts with the computer randomly picking a letter and the player(user) is going to guess this letter.

2. The game will start when the player presses any letter (no symbols) from the keyboard, these letters will be printed
below, the player will only have 10 guesses before the game is over.

3. If the player guesses the random letter it will be recorder in the "Wins" counter, if the player can't guess then it
be recored in the "losses" counter.

4. The game will automatically restart after pressing the keyboard 10 times (regardless of winning or losing). */

//First we establish the variables with their respective counters
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//Next, the letter that Zoltar will randomly choose
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter); //- to see if this works so far

//Then the random number generated will select a letter from the array and assign it to the variable ranLetter
function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter); //- to see if this works so far
}

// The.onkeyup will get the player's choice
document.onkeyup = function (event) {
      var playerGuess = event.key;

// If the player is correct
      if (playerGuess === ranLetter) {
            wins++;
            attempts = 10;
            usedArray = [];
      }

//If the player is incorrect - wrong answers will count as attempts
      jsGuess();
      if (playerGuess !== ranLetter) {
            attempts--;
      }

//If the player runs out of attempts then the "losses" counter will start counting
      if (attempts == 0) {
            losses++;
            usedArray = []
            attempts = 10;
      }

//Writing the information in the html - bootstrap document - and this is where it goes to hell
      document.getElementById("wins").innerHTML = won;
      document.getElementById("losses").innerHTML = lost;
      document.getElementById("attempts").innerHTML = attempts;
			
}


