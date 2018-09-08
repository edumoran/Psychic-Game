/*Instructions:

1. The game starts with the computer randomly picking a letter and the player(user) is going to guess this letter.

2. The game will start when the player presses any letter (no symbols) from the keyboard, these letters will be printed
below, the player will only have 10 guesses before the game is over.

3. If the player guesses the random letter it will be recorder in the "Wins" counter, if the player can't guess then it
be recored in the "losses" counter.

4. The game will automatically restart after pressing the keyboard 10 times (regardless of winning or losing). */

//First, create the array with the options that Zoltar will take in mind
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//Next, the main variables
var wins = 0;
var losses = 0;
var attempts = 9;
//nerd option
var guessChoices = [];

//When the user presses any key, run the function
document.onkeyup = function(event) {

      var userGuess = event.key;
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
      //console.log (userGuess) - to check if what the user types gets logged      

     if (options.indexOf(userGuess) > -1) {

           if (userGuess === computerGuess) {
                 wins++;
                 numGuesses = 9;
                 guessChoices = [];
           }

           if (userGuess != computerGuess) {
                 numGuesses --;
                 guessChoices.push(userGuess);
           }

           if (numGuesses === 0) {

           numGuesses = 9;
           losses ++;
           guessChoices = [];
           }
     }

     document.getElementById("wins").innerHTML = won;
     document.getElementById("losses").innerHTML = lost;
     document.getElementById("attempts").innerHTML = attempts;
			
}


