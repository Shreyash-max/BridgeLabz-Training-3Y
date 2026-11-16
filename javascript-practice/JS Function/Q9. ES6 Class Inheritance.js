
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // Initialize inherited properties.
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

// Create an object.
const student1 = new Student("Shreyash", "Computer Science");

student1.showName();
student1.showBranch();

// Verify inheritance.
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true
