let gridNum = 16; // Number of square divs
let isMouseDown = false; // Mouse down starts as false
let color = '#ff0000'; // Initialize color

let changeColor = (element) => {
    element.style.backgroundColor = color;
}

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

    let gridBoxes = document.querySelectorAll('.grid-box');

    gridBoxes.forEach(box => {
        box.addEventListener('mousedown', () => {
            isMouseDown = true;
            changeColor(box);
        });

        box.addEventListener('mouseover', () => {
            if (isMouseDown) {
                changeColor(box);
            }
        });

        box.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
    });

    const colorPicker = document.querySelector('.color-picker');
    colorPicker.addEventListener('input', (event) => {
        color = event.target.value;
    });

}

createGrid(gridNum);

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});