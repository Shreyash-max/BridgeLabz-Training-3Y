/**
 * Q2. Employee Status Dashboard (XMLHttpRequest + PATCH)
 *
 * Requirements:
 * 1. JSON Server employees has fields: id, name, status: active/inactive.
 * 2. Use XMLHttpRequest to fetch all employees.
 * 3. Each employee row has a toggle button:
 *    - Active -> Inactive
 *    - Inactive -> Active
 * 4. On toggle:
 *    - Send a PATCH request using XMLHttpRequest.
 *    - Immediately update UI to reflect new status.
 * 5. If request fails -> revert UI and show an error message.
 */

document.addEventListener("DOMContentLoaded", function () {
    const API_URL = "http://localhost:3002/employees";
    const tableBody = document.getElementById("employeeTableBody");
    const errorBanner = document.getElementById("errorBanner");
    const errorMessage = document.getElementById("errorMessage");

    // Local in-memory mock fallback in case json-server is not currently running
    const fallbackEmployees = [
        { id: "1", name: "Sarah Jenkins", role: "Lead Architect", status: "active" },
        { id: "2", name: "David Miller", role: "Frontend Developer", status: "inactive" },
        { id: "3", name: "Priya Sharma", role: "Product Manager", status: "active" },
        { id: "4", name: "Marcus Vance", role: "DevOps Engineer", status: "active" },
        { id: "5", name: "Elena Rostova", role: "UI/UX Designer", status: "inactive" },
        { id: "6", name: "Liam Chen", role: "Backend Engineer", status: "active" }
    ];

    /**
     * Requirement 2: Use XMLHttpRequest to fetch all employees (GET /employees)
     */
    function fetchEmployees() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL, true);
        xhr.timeout = 3000;

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const employees = JSON.parse(xhr.responseText);
                    renderTable(employees);
                } catch (e) {
                    showError("JSON Parse Error. Loading fallback data.");
                    renderTable(fallbackEmployees);
                }
            } else {
                showError("HTTP Error: " + xhr.status + ". Using fallback data.");
                renderTable(fallbackEmployees);
            }
        };

        xhr.onerror = function () {
            showError("Could not connect to JSON Server on Port 3002. Using offline data.");
            renderTable(fallbackEmployees);
        };

        xhr.ontimeout = function () {
            showError("Request timed out. Using offline data.");
            renderTable(fallbackEmployees);
        };

        xhr.send();
    }

    /**
     * Renders employee rows with toggle switches
     */
    function renderTable(employees) {
        tableBody.innerHTML = "";

        employees.forEach(function (emp) {
            const tr = document.createElement("tr");
            tr.setAttribute("id", "emp-row-" + emp.id);

            const isActive = emp.status.toLowerCase() === "active";
            const badgeClass = isActive ? "status-active" : "status-inactive";
            const buttonClass = isActive ? "btn-deactivate" : "btn-activate";
            const buttonText = isActive ? "Deactivate" : "Activate";

            tr.innerHTML =
                "<td><strong>#" + emp.id + "</strong></td>" +
                "<td>" +
                "  <div class=\"employee-name\">" + emp.name + "</div>" +
                "  <div class=\"employee-role\">" + (emp.role || "Team Member") + "</div>" +
                "</td>" +
                "<td><span id=\"status-badge-" + emp.id + "\" class=\"status-badge " + badgeClass + "\">" + emp.status + "</span></td>" +
                "<td>" +
                "  <button id=\"toggle-btn-" + emp.id + "\" class=\"btn-toggle " + buttonClass + "\" data-id=\"" + emp.id + "\" data-status=\"" + emp.status + "\">" +
                buttonText +
                "  </button>" +
                "</td>";

            tableBody.appendChild(tr);
        });

        attachToggleListeners();
    }

    /**
     * Requirement 3 & 4: Toggle switch event handler
     */
    function attachToggleListeners() {
        const buttons = document.querySelectorAll(".btn-toggle");
        buttons.forEach(function (btn) {
            btn.onclick = function () {
                const empId = this.getAttribute("data-id");
                const currentStatus = this.getAttribute("data-status");
                const nextStatus = currentStatus === "active" ? "inactive" : "active";

                // Step 1: Immediately update UI (Optimistic update)
                applyUIStatus(empId, nextStatus);

                // Step 2: Send PATCH request using XMLHttpRequest
                sendPatchRequest(empId, nextStatus, currentStatus);
            };
        });
    }

    /**
     * Helper to update UI elements for a specific employee row
     */
    function applyUIStatus(empId, status) {
        const badge = document.getElementById("status-badge-" + empId);
        const btn = document.getElementById("toggle-btn-" + empId);
        if (!badge || !btn) return;

        const isActive = status === "active";
        badge.className = "status-badge " + (isActive ? "status-active" : "status-inactive");
        badge.textContent = status;

        btn.className = "btn-toggle " + (isActive ? "btn-deactivate" : "btn-activate");
        btn.textContent = isActive ? "Deactivate" : "Activate";
        btn.setAttribute("data-status", status);
    }

    /**
     * Requirement 4 & 5: Send PATCH request using XMLHttpRequest and revert on error
     */
    function sendPatchRequest(empId, newStatus, previousStatus) {
        const xhr = new XMLHttpRequest();
        xhr.open("PATCH", API_URL + "/" + empId, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.timeout = 3000;

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Successful PATCH
                hideError();
                console.log("Successfully updated employee #" + empId + " to " + newStatus);
            } else {
                // Requirement 5: If request fails -> revert UI and show an error message
                applyUIStatus(empId, previousStatus);
                showError("Server returned status " + xhr.status + ". Reverted employee #" + empId + " status back to " + previousStatus + ".");
            }
        };

        xhr.onerror = function () {
            // Requirement 5: Revert UI on network failure
            applyUIStatus(empId, previousStatus);
            showError("Network failure while updating employee #" + empId + ". Reverted to " + previousStatus + ".");
        };

        xhr.ontimeout = function () {
            // Requirement 5: Revert UI on timeout
            applyUIStatus(empId, previousStatus);
            showError("PATCH request timed out. Reverted employee #" + empId + " to " + previousStatus + ".");
        };

        // Send payload containing only the modified field
        xhr.send(JSON.stringify({ status: newStatus }));
    }

    function showError(msg) {
        errorMessage.textContent = msg;
        errorBanner.style.display = "block";
    }

    function hideError() {
        errorBanner.style.display = "none";
    }

    // Initialize dashboard on load
    fetchEmployees();
});
