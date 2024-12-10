// 1. Arithmetic Operators
let a = 10, b = 5;
console.log("Arithmetic Operators:");
console.log(`a + b = ${a + b}`);  // Addition
console.log(`a - b = ${a - b}`);  // Subtraction
console.log(`a * b = ${a * b}`);  // Multiplication
console.log(`a / b = ${a / b}`);  // Division
console.log(`a % b = ${a % b}`);  // Modulus (Remainder)
console.log(`a++ = ${a++}`);      // Post-increment
console.log(`++a = ${++a}`);      // Pre-increment
console.log(`b-- = ${b--}`);      // Post-decrement
console.log(`--b = ${--b}`);      // Pre-decrement

// 2. Assignment Operators
let c = 20;
console.log("\nAssignment Operators:");
console.log(`c = ${c}`);   // Simple assignment
c += 10;
console.log(`c += 10 (c = c + 10): ${c}`);   // Add and assign
c -= 5;
console.log(`c -= 5 (c = c - 5): ${c}`);     // Subtract and assign
c *= 2;
console.log(`c *= 2 (c = c * 2): ${c}`);     // Multiply and assign
c /= 4;
console.log(`c /= 4 (c = c / 4): ${c}`);     // Divide and assign
c %= 3;
console.log(`c %= 3 (c = c % 3): ${c}`);     // Modulus and assign

// 3. Comparison Operators
let x = 10, y = '10';
console.log("\nComparison Operators:");
console.log(`x == y : ${x == y}`);   // Loose equality (compares value only)
console.log(`x === y : ${x === y}`); // Strict equality (compares value and type)
console.log(`x != y : ${x != y}`);   // Loose inequality
console.log(`x !== y : ${x !== y}`); // Strict inequality
console.log(`x > 5 : ${x > 5}`);     // Greater than
console.log(`x < 5 : ${x < 5}`);     // Less than
console.log(`x >= 10 : ${x >= 10}`); // Greater than or equal to
console.log(`x <= 5 : ${x <= 5}`);   // Less than or equal to

// 4. Logical Operators
let p = true, q = false;
console.log("\nLogical Operators:");
console.log(`p && q : ${p && q}`);   // AND operator
console.log(`p || q : ${p || q}`);   // OR operator
console.log(`!p : ${!p}`);           // NOT operator

// 5. Bitwise Operators
let bitA = 5, bitB = 3; // binary: bitA = 0101, bitB = 0011
console.log("\nBitwise Operators:");
console.log(`bitA & bitB : ${bitA & bitB}`);  // AND
console.log(`bitA | bitB : ${bitA | bitB}`);  // OR
console.log(`bitA ^ bitB : ${bitA ^ bitB}`);  // XOR
console.log(`~bitA : ${~bitA}`);              // NOT
console.log(`bitA << 1 : ${bitA << 1}`);      // Left shift
console.log(`bitA >> 1 : ${bitA >> 1}`);      // Right shift

// 6. Ternary Operator
let age = 20;
console.log("\nTernary Operator:");
let canVote = (age >= 18) ? "Yes" : "No";
console.log(`Can vote? : ${canVote}`);

// 7. typeof Operator
console.log("\ntypeof Operator:");
console.log(`typeof 42 : ${typeof 42}`);             // number
console.log(`typeof 'hello' : ${typeof 'hello'}`);   // string
console.log(`typeof true : ${typeof true}`);         // boolean
console.log(`typeof {} : ${typeof {}}`);             // object
console.log(`typeof undefined : ${typeof undefined}`); // undefined
console.log(`typeof function(){} : ${typeof function(){}}`); // function
