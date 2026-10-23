
function loadProfile() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Profile Loaded"), 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5
                ? reject("Posts failed")
                : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Messages Loaded"), 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log("Success:", result.value);
        } else {
            console.log("Failed:", result.reason);
        }
    });

    console.log("Total time:", Date.now() - startTime, "ms");
}

loadDashboard();
