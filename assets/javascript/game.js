/*Instructions:

1. The game starts with the computer zoltarly picking a letter and the player(user) is going to guess this letter.

2. The game will start when the player presses any letter (no symbols) from the keyboard, these letters will be printed
below, the player will only have 10 guesses before the game is over.

3. If the player guesses the zoltar letter it will be recorder in the "Wins" counter, if the player can't guess then it
be recored in the "losses" counter.

4. The game will automatically restart after pressing the keyboard 10 times (regardless of winning or losing). */

//First, create the array with the options that Zoltar will take in mind
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

//Next, the main variables
var letterGuesses = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var zoltar = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function reset() {
      guessesLeft = 10;
      letterGuesses = [];
      zoltar = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log(zoltar);
}

//When the user presses any key, run the function
document.onkeyup = function (event) {
      var userGuess = event.key;
      letterGuesses.push(userGuess); //push the previously declared variable
      var temp = document.getElementById("userGuesses"); //bring the id from the html file
      temp.textContent = userGuess;

      if (userGuess != zoltar) { //!= not equal
            guessesLeft--; //--decrement operator to subtract from the total number of guesses
            var temp = document.getElementById("guesses");
            temp.textContent = guessesLeft;
      }
      
      else if (userGuess === zoltar) {
            wins++;
            var temp = document.getElementById("wins");
            temp.textContent = wins;
            alert ("Correct! The letter was: " + zoltar);
            reset();
      }

      if (guessesLeft === 0) {
            losses++;
            var temp = document.getElementById("losses");
            temp.textContent = losses;
            alert ("You tried enough! The correct letter was: " + zoltar);
            reset();
      }
}