//Holds the all the words
var letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Holds choosenWord
var choosenLetter = null;

//Holds Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;
//FUNCTIONS
//----------------------------------------
var updateGuessesLeft = function() {

    document.getElementsByClassName("#guesses-left").innerHTML = guessesLeft;
};


var updateChoosenLetter = function() {
    choosenLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
};

var updateWrongLetters = function() {
    document.getElementsByClassName("#wrong-letters").innerHTML = wrongLetters.join(",");
};

//RESET
//===========================================================
var reset = function() {
    guessesLeft = 9;
    wrongLetters = [];
    updateChoosenLetter();
    updateGuessesLeft();
    updateWrongLetters();
};

updateChoosenLetter();
updateGuessesLeft();

document.onkeyup = function(event) {
    guessesLeft--;
    var letter = String.fromCharCode(event.which).toLowerCase();

    wrongLetters.push(letter);

    updateGuessesLeft();
    updateWrongLetters();

    if (letter === choosenLetter) {

        winCount++
        document.getElementsByClassName("#win-count").innerHTML = winCount;
        alert('You Win');
        reset();
    }

    if (guessesLeft == 0) {
        lossCount++;
        document.getElementsByClassName("#loss-count").innerHTML = lossCount;
        alert('You Lose');
        reset();

    };


}