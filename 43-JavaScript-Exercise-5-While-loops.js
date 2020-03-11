// console.log("Connected...")
console.log("Print all numbers between -10 and 19:");
var i = -10;
while (i < 20) {
	console.log(i);
	i++
}

console.log("Print all even numbers between 10 and 40:");
i = 10
// while (i < 41) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// 	i++;
// }
// This way is more efficient:
while (i < 41) {
	console.log(i);
	i+=2;
}

console.log("Print all odd numbers between 300 and 333:");
i = 300;
while (i < 334) {
	if (i % 2 !== 0) {
		console.log(i);
	}
	i++;
}

console.log("Print all numbers divisible by 5 and 3, between 5 and 50:");
i = 5;
while (i < 51) {
	if ((i % 5 === 0) && (i % 3 === 0)) {
		console.log(i);
	}
	i++;
}