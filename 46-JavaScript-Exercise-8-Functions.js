//console.log("Connected...");
console.log("Available functions: isEven(), factorial(), kebabToSnake().");

// Function isEven()
function isEven(num) {
	if (num % 2 === 0) {
		return "The number " + num + " is even!";
	} else {
		return "The number " + num + " is odd...";
	}
}
// Another way of doing it:
// function isEven(num) {
// 	return num % 2 === 0;
// }

// Function factorial()
function factorial(num) {
	if (num === 0 || num === 1)
		return "Te factorial is 1";
	for (var i = num - 1; i >= 1; i--) {
		num *= i;
	}
	return "Te factorial is " + num;
}

// Function kebabToSnake()
function kebabToSnake(str) {
	return str.replace(/-/g,"_");
}