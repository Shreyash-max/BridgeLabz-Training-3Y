"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const data = JSON.parse(rawData[i]);

        if (data.user === undefined || data.age === undefined) {
            throw new Error("Missing user or age");
        }

        const age = Number(data.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age");
        }

        clean.push({
            user: data.user,
            age: age
        });

        console.log(`Line ${i + 1}: Valid JSON`);
    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

const adults = clean.filter(person => person.age >= 18);

console.log("\nClean data:", clean);
console.log("Errors:", errors);
console.log("Users aged 18 or above:", adults);
console.log("Valid count:", clean.length);
console.log("Error count:", errors.length);