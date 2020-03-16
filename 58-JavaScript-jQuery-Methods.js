// console.log('Connected...');

// Method: text()
// --------------
// console.log('----- Method: text() -----');
// var text1 = $('h1').text();
// console.log(text1);
// var text2 = $('ul').text();
// console.log(text2);
// var text3 = $('li').text();
// console.log(text3);
// var text4 = $('h1').text('New added text!');
// console.log(text4);
// var text5 = $('li').text('New li text');
// console.log(text5);

// Method: html()
// --------------
// var html1 = $('ul').html();
// console.log(html1);
// var html2 = $('ul').html('<li>I have changed the content of the ul!!! 1</li><li>I have changed the content of the ul!!! 2</li><li>I have changed the content of the ul!!! 3</li>');
// console.log(html2);
// var html3 = $('li').html('<a href="http://www.google.com">This is a link!</a>')

// Method: attr()
// --------------
// var attr1 = $('img').attr({
//     src: 'https://media.pitchfork.com/photos/5cdc329393a53637c91edb9b/1:1/w_600/Prince_Originals.jpg',
//     title: 'Kiss the frog, and it becomes a prince'
// });
// console.log(attr1);
// var attr2 = $('input').attr('placeholder','This is a new text!');
// var attr2_2 = $('input').attr('placeholder');
// console.log(attr2);
// console.log(attr2_2);
// var attr3 = $('img:first-of-type').attr('src', 'https://media.pitchfork.com/photos/5cdc329393a53637c91edb9b/1:1/w_600/Prince_Originals.jpg');
// var attr4 = $('img').last().attr('src', 'https://media.pitchfork.com/photos/5cdc329393a53637c91edb9b/1:1/w_600/Prince_Originals.jpg');

// Method: val()
// -------------
// var val1 = $('input').val();
// console.log(val1);
// var val2 = $('input').val('This is my name!');
// console.log(val2);
// var val3 = $('select').val();
// console.log(val3);
// var val4 = $('select').val('value2');
// console.log(val4);

// Methods: addClass(), removeClass(), toggleClass()
// -------------------------------------------------
var class1 = $('li').first().addClass('correct');
var class2 = $('li').last().addClass('wrong');
var class3 = $('li').first().addClass('done');
// var class4 = $('li').toggleClass('done'); // Test this in the console