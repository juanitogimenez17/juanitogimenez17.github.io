const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const clearButton = document.getElementById("clearButton");

// Create grid pixels
for (let i = 0; i < 2500; i++) { // 50x50 grid
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    grid.appendChild(pixel);
}

// Add event listener for coloring pixels
grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("pixel")) {
        e.target.style.backgroundColor = colorPicker.value;
    }
});

// Clear grid
clearButton.addEventListener("click", () => {
    document.querySelectorAll(".pixel").forEach(pixel => {
        pixel.style.backgroundColor = "#ffffff";
    });
});
