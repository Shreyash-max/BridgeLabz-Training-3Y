/**
 * Q9 – Multi-JQuery Widgets
 *
 * Demonstrates the use of jQuery.noConflict() to allow two distinct jQuery versions
 * to operate simultaneously on the same webpage without naming conflicts.
 *
 * In the HTML document:
 *   - jQuery 3.7.1 is loaded and assigned to window.$jq1 via jQuery.noConflict(true)
 *   - jQuery 2.2.4 is loaded and assigned to window.$jq2 via jQuery.noConflict(true)
 *
 * Requirement breakdown:
 *   Version 1 ($jq1):
 *     1. Handles carousel slider rotation.
 *     3. Highlights active widget.
 *   Version 2 ($jq2):
 *     2. Manages modal popups for notifications.
 *     4. Attaches tooltips on hover.
 *   Shared architecture:
 *     5. Uses jQuery.noConflict() to ensure both operate simultaneously.
 */

/* ==========================================================================
   PART A: VERSION 1 ($jq1) - Carousel Rotation & Active Widget Highlighting
   ========================================================================== */
$jq1(document).ready(function () {
    console.log("Version 1 loaded successfully. jQuery version:", $jq1.fn.jquery);

    let activeSlideIndex = 0;
    const slides = $jq1(".carousel-slide");
    const totalSlides = slides.length;

    /**
     * Requirement 1: Version 1 handles carousel slider rotation
     */
    function showSlide(index) {
        slides.removeClass("active").hide();
        slides.eq(index).fadeIn(400).addClass("active");
        $jq1("#slideIndicator").text("Slide " + (index + 1) + " of " + totalSlides);
    }

    // Manual navigation: Next
    $jq1("#btnNextSlide").on("click", function () {
        activeSlideIndex = (activeSlideIndex + 1) % totalSlides;
        showSlide(activeSlideIndex);
    });

    // Manual navigation: Previous
    $jq1("#btnPrevSlide").on("click", function () {
        activeSlideIndex = (activeSlideIndex - 1 + totalSlides) % totalSlides;
        showSlide(activeSlideIndex);
    });

    // Automatic rotation every 4 seconds via $jq1
    setInterval(function () {
        activeSlideIndex = (activeSlideIndex + 1) % totalSlides;
        showSlide(activeSlideIndex);
    }, 4000);

    /**
     * Requirement 3: Version 1 highlights active widget
     */
    $jq1(".dashboard-widget").on("click", function () {
        // Toggle highlight class using Version 1
        $jq1(this).toggleClass("widget-highlighted");
    });
});


/* ==========================================================================
   PART B: VERSION 2 ($jq2) - Modal Popups & Tooltips on Hover
   ========================================================================== */
$jq2(document).ready(function () {
    console.log("Version 2 loaded successfully. jQuery version:", $jq2.fn.jquery);

    /**
     * Requirement 2: Version 2 manages modal popups for notifications
     */
    $jq2("#btnOpenNotificationModal").on("click", function () {
        $jq2("#notificationModal").css("display", "flex").hide().fadeIn(300);
    });

    $jq2("#btnCloseModal").on("click", function () {
        $jq2("#notificationModal").fadeOut(300);
    });

    // Close when clicking modal backdrop
    $jq2("#notificationModal").on("click", function (event) {
        if ($jq2(event.target).is("#notificationModal")) {
            $jq2(this).fadeOut(300);
        }
    });

    /**
     * Requirement 4: Version 2 attaches tooltips on hover
     * Dynamically creates, positions, and cleans up tooltip elements
     */
    $jq2(".dashboard-widget").hover(
        function (event) {
            const tooltipText = $jq2(this).attr("data-tooltip");
            if (!tooltipText) return;

            // Create tooltip element via Version 2
            const tooltip = $jq2('<div class="custom-tooltip">' + tooltipText + '</div>');
            $jq2("body").append(tooltip);

            // Position tooltip slightly above the cursor
            tooltip.css({
                top: event.pageY - 35,
                left: event.pageX + 10
            }).fadeIn(150);
        },
        function () {
            // Remove tooltip on mouseleave via Version 2
            $jq2(".custom-tooltip").remove();
        }
    );

    // Track cursor movement for dynamic tooltip follow
    $jq2(".dashboard-widget").on("mousemove", function (event) {
        $jq2(".custom-tooltip").css({
            top: event.pageY - 35,
            left: event.pageX + 10
        });
    });
});
