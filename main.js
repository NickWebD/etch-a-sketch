const field = document.querySelector(".grid-field");

function createField() {
  for (let i = 0; i < 16 * 16; i++) {
    const element = document.createElement("div");
    element.classList.add("item");
    field.appendChild(element);
  }
}

createField();
