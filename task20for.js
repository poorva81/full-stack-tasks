let number = 5; // Example input
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log('First program')
console.log("Factorial of", number, "is:", factorial); // Output: 120

console.log('Second program')
let number2 = 6; // Example input

for (let i = 1; i <= 10; i++) {
    console.log(number2 + " × " + i + " = " + (number2 * i));
}

// Output:
// 6 × 1 = 6
// 6 × 2 = 12
// ...
// 6 × 10 = 60


let arr = [2, 5, 8, 3]; // Example input
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log('Third program')
console.log("Sum of array elements is:", sum); // Output: 18
