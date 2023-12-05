const gridNum = 16; // Number of square divs
let isMouseDown = false; // Mouse down starts as false
let color = '#ff0000'; // Initialize color

const changeColor = (element) => {
    element.style.backgroundColor = color;
};

const setupEventListenersForGridBox = (gridBox) => {
    gridBox.addEventListener('mousedown', () => {
        isMouseDown = true;
        changeColor(gridBox);
    });

    gridBox.addEventListener('mouseover', () => {
        if (isMouseDown) {
            changeColor(gridBox);
        }
    });

    gridBox.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
};

const setupColorPickerEventListener = () => {
    const colorPicker = document.querySelector('.color-picker');
    colorPicker.addEventListener('input', (event) => {
        color = event.target.value;
    });
};

const createGrid = (gridNum) => {
    const gridContainer = document.querySelector('.grid-container');
    
    for (let rowIndex = 0; rowIndex < gridNum; rowIndex++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        for (let boxIndex = 0; boxIndex < gridNum; boxIndex++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            setupEventListenersForGridBox(gridBox);
            gridRow.appendChild(gridBox);
        }
        gridContainer.appendChild(gridRow);
    }
};

const setupEtchASketch = () => {
    createGrid(gridNum);
    setupColorPickerEventListener();

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
};

setupEtchASketch();