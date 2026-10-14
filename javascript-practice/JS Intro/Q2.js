
/* Q2: Multi-Type Data Summary */

// Declare variables of different data types
let userName = "Shreyash";                // String
let age = 21;                             // Number
let isStudent = true;                     // Boolean
let subjects = ["Java", "JavaScript"];    // Array
let user = { city: "Mathura" };           // Object
let address = null;                       // Null
let phoneNumber;                          // Undefined

// Create a report with each value and its type
let report = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "user", value: user, type: typeof user },
    { label: "address", value: address, type: address === null ? "null" : typeof address },
    { label: "phoneNumber", value: phoneNumber, type: typeof phoneNumber }
];

// Print the complete report in one table
console.table(report);