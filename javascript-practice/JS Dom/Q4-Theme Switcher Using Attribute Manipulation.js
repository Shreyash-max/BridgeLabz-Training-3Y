const themeButtons = document.querySelectorAll("[data-theme-choice]");
const currentTheme = document.querySelector("#currentTheme");

function applyTheme(theme) {
  // setAttribute is used for both the custom attribute and theme class.
  document.body.setAttribute("data-theme", theme);
  document.body.setAttribute("class", `theme-${theme}`);
  currentTheme.textContent = theme;
}

themeButtons.forEach(button => {
  button.addEventListener("click", () => applyTheme(button.dataset.themeChoice));
});

// Restore the initial theme from the custom data-theme attribute.
applyTheme(document.body.getAttribute("data-theme") || "light");
