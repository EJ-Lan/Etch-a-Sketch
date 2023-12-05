
let gridNum = 16; // Number of square divs

// Need to change this to be a grid
let createGrid = (gridNum) => {
    const gridContainer = document.querySelector('.grid-container');
    for (let curGrid = 0; curGrid < gridNum; curGrid++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
    }
}