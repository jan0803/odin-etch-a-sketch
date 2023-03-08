let gridSize = 16;
let squareSize = 6.25;

//calculating the squares size
squareSize = (100/gridSize);


const sketchContainer = document.getElementById('sketch-container');

for (let i=0; i < gridSize; i++) {

    for (let j=0; j < gridSize; j++) {
        let square = document.createElement('div');
        square.className = 'square';

        sketchContainer.appendChild(square);
    }

}

//setting square size
const squares = document.getElementsByClassName('square');

for (let i=0; i < squares.length; i++) {
    squares[i].style.width = `${squareSize}%`;
    squares[i].style.height = `${squareSize}%`;
}