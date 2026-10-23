
function deliveryStep(message) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(message + " failed"));
            } else {
                console.log(message);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await deliveryStep("Step 1: Order taken");
        await deliveryStep("Step 2: Food prepared");
        await deliveryStep("Step 3: Package ready");
        await deliveryStep("Step 4: Out for delivery");
        await deliveryStep("Delivery completed!");
    } catch (error) {
        console.log("Pipeline failed!");
    }
}

runPipeline();
