
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Shared by all Car objects.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

// Create two car objects.
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

// Call the shared prototype method.
car1.getDetails();
car2.getDetails();

// Both objects share the same method.
console.log(
    car1.getDetails === car2.getDetails
); // true
