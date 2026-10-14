
/*
Q8: Dynamic Discount Evaluator
Apply category discounts and an additional cart discount.
*/

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let originalTotal = 0;
let discountedTotal = 0;

// Calculate discounts for each product
for (const product of cart) {
    originalTotal += product.price;

    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discount = product.price * discountRate;
    const finalPrice = product.price - discount;

    discountedTotal += finalPrice;

    console.log(
        `${product.item}: Original = ₹${product.price}, ` +
        `Discount = ₹${discount}, Final = ₹${finalPrice}`
    );
}

// Apply an extra 5% discount if original cart value exceeds ₹50,000
let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
}

// Use reduce() to calculate the original cart total
const cartTotal = cart.reduce(
    (total, product) => total + product.price,
    0
);

// Final payable amount
const finalTotal = discountedTotal - extraDiscount;

console.log("\n===== Cart Summary =====");
console.log(`Original Total: ₹${cartTotal}`);
console.log(`After Category Discounts: ₹${discountedTotal}`);
console.log(`Extra Cart Discount: ₹${extraDiscount}`);
console.log(`Final Payable Amount: ₹${finalTotal}`);
