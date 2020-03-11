// console.log('Connected...');

// Array of objects (movies)
var movies = [
    {
        title: "The Matrix",
        rating: 5,
        hasWatched: true
    }, 
    {
        title: "Little women",
        rating: 4,
        hasWatched: false
    }, 
    {
        title: "Logan",
        rating: 4.5,
        hasWatched: true
    }, 
    {
        title: "The Lord of the Rings",
        rating: 5,
        hasWatched: true
    }, 
    {
        title: "Cats",
        rating: 3.5,
        hasWatched: false
    }
]

// Iteration over the array
movies.forEach(function(item){
    if (item.hasWatched === true) {
        console.log('You have watched \"' + item.title + '\" - ' + item.rating + ' stars.');
    } else {
        console.log('You have not watched \"' + item.title + '\" - ' + item.rating + ' stars.');
    }
});


