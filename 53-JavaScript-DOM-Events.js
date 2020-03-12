// console.log('Connected...');

var button = document.querySelector('button');
var paragraph = document.querySelector('p');

// Click listener
button.addEventListener('click', function(){
    paragraph.textContent = 'Someone has clicked the button!';
});