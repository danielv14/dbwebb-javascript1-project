/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Test = (function() {
    "use strict";

    // Set variable for score
    var score = 0;
    
    // Set variable for internal score for the third test
    var internalScore = 0;
    
    // Set variable for sequence for the third test
    var clickSequence = 0;
    
    // set error variable for the third test to generat fail text
    var clickFail = false;

    // Set variable telling what to reset
    var resetWhere = 0;


    // click the button to start the test
    document.getElementById("startGame").addEventListener("click", firstRound1);

    // function to start the game
    function firstRound1() {
        // Display the question and the available answers
        var gameArea = document.getElementById("gameArea");

        // set reset variable
        resetWhere = 1;

        // temp score for reset
        var tempScore = score;
        console.log('First round');
        console.log('poäng: ' + score);
        gameArea.innerHTML = "<h1>Rond 1. Fråga 1</h1>";
        gameArea.innerHTML += "<h2>Vilket år kom Peter Jacksons första film i Sagan om Ringen trilogin?</h2>";
        gameArea.innerHTML += '<button type="button" id="2001" class="btn btn-default">2001</button>';
        gameArea.innerHTML += '<button type="button" id="2002"class="btn btn-default">2002</button>';
        gameArea.innerHTML += '<button type="button" id="2003" class="btn btn-default">2003</button>';

        // Click on the diffrent alternative buttons
        document.getElementById('2001').addEventListener('click', function() {
            // Add 3 points to score
            score += 3;
            console.log("poäng: " + score);
            gameArea.innerHTML += '<h3> Korrekt!';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });

            }, false);        

        document.getElementById('2002').addEventListener('click', function() { 
            console.log('poäng: ' + score);
            gameArea.innerHTML += '<h3> Fel! Rätt svar var 2001';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });
            }, false);        

        document.getElementById('2003').addEventListener('click', function() { 
            console.log('poäng: ' + score);
            gameArea.innerHTML += '<h3> Fel! Rätt svar var 2001';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });
            }, false);

        
    }
    // function for first round question 2
    function firstRound2() {
        console.log('poäng: ' + score);
        // temp score for reset
        var tempScore = score;

        // set reset variable
        resetWhere = 2;
        
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
            // Add 3 points to score
            score += 3;
            console.log('poäng: ' + score);
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
        // temp score for reset
        var tempScore = score;
        
        // set reset variable
        resetWhere = 3;
        
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
            // Add 3 points to score
            score += 3;
            console.log('poäng: ' + score);
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
        console.log('poäng: ' + score);

        // temp score for reset
        var tempScore = score;

        // set reset variable
        resetWhere = 4;

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
            console.log('poäng: ' + score);
            gameArea.innerHTML += '<h3> Fel! Rätt svar var Buzz';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            
            document.getElementById('moveOn').addEventListener('click', function() {
                aboutThirdRound();
            });

            }, false);        

        document.getElementById('buzz').addEventListener('click', function() { 
            // Add 3 points to score
            score += 3;
            console.log('poäng: ' + score);
            gameArea.innerHTML += '<h3> Rätt!';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            
            document.getElementById('moveOn').addEventListener('click', function() {
                aboutThirdRound();
            });
            }, false);        

        document.getElementById('fizzbuzz').addEventListener('click', function() { 
            console.log('poäng: ' + score);
            gameArea.innerHTML += '<h3> Fel! Rätt svar var Buzz';
            gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>';
            
            document.getElementById('moveOn').addEventListener('click', function() {
                aboutThirdRound();
            });
            }, false);
    }

    // function for info about the third round
    function aboutThirdRound() {


        // temp score for reset
        var tempScore = score;

        console.log('info om tredje ronden.');
        console.log('poäng: ' + score);
        
        // display the info text 
        var gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = '<h1>Rond 3</h1>';
        gameArea.innerHTML += '<h2>Testa din visuella förmåga och läsförståelse</h2>';
        gameArea.innerHTML += '<p>Detta test går ut på att du under tidspress ska klicka på de objekt du ser i nummerordning enligt en lista</p>';
        gameArea.innerHTML += '<p>Klicka på objekten i rätt nummerordning så snabbt du kan..</p>';
        gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Starta</button>';

        // clickable button to take you to the actual round
        document.getElementById("moveOn").addEventListener("click", thirdRound);

    }

    function thirdRound() {


        
        console.log('tredje ronden');
        console.log('poäng: ' + score);

        // temp score for reset
        var tempScore = score;

        // Reset variable 
        resetWhere = 5;

        var gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = '<h1 class="center">Rond 3</h1>';
        gameArea.innerHTML += '<div class="left"><ul class="list-group"><li class="list-group-item">1. Den röda cirkeln</li><li class="list-group-item">2. Den gula rektangeln</li><li class="list-group-item">3. Den gröna kvadraten</li><li class="list-group-item">4. Den gula cirkeln</li><li class="list-group-item">5. Den gröna triangeln</li><li class="list-group-item">6. Den röda kvadraten</li><li class="list-group-item">7. Den blå cirkeln</li><li class="list-group-item">8. Den gula triangeln.</li><li class="list-group-item">9. Den blå rektangeln</li><li class="list-group-item">10. Den blå triangeln</li></ul></div>'
        gameArea.innerHTML += '<div class="right"><div id="9" class="rektangel blue"></div><div id="4"class="cirkel yellow"></div><div id="1" class="cirkel red"></div><div id="3" class="kvadrat green"></div><div id="6" class="kvadrat red"></div></div>';
        gameArea.innerHTML += '<div class="right"><div id="2" class="rektangel yellow"></div><div id="5" class="triangel-green"></div><div id="10" class="triangel-blue"></div><div id="7" class="cirkel blue"></div><div id="8" class="triangel-yellow"></div></div>';

        // Timer
        setTimeout(tenSeconds, 10000);

        // Click the objects in sequence
        document.getElementById('1').addEventListener('click', function() {
            if (clickSequence == 0) {
                clickSequence += 1;
                internalScore += 1;
                console.log('Du klickade i rätt ordning');
            } else {
                console.log('Du klickade i fel ordning...');
                clickFail = true;
                tenSeconds();
            }
        });

        document.getElementById('2').addEventListener('click', function() {
            if (clickSequence == 1) {
                clickSequence += 1;
                internalScore += 1;
                console.log('Du klickade i rätt ordning');
            } else {
                console.log('Du klickade i fel ordning...');
                clickFail = true;
                tenSeconds();
            }
        });

        document.getElementById('3').addEventListener('click', function() {
            if (clickSequence == 2) {
                clickSequence += 1;
                internalScore += 1;
                console.log('Du klickade i rätt ordning');
            } else {
                console.log('Du klickade i fel ordning');
                clickFail = true;
                tenSeconds();
            }
        });

        document.getElementById('4').addEventListener('click', function() {
            if (clickSequence == 3) {
                clickSequence += 1;
                internalScore += 1;
                console.log('Du klickade i rätt ordning');
            } else {
                console.log('Du klickade i fel ordning');
                clickFail = true;
                tenSeconds();
            }
        });

        document.getElementById('5').addEventListener('click', function() {
            if (clickSequence == 4) {
                clickSequence += 1;
                internalScore += 1;
                console.log('Du klickade i rätt ordning');
            } else {
                console.log('Du klickade i fel ordning');
                clickFail = true;
                tenSeconds();
            }
        });

        document.getElementById('6').addEventListener('click', function() {
            if (clickSequence == 5) {
                clickSequence += 1;
                internalScore += 1;
                console.log('Du klickade i rätt ordning');
            } else {
                console.log('Du klickade i fel ordning');
                clickFail = true;
                tenSeconds();
            }
        });

        document.getElementById('7').addEventListener('click', function() {
            if (clickSequence == 6) {
                clickSequence += 1;
                internalScore += 1;
                console.log('Du klickade i rätt ordning');
            } else {
                console.log('Du klickade i fel ordning');
                clickFail = true;
                tenSeconds();
            }
        });

        document.getElementById('8').addEventListener('click', function() {
            if (clickSequence == 7) {
                clickSequence += 1;
                internalScore += 1;
                console.log('Du klickade i rätt ordning');
            } else {
                console.log('Du klickade i fel ordning');
                clickFail = true;
                tenSeconds();
            }
        });

        document.getElementById('9').addEventListener('click', function() {
            if (clickSequence == 8) {
                clickSequence += 1;
                internalScore += 1;
                console.log('Du klickade i rätt ordning');
            } else {
                console.log('Du klickade i fel ordning');
                clickFail = true;
                tenSeconds();
            }
        });

        document.getElementById('10').addEventListener('click', function() {
            if (clickSequence == 9) {
                clickSequence += 1;
                internalScore += 1;
                console.log('Du klickade i rätt ordning');
                tenSeconds();
            } else {
                console.log('Du klickade i fel ordning');
                clickFail = true;
                tenSeconds();
            }
        });

 

    }


    function tenSeconds() {

        var gameArea = document.getElementById('gameArea');
        if (internalScore == 10) {
            gameArea.innerHTML = '<h1>Grattis! Du fick alla rätt!</h1>';
        } else if (clickFail == true) {
            gameArea.innerHTML = '<h1>Du klickade i fel ordning :(</h1>';
        } else {
            gameArea.innerHTML = '<h1>Tiden har gått ut!</h1>';
        }

        gameArea.innerHTML += '<h2>Du fick ' + internalScore + ' av 10 rätt</h2>';
        gameArea.innerHTML += '<p>intelligenstestet är nu slut.</p>'
        gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Se resultat</button>';

        // Click button to see end-screen
        document.getElementById("moveOn").addEventListener("click", endScreen);
    }

    function endScreen() {
        // set variable for final score
        var finalScore = score + internalScore;
        console.log('spelet är slut');
        var gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = '<h1>Resultat</h1>';
        gameArea.innerHTML += '<p>Du fick totalt ' + finalScore + ' poäng av 25 möjliga</p>';
        gameArea.innerHTML += '<h3>Hur pass bra resultat fick du?</h3>'
        gameArea.innerHTML += '<ul class="list-group"><li class="list-group-item">Under 8 poäng: Njaaaa....</li><li class="list-group-item">8 - 16 poäng: Nu börjar det likna något.</li><li class="list-group-item">16 - 22 poäng: Sådär ja!</li><li class="list-group-item">22 - 25 poäng: Heter du Einstein i efternamn?</li></ul>';
        gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Prova igen</button>';

        document.getElementById('moveOn').addEventListener('click', function() {
            location.reload();
        })

    }

    var test = {

    'reset': function() {
            if (resetWhere == 1) {
                console.log('Reseting test1 part 1');
                firstRound1();
            } else if (resetWhere == 2) {
                console.log('Reseting test1 part 2');
                firstRound2();
            } else if (resetWhere == 3) {
                console.log('Reseting test1 part 3');
                firstRound3();
            } else if (resetWhere == 4) {
                console.log('Reseting test 2');
                secondRound();
            } else if (resetWhere == 5) {
                console.log('Reseting test 3');
                thirdRound();
            }

            else {
                console.log('nothing to reset now');
            }
        }
    }
    return test;





})();
