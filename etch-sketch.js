`use strict`;

drawGrid();
sketch();

const resizeButton = document.querySelector(`#resize-button`);
resizeButton.addEventListener(`click`, resizeGrid);

const resetButton = document.querySelector(`#reset-button`);
resetButton.addEventListener(`click`, resetGrid);

/* Beginning of functions' declaration section */

function drawGrid(size = 16) {
    
    for(let rowNo = 1; rowNo <= size; rowNo++) {
        drawRow(rowNo);
    
        for(let columnNo = 1; columnNo <= size; columnNo++) {
            drawColumn(rowNo, columnNo, size);
        }
    
    }
    
}

function drawRow(rowNo) {
    const container = document.querySelector(`#container`);
    const row = document.createElement(`div`);
    row.classList.toggle(`row`);
    row.setAttribute(`id`, `row-${rowNo}`);
    container.appendChild(row);
}

function drawColumn(rowNo, columnNo, size) {
    const firstRow = 1;
    const lastColumn = size;
    const row = document.querySelector(`#row-${rowNo}`);
    const column = document.createElement(`div`);
    column.classList.toggle(`column`);
    if(rowNo === firstRow) column.classList.toggle(`border-top`);
    if(columnNo === lastColumn) column.classList.toggle(`border-right`);
    column.setAttribute(`id`, `row-${rowNo}, column-${columnNo}`);
    row.appendChild(column);
}

function eraseGrid() {
    const container = document.querySelector(`#container`);
    const rows = document.querySelectorAll(`.row`);
    rows.forEach((row) => {
        container.removeChild(row);
    });
}

function sketch() {
    const gridElements = document.querySelectorAll(`.column`);
    gridElements.forEach(addHoverState);
}

function addHoverState(gridElement) {
    gridElement.addEventListener(`mouseenter`, (mouseEnter) => {
        mouseEnter.target.classList.add(`draw-background`);
    });
}

function resizeGrid() {
    let size = prompt(`Please type the size wished.\nMax size allowed: 100.\nMin size allowed: 2`);
    
    if(size !== null) {
        size = +size;
        if(isNaN(size)) {
            alert(`Value not valid. Please try again.`);
        }
    
        else {
            if(size > 100) size = 100;
            if(size < 2) size = 2;
            eraseGrid();
            drawGrid(size);
            sketch();
        } 
    }
}

function resetGrid() {
    const columns = document.querySelectorAll(`.column`);
    columns.forEach((column) => {
    column.classList.remove(`draw-background`);
    });
}
