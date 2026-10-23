
function runStage(name, callback) {
    setTimeout(() => {
        console.log(name);
        callback();
    }, 1000);
}

// Nested callbacks
runStage("Design", () => {
    runStage("Build", () => {
        runStage("Test", () => {
            runStage("Deploy", () => {
                runStage("Celebrate", () => {
                    console.log("Pipeline finished");
                });
            });
        });
    });
});

// Async/await version
function stage(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(name);
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    await stage("Design");
    await stage("Build");
    await stage("Test");
    await stage("Deploy");
    await stage("Celebrate");

    console.log("Pipeline finished");
}

runPipeline();
