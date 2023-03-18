let gridSize = 16;
let squareSize = 6.25;

let eraserToggleOn = false;
let gridToggleOn = false;

let hoverValue = 'mouseover';
let penColor = 'black';
let squares;
//to store color temporary
let tmp;


const sketchContainer = document.getElementById('sketch-container');

const colorButton = document.getElementById('color-button');
const clearButton = document.getElementById('clear-button');
const eraserButton = document.getElementById('eraser-button');

const hoverButton = document.getElementById('hover-button');
const gridButton = document.getElementById('grid-button');
const squaresButton = document.getElementById('squares-button');

const modalSquares = document.getElementById('squares-modal');
const modalCloseButtonSq = document.getElementById('modal-close-img-squares');
const modalInputSq = document.getElementById('modal-input-squares');

const modalColor = document.getElementById('color-modal');
const modalCloseButtonCol = document.getElementById('modal-close-img-color');
const inputColor = document.getElementById('color-input');

initilizeGrid();


function initilizeGrid() {
    addSquaresToHTML();
    calculateSquareSize();

    squares = document.getElementsByClassName('square');

    setSquareSize();
    addListenerForAllSquaresMouseover();
}

function addSquaresToHTML () {
    //inserting the squares into the container, depending on the gridSize
    for (let i=0; i < gridSize; i++) {
        for (let j=0; j < gridSize; j++) {
            let square = document.createElement('div');
            square.className = 'square';

            sketchContainer.appendChild(square);
        }
    }
}

//calculating the squares size
function calculateSquareSize () {
    squareSize = (100/gridSize);
}


//setting square size
function setSquareSize() {
    for (let i=0; i < squares.length; i++) {
        squares[i].style.width = `${squareSize}%`;
        squares[i].style.height = `${squareSize}%`;
    }
}


//adding eventListeners for the squares
function addListenerForAllSquaresMousedown() {
    for (let i=0; i < squares.length; i++) {
        squares[i].addEventListener('mousedown', () => {
            changeColor(i);
        });
    } 
}

function addListenerForAllSquaresMouseover() {
    for (let i=0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', () => {
            changeColor(i);
        });
    } 
}

//Eventlisteners for the buttons
clearButton.addEventListener('click', clearSquares);
eraserButton.addEventListener('click', eraserOnOf);

hoverButton.addEventListener('click', function(){
    if (hoverValue === 'mouseover') {

        while (sketchContainer.firstChild) {
            sketchContainer.removeChild(sketchContainer.lastChild);
        }

        document.getElementById('hover-button-text').innerText = "CLICK";

        hoverValue = 'mousedown';

        addSquaresToHTML();
        calculateSquareSize();

         squares = document.getElementsByClassName('square');

        setSquareSize();
        addListenerForAllSquaresMousedown();
    }
    else {
        
        while (sketchContainer.firstChild) {
            sketchContainer.removeChild(sketchContainer.lastChild);
        }

        document.getElementById('hover-button-text').innerText = "HOVER";

        hoverValue = 'mouseover';

        addSquaresToHTML();
        calculateSquareSize();

         squares = document.getElementsByClassName('square');

        setSquareSize();
        addListenerForAllSquaresMouseover();
    
    }
});

gridButton.addEventListener('click', function() {
        if (gridToggleOn == true) {
            for (let i=0; i < squares.length; i++){
                squares[i].style.border = 'none';
            }
            //change icon to off
            document.getElementById('grid-icon').src = './icons/grid_off_FILL0_wght200_GRAD0_opsz48.png';
            gridToggleOn = false;
        }
        else {
            for (let i=0; i < squares.length; i++){
                if ((i+1) % gridSize  !== 0) {
                    squares[i].style.borderRight = '1px solid grey';
                }
                if (i < (gridSize * (gridSize - 1))) {
                    squares[i].style.borderBottom = '1px solid grey';
                }
            }
            //change icon to on
            document.getElementById('grid-icon').src = './icons/grid_on_FILL0_wght200_GRAD0_opsz48.png';
            gridToggleOn = true;
        }   
});

squaresButton.addEventListener('click', openModalSquares);
modalCloseButtonSq.addEventListener('click', closeModalSquares);

modalInputSq.addEventListener('change', (e) => {
    if (e.currentTarget.value > 100) {
        alert('Your Input is greater then 100')
    }
    else {
       //set Grid Size from input value
        setGridSize(e.currentTarget.value);

        //remove all squares
        while (sketchContainer.firstChild) {
            sketchContainer.removeChild(sketchContainer.lastChild);
        }
        //Initilize grid from new
        initilizeGrid();
        
        closeModalSquares();
    } 
});

colorButton.addEventListener('click', openModalColor);
modalCloseButtonCol.addEventListener('click', closeModalColor);

inputColor.addEventListener('input', (c) => {
    if (eraserToggleOn) {
        document.getElementById('color-modal-text').style.color = 'black';
    }
    else {
        penColor = c.currentTarget.value;
        tmp = c.currentTarget.value;
        document.getElementById('color-button-text').style.color = penColor;
        document.getElementById('color-button-text').style.filter = 'invert(100%) saturate(0%)';
        document.getElementById('color-palette').style.fill = penColor;
        document.getElementById('color-palette').style.filter = 'invert(100%) saturate(0%)';
        colorButton.style.backgroundColor = penColor;
        console.log(c.currentTarget.value); 
    }
    
});

//function to clear the squares color
function clearSquares() {
    for (let i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
}

//function to set the grid size
function setGridSize(evalue) {
    gridSize = evalue;
}

//function to open Modal-squares
function openModalSquares() {
    modalSquares.style.display = 'flex';
}

function openModalColor () {
    modalColor.style.display = 'flex';
}

//function to close Modal-squares (display none)
function closeModalSquares() {
    modalSquares.style.display = 'none';
}

function closeModalColor() {
    modalColor.style.display = 'none';
}

//function to toggle eraser, make changeColor white or black
function eraserOnOf() {
    if (eraserToggleOn) {
        document.getElementById('color-modal-text').style.color = 'white';
        //change button style
        eraserButton.style.cssText = 'border:none;';
        //change color to black
        penColor = tmp;
        eraserToggleOn = false;
        console.log(penColor);
    }
    else {
        tmp = penColor;
        //Change button style
        eraserButton.style.cssText = 'border: 2px solid black;';
        //change color to white
        penColor = 'white';
        eraserToggleOn = true;
        console.log(penColor);
    }
}

//function to change the color of the div
function changeColor(e) {
    console.log('color Change!');
    squares[e].style.backgroundColor = `${penColor}`;
}
