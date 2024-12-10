// // 1. Create a student object with properties name, age, and grade
// const student = {
//     name: "Poorva",
//     age: 21,
//     grade: "A"
// };

// // 2. Read and display the properties of the student
// console.log("Student Details:");
// console.log("Name:", student.name);
// console.log("Age:", student.age);
// console.log("Grade:", student.grade);

// // 3. Update the grade property of the student
// student.grade = "A+";
// console.log("Updated Grade:", student.grade);

// // 4. Delete the age property from the student
// delete student.age;
// console.log("After Deleting Age:", student);


// function addOrUpdateProperty(obj, key, value) {
//     obj[key] = value; // Adds or updates the property in the object
//     console.log(`Property '${key}' updated to '${value}'.`);
// }

// // Example usage
// const car = {
//     make: "Toyota",
//     model: "Supra"
// };

// addOrUpdateProperty(car, "year", 2020); // Adds a new property
// console.log(car); // Output: { make: 'Toyota', model: 'Camry', year: 2020 }

// addOrUpdateProperty(car, "model", "Corolla"); // Updates an existing property
// console.log(car); // Output: { make: 'Toyota', model: 'Corolla', year: 2020 }


// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.displayDetails = function() {
//         console.log(`Title: ${this.title}, \nAuthor: ${this.author}, \nYear: ${this.year}`);
//     };
// }

// // Example usage
// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// book1.displayDetails(); // Output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960

// const book2 = new Book("1984", "George Orwell", 1949);
// book2.displayDetails(); // Output: Title: 1984, Author: George Orwell, Year: 1949


// // Create an empty array
// const fruits = [];

// // Add elements using push (adds to the end)
// fruits.push("Apple");
// fruits.push("Banana");
// console.log("After push:", fruits); // Output: ["Apple", "Banana"]

// // Add elements using unshift (adds to the beginning)
// fruits.unshift("Mango");
// console.log("After unshift:", fruits); // Output: ["Mango", "Apple", "Banana"]

// // Remove the last element using pop
// const lastFruit = fruits.pop();
// console.log("After pop:", fruits); // Output: ["Mango", "Apple"]
// console.log("Removed element:", lastFruit); // Output: "Banana"

// // Remove the first element using shift
// const firstFruit = fruits.shift();
// console.log("After shift:", fruits); // Output: ["Apple"]
// console.log("Removed element:", firstFruit); // Output: "Mango"


// Creating a 2x3 matrix (multi-dimensional array)
const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

// Access each element using nested loops
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at [${i}][${j}]:`, matrix[i][j]);
    }
}
