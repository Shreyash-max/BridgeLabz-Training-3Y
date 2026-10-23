// Create a Cart class
class Cart {
    constructor() {
        this.items = [];
    }

    // Add items to the cart
    addItem(name, price, quantity) {
        if (price < 0 || !Number.isFinite(price) ||
            !Number.isInteger(quantity) || quantity <= 0) {
            console.log("Invalid price or quantity.");
            return;
        }

        this.items.push({ name, price, quantity });
    }

    // Calculate the cart total
    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    // Validate coupon and calculate discounted total
    applyCoupon(coupon) {
        // Accept SAVE20, DISC10, and similar percentage coupons
        if (!/^(SAVE|DISC)([1-9]|[1-9]\d|100)$/.test(coupon)) {
            console.log("Invalid coupon code.");
            return this.getTotal();
        }

        const discount = Number(coupon.match(/\d+$/)[0]);
        const total = this.getTotal();
        const finalTotal = total * (1 - discount / 100);

        console.log(`Original Total: ₹${total.toFixed(2)}`);
        console.log(`Discount: ${discount}%`);
        console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);

        return finalTotal;
    }
}

// Create a cart and add items
const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

// Display cart items
console.log("Cart Items:");
cart.items.forEach(item => {
    console.log(
        `${item.name} | ₹${item.price} x ${item.quantity}`
    );
});

// Calculate total and apply coupon
console.log("Cart Total: ₹" + cart.getTotal().toFixed(2));
cart.applyCoupon("SAVE20");