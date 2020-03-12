// Count the number of Event Names in the website https://developer.mozilla.org/en-US/docs/Web/Events (as of 13/03/2020)

var eventsList = document.querySelectorAll('td code a');
console.log('The number of Event Names is:');
console.dir(eventsList.length-1);
