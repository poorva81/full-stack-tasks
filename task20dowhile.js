const prompt =require("prompt-sync")()

let correctNumber = 8; // Assume this is the correct answer
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
    if (guess !== correctNumber) {
        console.log("Try again.");
    }
} while (guess !== correctNumber);

console.log("Correct! You guessed the right number.");


let number;

do {
    number = parseInt(prompt("Enter a positive number: "), 10);
    if (number <= 0) {
        console.log("Please enter a positive number.");
    }
} while (number <= 0);

console.log("You entered a positive number:", number);


const correctPassword = "correctpass";
let attempt = 0;
let password;

do {
    password = prompt("Enter password: ");
    attempt++;
    
    if (password === correctPassword) {
        console.log("Success! Logged in.");
        break;
    } else if (attempt < 3) {
        console.log("Incorrect password. Try again.");
    }
} while (password !== correctPassword && attempt < 3);

if (password !== correctPassword && attempt === 3) {
    console.log("Error: Three failed attempts.");
}
