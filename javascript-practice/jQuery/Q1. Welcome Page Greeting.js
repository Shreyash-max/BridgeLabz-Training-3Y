/**
 * Q1 – Welcome Page Greeting
 * Demonstrates jQuery ready handler, time-of-day greeting, quote rotation,
 * visibility toggling with animation, and click event alert.
 */

$(document).ready(function () {
    // Array of motivational quotes for quote rotation
    const quotes = [
        "“The secret of getting ahead is getting started.” – Mark Twain",
        "“It always seems impossible until it's done.” – Nelson Mandela",
        "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
        "“Simplicity is prerequisite for reliability.” – Edsger W. Dijkstra",
        "“Make it work, make it right, make it fast.” – Kent Beck"
    ];

    let quoteIndex = 0;

    /**
     * Requirement 1: On page load -> display personalized greeting based on time of day
     * Morning: 5am - 11:59am
     * Afternoon: 12pm - 4:59pm
     * Evening: 5pm - 4:59am
     */
    function setTimeBasedGreeting() {
        const currentHour = new Date().getHours();
        let greeting = "";
        let subtext = "";

        if (currentHour >= 5 && currentHour < 12) {
            greeting = "🌅 Good Morning, Developer!";
            subtext = "Start your day with productive coding sessions and fresh ideas.";
        } else if (currentHour >= 12 && currentHour < 17) {
            greeting = "☀️ Good Afternoon, Developer!";
            subtext = "Keep the momentum going strong this afternoon.";
        } else {
            greeting = "🌙 Good Evening, Developer!";
            subtext = "Reflect on your progress and wind down with creative code.";
        }

        // Use jQuery .text() to update the elements safely
        $("#greetingText").text(greeting);
        $("#greetingSubtext").text(subtext);
    }

    // Initialize greeting on page load
    setTimeBasedGreeting();

    /**
     * Requirement 2: Button "Change Greeting" -> changes text to a motivational quote
     */
    $("#btnChangeGreeting").on("click", function () {
        const currentQuote = quotes[quoteIndex];
        // Rotate through the quotes array cyclically
        quoteIndex = (quoteIndex + 1) % quotes.length;

        // Smoothly fade out, change text, and fade back in
        $("#greetingText").fadeOut(200, function () {
            $(this).text(currentQuote).fadeIn(200);
        });
        $("#greetingSubtext").text("Inspirational Quote for Today");
    });

    /**
     * Requirement 3: Toggle visibility of a welcome message using another button
     */
    $("#btnToggleWelcome").on("click", function () {
        // jQuery .slideToggle() toggles display with a smooth sliding animation
        $("#welcomeCard").slideToggle(400);
    });

    /**
     * Reset button: Re-evaluates current time greeting
     */
    $("#btnResetGreeting").on("click", function () {
        setTimeBasedGreeting();
    });

    /**
     * Requirement 4: Show an alert when greeting is clicked
     */
    $("#greetingBanner").on("click", function () {
        const currentHeading = $("#greetingText").text();
        alert("🎉 Greeting Card Clicked!\n\nCurrent Message: " + currentHeading);
    });
});
