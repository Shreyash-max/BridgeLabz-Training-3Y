let menu = {
    Pizza: 200,
    Burger: 100,
    Pasta: 150
};

function calculateBill(orderItems) {
    let prices = orderItems.map(item => {
        if (!menu[item]) throw new Error(item + " is not available");
        return menu[item];
    });

    return prices.reduce((a, b) => a + b, 0);
}

try {
    console.log("Total Bill:", calculateBill(["Pizza", "Burger"]));
} catch (error) {
    console.log("Error:", error.message);
}