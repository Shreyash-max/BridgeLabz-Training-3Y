"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter pyramid height (default 5): ", (input) => {
    const height = input.trim() === "" ? 5 : Number(input);

    if (!Number.isInteger(height) || height < 1 || height > 100) {
        console.log("Enter a whole number between 1 and 100.");
        rl.close();
        return;
    }

    for (let i = 1; i <= height; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "* ";
        }

        console.log(row.trimEnd());
    }

    rl.close();
});