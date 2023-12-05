let gridNum = 16; // Number of square divs

let createGrid = (gridNum) => {
    const gridContainer = document.querySelector('.grid-container');
    
    for (let rowIndex = 0; rowIndex < gridNum; rowIndex++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        for (let colIndex = 0; colIndex < gridNum; colIndex) {
            const gridCol = document.createElement('div');
            gridCol.classList.add('grid-col');
            gridRow.appendChild(gridCol);
        }
        gridContainer.appendChild(gridRow);
    }
}

createGrid(gridNum);