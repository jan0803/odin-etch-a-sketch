let gridSize = 16;
let squareSize = 6.25;
let eraserToggleOn = false;
let penColor = 'black';

//calculating the squares size
function calculateSquareSize () {
    squareSize = (100/gridSize);
}


const sketchContainer = document.getElementById('sketch-container');

const clearButton = document.getElementById('clear-button');
const eraserButton = document.getElementById('eraser-button');
const squaresButton = document.getElementById('squares-button');

const modalSquares = document.getElementById('squares-modal');
const modalCloseButtonSq = document.getElementById('modal-close-img-squares');
const modalInputSq = document.getElementById('modal-input-squares');

function initilizeGrid () {
    calculateSquareSize();

    //inserting the squares into the container, depending on the gridSize
    for (let i=0; i < gridSize; i++) {

        for (let j=0; j < gridSize; j++) {
            let square = document.createElement('div');
            square.className = 'square';

            sketchContainer.appendChild(square);
        }

    }
}

initilizeGrid();

let squares = document.getElementsByClassName('square');

setSquareSize();
addListenerForAllSquares();

//setting square size
function setSquareSize() {
    for (let i=0; i < squares.length; i++) {
        squares[i].style.width = `${squareSize}%`;
        squares[i].style.height = `${squareSize}%`;
    }
}


//adding eventListeners for the squares
function addListenerForAllSquares() {
   for (let i=0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', function() {
        changeColor(i);
    });
} 
}


//Eventlisteners for the buttons
clearButton.addEventListener('click', clearSquares);
eraserButton.addEventListener('click', eraserOnOf);

squaresButton.addEventListener('click', openModalSquares);
modalCloseButtonSq.addEventListener('click', closeModalSquares);

modalInputSq.addEventListener('change', (e) => {
    //set Grid Size from input value
    setGridSize(e.currentTarget.value);
    //calculate grid size
    calculateSquareSize();
    //remove all squares
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.lastChild);
    }
    //Initilize grid from new
    initilizeGrid();

    let squares = document.getElementsByClassName('square');

    setSquareSize();
    addListenerForAllSquares();

    closeModalSquares();
});

//function to clear the squares color
function clearSquares() {
    for (let i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
}

function setGridSize(evalue) {
    gridSize = evalue;

}

//function to open Modal-squares
function openModalSquares() {
    modalSquares.style.display = 'flex';
}

//function to close Modal-squares (display none)
function closeModalSquares() {
    modalSquares.style.display = 'none';
}

//function to toggle eraser, make changeColor white or black
function eraserOnOf() {
    if (eraserToggleOn) {
        //change button style
        eraserButton.style.cssText = 'border:none;';
        //change color to black
        penColor = 'black';
        eraserToggleOn = false;
    }
    else {
        //Change button style
        eraserButton.style.cssText = 'border: 2px solid black;';
        //change color to white
        penColor = 'white';
        eraserToggleOn = true;
    }
}

//function to change the color of the div
function changeColor(e) {
    console.log('color Change!');
    squares[e].style.backgroundColor = `${penColor}`;
}
