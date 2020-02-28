//----- ELEMENTS ------------->

let toy = document.getElementById("toy");
let grid = document.getElementById("grid");
let buttonDiv = document.getElementById("buttons");

let colorDiv = document.getElementById("colorDiv");
buttonDiv.appendChild(colorDiv);

const black = document.createElement("button");
const green = document.createElement("button");
const blue = document.createElement("button");
const yellow = document.createElement("button");
const rainbow = document.createElement("button");
colorDiv.appendChild(black);
colorDiv.appendChild(green);
colorDiv.appendChild(blue);
colorDiv.appendChild(yellow);
colorDiv.appendChild(rainbow);

const clear = document.createElement("button");
buttonDiv.appendChild(clear);

toy.appendChild(grid);
toy.appendChild(buttonDiv);

//------------------------------>


//----- GRID ------------------>
function createGrid() {
    resetGrid();
    grid.style.gridTemplateColumns = `repeat(${10}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${10}, 1fr)`;

    for(i = 0; i < 100; i++) { 
        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.border = "1px #FFFFFF";
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
buttonDiv.style.padding = "5%";

colorDiv.style.display = "flex";
colorDiv.style.justifyContent = "center";
colorDiv.style.paddingBottom = "20px";

black.textContent = "BLACK";
black.style.backgroundColor = "black";
black.style.color = "white";
black.style.borderRadius = "50px";
black.style.fontSize = "1rem";
black.style.width = "6rem";
black.style.cursor = "pointer";
black.style.margin = "0 10px";

green.textContent = "GREEN";
green.style.backgroundColor = "green";
green.style.color = "white";
green.style.borderRadius = "50px";
green.style.fontSize = "1rem";
green.style.width = "6rem";
green.style.cursor = "pointer";
green.style.margin = "0 10px";

blue.textContent = "BLUE";
blue.style.backgroundColor = "blue";
blue.style.color = "white";
blue.style.borderRadius = "50px";
blue.style.fontSize = "1rem";
blue.style.width = "6rem";
blue.style.cursor = "pointer";
blue.style.margin = "0 10px";

yellow.textContent = "YELLOW";
yellow.style.backgroundColor = "yellow";
yellow.style.color = "white";
yellow.style.borderRadius = "50px";
yellow.style.fontSize = "1rem";
yellow.style.width = "6rem";
yellow.style.cursor = "pointer";
yellow.style.margin = "0 10px";

rainbow.textContent = "RAINBOW";
rainbow.style.backgroundColor = "red";
rainbow.style.color = "white";
rainbow.style.borderRadius = "50px";
rainbow.style.fontSize = "1rem";
rainbow.style.width = "6rem";
rainbow.style.cursor = "pointer";
rainbow.style.margin = "0 10px";

clear.textContent = "CLEAR";
clear.style.display = "block";
clear.style.height = "5rem";
clear.style.width = "5rem";
clear.style.fontSize = "1rem";
clear.style.borderRadius = "60%";
clear.style.cursor = "pointer";
clear.style.margin = "auto";

//------------------------------>

createGrid();