let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 2 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 20 },
    { id: 4, name: "Jeans", category: "Clothing", price: 2000, stock: 3 }
];

function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
    return products.reduce((groups, p) => {
        (groups[p.category] ||= []).push(p);
        return groups;
    }, {});
}

console.log("Low Stock:", getLowStockProducts());
console.log("Sorted:", sortProductsByPrice());
console.log("Total Value:", calculateTotalInventoryValue());
console.log("Groups:", groupByCategory());