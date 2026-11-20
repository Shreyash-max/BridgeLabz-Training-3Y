/**
 * Q10 – Registration Form Validation
 * Demonstrates:
 * 1. Check Name field -> not empty.
 * 2. Check Email field -> valid format and uniqueness.
 * 3. Check Password -> minimum 8 characters.
 * 4. Show success message if all fields valid.
 * 5. Highlight invalid fields dynamically with red border using .css().
 */

$(document).ready(function () {

    // Mock existing database of registered emails to test uniqueness
    const registeredEmails = [
        "admin@example.com",
        "shreyash@gmail.com",
        "test@company.com",
        "john.doe@domain.com"
    ];

    // Standard email format regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /**
     * Requirement 5: Helper function to apply red border highlight on invalid field using .css()
     */
    function markInvalid(element, errorElement, message) {
        $(element).css({
            "border": "2px solid #dc3545",
            "background-color": "#fff8f8"
        });
        $(errorElement).text(message).slideDown(150);
        return false;
    }

    /**
     * Helper function to apply green border highlight on valid field using .css()
     */
    function markValid(element, errorElement) {
        $(element).css({
            "border": "2px solid #28a745",
            "background-color": "#f8fff8"
        });
        $(errorElement).slideUp(150);
        return true;
    }

    /**
     * Requirement 1: Check Name field -> not empty
     */
    function validateName() {
        const val = $("#fullName").val().trim();
        if (val === "") {
            return markInvalid("#fullName", "#nameError", "Name field cannot be left blank.");
        }
        if (val.length < 3) {
            return markInvalid("#fullName", "#nameError", "Name must be at least 3 characters.");
        }
        return markValid("#fullName", "#nameError");
    }

    /**
     * Requirement 2: Check Email field -> valid format and uniqueness
     */
    function validateEmail() {
        const email = $("#emailAddress").val().trim().toLowerCase();

        if (email === "") {
            return markInvalid("#emailAddress", "#emailError", "Email address is required.");
        }
        if (!emailRegex.test(email)) {
            return markInvalid("#emailAddress", "#emailError", "Please enter a valid email format (e.g., name@example.com).");
        }
        // Uniqueness check against mock database
        if (registeredEmails.indexOf(email) !== -1) {
            return markInvalid("#emailAddress", "#emailError", "Email \"" + email + "\" is already registered. Please choose another.");
        }
        return markValid("#emailAddress", "#emailError");
    }

    /**
     * Requirement 3: Check Password -> minimum 8 characters
     */
    function validatePassword() {
        const password = $("#userPassword").val();
        if (password.length < 8) {
            return markInvalid("#userPassword", "#passwordError", "Password must be at least 8 characters long (currently " + password.length + ").");
        }
        return markValid("#userPassword", "#passwordError");
    }

    /**
     * Additional Field 4: Confirm Password matching
     */
    function validateConfirmPassword() {
        const password = $("#userPassword").val();
        const confirm = $("#confirmPassword").val();

        if (confirm === "") {
            return markInvalid("#confirmPassword", "#confirmPasswordError", "Please confirm your password.");
        }
        if (password !== confirm) {
            return markInvalid("#confirmPassword", "#confirmPasswordError", "Passwords do not match.");
        }
        return markValid("#confirmPassword", "#confirmPasswordError");
    }

    /**
     * Additional Field 5: Terms checkbox
     */
    function validateTerms() {
        if (!$("#agreeTerms").is(":checked")) {
            $("#termsError").slideDown(150);
            return false;
        } else {
            $("#termsError").slideUp(150);
            return true;
        }
    }

    // Attach real-time validation listeners on input and blur events
    $("#fullName").on("input blur", validateName);
    $("#emailAddress").on("input blur", validateEmail);
    $("#userPassword").on("input blur", function () {
        validatePassword();
        if ($("#confirmPassword").val() !== "") {
            validateConfirmPassword();
        }
    });
    $("#confirmPassword").on("input blur", validateConfirmPassword);
    $("#agreeTerms").on("change", validateTerms);

    /**
     * Form Submission Event Listener
     */
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault(); // Prevent standard page reload

        // Run all 5 validations
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmValid = validateConfirmPassword();
        const isTermsValid = validateTerms();

        const isFormValid = isNameValid && isEmailValid && isPasswordValid && isConfirmValid && isTermsValid;

        if (isFormValid) {
            /**
             * Requirement 4: Show success message if all fields valid
             */
            const enteredName = $("#fullName").val().trim();
            const enteredEmail = $("#emailAddress").val().trim();

            $("#successSummary").html(
                "Welcome aboard, <strong>" + enteredName + "</strong>!<br>" +
                "A confirmation email has been sent to <strong>" + enteredEmail + "</strong>."
            );

            // Animate success card into view
            $("#successCard").slideDown(400);

            // Scroll smoothly to success message
            $("html, body").animate({
                scrollTop: $("#successCard").offset().top - 20
            }, 400);

            // Reset form fields
            $("#registrationForm")[0].reset();
            $(".form-control").css({
                "border": "2px solid #ced4da",
                "background-color": "#ffffff"
            });
        } else {
            $("#successCard").slideUp(200);
        }
    });

});
