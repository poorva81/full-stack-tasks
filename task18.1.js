// 1. Add a string and a number
let str1 = "10";
let num1 = 5;
let result1 = str1 + num1; // Implicitly converts the number to a string
console.log(`Result of adding a string and a number ("10" + 5): ${result1}`); // "105"
// Explanation: The number 5 is implicitly converted to a string, so "10" + "5" results in "105" (string concatenation).

// 2. Subtract a string from a number
let str2 = "20";
let num2 = 8;
let result2 = num2 - str2; // Implicitly converts the string to a number
console.log(`Result of subtracting a string from a number (8 - "20"): ${result2}`); // -12
// Explanation: The string "20" is implicitly converted to a number (20), and then 8 - 20 results in -12 (number subtraction).

// 3. Use the == operator to compare a boolean and a number
let bool1 = true;  // true is equivalent to 1
let num3 = 1;
let result3 = (bool1 == num3); // Implicitly converts the boolean to a number
console.log(`Result of comparing a boolean and a number (true == 1): ${result3}`); // true
// Explanation: The boolean `true` is implicitly converted to the number 1, so 1 == 1 results in true.

// 4. Use the + operator to add a boolean and a string
let bool2 = false;  // false is equivalent to 0
let str3 = "Hello";
let result4 = bool2 + str3; // Implicitly converts the boolean to a string
console.log(`Result of adding a boolean and a string (false + "Hello"): ${result4}`); // "falseHello"
// Explanation: The boolean `false` is implicitly converted to the string "false", and then concatenated with "Hello" resulting in "falseHello".

// 5. Example of explicit type conversion
let str4 = "123";
let explicitNum = Number(str4);  // Explicitly converting a string to a number
console.log(`Explicit conversion of string "123" to number: ${explicitNum}`); // 123 (number)
// Explanation: The string "123" is explicitly converted to the number 123 using the Number() function.
