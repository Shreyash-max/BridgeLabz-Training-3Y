/**
 * Q2 – Product Highlight
 * Demonstrates:
 * 1. Click on a product -> highlight background.
 * 2. Hover over a product -> show additional product details via .slideDown()/.slideUp().
 * 3. Clicking a "Favorite" icon -> toggles a "selected" class.
 * 4. Apply different styles to products with discounts using attribute selector.
 * 5. Show an alert if a product is out of stock (using data attribute).
 */

$(document).ready(function () {

    /**
     * Requirement 4: Apply different styles to products with discounts using attribute selector
     * Attribute selector: $('[data-discount="true"]')
     */
    $('[data-discount="true"]').each(function () {
        const discountRate = $(this).attr("data-discount-rate") || "Special Offer";
        $(this).css({
            "border-left": "6px solid #e76f51",
            "position": "relative"
        });
        // Prepend a styled badge dynamically using jQuery
        $(this).find('.price-tag').append(
            ' <span style="font-size:0.75rem; background:#e76f51; color:#fff; padding:2px 6px; border-radius:4px; vertical-align:middle;">' +
            discountRate + ' OFF</span>'
        );
    });

    /**
     * Requirement 1: Click on a product -> highlight background
     * Uses .toggleClass('highlighted') to alternate active selection
     */
    $(".product-card").on("click", function (event) {
        // Prevent clicking the favorite button from toggling product highlight
        if ($(event.target).closest(".fav-btn").length) {
            return;
        }

        // Toggle highlighted class on clicked product card
        $(this).toggleClass("highlighted");
    });

    /**
     * Requirement 2: Hover over a product -> show additional product details
     * Uses jQuery .hover(handlerIn, handlerOut) with .slideDown() and .slideUp()
     */
    $(".product-card").hover(
        function () {
            // Mouse enters: smoothly slide down details
            $(this).find(".product-details").stop(true, true).slideDown(250);
        },
        function () {
            // Mouse leaves: smoothly slide up details
            $(this).find(".product-details").stop(true, true).slideUp(250);
        }
    );

    /**
     * Requirement 3: Clicking a "Favorite" icon -> toggles a "selected" class
     */
    $(".fav-btn").on("click", function (event) {
        // Stop event propagation so the parent card click isn't triggered
        event.stopPropagation();

        $(this).toggleClass("selected");

        // Update icon visual representation based on selected state
        if ($(this).hasClass("selected")) {
            $(this).text("❤️");
        } else {
            $(this).text("🤍");
        }
    });

    /**
     * Requirement 5: Show an alert if a product is out of stock (using data attribute)
     * Target: $('[data-stock="out"]')
     */
    $('[data-stock="out"]').on("click", function () {
        const productName = $(this).find(".product-title").text();
        alert("⚠️ Inventory Alert:\n\n\"" + productName + "\" is currently OUT OF STOCK!\nPlease check back later or subscribe for restock notifications.");
    });

});
