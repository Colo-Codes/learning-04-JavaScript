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