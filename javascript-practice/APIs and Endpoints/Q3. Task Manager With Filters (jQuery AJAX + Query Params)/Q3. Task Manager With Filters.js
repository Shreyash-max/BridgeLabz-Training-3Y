/**
 * Q3. Task Manager With Filters (jQuery AJAX + Query Params)
 *
 * Requirements:
 * 1. Create a Task Manager using /tasks with fields: id, title, priority, completed.
 * 2. GET /tasks and show in list format.
 * 3. Dropdown for sorting / filtering:
 *    - Low Priority
 *    - Medium Priority
 *    - High Priority
 *    - Completed
 *    -> On change, reload the list using jQuery AJAX with query parameters.
 * 4. Add a checkbox on each task:
 *    - When clicked -> Send PATCH request to toggle completed.
 */

$(document).ready(function () {
    const API_URL = "http://localhost:3003/tasks";

    // In-memory fallback dataset in case json-server is not running
    let fallbackTasks = [
        { id: "1", title: "Design REST API schema for auth service", priority: "High", completed: true },
        { id: "2", title: "Fix responsive navbar layout for mobile screens", priority: "Low", completed: false },
        { id: "3", title: "Implement unit tests for checkout payment gateway", priority: "High", completed: false },
        { id: "4", title: "Refactor database queries and add indexing", priority: "Medium", completed: true },
        { id: "5", title: "Update project API documentation on Postman", priority: "Low", completed: false },
        { id: "6", title: "Configure Docker multi-stage container build", priority: "Medium", completed: false }
    ];

    /**
     * Requirement 2 & 3: Fetch tasks with query parameters using jQuery AJAX
     * Query parameter handling:
     * - "Low" -> { priority: 'Low' }
     * - "Medium" -> { priority: 'Medium' }
     * - "High" -> { priority: 'High' }
     * - "Completed" -> { completed: true }
     * - "all" -> {}
     */
    function loadTasks(filterValue) {
        let queryParams = {};

        if (filterValue === "Completed") {
            queryParams = { completed: true };
        } else if (filterValue === "Low" || filterValue === "Medium" || filterValue === "High") {
            queryParams = { priority: filterValue };
        }

        $.ajax({
            url: API_URL,
            type: "GET",
            data: queryParams,
            dataType: "json",
            timeout: 3000,
            success: function (data) {
                renderTasks(data);
            },
            error: function () {
                // Graceful fallback filter in offline/mock mode
                let filtered = fallbackTasks.slice();
                if (filterValue === "Completed") {
                    filtered = filtered.filter(t => t.completed === true);
                } else if (filterValue && filterValue !== "all") {
                    filtered = filtered.filter(t => t.priority === filterValue);
                }
                renderTasks(filtered);
            }
        });
    }

    /**
     * Renders task list items with toggle checkbox and priority badge
     */
    function renderTasks(tasks) {
        $("#tasksContainer").empty();

        if (!tasks || tasks.length === 0) {
            $("#emptyTasks").show();
            return;
        }

        $("#emptyTasks").hide();

        tasks.forEach(function (task) {
            const isDone = task.completed === true || task.completed === "true";
            const checkedAttr = isDone ? "checked" : "";
            const titleCompletedClass = isDone ? "completed" : "";

            const taskItem = $(
                '<article class="task-card" data-id="' + task.id + '">' +
                '  <div class="task-left">' +
                '    <input type="checkbox" class="task-checkbox" data-id="' + task.id + '" ' + checkedAttr + ' title="Toggle Completed status">' +
                '    <span class="task-title ' + titleCompletedClass + '">' + task.title + '</span>' +
                '  </div>' +
                '  <span class="priority-badge priority-' + task.priority + '">' + task.priority + ' Priority</span>' +
                '</article>'
            );

            $("#tasksContainer").append(taskItem);
        });
    }

    /**
     * Requirement 3: Dropdown on change -> reload list using jQuery AJAX with query parameters
     */
    $("#priorityFilter").on("change", function () {
        const selectedFilter = $(this).val();
        loadTasks(selectedFilter);
    });

    /**
     * Requirement 4: Checkbox clicked -> Send PATCH request to toggle completed
     */
    $("#tasksContainer").on("change", ".task-checkbox", function () {
        const taskId = $(this).attr("data-id");
        const isChecked = $(this).is(":checked");
        const titleSpan = $(this).siblings(".task-title");

        // Optimistically update UI
        if (isChecked) {
            titleSpan.addClass("completed");
        } else {
            titleSpan.removeClass("completed");
        }

        // Send PATCH request via jQuery AJAX
        $.ajax({
            url: API_URL + "/" + taskId,
            type: "PATCH",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ completed: isChecked }),
            dataType: "json",
            success: function () {
                console.log("Successfully updated task #" + taskId + " completion to: " + isChecked);
                // Also update local mock data
                const local = fallbackTasks.find(t => t.id == taskId);
                if (local) local.completed = isChecked;
            },
            error: function () {
                // If PATCH fails, revert checkbox and title class
                console.warn("PATCH request failed for task #" + taskId + ". Reverting checkbox.");
                const revertedState = !isChecked;
                $(this).prop("checked", revertedState);
                if (revertedState) {
                    titleSpan.addClass("completed");
                } else {
                    titleSpan.removeClass("completed");
                }
                alert("Failed to update task status on server. Reverted changes.");
            }
        });
    });

    // Initial load with all tasks
    loadTasks("all");
});
