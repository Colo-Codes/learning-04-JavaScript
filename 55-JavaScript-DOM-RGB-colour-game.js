// console.log('Connected...');

// Variables:
var colours = coloursArrayRandom(6);
var squares = document.querySelectorAll('.square'); // REMEMBER: This is an array
var pickedColour = randomPositionColour();
var messageDisplay = document.getElementById('message');
var gameHeading = document.querySelector('#gameHeading');

// Picked colour:
document.querySelector('#pickedColour').textContent = pickedColour;

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