/**
 * Q3 – Interactive FAQ
 * Demonstrates:
 * 1. Click on a question -> toggle answer visibility.
 * 2. Hover -> change question color.
 * 3. Double-click question -> collapse all answers.
 * 4. Focus on answer input (if any) -> highlight parent question.
 * 5. Blur from input -> reset background color.
 */

$(document).ready(function () {

    /**
     * Requirement 1: Click on a question -> toggle answer visibility
     * Uses .slideToggle(300) on the adjacent sibling .faq-answer
     */
    $(".faq-question").on("click", function () {
        const answer = $(this).next(".faq-answer");
        const indicator = $(this).find(".indicator");

        answer.slideToggle(300, function () {
            // Update indicator arrow based on open/closed state
            if ($(this).is(":visible")) {
                indicator.text("▲");
            } else {
                indicator.text("▼");
            }
        });
    });

    /**
     * Requirement 2: Hover -> change question color
     * Uses jQuery .hover(enterHandler, leaveHandler)
     */
    $(".faq-question").hover(
        function () {
            // Mouse enters: change question text color to vibrant blue
            $(this).css("color", "#457b9d");
        },
        function () {
            // Mouse leaves: reset to default
            $(this).css("color", "");
        }
    );

    /**
     * Requirement 3: Double-click question -> collapse all answers
     * Uses jQuery .on("dblclick") to target and slideUp all open .faq-answer elements
     */
    $(".faq-question").on("dblclick", function () {
        $(".faq-answer").slideUp(300);
        $(".faq-question .indicator").text("▼");
    });

    /**
     * Requirement 4: Focus on answer input (if any) -> highlight parent question
     * Uses .closest() and .find() to target parent question and apply background highlight
     */
    $(".faq-input").on("focus", function () {
        $(this)
            .closest(".faq-item")
            .find(".faq-question")
            .css({
                "background-color": "#fff3cd",
                "color": "#856404"
            });
    });

    /**
     * Requirement 5: Blur from input -> reset background color
     * Resets the parent question background and color back to clean defaults
     */
    $(".faq-input").on("blur", function () {
        $(this)
            .closest(".faq-item")
            .find(".faq-question")
            .css({
                "background-color": "",
                "color": ""
            });
    });

});
