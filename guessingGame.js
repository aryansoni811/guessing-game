const { exit } = require("process");
const readline = require("readline");

let rl;
let number; // This variable will store the number the user needs to guess.

// This function asks the user for input.
function getInput(prompt, callback) {
  rl.question(prompt, callback);
}

function generateRandomNumber() {
  // TODO: Write a function to generate a random number between 1 and 100.
  // Your code here.
  let x = Math.floor(Math.random() * 100 + 1);
  return x;
}

// This function contains the game's logic.
function playGame(chosenNumber = null) {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // This checks if a number was provided as an argument. If not, it generates a random number.
  number = chosenNumber || generateRandomNumber();
  /**
   * TODO: Declare and initialize the variables that are required to keep track of game state.
   */
  // Your code here.
  let all_guess = [];
  // This is the core game loop where the user is prompted for guesses.
  const askForGuess = () => {
    getInput("Enter your guess: ", (guess) => {
      all_guess.push(guess);
      if (all_guess.length == 11) {
        console.log("You are out of guesses.");
        console.log("your guesses: ", all_guess);
        exit(0);
      }
      if (number == guess) {
        console.log("you won");
        console.log(all_guess);
        exit(0);
      } else if (number > guess) {
        console.log("too low");
        askForGuess();
      } else if (number < guess) {
        console.log("too high");
        askForGuess();
      } else {
        console.log("Wrong input!!!");
        exit(1);
      }
    });
  };

  // This starts the game loop.
  askForGuess();
}

// If this file is run directly, execute the playGame function.
if (require.main === module) {
  playGame();
}

module.exports = playGame;
