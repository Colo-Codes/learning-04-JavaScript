// console.log('Connected...');
// console.log(jQuery);

$('button').on('click', function() {
    $('div').fadeOut(1000, function(){
        console.log('This text will show after the fadeOut is completed, because is inside a callback function inside the fadeOut method.');
        // To remove a faded out element:
        $(this).remove();
    });
    console.log('This line will show before the fadeOut is completed, because JS doesn\'t wait for the previous line of code to be completed.');
});