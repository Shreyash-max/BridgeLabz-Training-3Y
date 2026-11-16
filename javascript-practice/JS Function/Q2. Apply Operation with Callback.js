
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number.
const doubledNumbers = applyOperation(
    numbers,
    num => num * 2
);
console.log("Doubled:", doubledNumbers);

// Square each number.
const squaredNumbers = applyOperation(
    numbers,
    num => num * num
);
console.log("Squared:", squaredNumbers);
