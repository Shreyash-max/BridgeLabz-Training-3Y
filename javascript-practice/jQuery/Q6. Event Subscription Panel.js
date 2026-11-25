/**
 * Q6 – Event Subscription Panel
 * Demonstrates:
 * 1. Subscribe -> enable notifications.
 * 2. Unsubscribe -> disable notifications.
 * 3. Dynamically add new subscription topics -> attach .on() click events.
 * 4. Remove specific subscription -> detach .off() event.
 * 5. Show success message -> dynamically inserted into DOM on action.
 */

$(document).ready(function () {

    let notificationsEnabled = false;

    /**
     * Requirement 5: Show success message dynamically inserted into DOM on action
     * Creates a new DOM element using jQuery, inserts into #notificationArea,
     * and automatically fades out and removes after 2.5 seconds.
     */
    function showNotification(message, type) {
        const alertClass = type === "danger" ? "alert-danger" : (type === "warning" ? "alert-warning" : "alert-success");
        const alertBox = $('<div class="alert-message ' + alertClass + '">' +
            '<span>' + message + '</span>' +
            '<span style="font-size:0.8rem; opacity:0.7;">Just now</span>' +
            '</div>');

        // Hide initially, prepend to container, fade in smoothly, delay, fade out and clean from DOM
        alertBox
            .hide()
            .prependTo("#notificationArea")
            .fadeIn(300)
            .delay(2500)
            .fadeOut(400, function () {
                $(this).remove();
            });
    }

    /**
     * Requirement 1: Subscribe -> enable notifications
     */
    $("#btnGlobalSubscribe").on("click", function () {
        notificationsEnabled = true;
        $("#globalStatusBadge")
            .removeClass("unsubscribed")
            .addClass("subscribed")
            .text("🟢 Notifications Enabled");

        showNotification("Success: You are now subscribed to all topic notifications!", "success");
    });

    /**
     * Requirement 2: Unsubscribe -> disable notifications
     */
    $("#btnGlobalUnsubscribe").on("click", function () {
        notificationsEnabled = false;
        $("#globalStatusBadge")
            .removeClass("subscribed")
            .addClass("unsubscribed")
            .text("🔴 Notifications Disabled");

        showNotification("Notice: All notifications have been muted.", "warning");
    });

    /**
     * Requirement 3: Dynamically add new subscription topics -> attach .on() click events
     * Uses delegated event binding with .on("click", ".topic-card", ...) so dynamically
     * inserted topics automatically inherit the click listener.
     */
    $("#btnAddTopic").on("click", function () {
        const topicName = $("#newTopicInput").val().trim();

        if (topicName === "") {
            showNotification("Please enter a valid topic name before adding.", "danger");
            return;
        }

        const topicCount = $("#topicsContainer .topic-card").length + 1;
        // Construct new HTML elements dynamically
        const newCard = $(
            '<article class="topic-card" data-topic="' + topicName + '">' +
            '  <div class="topic-info">' +
            '    <h4>' + topicCount + '. ' + topicName + '</h4>' +
            '    <p>Custom subscribed topic &bull; dynamically attached with jQuery .on().</p>' +
            '  </div>' +
            '  <button class="btn-remove-topic" title="Detach event and remove topic">Remove (.off)</button>' +
            '</article>'
        );

        // Prepend to list with smooth slideDown
        newCard.hide().prependTo("#topicsContainer").slideDown(300);
        $("#newTopicInput").val("");

        showNotification("Added new topic: \"" + topicName + "\" with dynamic .on() click handler attached!", "success");
    });

    /**
     * Delegated click event for topic cards:
     * Clicking a card displays details and active notification status
     */
    $("#topicsContainer").on("click", ".topic-card", function (event) {
        // Prevent remove button click from triggering card click
        if ($(event.target).is(".btn-remove-topic")) {
            return;
        }

        const topicTitle = $(this).attr("data-topic") || $(this).find("h4").text();
        const status = notificationsEnabled ? "active notifications" : "muted (notifications disabled)";
        showNotification("Topic Selected: \"" + topicTitle + "\" with " + status, "success");
    });

    /**
     * Requirement 4: Remove specific subscription -> detach .off() event
     * Explicitly detaches the event handler from the card, then removes it from the DOM
     */
    $("#topicsContainer").on("click", ".btn-remove-topic", function (event) {
        event.stopPropagation(); // Stop propagation to parent card

        const card = $(this).closest(".topic-card");
        const topicName = card.find("h4").text();

        // 1. Detach event handler using .off()
        card.off("click");

        // 2. Animate out and remove from DOM
        card.slideUp(300, function () {
            $(this).remove();
        });

        showNotification("Detached .off() event & removed topic: " + topicName, "warning");
    });

});
