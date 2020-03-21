// Testing if the file is correctly linked
// console.log('Connected...');

// Check off specific to-dos by clicking
$('ul').on('click', 'li', function(){ // Using click() will only work for old elements, not for new ones. That's why we use on(), on the parent element who was on the page when it was loaded
    // // console.log($(this).css("color"));
    // if ($(this).css('color') === 'rgb(128, 128, 128)') { // rgb(128, 128, 128) == grey
    //     $(this).css({
    //         'color': 'black',
    //         'text-decoration': 'none',
    //     });
    // } else {
    //     $(this).css({
    //         'color': 'grey',
    //         'text-decoration': 'line-through',
    //     });
    // }
    // Instead of using the if statement and logic, we can toggle a class:
    $(this).toggleClass('completed');
});

// Click on icon to delete to-to
$('ul').on('click', 'span', function(event){ // Using click() will only work for old elements, not for new ones. That's why we use on(), on the parent element who was on the page when it was loaded
    $(this).parent().fadeOut(500, function() {
        $(this).remove(); // The $(this) here is referencing to the $(this).parent() from before (the element on which the fadeOut() is being applied)
    });
    event.stopPropagation(); // This is to prevent the Event Bubbling
});

// Enter a new to-do in the text-box
$('input[type="text"]').keypress(function(event) {
    // console.log(event);
    if (event.which === 13) {
        // console.log($(this).val());
        var toDoElement = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><i class="far fa-trash-alt"></i></span>' + toDoElement + '</li>');
    } else {
        console.log('You pressed something different to ENTER...');
    }
});

// Input toggle
$('#inputToggler').click(function() {
    $('input[type="text"]').slideToggle();
});