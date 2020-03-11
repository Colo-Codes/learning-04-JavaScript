//console.log("Working...")
var hiddenNumber = 7;
var userNumber = Number(prompt("Guess a number!"));
//if (Number(userNumber) < hiddenNumber) {
if (userNumber < hiddenNumber) {
	alert("Too low! Try again...");
} else if (userNumber === hiddenNumber) { // We need to compare two number types, that's why we do: Number(userNumber)
	alert("Congratulations! You did it! The number was " + hiddenNumber);
} else {
	alert("Too high! Try again...")
}