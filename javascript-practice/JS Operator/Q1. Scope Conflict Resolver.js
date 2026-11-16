
/*
Q1: Scope Conflict Resolver
Global bonus is added only when the employee is permanent.
*/

// Global variable
let bonus = 5000;

// Function with a local salary variable
function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    // Add bonus only for permanent employees
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log(`Permanent Employee: ${isPermanent}`);
    console.log(`Total Salary: ${salary}`);
}

// Test both conditions
calculateSalary(true);
calculateSalary(false);

// Global bonus remains unchanged
console.log(`Global Bonus: ${bonus}`);
