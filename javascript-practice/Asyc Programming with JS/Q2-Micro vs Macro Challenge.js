
console.log("Start");

setTimeout(() => {
    console.log("Macrotask");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask");
});

console.log("Synchronous log");
console.log("End");

// Output order:
// Start
// Synchronous log
// End
// Microtask
// Macrotask

// Synchronous code runs first.
// Promise callbacks run as microtasks.
// setTimeout callbacks run as macrotasks after
// the current code and queued microtasks finish.
