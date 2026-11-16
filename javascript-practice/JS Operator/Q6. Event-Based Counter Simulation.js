
/*
Q6: Event-Based Counter Simulation
Increase or decrease the counter.
*/

// Counter variable
let count = 0;

// Function to increment the counter
function increment() {
    count++;

    // Nested function to display the updated count
    function showCount() {
        console.log(`Current Count: ${count}`);
    }

    showCount();
}

// Function to decrement the counter
function decrement() {
    count--;

    // Nested function to display the updated count
    function showCount() {
        console.log(`Current Count: ${count}`);
    }

    showCount();
}

// Simulate clicks
increment();
increment();
decrement();
increment();
decrement();
