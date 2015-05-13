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

    // Set timer variable
    var timer;

    // prevent manipulation from reset
    var preventManipulation = false;

    // Object for button classes  to be re-used
    var button = {
        correct: 'btn btn-success',
        wrong: 'btn btn-danger',
        inactive: 'btn btn-default disabled',
        next: '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>'
     };

    // Object for progress bars
    var progress = {
        progress: '<div id="progressbar"><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">0%</div></div></div>',
        progress2: '<div id="progressbar"><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%;">10%</div></div></div>',
        progress3: '<div id="progressbar"><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;">20%</div></div></div>',
        progress4: '<div id="progressbar"><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%;">30%</div></div></div>',
        progress5: '<div id="progressbar"><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">60%</div></div></div>',
        progress6: '<div id="progressbar"><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">100%</div></div></div>',
    };

    // click the button to start the test
    document.getElementById("startGame").addEventListener("click", firstRound1);

    // function to start the game
    function firstRound1() {
       
        // Display the question and the available answers
        var gameArea = document.getElementById("gameArea");

        // set reset variable
        resetWhere = 1;

        // Set question object
        var question = {
            theRond: '<h1>Rond 1. Fråga 1.</h1>',
            theQuestion:'<h2>Vilket år kom Peter Jacksons första film i Sagan om Ringen trilogin?</h2>', 
            answerOne:'<button type="button" id="2001" class="btn btn-default">2001</button>',
            answerTwo:'<button type="button" id="2002"class="btn btn-default">2002</button>',
            answerThree:'<button type="button" id="2003" class="btn btn-default">2003</button>',
            correct: '<h3>Korrekt!</h3>',
            wrong: '<h3>Fel! Rätt svar är: 2001</h3>',
            progress: '<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: 10%;">10%</div></div>'          
        };

        score = 0;

        console.log('First round');
        console.log('poäng: ' + score);
        gameArea.innerHTML = progress.progress;
        gameArea.innerHTML += question.theRond;
        gameArea.innerHTML += question.theQuestion;
        gameArea.innerHTML += question.answerOne;
        gameArea.innerHTML += question.answerTwo;
        gameArea.innerHTML += question.answerThree;

        // Click on the diffrent alternative buttons
        document.getElementById('2001').addEventListener('click', function() {
            // Add 3 points to score
            score += 3;
            preventManipulation = true;
            console.log("poäng: " + score);
            document.getElementById('2001').className = button.correct;
            document.getElementById('2002').className = button.inactive;
            document.getElementById('2003').className = button.inactive;
            document.getElementById('progressbar').innerHTML = question.progress;
            gameArea.innerHTML += question.correct;
            gameArea.innerHTML += button.next;
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });

            }, false);        

        document.getElementById('2002').addEventListener('click', function() { 
            console.log('poäng: ' + score);
            gameArea.innerHTML += question.wrong;
            gameArea.innerHTML += button.next;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('2001').className = button.inactive;
            document.getElementById('2002').className = button.wrong;
            document.getElementById('2003').className = button.inactive;
            
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });
            }, false);        

        document.getElementById('2003').addEventListener('click', function() { 
            console.log('poäng: ' + score);
            gameArea.innerHTML += question.wrong;
            gameArea.innerHTML += button.next;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('2001').className = button.inactive;
            document.getElementById('2002').className = button.inactive;
            document.getElementById('2003').className = button.wrong;
            
            document.getElementById('2003').className = 'btn btn-danger';
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound2();
            });
            }, false);

        
    }
    // function for first round question 2
    function firstRound2() {
        console.log('poäng: ' + score);
        
        // set reset variable
        resetWhere = 2;


        // The question object
        var question = {
            theRond: '<h1>Rond 1. Fråga 2.</h1>',
            theQuestion: '<h2>Vilket år föddes artisten Madonna?</h2>',
            answerOne: '<button type="button" id="1959" class="btn btn-default">1959</button>',
            answerTwo: '<button type="button" id="1958"class="btn btn-default">1958</button>',
            answerThree: '<button type="button" id="1955" class="btn btn-default">1955</button>',
            correct: '<h3>Korrekt!</h3>',
            wrong: '<h3>Fel! Rätt svar är: 1958</h3>',
            progress: '<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: 20%;">20%</div></div>'          
        };        
        // display the question and the alternative answers
        console.log('första ronden. Fråga två');
        var gameArea = document.getElementById("gameArea");
        gameArea.innerHTML = progress.progress2;
        gameArea.innerHTML += question.theRond;
        gameArea.innerHTML += question.theQuestion;
        gameArea.innerHTML += question.answerOne;
        gameArea.innerHTML += question.answerTwo;
        gameArea.innerHTML += question.answerThree;

        // Click on the diffrent alternative buttons
        document.getElementById('1959').addEventListener('click', function() {
            gameArea.innerHTML += question.wrong;
            gameArea.innerHTML += button.next;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('1959').className = button.wrong;
            document.getElementById('1958').className = button.inactive;
            document.getElementById('1955').className = button.inactive;
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound3();
            });

            }, false);        

        document.getElementById('1958').addEventListener('click', function() { 
            // Add 3 points to score
            score += 3;
            preventManipulation = true;
            console.log('poäng: ' + score);
            gameArea.innerHTML += question.correct;
            gameArea.innerHTML += button.next;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('1959').className = button.inactive;
            document.getElementById('1958').className = button.correct;
            document.getElementById('1955').className = button.inactive;

            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound3();
            });
            }, false);        

        document.getElementById('1955').addEventListener('click', function() { 
            gameArea.innerHTML += question.wrong;
            gameArea.innerHTML += button.next;
            document.getElementById('1959').className = button.inactive;
            document.getElementById('1958').className = button.inactive;
            document.getElementById('1955').className = button.wrong;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('moveOn').addEventListener('click', function() {
            firstRound3();
            });
            }, false);
    } 

    // function for first round question three
    function firstRound3() {

        
        // set reset variable
        resetWhere = 3;

        // Set question object
        var question = {
            theRond: '<h1>Rond 1. Fråga 3.</h1>',
            theQuestion: '<h2>Vilket år dog regissören Alfred Hitchkock?</h2>',
            answerOne: '<button type="button" id="1978" class="btn btn-default">1978</button>',
            answerTwo: '<button type="button" id="1979"class="btn btn-default">1979</button>',
            answerThree: '<button type="button" id="1980" class="btn btn-default">1980</button>',
            correct: '<h3>Korrekt!</h3>',
            wrong: '<h3>Fel! Rätt svar är: 1980</h3>',
            progress: '<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: 30%;">30%</div></div>'          

        };
        
        // display the question and the alternative answers
        console.log('första ronden. Fråga tre');
        var gameArea = document.getElementById("gameArea");
        gameArea.innerHTML = progress.progress3;
        gameArea.innerHTML += question.theRond;
        gameArea.innerHTML += question.theQuestion;
        gameArea.innerHTML += question.answerOne;
        gameArea.innerHTML += question.answerTwo;
        gameArea.innerHTML += question.answerThree;

        // Click on the diffrent alternative buttons
        document.getElementById('1978').addEventListener('click', function() {
            gameArea.innerHTML += question.wrong;
            gameArea.innerHTML += button.next;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('1978').className = button.wrong;
            document.getElementById('1979').className = button.inactive;
            document.getElementById('1980').className = button.inactive;

            document.getElementById('moveOn').addEventListener('click', function() {
            secondRound();
            });

            }, false);        

        document.getElementById('1979').addEventListener('click', function() { 
            gameArea.innerHTML += question.wrong;
            gameArea.innerHTML += button.next;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('1978').className = button.inactive;
            document.getElementById('1979').className = button.wrong;
            document.getElementById('1980').className = button.inactive;
            document.getElementById('moveOn').addEventListener('click', function() {
            secondRound();
            });
            }, false);        

        document.getElementById('1980').addEventListener('click', function() { 
            // Add 3 points to score
            score += 3;
            preventManipulation = true;
            console.log('poäng: ' + score);
            gameArea.innerHTML += question.correct;
            gameArea.innerHTML += button.next;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('1978').className = button.inactive;
            document.getElementById('1979').className = button.inactive;
            document.getElementById('1980').className = button.correct;
            document.getElementById('moveOn').addEventListener('click', function() {
            secondRound();
            });
            }, false);
    }
    // Function for the second part of the test
    function secondRound() {
        // Display the question and the alternatives
        console.log('second round');
        console.log('poäng: ' + score);

        // set reset variable
        resetWhere = 4;

        // FizzBuzz generator
            var fizzBuzz="", devideThree, devideFive, number;
            for (number=1;number<=9;number++)
            {
                devideThree = number%3 ===0;
                devideFive = number%5 ===0;
                if(devideThree)
                {
                    fizzBuzz += "fizz, ";
                }
                if (devideFive)
                {
                    fizzBuzz += "buzz, ";
                }
                if (!(devideThree||devideFive))
                {
                    fizzBuzz += number + ', ';
                }
                
            }
            console.log(fizzBuzz);

        // Set question object
        var question = {
            theRond: '<h1>Andra ronden</h1>',
            header: '<h2>FizzBuzz test</h2>',
            theQuestion: '<p>Vad kommer härnäst i sekvensen?</p>',
            theFizzBuzz: '<p>' + fizzBuzz + '???</p>',
            answerOne: '<button type="button" id="fizz" class="btn btn-default">Fizz</button>',
            answerTwo: '<button type="button" id="buzz"class="btn btn-default">Buzz</button>',
            answerThree: '<button type="button" id="fizzbuzz" class="btn btn-default">Fizz Buzz</button>',
            next: '<button type="button" id="moveOn" class="btn btn-default">Nästa fråga</button>',
            correct: '<h3>Korrekt!</h3>',
            wrong: '<h3>Fel! Rätt svar är: Buzz</h3>',
            progress: '<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: 60%;">60%</div></div>'          

        };

        var gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = progress.progress4;
        gameArea.innerHTML += question.theRond;
        gameArea.innerHTML += question.header;
        gameArea.innerHTML += question.theQuestion;
        gameArea.innerHTML += question.theFizzBuzz;
        gameArea.innerHTML += question.answerOne;
        gameArea.innerHTML += question.answerTwo;
        gameArea.innerHTML += question.answerThree;

        // Click on the diffrent alternative buttons
        document.getElementById('fizz').addEventListener('click', function() {
            console.log('poäng: ' + score);
            gameArea.innerHTML += question.wrong;
            gameArea.innerHTML += button.next;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('fizz').className = button.wrong;
            document.getElementById('buzz').className = button.inactive;
            document.getElementById('fizzbuzz').className = button.inactive;
            
            document.getElementById('moveOn').addEventListener('click', function() {
                aboutThirdRound();
            });

            }, false);        

        document.getElementById('buzz').addEventListener('click', function() { 
            // Add 3 points to score
            score += 3;
            preventManipulation = true;
            console.log('poäng: ' + score);
            gameArea.innerHTML += question.correct;
            gameArea.innerHTML += button.next;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('fizz').className = button.inactive;
            document.getElementById('buzz').className = button.correct;
            document.getElementById('fizzbuzz').className = button.inactive;
            
            document.getElementById('moveOn').addEventListener('click', function() {
                aboutThirdRound();
            });
            }, false);        

        document.getElementById('fizzbuzz').addEventListener('click', function() { 
            console.log('poäng: ' + score);
            gameArea.innerHTML += question.wrong;
            gameArea.innerHTML += button.next;
            document.getElementById('progressbar').innerHTML = question.progress;
            document.getElementById('fizz').className = button.inactive;
            document.getElementById('buzz').className = button.inactive;
            document.getElementById('fizzbuzz').className = button.wrong;
            
            document.getElementById('moveOn').addEventListener('click', function() {
                aboutThirdRound();
            });
            }, false);
    }

    // function for info about the third round
    function aboutThirdRound() {

        console.log('info om tredje ronden.');
        console.log('poäng: ' + score);

        // set info object
        var info = {
            h1: '<h1>Rond 3</h1>',
            h2: '<h2>Testa din visuella förmåga och läsförståelse</h2>',
            paragraphPart1: '<p>Detta test går ut på att du under tidspress ska klicka på de objekt du ser i nummerordning enligt en lista</p>',
            paragraphPart2: '<p>Klicka på objekten i rätt nummerordning så snabbt du kan..</p>',
            next: '<button type="button" id="moveOn" class="btn btn-default">Starta</button>'
        };
        
        // display the info text 
        var gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = progress.progress5;
        gameArea.innerHTML += info.h1;
        gameArea.innerHTML += info.h2;
        gameArea.innerHTML += info.paragraphPart1;
        gameArea.innerHTML += info.paragraphPart2;
        gameArea.innerHTML += info.next;

        // clickable button to take you to the actual round
        document.getElementById("moveOn").addEventListener("click", thirdRound);

    }
    // Function for the third round of the test
    function thirdRound() {
 
        console.log('tredje ronden');
        console.log('poäng: ' + score);

        // Reset variable 
        resetWhere = 5;

        // Set shape object
        var shape = {
            header: '<h1 class="center">Rond 3</h1>',
            list: '<div class="left"><ul class="list-group"><li class="list-group-item">1. Den röda cirkeln</li><li class="list-group-item">2. Den gula rektangeln</li><li class="list-group-item">3. Den gröna kvadraten</li><li class="list-group-item">4. Den gula cirkeln</li><li class="list-group-item">5. Den gröna triangeln</li><li class="list-group-item">6. Den röda kvadraten</li><li class="list-group-item">7. Den blå cirkeln</li><li class="list-group-item">8. Den gula triangeln.</li><li class="list-group-item">9. Den blå rektangeln</li><li class="list-group-item">10. Den blå triangeln</li></ul></div>',
            divRightStart: '<div class="right">',
            divRightStop: '</div>',
            rektangelBlue: '<div id="9" class="rektangel blue"></div>',
            circleYellow: '<div id="4" class="cirkel yellow"></div>',
            circleRed: '<div id="1" class="cirkel red"></div>',
            kvadratGreen: '<div id="3" class="kvadrat green"></div>',
            kvadratRed: '<div id="6" class="kvadrat red"></div>',
            rektangelYellow: '<div id="2" class="rektangel yellow"></div>',
            triangelGreen: '<div id="5" class="triangel-green"></div>',
            triangelBlue: '<div id="10" class="triangel-blue"></div>',
            circleBlue: '<div id="7" class="cirkel blue"></div>',
            triangelYellow: '<div id="8" class="triangel-yellow"></div>'
        };

        // Timer
        timer = window.setTimeout(function(){ tenSeconds(); }, 10000);

        var gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = shape.header;
        gameArea.innerHTML += shape.list;
        gameArea.innerHTML +=  shape.divRightStart + shape.circleYellow + shape.rektangelBlue + shape.circleRed + shape.kvadratGreen + shape.kvadratRed +  shape.divRightStop ;
        gameArea.innerHTML += shape.divRightStart + shape.rektangelYellow + shape.triangelGreen + shape.triangelBlue + shape.circleBlue + shape.triangelYellow + shape.divRightStop;


        // Click the objects in sequence
        document.getElementById('1').addEventListener('click', function() {
            if (clickSequence === 0) {
                clickSequence += 1;
                internalScore += 1;
                preventManipulation = true;
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

    // Function for when ten seconds have passed or you finished test 3 or if you misclicked in test 3
    function tenSeconds() {

        // Cancel the timer
        window.clearTimeout(timer);

        var gameArea = document.getElementById('gameArea');
        // What to type out in the header
        if (internalScore === 10) {
            gameArea.innerHTML = '<h1>Grattis! Du fick alla rätt!</h1>';
        } else if (clickFail === true) {
            gameArea.innerHTML = '<h1>Du klickade i fel ordning...</h1>';
        } else {
            gameArea.innerHTML = '<h1>Tiden har gått ut!</h1>';
        }

        gameArea.innerHTML += '<h2>Du fick ' + internalScore + ' av 10 rätt</h2>';
        gameArea.innerHTML += '<p>intelligenstestet är nu slut.</p>';
        gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Se resultat</button>';


        // Click button to see end-screen
        document.getElementById("moveOn").addEventListener("click", endScreen);
    }

    // Function for the "end screen".
    function endScreen() {
        // set variable for final score
        var finalScore = score + internalScore;
        console.log('spelet är slut');
        var gameArea = document.getElementById('gameArea');
        gameArea.innerHTML = '<h1>Resultat</h1>';
        gameArea.innerHTML += '<p>Du fick totalt ' + finalScore + ' poäng av 25 möjliga</p>';
        gameArea.innerHTML += '<h3>Hur pass bra resultat fick du?</h3>';
        gameArea.innerHTML += '<ul class="list-group"><li class="list-group-item">Under 8 poäng: Njaaaa....</li><li class="list-group-item">8 - 16 poäng: Nu börjar det likna något.</li><li class="list-group-item">16 - 22 poäng: Sådär ja!</li><li class="list-group-item">22 - 25 poäng: Heter du Einstein i efternamn?</li></ul>';
        gameArea.innerHTML += '<button type="button" id="moveOn" class="btn btn-default">Prova igen</button>';

        document.getElementById('moveOn').addEventListener('click', function() {
            window.location.reload();
        });

    }


    var test = {

    // Reset possibilities depending on where you are in the test. Type "Test.reset()" in consol to reset the active test.
    'reset': function() {
            // Test 1 part 2
            if (resetWhere === 1) {
                if (preventManipulation === false) {
                    console.log('Reseting test1 part 1');               
                    firstRound1();
                } else {
                    console.log('reseting test1 part 2. fixing score.');
                    score -= 3;
                    firstRound1();
                }
            // Test 1 part 2
            } else if (resetWhere === 2) {
                if (preventManipulation === false) {
                    console.log('Reseting test1 part 2');
                    firstRound2();
                } else {
                    console.log('Reseting test1 part 2. fixing score');
                    score -=3;
                    firstRound2();
                }
            // Test 1 part 3
            } else if (resetWhere === 3) {
                if (preventManipulation === false) {
                    console.log('Reseting test1 part 3');
                    firstRound3();
                } else {
                    console.log('Reseting test1 part 3. fixing score.');
                    score -=3;
                    firstRound3();
                }
            // Test 2
            } else if (resetWhere === 4) {
                if (preventManipulation ===false) {
                    console.log('Reseting test 2');
                    secondRound();                    
                } else {
                    console.log('Reseting test 2. fixing score');
                    score -= 3;
                    secondRound();
                }

            // Test 3
            } else if (resetWhere === 5) {
                console.log('Reseting test 3');
                internalScore = 0;
                clickSequence = 0;
                aboutThirdRound();
            }
            // Default
            else {
                console.log('nothing to reset now');
            }
        }
    };
    return test;





})();
