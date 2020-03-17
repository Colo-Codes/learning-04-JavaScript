// console.log('Connected...');
// console.log(jQuery);

// Event: click()
var click1 = $('button').click(function() {
    $(this).css('background', 'pink');
    console.log('A button was clicked: ' + $(this).text());
});

// Event: keypress()
var keypress1 = $('#one').keypress(function(event){
    console.log(event);
    if (event.which === 13) {
        console.log('You pressed ENTER !!!!');
    } else {
        console.log('You pressed something different to ENTER...');
    }
});

//Event: on()
$('h1').on('click', function() {
    //this.style.color = 'red';
    $(this).css('color','red');
});
$('#two').on('keypress', function(){
    if (event.which === 13) {
        console.log('You pressed ENTER !!!!');
    } else {
        console.log('You pressed something different to ENTER...');
    }
});

$('button').on('mouseenter', function(){
    $(this).css('font-weight','bold');
});
$('button').on('mouseleave', function(){
    $(this).css('font-weight','normal');
});