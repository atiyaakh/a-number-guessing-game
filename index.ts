#! /usr/bin/env node


import inquirer from "inquirer";


// 1) computer will generate a random number
// 2) user input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);
if (answers.userGuessingNumber === randomNumber) // (ager yea condition true hai)
 {
    console.log("Congratulation! You Guess Right Number.");
}
else {
    console.log("You Guessed a Wrong Number.");
}
console.log(answers);
