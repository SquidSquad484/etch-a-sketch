const container = document.getElementById("container");
let grid = [];
let pixel;
let newGrid;

function createDivSize() {
    let div = document.querySelectorAll("div");
    for(let i = 0; i < div.length; i++) {
        div[i].style.width = `${divDimensions}px`;
        div[i].style.height = `${divDimensions}px`;
    }
}

function makeGridSquares(width, height) {
    for(let i = 0; i < width * height; i++) {
        pixel = document.createElement("div");
        grid.push(pixel);
        container.appendChild(pixel);  
    }
    divDimensions = 800/width;
    createDivSize();
}

function turnPixelsBlack() {
    for(let i = 0; i < grid.length; i++) {
        grid[i].addEventListener("mouseover", () => {
            grid[i].classList.add("black-background");
        });
    }
}

function createCustomGrid() {
    if (newGrid == null) {
        container.style.display = "grid";
    } else if (newGrid > 100) {
        newGrid = prompt("Sorry, that number is too large. Try a number less than 100.");
        while (newGrid > 100) {
            newGrid = prompt("Sorry, that number is too large. Try a number less than 100.");
            if (newGrid < 100 && newGrid == !null) {
                grid.splice(0, grid.length);
                makeGridSquares(newGrid, newGrid);
                container.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;
                container.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`;
                for(let i = 0; i < grid.length; i++) {
                grid[i].classList.remove("black-background");
                container.style.display = "grid";
                }
            } else if (newGrid == null) {
                container.style.display = "grid";
            }
        }
    } else {
        for(let i = 0; i < grid.length; i++) {
            container.removeChild(grid[i]);
        }   
        grid.splice(0, grid.length);
        makeGridSquares(newGrid, newGrid);
        container.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`;
        for(let i = 0; i < grid.length; i++) {
            grid[i].classList.remove("black-background");
        }
        container.style.display = "grid";
    }
}

makeGridSquares(16, 16);
turnPixelsBlack();

const newGridButton = document.getElementById("clear-new");
newGridButton.addEventListener("click", () => {
    container.style.display = "none";
    newGrid = prompt("How many pixels do you want per side for this new grid?\nEnter one number. Max 100.", "80");   
    createCustomGrid();
    turnPixelsBlack();
});


/* 
when click button
clear grid
and create a popup asking for a number 
  - less than 100

let the user's answer create a new grid with those dimensions
*/

/* Etch a sketch project: on the part where you create a new grid based on the dimensions of the answer in the window popup. 
When I enter a number in the popup the old grid (along with the previous colored pixels) remains on top (and I'm unable to draw on that part) while the new grid goes below the old grid, overflowing the container. 
In the way I did the project, I created an empty array called grid and pushed each new div into the array. So, I thought emptying/clearing grid, then running the function that pushed the new divs into grid again would work. 
I also tried the code without emptying grid and oddly, I can draw on the old grid and the new grid (the new grid still overflows the container).
I tried looking at the debugger but still can't seem to find out what the problem is.  */