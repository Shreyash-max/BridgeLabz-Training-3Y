const message = document.querySelector("#message");
const counter = document.querySelector("#counter");
const resetButton = document.querySelector("#resetButton");
const maximumCharacters = 100;

function updateCounter() {
  const remaining = maximumCharacters - message.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
  counter.classList.toggle("limit", remaining === 0);
}

// preventDefault() blocks any keystroke that would exceed 100 characters.
message.addEventListener("beforeinput", (event) => {
  if (event.inputType.startsWith("insert") &&
      message.value.length >= maximumCharacters &&
      event.data) {
    event.preventDefault();
  }
});

message.addEventListener("input", updateCounter);
resetButton.addEventListener("click", () => {
  message.value = "";
  updateCounter();
});
updateCounter();