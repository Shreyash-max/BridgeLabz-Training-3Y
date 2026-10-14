
/*
Q3: Math Utility Dashboard
Perform mathematical calculations.
*/

// Given number
let x = 16.75;

// Mathematical operations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);

// Random integer between 10 and 50, inclusive
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted summary
console.log(`
===== Math Utility Dashboard =====
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Cube: ${cube}
Random Number (10-50): ${randomNumber}
`);
