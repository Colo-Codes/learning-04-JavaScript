// console.log('Connected...');

// Different ways of selecting buttons:
var buttonP1 = document.querySelector('#buttonP1');
var buttonP2 = document.getElementById('buttonP2');
var buttonReset = document.getElementsByTagName('button')[2];
// Scores:
var scoreP1 = 0;
var scoreP2 = 0;
// H1 scores:
var h1ScoreP1 = document.querySelector('#scoreP1');
var h1ScoreP2 = document.querySelector('#scoreP2');
// Game state:
var gameOver = false;
// Score limit:
var scoreLimit = parseInt(document.getElementById('scoreLimit').textContent, 10); // Convert string into number (base 10)
var inputScore  = document.querySelector('input');

// Buttons listeners:
buttonP1.addEventListener('click', function() {
    if (!gameOver) {
        scoreP1++;
        console.log('Adding 1 score to Player 1: ' + scoreP1);
        h1ScoreP1.textContent = scoreP1;  
        if (scoreLimit === scoreP1) {
            gameOver = true;
            console.log('Player 1 WINS!');
            h1ScoreP1.classList.add('winner');
        }
    }
});
buttonP2.addEventListener('click', function() {
    if (!gameOver) {
        scoreP2++;
        console.log('Adding 1 score to Player 2: ' + scoreP2);
        h1ScoreP2.textContent = scoreP2;
        if (scoreLimit === scoreP2) {
            gameOver = true;
            console.log('Player 2 WINS!');
            h1ScoreP2.classList.add('winner');
        }
    }
});
function reset () {
    console.log('Resetting scores...');
    scoreP1 = 0;
    scoreP2 = 0;
    h1ScoreP1.textContent = scoreP1;
    h1ScoreP2.textContent = scoreP2;
    h1ScoreP1.classList.remove('winner');
    h1ScoreP2.classList.remove('winner');
    gameOver = false;
}
buttonReset.addEventListener('click', function() {
    reset();
});

// Score listener:
inputScore.addEventListener('change', function () {
    //scoreLimit = Number(inputScore.value); // Convert string into number
    scoreLimit = Number(this.value); // Convert string into number
    //document.getElementById('scoreLimit').textContent = Number(inputScore.value);
    document.getElementById('scoreLimit').textContent = Number(this.value);
    console.log('The score limit changed: ' + scoreLimit);
    reset(); // To prevent the bug of changing the score limit in the middle of a game
});