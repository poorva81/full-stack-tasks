// for (let i = 0; i < 1; i++) {
//     var varVariable = "I am declared with var";
//     let letVariable = "I am declared with let";
//     const constVariable = "I am declared with const";

//     console.log("Inside loop:");
//     console.log(varVariable);  // Accessible here
//     console.log(letVariable);  // Accessible here
//     console.log(constVariable); // Accessible here
// }

// // Outside the loop
// console.log("Outside loop:");
// console.log(varVariable); // Accessible here because var is function or global scoped
// // console.log(letVariable); // Error: letVariable is not defined (block-scoped)
// // console.log(constVariable); // Error: constVariable is not defined (block-scoped)

// // Conditional block example
// if (true) {
//     var varInsideIf = "I am var inside if";
//     let letInsideIf = "I am let inside if";
//     const constInsideIf = "I am const inside if";

//     console.log("Inside if block:");
//     console.log(varInsideIf);  // Accessible here
//     console.log(letInsideIf);  // Accessible here
//     console.log(constInsideIf); // Accessible here
// }

// // Outside the if block
// console.log("Outside if block:");
// console.log(varInsideIf); // Accessible here because var is function or global scoped
// // console.log(letInsideIf); // Error: letInsideIf is not defined (block-scoped)
// // console.log(constInsideIf); // Error: constInsideIf is not defined (block-scoped)


// var globalVar = "I am a global variable"; // Global scope

// function scopeExample() {
//     var functionVar = "I am a function scoped variable"; // Function scope
//     console.log("Inside function:");
//     console.log(globalVar);    // Accessible here (global scope)
//     console.log(functionVar);   // Accessible here (function scope)
    
//     if (true) {
//         let blockVar = "I am a block scoped variable"; // Block scope
//         console.log("Inside block:");
//         console.log(globalVar);    // Accessible here (global scope)
//         console.log(functionVar);   // Accessible here (function scope)
//         console.log(blockVar);      // Accessible here (block scope)
//     }

//     // Outside block
//     console.log("Outside block but inside function:");
//     console.log(globalVar);       // Accessible here (global scope)
//     console.log(functionVar);      // Accessible here (function scope)
//     // console.log(blockVar);      // Error: blockVar is not defined (block scope)
// }

// scopeExample();

// // Outside function
// console.log("Outside function:");
// console.log(globalVar);           // Accessible here (global scope)
// // console.log(functionVar);      // Error: functionVar is not defined (function scope)
// // console.log(blockVar);         // Error: blockVar is not defined (block scope)


const person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");

        // Nested regular function
        function nestedFunction() {
            console.log("Inside nested function:");
            console.log("My name is " + this.name); // `this` is undefined in strict mode or points to the global object in non-strict mode
        }
        
        nestedFunction();

        // Using arrow function to capture `this` context of the outer function
        const nestedArrowFunction = () => {
            console.log("Inside nested arrow function:");
            console.log("My name is " + this.name + " and I am " + this.age + " years old.");
        };
        
        nestedArrowFunction();
    }
};

person.greet();
