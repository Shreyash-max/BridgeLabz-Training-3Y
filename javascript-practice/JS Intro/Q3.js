
/* Q3: Monthly Expense Tracker */

// Store expenses for five categories
let expenses = [
    { category: "Food", amount: 5000 },
    { category: "Travel", amount: 2000 },
    { category: "Rent", amount: 10000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1000 }
];

// Calculate total expenses
let total = 0;

for (let expense of expenses) {
    total += expense.amount;
}

// Calculate average and tax
let average = total / expenses.length;
let tax = total * 0.10;

// Add tax to the total using an assignment operator
let finalAmount = total;
finalAmount += tax;

// Display the results
console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + finalAmount.toFixed(2));