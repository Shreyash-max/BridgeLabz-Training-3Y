
const user = {
    name: "Shreyash",

    // Arrow functions do not have their own 'this'.
    showName: () => {
        console.log(this.name);
    }
};

user.showName(); // undefined in Node.js

// Fix: use a normal function.
user.showName = function () {
    console.log(this.name);
};

user.showName(); // Shreyash
