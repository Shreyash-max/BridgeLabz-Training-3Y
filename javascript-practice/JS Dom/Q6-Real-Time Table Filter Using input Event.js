const searchInput = document.querySelector("#searchInput");
const studentRows = [...document.querySelectorAll("#studentRows tr")];
const noResults = document.querySelector("#noResults");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleRows = 0;

  studentRows.forEach(row => {
    const matches = row.textContent.toLowerCase().includes(searchTerm);
    row.hidden = !matches;
    if (matches) visibleRows++;
  });

  noResults.hidden = visibleRows !== 0;
});
