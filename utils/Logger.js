const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput(prompt, type) {
  return new Promise((resolve, reject) => {
    rl.question(prompt, (input) => {
      if (type === "number") {
        input = input.trim();
        if (input === "" || input === null) {
          resolve(input);
          return;
        }
        const num = parseFloat(input);
        if (isNaN(num)) {
          console.log("Invalid input. Please enter a number.");

          resolve(getInput(prompt, type)); // Retry for valid input
        } else {
          resolve(num);
        }
      } else {
        resolve(input);
      }
    });
  });
}

function close() {
  rl.close();
}

module.exports = { getInput, close };
