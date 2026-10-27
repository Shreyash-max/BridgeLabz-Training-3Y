const dropdown = document.querySelector("#dropdown");
const dropdownButton = document.querySelector("#dropdownButton");
const options = document.querySelector("#options");
const selection = document.querySelector("#selection");

dropdownButton.addEventListener("click", () => {
  const isOpening = options.hidden;
  options.hidden = !isOpening;
  dropdownButton.setAttribute("aria-expanded", String(isOpening));
});

options.addEventListener("click", (event) => {
  const option = event.target.closest("button[data-value]");
  if (!option) return;
  dropdownButton.textContent = option.dataset.value + " ▾";
  selection.textContent = `Selected: ${option.dataset.value}`;
  options.hidden = true;
  dropdownButton.setAttribute("aria-expanded", "false");
});

// Capturing phase: close the dropdown before the click reaches its target.
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    options.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
  }
}, true);
