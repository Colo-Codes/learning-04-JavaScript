// console.log('Working...')
var age = prompt("Please tell me your age");
if (age < 0) {
	console.log("ERROR: Your age cannot be negative");
} else {
	if (age == 21) { // Data from the "prompt" entry is trated like string...
	console.log("Happy 21 birthday!");
	}
	if (age % 2 === 1) {
		console.log("Your age is odd!");
	}
	// Source (for Java, but applied to JavaScript): https://www.geeksforgeeks.org/check-if-given-number-is-perfect-square-in-cpp/ 
	var sq = Math.sqrt(age);
	if (sq - Math.floor(sq) === 0) {
		console.log("Perfect square!");
	}
	console.log("End of program...");
}

// Another way to do the last part:
//
// if(age % Math.sqrt(age) === 0) {
//   console.log("Your age is a perfect square!");
// }