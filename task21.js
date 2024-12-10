// 1. Day of the Week Based on Number (Using switch)

function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day number. Please enter a number between 1 and 7.";
    }
}

console.log(getDayOfWeek(3)); // Output: Tuesday

// 2. Grade Evaluation Using switch

function evaluateGrade(grade) {
    switch (grade) {
        case "A":
            return "Excellent";
        case "B":
            return "Good";
        case "C":
            return "Average";
        case "D":
            return "Poor";
        case "F":
            return "Fail";
        default:
            return "Invalid grade. Please enter a valid grade (A, B, C, D, or F).";
    }
}

console.log(evaluateGrade("A")); // Output: Excellent

// 3. Print Numbers Until 5 Using break

for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        break; // Stops the loop when i is greater than 5
    }
    console.log(i); // Output: 1 2 3 4 5
}


// 5. Create a JavaScript Function to Calculate the Area of a Rectangle

function calculateRectangleArea(width = 1, height = 1) {
    return width * height;
}

console.log(calculateRectangleArea(5, 4)); // Output: 20
console.log(calculateRectangleArea(5)); // Output: 5 (since height defaults to 1)
console.log(calculateRectangleArea()); // Output: 1 (both width and height default to 1)
