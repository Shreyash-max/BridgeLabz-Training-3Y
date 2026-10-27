const userForm = document.querySelector("#userForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const successMessage = document.querySelector("#successMessage");

const fields = [
  { input: nameInput, error: document.querySelector("#nameError"), validate: value => value.trim() !== "", message: "Name is required." },
  { input: emailInput, error: document.querySelector("#emailError"), validate: value => value.trim() !== "" && value.includes("@"), message: "Enter an email containing @." },
  { input: passwordInput, error: document.querySelector("#passwordError"), validate: value => value.length >= 6, message: "Password must be at least 6 characters." }
];

function validateField(field) {
  const valid = field.validate(field.input.value);
  field.error.textContent = valid ? "" : field.message;
  return valid;
}

// Show inline errors and prevent the browser from submitting the form.
userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const allValid = fields.map(validateField).every(Boolean);
  successMessage.hidden = !allValid;
});

// Revalidate a field when the user edits it, so errors disappear automatically.
fields.forEach(field => {
  field.input.addEventListener("input", () => {
    validateField(field);
    successMessage.hidden = true;
  });
});
