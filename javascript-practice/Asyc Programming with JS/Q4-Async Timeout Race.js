
function deployServer(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(name + " deployment failed");
            } else {
                resolve(name + " completed");
            }
        }, delay);
    });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

// Wait for both servers.
Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => console.log("Error:", error));

// Get the first settled response.
Promise.race([
    deployServer("Server A", 2000),
    deployServer("Server B", 3000)
])
    .then((result) => console.log("Fastest response:", result))
    .catch((error) => console.log("Race failed:", error));
