let gridNum = 16; // Number of square divs

let createGrid = (gridNum) => {
    const gridContainer = document.querySelector('.grid-container');
    
    for (let rowIndex = 0; rowIndex < gridNum; rowIndex++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        for (let boxIndex = 0; boxIndex < gridNum; boxIndex++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridRow.appendChild(gridBox);
        }
        gridContainer.appendChild(gridRow);
    }
}

createGrid(gridNum);