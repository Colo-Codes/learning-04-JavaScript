// console.log('Connected...');

var way1 = document.getElementById("first");
console.log('document.getElementById("first") - way1');
console.dir(way1);

var way2 = document.getElementsByClassName("special")[0];
console.log('document.getElementsByClassName("special")[0] - way2');
console.dir(way2);

var way3 = document.getElementsByTagName("p")[0];
console.log('document.getElementsByTagName("p")[0] - way3');
console.dir(way3);

var way4 = document.querySelector("#first");
console.log('document.querySelector("#first") - way4');
console.dir(way4);

var way5 = document.querySelector("p"); // This will select the first occurrence of <p>
console.log('document.querySelector("p") - way5');
console.dir(way5);

var way6 = document.querySelectorAll("p")[0];
console.log('document.querySelectorAll("p")[0] - way6');
console.dir(way6);

var way7 = document.querySelectorAll(".special")[0];
console.log('document.querySelectorAll(".special")[0] - way7');
console.dir(way7);

var way8 = document.querySelectorAll("#first")[0];
console.log('document.querySelectorAll(".#first")[0] - way8');
console.dir(way8);

var way9 = document.querySelector("h1 + p"); // Select the p that is preceded by an h1
console.log('document.querySelector("h1 + p") - way9');
console.dir(way9);