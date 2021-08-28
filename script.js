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
        if (newGrid == null) {
            container.style.display = "grid";
        } else {
            if (newGrid < 100) {
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
            } else {
                while (newGrid > 100) {
                    newGrid = prompt("Sorry, that number is too large. Try a number less than 100.");
                }
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

window.addEventListener("load", () => {
    makeGridSquares(16, 16);
    turnPixelsBlack();
});

const newGridButton = document.getElementById("clear-new");
newGridButton.addEventListener("click", () => {
    container.style.display = "none";
    newGrid = prompt("How many pixels do you want per side for this new grid?\nEnter one number. Max 100.", "80");   
    createCustomGrid();
    turnPixelsBlack();
});