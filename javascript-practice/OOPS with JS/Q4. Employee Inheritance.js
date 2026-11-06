class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is working");
    }
}

class Manager extends Employee {
    work() {
        console.log(this.name + " is managing the team");
    }
}

let e1 = new Employee("Rahul", "IT");
let m1 = new Manager("Aman", "HR");

e1.work();
m1.work();