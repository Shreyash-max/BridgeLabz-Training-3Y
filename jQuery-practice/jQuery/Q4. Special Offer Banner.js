/**
 * Q4 – Special Offer Banner
 * Demonstrates:
 * 1. "Hide" button -> hide specific banners using .hide().
 * 2. "Show" button -> show hidden banners using .show().
 * 3. "Slide Up/Down" buttons -> toggle banners using .slideToggle().
 * 4. "Fade In/Fade Out" -> show/hide banners gradually using .fadeToggle().
 * 5. Automatically rotate through banners every 5 seconds using .fadeIn()/.fadeOut().
 */

$(document).ready(function () {

    /**
     * Requirement 1: "Hide" button -> hide specific banners
     * Targets Banner #2 specifically with a smooth 400ms hide animation
     */
    $("#btnHideSpecific").on("click", function () {
        $("#banner-2").hide(400);
    });

    /**
     * Requirement 2: "Show" button -> show hidden banners
     * Displays all banners that are currently hidden
     */
    $("#btnShowAll").on("click", function () {
        $(".banner-card").show(400);
    });

    /**
     * Requirement 3: "Slide Up/Down" buttons -> toggle banners
     * Uses .slideToggle(500) on the entire banner container
     */
    $("#btnSlideToggle").on("click", function () {
        $("#bannerContainer").slideToggle(500);
    });

    /**
     * Requirement 4: "Fade In/Fade Out" -> show/hide banners gradually
     * Uses .fadeToggle(600) to transition opacity smoothly
     */
    $("#btnFadeToggle").on("click", function () {
        $("#bannerContainer").fadeToggle(600);
    });

    /**
     * Requirement 5: Automatically rotate through banners every 5 seconds using .fadeIn()/.fadeOut()
     */
    let currentBannerIndex = 0;
    const banners = $(".banner-card");
    const totalBanners = banners.length;
    let autoRotateTimer = null;
    let isAutoRotating = true;

    // Helper to highlight active rotating banner
    function rotateBanner() {
        // Fade out current banner
        banners.eq(currentBannerIndex).fadeOut(600, function () {
            // Increment index
            currentBannerIndex = (currentBannerIndex + 1) % totalBanners;
            // Update UI status badge
            $("#activeBannerBadge").text("Active: Banner #" + (currentBannerIndex + 1));
            // Fade in next banner
            banners.eq(currentBannerIndex).fadeIn(600);
        });
    }

    // Start 5-second interval timer
    function startAutoRotation() {
        autoRotateTimer = setInterval(rotateBanner, 5000);
        isAutoRotating = true;
        $("#btnToggleAutoRotate").text("Pause Auto-Rotate").css("background-color", "#5a189a");
    }

    function stopAutoRotation() {
        clearInterval(autoRotateTimer);
        isAutoRotating = false;
        $("#btnToggleAutoRotate").text("Resume Auto-Rotate").css("background-color", "#6c757d");
    }

    startAutoRotation();

    // Toggle button to pause/resume auto rotation for testing
    $("#btnToggleAutoRotate").on("click", function () {
        if (isAutoRotating) {
            stopAutoRotation();
        } else {
            startAutoRotation();
        }
    });

});
