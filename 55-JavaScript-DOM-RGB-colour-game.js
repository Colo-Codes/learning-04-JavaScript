// console.log('Connected...');

// Variables:
var numOfSquares = 6;
var colours = coloursArrayRandom(numOfSquares);
var squares = document.querySelectorAll('.square'); // REMEMBER: This is an array
var pickedColour = randomPositionColour();
var messageDisplay = document.getElementById('message');
var gameHeading = document.querySelector('#gameHeading');
var resetButton = document.querySelector('#resetButton');
var buttonEasy = document.querySelector('#buttonEasy');
var buttonHard = document.querySelector('#buttonHard');

// Picked colour:
document.querySelector('#pickedColour').textContent = pickedColour;

// Reset:
resetButton.addEventListener('click', function() {
    // Reset header colour
    gameHeading.style.backgroundColor = document.body.style.backgroundColor;
    // Reset button
    resetButton.textContent = "New Colours";
    // Generate new colours
    colours = coloursArrayRandom(numOfSquares);
    // Pick a new random colour from array
    pickedColour = randomPositionColour();
    // Change picked colour
    document.querySelector('#pickedColour').textContent = pickedColour;
    // Load new colours into squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i]; // Using "backgroundColor" because is compatible with more browsers.
    }
});

// Difficulty
buttonEasy.addEventListener('click', function() {
    buttonEasy.classList.add('selected');
    buttonHard.classList.remove('selected');
    // Generate 3 new colours
    numOfSquares = 3;
    colours = coloursArrayRandom(numOfSquares);
    pickedColour = randomPositionColour();
    document.querySelector('#pickedColour').textContent = pickedColour;
    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
});
buttonHard.addEventListener('click', function() {
    buttonHard.classList.add('selected');
    buttonEasy.classList.remove('selected');
    // Generate 6 new colours
    numOfSquares = 6;
    colours = coloursArrayRandom(numOfSquares);
    pickedColour = randomPositionColour();
    document.querySelector('#pickedColour').textContent = pickedColour;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display = 'block';
    }
});

// Squares:
for (var i = 0; i < squares.length; i++) {
    // Colouring the grid:
    squares[i].style.backgroundColor = colours[i]; // Using "backgroundColor" because is compatible with more browsers.

    // Clicking events:
    squares[i].addEventListener('click', function() {
        // Obtain colour
        var clickedColour = this.style.backgroundColor;
        // Compare colour
        if (clickedColour === pickedColour) {
            messageDisplay.textContent = "Correct!";
            changeColours(clickedColour);
            gameHeading.style.backgroundColor = clickedColour;
            resetButton.textContent = "Play again!";
        } else {
            this.style.backgroundColor = document.body.style.backgroundColor;
            messageDisplay.textContent = "Wrong, try again!";
        }
    });
}

// Functions:
function changeColours(colour) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
}
function randomPositionColour() {
    var random = Math.floor(Math.random() * colours.length); // The Math.random function generates numbers from 0 to colours.length, not including the last value of colours.length.
    return colours[random];
}
function coloursArrayRandom(arrayLength) {
    var arr = [];
    for (var i = 0; i < arrayLength; i++) {
        arr.push('rgb(' + randomColour() + ', ' + randomColour() + ', ' + randomColour() + ')')
    }
    return arr;
}
function randomColour() {
    var randomColourGenerated = Math.floor(Math.random() * 256); // Between 0 and 255
    return randomColourGenerated;
}