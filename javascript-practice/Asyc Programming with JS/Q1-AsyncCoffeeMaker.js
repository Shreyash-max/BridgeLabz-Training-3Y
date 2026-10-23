
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) return reject("Water boiling failed");
            console.log("Water boiled");
            resolve();
        }, 1000 + Math.random() * 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee brewed");
            resolve();
        }, 1000 + Math.random() * 1000);
    });
}

function pourCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee poured into cup");
            resolve();
        }, 1000 + Math.random() * 1000);
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => console.log("Error:", error));
