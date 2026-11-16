
/*
Q10: Departmental Employee Evaluator
Evaluate performance scores by department.
*/

// Department names and their performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Evaluate each department
console.log("===== Department Performance Report =====");

for (const department of departments) {
    const departmentName = department[0];
    const score = department[1];

    let evaluation;

    // Nested if-else conditions
    if (score >= 90) {
        evaluation = "Excellent";
    } else {
        if (score >= 75) {
            evaluation = "Good";
        } else {
            if (score >= 60) {
                evaluation = "Average";
            } else {
                evaluation = "Needs Improvement";
            }
        }
    }

    console.log(
        `${departmentName}: Score = ${score}, Rating = ${evaluation}`
    );
}
