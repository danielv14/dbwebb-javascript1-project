/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Test = (function() {
    "use strict";

    console.log("hejsan");
    document.getElementById("startGame").addEventListener("click", firstRound1);

    // function to start the game
    function firstRound1() {
        // keep score
        var score = 0;
        var gameArea = document.getElementById("gameArea");
        console.log('First round');
        gameArea.innerHTML = "<h1 class='center'>Rond 1. Fråga 1</h1>";
        gameArea.innerHTML += "<h2 class='center'>Vilket år kom Peter Jacksons första film i Sagan om Ringen trilogin?</h2>";
        gameArea.innerHTML += '<button type="button" id="2001" class="btn btn-default">2001</button>';
        gameArea.innerHTML += '<button type="button" id="2002"class="btn btn-default">2002</button>';
        gameArea.innerHTML += '<button type="button" id="2003" class="btn btn-default">2003</button>';

        document.getElementById('2001').addEventListener('click', function() {
            score = 1;
            console.log("poäng: " + score);
            gameArea.innerHTML += '<h3 class="center"> Korrekt!';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });

            }, false);        

        document.getElementById('2002').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3 class="center"> Fel! Rätt svar var 2001';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });
            }, false);        

        document.getElementById('2003').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3 class="center"> Fel! Rätt svar var 2001';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });
            }, false);

        
    }
    // function for first round question 2
    function firstRound2() {
        // display the question and the alternative answers
        console.log('första ronden. Fråga två');
        var gameArea = document.getElementById("gameArea");
        gameArea.innerHTML = "<h1 class='center'>Rond 1. Fråga 2.</h1>";
        gameArea.innerHTML += "<h2 class='center'>Vilket år föddes artisten Madonna?</h2>";
        gameArea.innerHTML += '<button type="button" id="1959" class="btn btn-default">1959</button>';
        gameArea.innerHTML += '<button type="button" id="1958"class="btn btn-default">1958</button>';
        gameArea.innerHTML += '<button type="button" id="1955" class="btn btn-default">1955</button>';

        document.getElementById('1959').addEventListener('click', function() {
            gameArea.innerHTML += '<h3 class="center"> Fel! Rätt svar var 1958';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound3();
            });

            }, false);        

        document.getElementById('1958').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3 class="center"> Rätt!';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound3();
            });
            }, false);        

        document.getElementById('1955').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3 class="center"> Fel! Rätt svar var 1958';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound3();
            });
            }, false);
    } 
    // function for first round question three
    function firstRound3() {
        // display the question and the alternative answers
        console.log('första ronden. Fråga tre');
        var gameArea = document.getElementById("gameArea");
        gameArea.innerHTML = "<h1 class='center'>Rond 1. Fråga 3.</h1>";
        gameArea.innerHTML += "<h2 class='center'>Vilket år dog regissören Alfred Hitchkock?</h2>";
        gameArea.innerHTML += '<button type="button" id="1978" class="btn btn-default">1978</button>';
        gameArea.innerHTML += '<button type="button" id="1979"class="btn btn-default">1979</button>';
        gameArea.innerHTML += '<button type="button" id="1980" class="btn btn-default">1980</button>';

        document.getElementById('1978').addEventListener('click', function() {
            gameArea.innerHTML += '<h3 class="center"> Fel! Rätt svar var 1980';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            secondRound();
            });

            }, false);        

        document.getElementById('1979').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3 class="center"> Fel! Rätt svar var 1980';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            secondRound();
            });
            }, false);        

        document.getElementById('1980').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3 class="center"> Rätt!';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            secondRound();
            });
            }, false);
    }

    function secondRound() {
        console.log('second round');
        document.getElementById('gameArea').innerHTML = 'Här ska andra ronden komma';
    }

    // var hangman = {

    //     // Get all elements as their id
    //     "partAsElement": {
    //         "hill":     document.getElementById('hang_hill'),
    //         "gallow":   document.getElementById('hang_construction'),
    //         "body":     document.getElementById('hang_body'),
    //         "rightarm": document.getElementById('hang_rightarm'),
    //         "leftarm":  document.getElementById('hang_leftarm'),
    //         "rightleg": document.getElementById('hang_rightleg'),
    //         "leftleg":  document.getElementById('hang_leftleg'),
    //         "rope":     document.getElementById('hang_rope'),
    //         "head":     document.getElementById('hang_head')
    //     },

    //     // Create an array with all valid parts
    //     "validParts": [
    //         "hill",
    //         "gallow",
    //         "body",
    //         "rightarm",
    //         "leftarm",
    //         "rightleg",
    //         "leftleg",
    //         "rope",
    //         "head"
    //     ],
    //     // Array with the words
    //     "wordlist": [
    //         "javascript",
    //         "rabbit",
    //         "horse",
    //         "dog",
    //         "fish"
    //     ],
    //     // Function to display all the words from the array
    //     "wordList": function() {
    //         console.log(this.wordList);
    //     },

    //     "theWord": "",
    //     peek: function() {
    //         console.log(this.theWord)
    //     },

    //     *
    //      * Check if part a valid part, writes error message to console if the part is invalid.
    //      *
    //      * @param string part Name of the part to check.
    //      *
    //      * @returns boolean true if valid part, else false.
         
    //     "isValid": function (part) {

    //         if (this.validParts.indexOf(part) === -1) {
    //             console.log("The part is not valid: " + part);
    //             return false;
    //         }
    //         console.log("The part is valid: " + part);
    //         return true;

    //     }, 


    //     /**
    //      * Hide a part.
    //      *
    //      * @param string part Name of the part to hide.
    //      *
    //      * @returns void.
    //      */
    //     "hide": function (part) {

    //         if (this.isValid(part)) {
    //             // console.log("Hiding part: " + part);
    //             this.partAsElement[part].style.display = "none";
    //         }

    //     },
       
    //     /**
    //      * Show a part.
    //      *
    //      * @param string part Name of the part to show.
    //      *
    //      * @returns void.
    //      */
    //     "show": function (part) {

    //         if (this.isValid(part)) {
    //             // console.log("Showing part: " + part);
    //             this.partAsElement[part].style.display = "inline";
    //         }

    //     },

    //     // Hide all the parts
    //      "hideparts": function() {
    //         for (var e = 0; e < this.validParts.length; e++)
    //              this.hide(this.validParts[e]);
    //     }

    // };








    // console.log("You can now use the hangman object as a part of the window-object. Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')\n\nHere are all the parts you can work on.");
    // console.log(hangman.validParts);

    // // Return the object to make it visible.
    // hangman.hideparts();
    // return hangman;

})();
