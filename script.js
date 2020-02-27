//----- ELEMENTS ------------->

let toy = document.getElementById("toy");
let grid = document.getElementById("grid");
let buttonDiv = document.getElementById("buttons");

let colorDiv = document.getElementById("colorDiv");
buttonDiv.appendChild(colorDiv);

const black = document.createElement("button");
const red = document.createElement("button");
const blue = document.createElement("button");
const yellow = document.createElement("button");
colorDiv.appendChild(black);
colorDiv.appendChild(red);
colorDiv.appendChild(blue);
colorDiv.appendChild(yellow);

const clear = document.createElement("button");
buttonDiv.appendChild(clear);

const rainbow = document.createElement("button");
buttonDiv.appendChild(rainbow);

toy.appendChild(grid);
toy.appendChild(buttonDiv);

//------------------------------>


//----- GRID ------------------>

function createGrid() {
    //resetGrid();
    grid.style.gridTemplateColumns = `repeat(${10}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${10}, 1fr)`;

    for(i = 0; i < 100; i++) { 
        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.border = "1px solid black";
        grid.appendChild(div);

    }
}

function resetGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    grid.style.gridTemplateColumns = '';
    grid.style.gridTemplateRows  = '';
}

//------------------------------>

//----- BUTTONS STYLE----------------->

black.textContent = "BLACK";
black.style.backgroundColor = "black";
black.style.color = "white";

red.textContent = "RED";
red.style.backgroundColor = "red";
red.style.color = "white";

blue.textContent = "BLUE";
blue.style.backgroundColor = "blue";
blue.style.color = "white";

yellow.textContent = "YELLOW";
yellow.style.backgroundColor = "yellow";
yellow.style.color = "white";

clear.textContent = "CLEAR";

rainbow.textContent = "RAINBOW";

//------------------------------>

createGrid();