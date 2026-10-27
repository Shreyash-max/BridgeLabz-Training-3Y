const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const previewImage = document.querySelector("#previewImage");
const closeModal = document.querySelector("#closeModal");

gallery.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;
  previewImage.src = event.target.src;
  previewImage.alt = event.target.alt;
  modal.hidden = false;
});

function hideModal() {
  modal.hidden = true;
  previewImage.removeAttribute("src");
}

// Clicking the backdrop closes the modal.
modal.addEventListener("click", hideModal);
// Prevent clicks inside the modal content from reaching the backdrop.
modalContent.addEventListener("click", (event) => event.stopPropagation());
closeModal.addEventListener("click", hideModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});
