// console.log('Connected...');

var button = document.querySelector('button');
var paragraph = document.querySelector('p');
var ul = document.querySelector('ul');

// Click listener on button:
button.addEventListener('click', function(){
    paragraph.textContent = 'Someone has clicked the button!';
});
// If I create another listener targetting the same element, it will also apply.

// Click listener on ul:
ul.addEventListener('click', function(){
    // Toggle logic:
    if (ul.style.color == 'red') {
        ul.style.color = 'blue';
    } else {
        ul.style.color = 'red';
    }
});