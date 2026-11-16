
function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    // Execute the callback after the greeting.
    callback();
}

// Demonstrate the callback flow.
greetUser("Shreyash", showEndMessage);
