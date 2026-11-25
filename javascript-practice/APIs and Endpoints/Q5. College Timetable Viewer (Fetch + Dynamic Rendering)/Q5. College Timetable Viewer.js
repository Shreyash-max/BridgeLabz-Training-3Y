/**
 * Q5. College Timetable Viewer (Fetch + Dynamic Rendering)
 *
 * Requirements:
 * 1. Endpoints: /timetable?day=Monday
 * 2. Dropdown for weekdays.
 * 3. On change -> fetch timetable and render:
 *    - Subject name
 *    - Faculty
 *    - Time
 * 4. If no classes: Show message: "No classes today."
 */

document.addEventListener("DOMContentLoaded", function () {
    const API_URL = "http://localhost:3005/timetable";
    const weekdaySelect = document.getElementById("weekdaySelect");
    const container = document.getElementById("timetableContainer");
    const noClassesBanner = document.getElementById("noClasses");

    // Local fallback timetable data in case json-server is not running
    const fallbackTimetable = [
        { id: "1", day: "Monday", subject: "Data Structures & Algorithms", faculty: "Dr. Ramesh Verma", time: "09:00 AM - 10:30 AM", room: "Lab 301" },
        { id: "2", day: "Monday", subject: "Web Development & APIs", faculty: "Prof. Anita Roy", time: "11:00 AM - 12:30 PM", room: "Seminar Hall A" },
        { id: "3", day: "Tuesday", subject: "Database Management Systems", faculty: "Dr. Sanjay Gupta", time: "10:00 AM - 11:30 AM", room: "Room 204" },
        { id: "4", day: "Tuesday", subject: "Cloud Computing Essentials", faculty: "Prof. Vikram Malhotra", time: "01:30 PM - 03:00 PM", room: "Lab 102" },
        { id: "5", day: "Wednesday", subject: "Operating Systems & Concurrency", faculty: "Dr. Ramesh Verma", time: "09:00 AM - 10:30 AM", room: "Room 405" },
        { id: "6", day: "Thursday", subject: "Artificial Intelligence & ML", faculty: "Dr. Neha Kulkarni", time: "11:00 AM - 12:30 PM", room: "AI Research Lab" },
        { id: "7", day: "Friday", subject: "Software Engineering & Agile", faculty: "Prof. Anita Roy", time: "02:00 PM - 03:30 PM", room: "Room 108" },
        { id: "8", day: "Saturday", subject: "Open Source Project Mentorship", faculty: "Guest Mentors", time: "10:00 AM - 01:00 PM", room: "Innovation Hub" }
    ];

    /**
     * Requirement 3 & 4: Fetch timetable for selected day using Fetch API and render
     */
    function fetchTimetable(selectedDay) {
        const url = `${API_URL}?day=${encodeURIComponent(selectedDay)}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(data => {
                renderTimetable(data);
            })
            .catch(error => {
                console.warn("Fetch failed, using local timetable data:", error.message);
                const filtered = fallbackTimetable.filter(item => item.day.toLowerCase() === selectedDay.toLowerCase());
                renderTimetable(filtered);
            });
    }

    /**
     * Requirement 3 & 4: Dynamic rendering of classes or "No classes today"
     */
    function renderTimetable(classes) {
        // Clear previous class cards (preserving the noClasses banner element)
        const oldCards = container.querySelectorAll(".class-card");
        oldCards.forEach(card => card.remove());

        // Requirement 4: If no classes: Show message: "No classes today."
        if (!classes || classes.length === 0) {
            noClassesBanner.style.display = "block";
            return;
        }

        noClassesBanner.style.display = "none";

        // Requirement 3: Render Subject name, Faculty, Time
        classes.forEach(item => {
            const article = document.createElement("article");
            article.className = "class-card";

            article.innerHTML = `
                <h3 class="subject-title">${item.subject}</h3>
                <div class="class-meta">
                    <span>👨‍🏫 Faculty:</span> <strong>${item.faculty}</strong>
                </div>
                ${item.room ? `<div class="class-meta"><span>📍 Location:</span> ${item.room}</div>` : ''}
                <div class="class-time">⏰ ${item.time}</div>
            `;

            container.appendChild(article);
        });
    }

    /**
     * Requirement 2: Dropdown for weekdays on change event
     */
    weekdaySelect.addEventListener("change", function () {
        fetchTimetable(this.value);
    });

    // Initial load for default selected day (Monday)
    fetchTimetable(weekdaySelect.value);
});
