const productForm = document.querySelector("#productForm");
const productInput = document.querySelector("#productInput");
const productList = document.querySelector("#productList");

// Add a product to the list.
productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = productInput.value.trim();
  if (!name) return;

  const item = document.createElement("li");
  const label = document.createElement("span");
  label.className = "product-name";
  label.textContent = name;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.dataset.action = "delete";
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";

  item.append(label, editButton, deleteButton);
  productList.append(item);
  productInput.value = "";
});

// Event delegation: handle every Edit/Delete click from the parent UL.
productList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const item = button.closest("li");

  if (button.dataset.action === "delete") {
    item.remove();
    return;
  }

  if (button.dataset.action === "edit" && !item.querySelector(".edit-input")) {
    const label = item.querySelector(".product-name");
    const editInput = document.createElement("input");
    editInput.className = "edit-input";
    editInput.value = label.textContent;
    label.replaceWith(editInput);
    button.textContent = "Save";
    button.dataset.action = "save";
    editInput.focus();
    editInput.select();
  } else if (button.dataset.action === "save") {
    saveItem(item);
  }
});

function saveItem(item) {
  const editInput = item.querySelector(".edit-input");
  if (!editInput) return;
  const label = document.createElement("span");
  label.className = "product-name";
  label.textContent = editInput.value.trim() || "Untitled product";
  editInput.replaceWith(label);
  const button = item.querySelector('button[data-action="save"]');
  button.textContent = "Edit";
  button.dataset.action = "edit";
}

// Save the active edit if a click occurs outside that list item.
document.addEventListener("click", (event) => {
  const editingItem = productList.querySelector("li:has(.edit-input)");
  if (editingItem && !editingItem.contains(event.target)) saveItem(editingItem);
});

// Enter saves; Escape cancels by restoring the original text.
productList.addEventListener("keydown", (event) => {
  if (!event.target.matches(".edit-input")) return;
  const item = event.target.closest("li");
  if (event.key === "Enter") saveItem(item);
  if (event.key === "Escape") {
    const input = event.target;
    const label = document.createElement("span");
    label.className = "product-name";
    label.textContent = input.defaultValue;
    input.replaceWith(label);
    const button = item.querySelector('button[data-action="save"]');
    button.textContent = "Edit";
    button.dataset.action = "edit";
  }
});