/**
 * Q4. Multi-API Dashboard (Fetch + Promise.all)
 *
 * Requirements:
 * 1. Your dashboard should display:
 *    - Total users
 *    - Total orders
 *    - Total products
 * 2. All come from different endpoints:
 *    - /users
 *    - /orders
 *    - /products
 * 3. Use Fetch + Promise.all to load all 3 simultaneously.
 * 4. While loading: Show placeholder skeletons.
 * 5. If ANY API fails: Show dashboard with warning: "Some data could not be loaded."
 */

document.addEventListener("DOMContentLoaded", function () {
    const BASE_URL = "http://localhost:3004";
    const warningBanner = document.getElementById("warningBanner");

    const valUsers = document.getElementById("valUsers");
    const subUsers = document.getElementById("subUsers");

    const valOrders = document.getElementById("valOrders");
    const subOrders = document.getElementById("subOrders");

    const valProducts = document.getElementById("valProducts");
    const subProducts = document.getElementById("subProducts");

    // Local fallback data in case json-server is not running
    const fallbackData = {
        users: [{}, {}, {}, {}, {}],
        orders: [{}, {}, {}, {}, {}],
        products: [{}, {}, {}, {}, {}]
    };

    /**
     * Requirement 4: While loading: Show placeholder skeletons
     */
    function showSkeletons() {
        valUsers.innerHTML = '<span class="skeleton skeleton-number"></span>';
        subUsers.innerHTML = '<span class="skeleton skeleton-text"></span>';

        valOrders.innerHTML = '<span class="skeleton skeleton-number"></span>';
        subOrders.innerHTML = '<span class="skeleton skeleton-text"></span>';

        valProducts.innerHTML = '<span class="skeleton skeleton-number"></span>';
        subProducts.innerHTML = '<span class="skeleton skeleton-text"></span>';

        warningBanner.style.display = "none";
    }

    /**
     * Requirement 3: Use Fetch + Promise.all to load all 3 simultaneously
     */
    function loadDashboard(simulateFailure = false) {
        showSkeletons();

        // 3 Distinct Endpoint URLs
        const usersEndpoint = `${BASE_URL}/users`;
        // In simulate failure mode, call an invalid endpoint to test Promise.all rejection
        const ordersEndpoint = simulateFailure ? `${BASE_URL}/invalid_endpoint_error` : `${BASE_URL}/orders`;
        const productsEndpoint = `${BASE_URL}/products`;

        // Create 3 fetch promises
        const fetchUsers = fetch(usersEndpoint).then(res => {
            if (!res.ok) throw new Error("Users API failed");
            return res.json();
        });

        const fetchOrders = fetch(ordersEndpoint).then(res => {
            if (!res.ok) throw new Error("Orders API failed");
            return res.json();
        });

        const fetchProducts = fetch(productsEndpoint).then(res => {
            if (!res.ok) throw new Error("Products API failed");
            return res.json();
        });

        // Parallel execution with Promise.all
        Promise.all([fetchUsers, fetchOrders, fetchProducts])
            .then(([users, orders, products]) => {
                // All 3 APIs succeeded
                warningBanner.style.display = "none";

                // Requirement 1: Display Total users, Total orders, Total products
                valUsers.textContent = users.length;
                subUsers.textContent = "Active accounts registered";

                valOrders.textContent = orders.length;
                subOrders.textContent = "Completed & pending orders";

                valProducts.textContent = products.length;
                subProducts.textContent = "Live inventory catalog items";
            })
            .catch(error => {
                // Requirement 5: If ANY API fails: Show dashboard with warning: "Some data could not be loaded."
                console.warn("Promise.all caught an error in one or more endpoints:", error.message);
                warningBanner.style.display = "block";

                // Show graceful partial/mock indicators on cards
                valUsers.textContent = fallbackData.users.length + " *";
                subUsers.textContent = "Offline/Mock cache";

                valOrders.textContent = "—";
                subOrders.textContent = "Endpoint unavailable";

                valProducts.textContent = fallbackData.products.length + " *";
                subProducts.textContent = "Offline/Mock cache";
            });
    }

    // Interactive button controls
    document.getElementById("btnReload").onclick = function () {
        loadDashboard(false);
    };

    document.getElementById("btnTestFail").onclick = function () {
        loadDashboard(true);
    };

    // Initial fetch on page load
    loadDashboard(false);
});
