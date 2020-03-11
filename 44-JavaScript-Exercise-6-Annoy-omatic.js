// console.log("Working...")
var userAnswer = '';
// while (userAnswer !== "yes" && userAnswer !== "yeah") {
// 	userAnswer = prompt("Are we there yet?");
// 	console.log("Answer: " + userAnswer);
// }
// if (userAnswer === "yes" || userAnswer === "yeah") {
// 	alert("Yay, we finally made it!");
// } else {
// 	alert("Error!!!");
// }
while (!userAnswer.includes('yes') && !userAnswer.includes('yeah')) {
	userAnswer = prompt('Are we there yet?');
	console.log('Answer: ' + userAnswer);
}
if (userAnswer.includes('yes') || userAnswer.includes('yeah')) {
	alert('Yay, we finally made it!');
} else {
	alert('Error!!!');
}
// We can also use "indexOf"