"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const valid = [];
const invalid = [];

for (const value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Empty strings and whitespace must not count as valid numbers.
    const isValid =
        value !== undefined &&
        value !== null &&
        String(value).trim() !== "" &&
        Number.isFinite(numberValue);

    console.log(`Value: ${stringValue}`);
    console.log(`Number: ${numberValue}, Boolean: ${booleanValue}`);

    if (isValid) {
        valid.push(numberValue);
    } else {
        invalid.push(value);
        console.log("Invalid numeric value:", value);
    }

    console.log("--------------------");
}

console.log("Valid numeric data:", valid);
console.log("Invalid data:", invalid);