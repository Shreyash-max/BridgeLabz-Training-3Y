/**
 * Q1. Real-Time Live Search (jQuery AJAX)
 *
 * Requirements:
 * 1. As the user types inside the search box:
 *    - Send a GET request with query ?q=value using jQuery AJAX.
 *    - Update the search results below the input instantly.
 * 2. Display: Product image, name, price.
 * 3. Show "No products found" if response is empty.
 * 4. Add a loading indicator while waiting for the response.
 */

$(document).ready(function () {
    const API_URL = "http://localhost:3001/products";
    let searchTimer = null;

    // Fallback sample data in case json-server is not running
    const fallbackProducts = [
        { id: "1", name: "Wireless Noise Cancelling Headphones", price: 199.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80" },
        { id: "2", name: "Smart Fitness Watch", price: 149.50, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80" },
        { id: "3", name: "Ergonomic Mechanical Keyboard", price: 89.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&q=80" },
        { id: "4", name: "Ultra-Wide Gaming Monitor 34-inch", price: 379.00, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&q=80" },
        { id: "5", name: "Precision Wireless Gaming Mouse", price: 59.99, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&q=80" },
        { id: "6", name: "4K Ultra-HD Webcam with Microphone", price: 79.99, image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=300&q=80" }
    ];

    /**
     * Renders an array of products to the DOM
     */
    function renderProducts(products) {
        // Clear existing product cards (retaining the #noResults container)
        $(".product-card").remove();

        if (!products || products.length === 0) {
            // Requirement 3: Show "No products found" if response is empty
            $("#noResults").show();
            return;
        }

        $("#noResults").hide();

        // Requirement 2: Display Product image, name, price
        products.forEach(function (product) {
            const card = $(
                '<article class="product-card">' +
                '  <img class="product-img" src="' + product.image + '" alt="' + product.name + '" onerror="this.src=\'https://via.placeholder.com/300x180?text=Product+Image\'">' +
                '  <div class="product-info">' +
                '    <h3 class="product-name">' + product.name + '</h3>' +
                '    <div class="product-price">$' + Number(product.price).toFixed(2) + '</div>' +
                '  </div>' +
                '</article>'
            );
            $("#productsGrid").append(card);
        });
    }

    /**
     * Executes jQuery AJAX GET request with query param ?q=value
     */
    function performLiveSearch(query) {
        // Requirement 4: Add a loading indicator while waiting for the response
        $("#loadingIndicator").show();

        $.ajax({
            url: API_URL,
            type: "GET",
            data: { q: query },
            dataType: "json",
            timeout: 3000,
            success: function (data) {
                $("#connectionAlert").hide();
                renderProducts(data);
            },
            error: function () {
                // If json-server is offline, show notice and gracefully filter local fallback
                $("#connectionAlert").slideDown(200);
                const filtered = fallbackProducts.filter(function (p) {
                    return p.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
                });
                renderProducts(filtered);
            },
            complete: function () {
                // Hide loading indicator once request completes
                $("#loadingIndicator").hide();
            }
        });
    }

    /**
     * Requirement 1: As user types inside search box -> trigger search
     * Uses 250ms debouncing to optimize live requests
     */
    $("#searchInput").on("input", function () {
        const query = $(this).val().trim();

        clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
            performLiveSearch(query);
        }, 250);
    });

    // Initial load to display all products on page load
    performLiveSearch("");
});
