/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Test = (function() {
    "use strict";

    // click the button to start the test
    document.getElementById("startGame").addEventListener("click", firstRound1);

    // function to start the game
    function firstRound1() {
        // keep score
        var score = 0;
        // Display the question and the available answers
        var gameArea = document.getElementById("gameArea");
        console.log('First round');
        gameArea.innerHTML = "<h1>Rond 1. Fråga 1</h1>";
        gameArea.innerHTML += "<h2>Vilket år kom Peter Jacksons första film i Sagan om Ringen trilogin?</h2>";
        gameArea.innerHTML += '<button type="button" id="2001" class="btn btn-default">2001</button>';
        gameArea.innerHTML += '<button type="button" id="2002"class="btn btn-default">2002</button>';
        gameArea.innerHTML += '<button type="button" id="2003" class="btn btn-default">2003</button>';

        // Click on the diffrent alternative buttons
        document.getElementById('2001').addEventListener('click', function() {
            score = 1;
            console.log("poäng: " + score);
            gameArea.innerHTML += '<h3> Korrekt!';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });

            }, false);        

        document.getElementById('2002').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3> Fel! Rätt svar var 2001';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });
            }, false);        

        document.getElementById('2003').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3> Fel! Rätt svar var 2001';
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
        gameArea.innerHTML = "<h1>Rond 1. Fråga 2.</h1>";
        gameArea.innerHTML += "<h2>Vilket år föddes artisten Madonna?</h2>";
        gameArea.innerHTML += '<button type="button" id="1959" class="btn btn-default">1959</button>';
        gameArea.innerHTML += '<button type="button" id="1958"class="btn btn-default">1958</button>';
        gameArea.innerHTML += '<button type="button" id="1955" class="btn btn-default">1955</button>';

        // Click on the diffrent alternative buttons
        document.getElementById('1959').addEventListener('click', function() {
            gameArea.innerHTML += '<h3> Fel! Rätt svar var 1958';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound3();
            });

            }, false);        

        document.getElementById('1958').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3> Rätt!';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound3();
            });
            }, false);        

        document.getElementById('1955').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3> Fel! Rätt svar var 1958';
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
        gameArea.innerHTML = "<h1>Rond 1. Fråga 3.</h1>";
        gameArea.innerHTML += "<h2>Vilket år dog regissören Alfred Hitchkock?</h2>";
        gameArea.innerHTML += '<button type="button" id="1978" class="btn btn-default">1978</button>';
        gameArea.innerHTML += '<button type="button" id="1979"class="btn btn-default">1979</button>';
        gameArea.innerHTML += '<button type="button" id="1980" class="btn btn-default">1980</button>';

        // Click on the diffrent alternative buttons
        document.getElementById('1978').addEventListener('click', function() {
            gameArea.innerHTML += '<h3> Fel! Rätt svar var 1980';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            secondRound();
            });

            }, false);        

        document.getElementById('1979').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3> Fel! Rätt svar var 1980';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            secondRound();
            });
            }, false);        

        document.getElementById('1980').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3> Rätt!';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            secondRound();
            });
            }, false);
    }

    function secondRound() {
        // Display the question and the alternatives
        console.log('second round');
        var gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = '<h1>Andra ronden</h1>';
        gameArea.innerHTML += '<h2>FizzBuzz spel!</h2>';
        gameArea.innerHTML += '<p>Vad kommer härnäst i sekvensen?</p>';
        gameArea.innerHTML += '<p>2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, ?</p>';
        gameArea.innerHTML += '<button type="button" id="fizz" class="btn btn-default">Fizz</button>';
        gameArea.innerHTML += '<button type="button" id="buzz"class="btn btn-default">Buzz</button>';
        gameArea.innerHTML += '<button type="button" id="fizzbuzz" class="btn btn-default">Fizz Buzz</button>';

        // Click on the diffrent alternative buttons
        document.getElementById('fizz').addEventListener('click', function() {
            gameArea.innerHTML += '<h3> Fel! Rätt svar var Buzz';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            aboutThirdRound();
            });

            }, false);        

        document.getElementById('buzz').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3> Rätt!';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            aboutThirdRound();
            });
            }, false);        

        document.getElementById('fizzbuzz').addEventListener('click', function() { 
            gameArea.innerHTML += '<h3> Fel! Rätt svar var Buzz';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            aboutThirdRound();
            });
            }, false);
    }

    // function for info about the third round
    function aboutThirdRound() {
        console.log('info om tredje ronden.');
        // display the info text 
        var gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = '<h1>Rond 3</h1>';
        gameArea.innerHTML += '<h2>Testa din minnesförmåga</h2>';
        gameArea.innerHTML += '<p>Detta moment går ut på att testa din minnesförmåga. Du kommer att se 9 stycken flaggor under x antal sekunder.</p>';
        gameArea.innerHTML += '<p>Därefter kommer flaggorna att täckas över och du komemr att få se en lista med länder.</p>';
        gameArea.innerHTML += '<p>Klicka på de övertäckta rutorna i den ordning som listan visar.</p>';
        gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Starta</button>';

        // clickable button to take you to the actual round
        document.getElementById("moveOn").addEventListener("click", thirdRound);

    }

    function thirdRound() {
        console.log('tredje ronden');
        var gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = '<h1 class="center">Rond 3</h1>';
    }



})();
