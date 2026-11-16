
function Person(name) {
    this.name = name;
}

// Parent prototype method.
Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    // Call the parent constructor.
    Person.call(this, name);
    this.branch = branch;
}

// Inherit methods from Person.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Student-specific prototype method.
Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student1 = new Student("Shreyash", "Computer Science");

student1.showName();
student1.showBranch();

// Demonstrate inheritance.
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true
