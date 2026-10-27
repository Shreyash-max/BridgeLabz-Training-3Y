const form = document.querySelector("#multiStepForm");
const steps = [...document.querySelectorAll(".step")];
const stepLabel = document.querySelector("#stepLabel");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const summary = document.querySelector("#summary");
const summaryText = document.querySelector("#summaryText");
let currentStep = 0;

function validateStep(index) {
  const input = steps[index].querySelector("input");
  const error = steps[index].querySelector(".error");
  let message = "";
  if (!input.value.trim()) message = "This field is required.";
  else if (input.type === "email" && !input.validity.valid) message = "Enter a valid email address.";
  else if (input.type === "password" && input.value.length < 6) message = "Password must be at least 6 characters.";
  error.textContent = message;
  return message === "";
}

function showStep() {
  steps.forEach((step, index) => step.hidden = index !== currentStep);
  stepLabel.textContent = `Step ${currentStep + 1} of 3`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === 2 ? "Finish" : "Next";
}

nextButton.addEventListener("click", () => {
  if (!validateStep(currentStep)) return;
  if (currentStep < 2) {
    currentStep++;
    showStep();
  } else {
    form.hidden = true;
    stepLabel.hidden = true;
    summary.hidden = false;
    summaryText.textContent = `Name: ${form.elements.name.value}; Email: ${form.elements.email.value}; Password: ••••••`;
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) currentStep--;
  showStep();
});

// Clear an error as soon as the corresponding input becomes valid.
form.addEventListener("input", (event) => {
  const index = steps.findIndex(step => step.contains(event.target));
  if (index !== -1) validateStep(index);
});

document.querySelector("#restartButton").addEventListener("click", () => {
  form.reset();
  currentStep = 0;
  form.hidden = false;
  stepLabel.hidden = false;
  summary.hidden = true;
  steps.forEach(step => step.querySelector(".error").textContent = "");
  showStep();
});
showStep();
