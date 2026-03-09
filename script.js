const container = document.querySelector('#container-grid')


for (let i = 0; i < 256; i++) {
    const divs = document.createElement("div")
    divs.classList.add('grid')
    container.appendChild(divs);    
};

