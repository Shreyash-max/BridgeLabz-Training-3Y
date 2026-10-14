
/* Q9: Random Math Quiz Generator */

// Generate two random numbers between 1 and 20
let number1 = Math.floor(Math.random() * 20) + 1;
let number2 = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator
let operators = ["+", "-", "*", "/"];
let operator = operators[Math.floor(Math.random() * operators.length)];

let answer;

// Calculate the answer using switch
switch (operator) {
    case "+":
        answer = number1 + number2;
        break;

    case "-":
        answer = number1 - number2;
        break;

    case "*":
        answer = number1 * number2;
        break;

    case "/":
        answer = (number1 / number2).toFixed(2);
        break;
}

// Display the question and correct answer
console.log(`Question: ${number1} ${operator} ${number2}`);
console.log("Correct Answer:", answer);