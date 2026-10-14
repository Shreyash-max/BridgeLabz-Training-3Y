
/* Q4: Academic Performance Evaluator */

// Marks obtained in five subjects (out of 100)
let marks = [90, 85, 78, 88, 92];

// Calculate total, average, and percentage
let total = 0;

for (let mark of marks) {
    total += mark;
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
let failedSubject = marks.some(mark => mark < 35);

// Display results
console.log("Total Marks:", total);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

// Apply promotion conditions
if (failedSubject || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}