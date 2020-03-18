// console.log('Connected...');
// console.log(jQuery);

// fadeOut()
$('.buttonOut').on('click', function() {
    $('.divOut').fadeOut(2000, function(){
        console.log('This text will show after the fadeOut is completed, because is inside a callback function inside the fadeOut method.');
        // To remove a faded out element:
        $(this).remove();
    });
    console.log('This line will show before the fadeOut is completed, because JS doesn\'t wait for the previous line of code to be completed.');
});

// fadeIn()
$('.buttonIn').on('click', function() {
    $('.divIn').fadeIn(2000, function(){
        console.log('This text will show after the effect is completed, because is inside a callback function inside the effect method.');
    });
    console.log('This line will show before the effect is completed, because JS doesn\'t wait for the previous line of code to be completed.');
});

// fadeToggle()
$('.buttonToggle').on('click', function() {
    $('.divToggle').fadeToggle(2000, function(){
        console.log('This text will show after the effect is completed, because is inside a callback function inside the effect method.');
    });
    console.log('This line will show before the effect is completed, because JS doesn\'t wait for the previous line of code to be completed.');
});

// slideDown()
$('.buttonSlideDown').on('click', function() {
    $('.divIn').slideDown(2000, function(){
        console.log('This text will show after the effect is completed, because is inside a callback function inside the effect method.');
    });
    console.log('This line will show before the effect is completed, because JS doesn\'t wait for the previous line of code to be completed.');
});

// slideUp()
$('.buttonSlideUp').on('click', function() {
    $('.divOut').slideUp(2000, function(){
        console.log('This text will show after the effect is completed, because is inside a callback function inside the effect method.');
        // To remove a faded out element:
        $(this).remove();
    });
    console.log('This line will show before the effect is completed, because JS doesn\'t wait for the previous line of code to be completed.');
});

// slideToggle()
$('.buttonSlideToggle').on('click', function() {
    $('.divToggle').slideToggle(2000, function(){
        console.log('This text will show after the effect is completed, because is inside a callback function inside the effect method.');
    });
    console.log('This line will show before the effect is completed, because JS doesn\'t wait for the previous line of code to be completed.');
});