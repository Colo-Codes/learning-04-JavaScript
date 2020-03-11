// console.log("Connected...");
// printReverse()
function printReverse(userArray) {
	for (var i = userArray.length-1; i >= 0; i--) {
		console.log(userArray[i]);
	}
}
// isUniform()
function isUniform(userArray) {
	for (var i = 1; i < userArray.length; i++) {
		if (userArray[i] !== userArray[i-1]) {
			return false;
		}
	}
	return true;
}
// sumArray()
function sumArray(userArray) {
	var sum = 0;
	userArray.forEach( function(element) {
		sum += element;
	});
	return sum;
}
// max()
function max(userArray) {
	var max = userArray[0];
	userArray.forEach( function(element, id) {
		if (id > 0) {
			if (element > userArray[id-1]) {
				max = element;
			}
		}
	});
	return max;
}