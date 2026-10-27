const trackingBox = document.querySelector("#trackingBox");
const coordinates = document.querySelector("#coordinates");

trackingBox.addEventListener("mousemove", (event) => {
  // clientX/clientY are viewport coordinates, as required.
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", (event) => {
  const bounds = trackingBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "dot";
  // Convert viewport coordinates to positions inside the box.
  dot.style.left = `${event.clientX - bounds.left}px`;
  dot.style.top = `${event.clientY - bounds.top}px`;
  trackingBox.append(dot);
});
