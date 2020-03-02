//----- ELEMENTS ------------->

let toy = document.getElementById("toy");
let grid = document.getElementById("grid");
let buttonDiv = document.getElementById("buttons");

let colorDiv = document.getElementById("colorDiv");
buttonDiv.appendChild(colorDiv);

let selection = "";

const black = document.createElement("button");
black.addEventListener('click', () => selection = "black");

const green = document.createElement("button");
green.addEventListener('click', () => selection = "green");

const blue = document.createElement("button");
blue.addEventListener('click', () => selection = "blue");

const yellow = document.createElement("button");
yellow.addEventListener('click', () => selection = "yellow");

const rainbow = document.createElement("button");
rainbow.addEventListener('click', () => selection = "rainbow");

colorDiv.appendChild(black);
colorDiv.appendChild(green);
colorDiv.appendChild(blue);
colorDiv.appendChild(yellow);
colorDiv.appendChild(rainbow);

const clear = document.createElement("button");
clear.addEventListener('click', clearGrid);

buttonDiv.appendChild(clear);

toy.appendChild(grid);
toy.appendChild(buttonDiv);

//------------------------------>


//----- GRID ------------------>
function createGrid() {
    resetGrid();
    let gridSize = prompt("Enter grid size");
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; //repeat gridSize-times with 1fr of the total grid size
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for(i = 0; i < gridSize*gridSize; i++) { 
        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.border = "1px #000000";
        grid.appendChild(div);
        div.addEventListener("mouseover", function() {
            switch(selection) {
                case "black":
                    div.style.backgroundColor = "#000000";
                    break;
                
                case "green":
                    div.style.backgroundColor = "#23f203";
                    break;

                case "blue":
                    div.style.backgroundColor = "#035bf2";
                    break;

                case "yellow":
                    div.style.backgroundColor = "#d8f203";
                    break;

                case "rainbow":
                    div.style.backgroundColor = rainbowColor();
            }
        })

    }
}

function resetGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    grid.style.gridTemplateColumns = '';
    grid.style.gridTemplateRows  = '';
}

function clearGrid() {
    for (let i = 0; i < grid.childElementCount; i++) {
        if (grid.childNodes[i].style.backgroundColor !== 'hsl(0, 0%, 100%)') {
            grid.childNodes[i].style.backgroundColor = 'hsl(0, 0%, 100%)';
        }
    }
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
rainbow.style.backgroundImage = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
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

function rainbowColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

//------------------------------>

createGrid();