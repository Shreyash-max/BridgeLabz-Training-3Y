
/* Q8: Employee Salary Projection */

// Declare the current salary and annual increment rate
let currentSalary = 30000;
let incrementRate = 10;

// Store yearly salary details
let salaryReport = [];

for (let year = 1; year <= 5; year++) {
    // Apply the annual increment
    currentSalary += currentSalary * incrementRate / 100;

    // Round the salary to the nearest rupee
    currentSalary = Math.round(currentSalary);

    // Store the result for the table
    salaryReport.push({
        Year: year,
        Salary: currentSalary
    });
}

// Display salary projection in table format
console.table(salaryReport);