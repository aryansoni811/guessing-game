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
      if (number == guess) {
        console.log("Congrats! You guessed the correct number.");
        console.log(all_guess);
        rl.close();
      } else if (number > guess) {
        console.log("Your guess is lower than the chosen number.");
        askForGuess();
      } else if (number < guess) {
        console.log("Your guess is higher than the chosen number.");
        askForGuess();
      } else {
        console.log("Wrong input!!!");
        rl.close();
      }

      if (all_guess.length == 10) {
        console.log("Sorry! You exhausted all your tries.");
        console.log(`The correct number was: ${number}`);
        console.log("Your guesses:", all_guess);
        rl.close();
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
