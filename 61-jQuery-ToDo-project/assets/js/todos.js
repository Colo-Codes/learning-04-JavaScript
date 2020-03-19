// Testing if the file is correctly linked
// console.log('Connected...');

// Check off specific to-dos by clicking
$('li').click(function(){
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
$('span').click(function(event){
    $(this).parent().fadeOut(500, function() {
        $(this).remove(); // The $(this) here is referencing to the $(this).parent() from before (the element on which the fadeOut() is being applied)
    });
    event.stopPropagation(); // This is to prevent the Event Bubbling
});