//default grid size on page loaded
document.addEventListener("DOMContentLoaded", () => {
  createField(16);
});

const gridField = document.querySelector(".grid-field");
let gridSize = document.querySelector("#size").value;
const setSizeBtn = document.querySelector("#set-size");
let isDrawing = false;
const colorBtn = document.querySelectorAll(".color-btn");
let color = "black";
const errorText = document.querySelector(".error");

//function to clear field
function clearField() {
  while (gridField.firstChild) {
    gridField.removeChild(gridField.firstChild);
  }
}

//fuction to create field
function createField(size) {
  clearField();

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.addEventListener("mouseover", () => {
      if (isDrawing) {
        let currentColor = color;
        if (color === "random") {
          currentColor = generateRandomColor();
        }
        square.style.backgroundColor = currentColor;
      }
    });

    square.addEventListener("mousedown", () => {
      isDrawing = true;
    });

    square.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    //square.classList.add("grid-field__item");
    square.style.flex = `1 0 calc(100% / ${gridSize})`;
    square.style.aspectRatio = "1/1";
    gridField.appendChild(square);
  }
}

//define grid size using input
setSizeBtn.addEventListener("click", () => {
  gridSize = document.querySelector("#size").value;

  if (gridSize < 2 || gridSize > 100) {
    errorText.textContent = "You need to choose number between 2 and 100";
  } else {
    errorText.textContent = "";
    createField(gridSize);
  }
});

//function to define a color of squares
function colorSquare() {}

//function to generate random color
function generateRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

//listener for color choosing buttons
colorBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "eraser") {
      color = "white";
    } else {
      color = e.target.id;
    }
  });
});
