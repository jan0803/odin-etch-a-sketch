let gridSize = 16;
let squareSize = 6.25;
let eraserToggleOn = false;
let penColor = 'black';

//calculating the squares size
squareSize = (100/gridSize);

const sketchContainer = document.getElementById('sketch-container');
const clearButton = document.getElementById('clear-button');
const eraserButton = document.getElementById('eraser-button');

//inserting the squares into the container, depending on the gridSize
for (let i=0; i < gridSize; i++) {

    for (let j=0; j < gridSize; j++) {
        let square = document.createElement('div');
        square.className = 'square';

        sketchContainer.appendChild(square);
    }

}

const squares = document.getElementsByClassName('square');

//setting square size
for (let i=0; i < squares.length; i++) {
    squares[i].style.width = `${squareSize}%`;
    squares[i].style.height = `${squareSize}%`;
}

//adding eventListeners for the squares
for (let i=0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', function() {
        changeColor(i);
    });
}

//Eventlisteners for the buttons
clearButton.addEventListener('click', clearSquares);
eraserButton.addEventListener('click', eraserOnOf);

//function to clear the squares color
function clearSquares() {
    for (let i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
}

//function to toggle eraser, make changeColor white or black
function eraserOnOf() {
    if (eraserToggleOn) {
        //change color to black
        penColor = 'black';
        eraserToggleOn = false;
    }
    else {
        //Change button style

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
