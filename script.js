const container = document.getElementById("container");
let grid;
//let pixel;

function makeGridSquares(width, height) {
    for(let i = 0; i < width * height; i++) {
        grid = document.createElement("div");
        container.appendChild(grid);  
    }
}

makeGridSquares(16, 16);

grid.addEventListener("mouseover", () => {
    grid.classList.toggle("black-background");
}); 