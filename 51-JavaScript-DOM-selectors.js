// console.log('Connected...');

// Selector: document.getElementById()
var tag = document.getElementById("highlight");
console.log('Selector: document.getElementById("highlight") - write <tag> in the console.');
console.dir(tag);

// Selector: document.getElementsByClassName()
var tags = document.getElementsByClassName("bolded");
console.log('Selector: document.getElementsByClassName("bolded") - write <tags> in the console.');
console.dir(tags);

// Selector: document.getElementsByTagName()
var tags2 = document.getElementsByTagName("li");
console.log('Selector: document.getElementsByTagName("li") - write <tags2> in the console.');
console.dir(tags2);

// Selector: document.querySelector()
var tag2 = document.querySelector("#highlight");
console.log('Selector: document.querySelector("#highlight") - write <tag2> in the console.');
console.dir(tag2);
var tag3 = document.querySelector("h1");
console.log('Selector: document.querySelector("h1") - write <tag3> in the console.');
console.dir(tag3);


// Selector: document.querySelectorAll()
var tags3 = document.querySelectorAll("h1");
console.log('Selector: document.querySelectorAll("h1") - write <tags3> in the console.');
console.dir(tags3);

