/**
 * Q7 – Search Courses
 * Demonstrates:
 * 1. Search input filters courses in real-time using .keyup().
 * 2. Highlight matched text using .css().
 * 3. Toggle visibility of courses not matching search.
 * 4. Show count of matched courses dynamically.
 * 5. Clear search -> reset list to show all courses.
 */

$(document).ready(function () {

    const totalCourses = $(".course-card").length;

    /**
     * Requirement 1 & 3: Search input filters courses in real-time using .keyup()
     * Requirement 2: Highlight matched text using .css()
     * Requirement 4: Show count of matched courses dynamically
     */
    $("#courseSearchInput").on("keyup", function () {
        const query = $(this).val().toLowerCase().trim();
        let matchCount = 0;

        if (query === "") {
            // If search query is empty, restore all courses and remove highlights
            $(".course-card").show().css({
                "border-color": "",
                "background-color": ""
            });
            $("#matchCounterText").text("Showing all " + totalCourses + " courses");
            $("#noResultsMessage").hide();
            return;
        }

        // Iterate through each course card
        $(".course-card").each(function () {
            const title = $(this).find(".course-title").text().toLowerCase();
            const desc = $(this).find(".course-desc").text().toLowerCase();
            const tag = $(this).find(".course-tag").text().toLowerCase();

            // Check if title, description, or tag includes search term
            if (title.indexOf(query) !== -1 || desc.indexOf(query) !== -1 || tag.indexOf(query) !== -1) {
                // Requirement 3: Show matching course
                $(this).show();

                // Requirement 2: Highlight matched text card using .css()
                $(this).css({
                    "border-color": "#2a9d8f",
                    "background-color": "#f0fff4"
                });

                matchCount++;
            } else {
                // Requirement 3: Toggle visibility off for non-matching courses
                $(this).hide().css({
                    "border-color": "",
                    "background-color": ""
                });
            }
        });

        // Requirement 4: Show count of matched courses dynamically
        $("#matchCounterText").text("Showing " + matchCount + " of " + totalCourses + " course(s) matching \"" + query + "\"");

        // Display no-results placeholder if no match found
        if (matchCount === 0) {
            $("#noResultsMessage").show();
        } else {
            $("#noResultsMessage").hide();
        }
    });

    /**
     * Requirement 5: Clear search -> reset list to show all courses
     */
    $("#btnClearSearch").on("click", function () {
        // Clear input value
        $("#courseSearchInput").val("");

        // Trigger keyup handler to run clean reset logic
        $("#courseSearchInput").trigger("keyup");

        // Set focus back to input for seamless user experience
        $("#courseSearchInput").focus();
    });

});
