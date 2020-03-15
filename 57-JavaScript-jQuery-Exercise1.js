// console.log('Connected...');
if (jQuery) {
    console.log('jQuery loaded!');
} else {
    console.log('No jQuery...');
    
}

// Select all divs and give them a purple background
$("div").css("background", "purple");

// Select the divs with class "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

// Select the div with id "third" and give it a orange border
$("#third").css("border", "2px solid orange");

// Bonus: Select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");
// I can also use "first" instead of "first-of-type", but is slower