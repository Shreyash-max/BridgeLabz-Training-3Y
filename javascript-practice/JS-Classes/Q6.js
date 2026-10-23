// Create an Employee class
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

// Create five employee objects
const employees = [
    new Employee(1, "Amit", "IT", 50000),
    new Employee(2, "Riya", "HR", 40000),
    new Employee(3, "Rahul", "Sales", 35000),
    new Employee(4, "Priya", "IT", 60000),
    new Employee(5, "Karan", "Finance", 45000)
];

// Apply a 10% bonus to each employee's monthly salary
employees.forEach(employee => employee.applyBonus(10));

// Calculate annual salary for each employee
employees.forEach(employee => {
    console.log(
        `${employee.name}: Annual Salary = ₹${employee.getAnnualSalary()}`
    );
});

// Calculate total annual company payout using reduce()
const totalPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log("Total Annual Payout: ₹" + totalPayout);