/**
 * Q5 – Team Members Directory
 * Demonstrates jQuery DOM Traversal methods:
 * 1. Click a manager -> highlight all direct reports.
 * 2. Hover on an employee -> show contact info using .next().
 * 3. Click on a department -> change background of all members in that department using .children().
 * 4. Select a random employee -> highlight sibling employees.
 * 5. Collapse/expand team using .parent() and .find().
 */

$(document).ready(function () {

    /**
     * Requirement 1: Click a manager -> highlight all direct reports
     * Traversal: uses .siblings('.reports-group').find('.employee-card')
     */
    $(".manager-card").on("click", function () {
        // Toggle the direct report highlight class on employee cards under this manager
        $(this)
            .siblings(".reports-group")
            .find(".employee-card")
            .toggleClass("highlight-report");
    });

    /**
     * Requirement 2: Hover on an employee -> show contact info using .next()
     * Traversal: uses jQuery .next('.contact-info') to target the immediate sibling element
     */
    $(".employee-card").hover(
        function () {
            // Mouse enter: smoothly slide down the contact-info box
            $(this).next(".contact-info").stop(true, true).slideDown(200);
        },
        function () {
            // Mouse leave: slide up the contact-info box
            $(this).next(".contact-info").stop(true, true).slideUp(200);
        }
    );

    /**
     * Requirement 3: Click on a department -> change background of all members using .children()
     * Traversal: uses .parent() to reach section.department, then .children('.department-content')
     */
    $(".department-header").on("click", function (event) {
        // If clicking the collapse button, do not trigger department background toggle
        if ($(event.target).is(".toggle-team-btn")) {
            return;
        }

        // Use .parent() and .children() traversal
        $(this)
            .parent()
            .children(".department-content")
            .toggleClass("dept-highlight");
    });

    /**
     * Requirement 4: Select a random employee -> highlight sibling employees
     * Traversal: targets employee wrapper's siblings and highlights coworker cards
     */
    $(".employee-card").on("click", function () {
        // Target sibling employee cards within the same department reports group
        const parentWrapper = $(this).parent();
        parentWrapper
            .siblings()
            .find(".employee-card")
            .toggleClass("sibling-highlight");
    });

    /**
     * Requirement 5: Collapse/expand team using .parent() and .find()
     * Traversal: from the button, traverse to .parent() (the header), then .parent() (the department),
     * and use .find('.department-content') to toggle visibility
     */
    $(".toggle-team-btn").on("click", function (event) {
        event.stopPropagation(); // Avoid triggering department-header click

        // Traverse using .parent() and .find()
        const deptSection = $(this).parent().parent();
        deptSection.find(".department-content").slideToggle(300);
    });

});
