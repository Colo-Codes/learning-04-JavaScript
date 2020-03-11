// console.log("Connected...");
var userOption = prompt("What would you like to do?");
var toDo = [];
// Functions:
function listTodos () {
	console.log("ToDo list:");
	console.log("=================");
	toDo.forEach( function(element, id) {
		console.log(id + " : " + element);
	});
	console.log("=================");
}
function newTodo () {
userOption = prompt("What ToDo would you like to add?");
		toDo.push(userOption);
		console.log("ToDo updated:");
		console.log(toDo);
}
function deleteTodo () {
	userOption = prompt("What ToDo would you like to delete (index)?");
		if (userOption >= toDo.length) {
			console.log("ERROR: There is no ToDo with that index.");
		} else {
			toDo.splice(userOption, 1);
			console.log("Todo " + userOption + " deleted!");
		}
}
// Main loop:
while (userOption !== "quit") {
	if (userOption === "list") {
		listTodos();
	} else if (userOption === "new") {
		newTodo();
	} else if (userOption === "delete") {
		deleteTodo();
	} else {
		console.log("ERROR: Command not found!");
	}
	userOption = prompt("What would you like to do?");
}
console.log("(!) App exited. Bye!");