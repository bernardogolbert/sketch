const container = document.querySelector("#container-grid");

let valor = 256;

const btn = document.createElement("button");
btn.classList.add("btn");
document.body.appendChild(btn);
btn.textContent = "New Grid";
btn.addEventListener("click", () => {
  valor = parseInt(prompt("Grid Dimension"));
  container.innerHTML = "";
  if (valor <= 100) {
    blocks(valor);
  } else {
    alert('Max is 100')

  }
});

function blocks(int) {
  for (let i = 0; i < int * int; i++) {
    const divs = document.createElement("div");
    divs.classList.add("grid");
    divs.style.flexBasis = 100 / int + "%";
    container.appendChild(divs);
    divs.addEventListener("mouseover", () => {
      divs.style.backgroundColor = "blue";
    });
  }
}

blocks(16);
