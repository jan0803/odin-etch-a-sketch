let gridSize = 16;
let squareSize = 6.25;

//calculating the squares size
squareSize = (100/gridSize);


const sketchContainer = document.getElementById('sketch-container');

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

//function to change the color of the div
function changeColor(e) {
    console.log('color Change!');
    squares[e].style.backgroundColor = 'black';
}
