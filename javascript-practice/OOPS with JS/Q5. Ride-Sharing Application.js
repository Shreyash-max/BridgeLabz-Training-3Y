class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0)
            throw new Error("Invalid distance");

        return this.distance * 10;
    }
}

let driver = new Driver("Aman", 4.8, "Car");
let trip = new Trip("Agra", "Delhi", 200);

console.log(driver.name, driver.vehicle);

try {
    console.log("Fare:", trip.calculateFare());
} catch (error) {
    console.log(error.message);
}