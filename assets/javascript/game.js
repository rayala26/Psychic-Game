// Define alphabet letters computer can pick from 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


// Initial golbal variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

// userGuess is what user picks by pressing a key
var userGuess = null;

// Computer picks a letter and stores it in letterToBeGuessed
var letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)]; 

// start listening for events
document.onkeyup = function(event) {
  // When user presses a key, it records it and saves to userGuess
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
    guessesLeft--;
  }

  if (letterToBeGuessed == userGuess) {
    console.log("You won!");
    guessesLeft = 10;
    wins++;
    guessesSoFar = [];
    console.log("Wins: " + wins + "Losses: " + losses + "Guesses left: " + guessesLeft + "Guesses so far: " + guessesSoFar + "Computer picked: " + letterToBeGuessed);
  }

  if (guessesLeft == 0) {
    console.log("You lost!");
    guessesLeft = 10;
    losses++;
    guessesSoFar = [];
    console.log("Wins: " + wins + "Losses: " + losses + "Guesses left: " + guessesLeft + "Guesses so far: " + guessesSoFar + "Computer picked: " + letterToBeGuessed);
  }
  
  var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
  document.querySelector("#game").innerHTML = html;

}