const container = document.querySelector("#container-grid");

let valor = 256;

const btn = document.createElement("button");
btn.classList.add("btn");
document.body.appendChild(btn);
btn.textContent = "New Grid";
btn.addEventListener("click", () => {
  valor = parseInt(prompt("Grid Dimension"));
  container.innerHTML('')
  blocks(valor)
});

function blocks(int) {
  for (let i = 0; i < int; i++) {
    const divs = document.createElement("div");
    divs.classList.add("grid");
    container.appendChild(divs);
    divs.addEventListener("mouseover", () => {
      divs.style.backgroundColor = "blue";
    });
  }
}
