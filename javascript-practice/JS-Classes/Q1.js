// Create a Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply percentage discount
    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    // Display product details
    displayDetails() {
        return `${this.name} | ${this.category} | ₹${this.price.toFixed(2)}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Phone", 20000, "Electronics"),
    new Product(4, "Book", 500, "Education"),
    new Product(5, "Keyboard", 1500, "Accessories")
];

// Apply a 10% discount to the first product
products[0].applyDiscount(10);

// Display all products
products.forEach(product => console.log(product.displayDetails()));

// Filter products priced above ₹1000
console.log("\nProducts above ₹1000:");
products
    .filter(product => product.price > 1000)
    .forEach(product => console.log(product.displayDetails()));