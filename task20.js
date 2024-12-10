let n = 5; // Example input
let sum = 0;
let i = 1;

while (i <= n) {
    sum += i;
    i++;
}

console.log("Sum of first", n, "natural numbers is:", sum); // Output: 15

let number = 1234; // Example input
let reversed = 0;

while (number > 0) {
    let digit = number % 10; // Get the last digit
    reversed = reversed * 10 + digit; // Add the digit to reversed
    number = Math.floor(number / 10); // Remove the last digit from the number
}

console.log("Reversed number is:", reversed); // Output: 4321

let number1 = 17; // Example input
let isPrime = true;
let j = 2;

while (j <= Math.sqrt(number1)) {
    if (number1 % j === 0) {
        isPrime = false;
        break;
    }
    j++;
}

if (isPrime && number1 > 1) {
    console.log(number1 + " is a prime number"); // Output: 17 is a prime number
} else {
    console.log(number1 + " is not a prime number");
}
