// console.log("Connected...");
var userOption = prompt("What would you like to do?");
var toDo = [];
while (userOption !== "quit") {
	if (userOption === "list") {
		console.log("ToDo list:");
		console.log(toDo);
	} else if (userOption === "new") {
		userOption = prompt("What ToDo would you like to add?");
		toDo.push(userOption);
		console.log("ToDo updated:");
		console.log(toDo);
	} else {
		console.log("ERROR: Command not found!");
	}
	userOption = prompt("What would you like to do?");
}
console.log("App exited.");