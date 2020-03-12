// console.log('Connected...');

var button = document.querySelector('button');
var paragraph = document.querySelector('p');
var ul = document.querySelector('ul');
var olLi = document.querySelectorAll('ol li');
var buttonBackgnd = document.querySelector('#buttonBackgnd');

// Click listener on button:
button.addEventListener('click', function () {
    paragraph.textContent = 'Someone has clicked the button!';
});
// If I create another listener targetting the same element, it will also apply.

// Click listener on <ul>:
ul.addEventListener('click', function () {
    // Toggle logic:
    if (ul.style.color == 'red') {
        ul.style.color = 'blue';
    } else {
        ul.style.color = 'red';
    }
});

// Click listener on <ol> <li> (not using an anonymous function):
function changetext() {
    // Toggle logic:
    if (this.style.color == 'green') {
        this.style.color = 'cyan';
    } else {
        this.style.color = 'green';
    }
}

for (i = 0; i < olLi.length; i++) {
    olLi[i].addEventListener('click', changetext);
}

// Click listener on last button:
buttonBackgnd.addEventListener('click', function(){
    // Toggle logic:
    if (document.body.style.background == 'red') {
        document.body.style.background = 'orange';
    } else {
        document.body.style.background = 'red';
    }
    // I could define the if statement like this:
    // var isRed = false;
    // if (isRed === true) {
    //     document.body.style.background == 'orange';
    // } else {
    //     document.body.style.background == 'red';
    // }
    // isRed = !isRed;
});
// If we want a variable to take the contrary falue (boolean), we can use: variable = !variable.

// IMPORTANT: Another way to toggle between two states is to make use of the toggle method of the class list:
// buttonBackgnd.addEventListener('click', function(){
//     document.body.classList.toggle('red');
// });