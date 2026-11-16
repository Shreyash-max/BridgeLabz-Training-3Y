"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

class NegativeAmountError extends Error {}
class MissingPropertyError extends Error {}
class NullTransactionError extends Error {}

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new NullTransactionError("Null transaction");
        }

        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new MissingPropertyError("Missing id or amount");
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError("Negative amount");
        }

        valid.push(transaction);
        console.log("Valid transaction:", transaction);
    } catch (error) {
        invalid.push({
            transaction,
            type: error.constructor.name,
            message: error.message
        });

        console.log("Invalid:", error.constructor.name, error.message);
    }
}

console.log("\nValid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful count:", valid.length);
console.log("Failed count:", invalid.length);

// Debug tip: Set a breakpoint inside the try block and inspect
// transaction, valid, invalid, and error in VS Code.