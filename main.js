const gridField = document.querySelector(".grid-field");
let gridSize = document.querySelector("#size").value;
const setSizeBtn = document.querySelector("#set-size");

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
      square.style.backgroundColor = "black";
    });
    square.classList.add("grid-field__item");
    square.style.flex = `1 0 calc(100% / ${gridSize})`;
    square.style.aspectRatio = "1/1";
    gridField.appendChild(square);
  }
}

//define grid size using input
setSizeBtn.addEventListener("click", () => {
  gridSize = document.querySelector("#size").value;
  createField(gridSize);
});
