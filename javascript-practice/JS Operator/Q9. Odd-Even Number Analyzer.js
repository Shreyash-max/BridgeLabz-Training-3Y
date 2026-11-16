
/*
Q9: Odd-Even Number Analyzer
Classify numbers from 1 to 30.
*/

const results = [];

// Check each number from 1 to 30
for (let number = 1; number <= 30; number++) {
    let result;

    // Check FizzBuzz first
    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    // Store the result in a new array
    results.push(`${number}: ${result}`);
}

// Display all results
console.log("===== Number Analysis =====");

for (const result of results) {
    console.log(result);
}
