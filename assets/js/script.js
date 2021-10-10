//declaring global variables
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts timer once begin button is clicked
function start() {

    timeLeft = 70;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);

    next();
}
// loops through questions and answers
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }
    document.getElementById("quizBody").innerHTML = quizContent;
}
// if answer is right this increases score by 1
function correct() {
    score += 1;
    next();
}
// if answer is wrong this decreases time by 10 seconds
function incorrect() {
    timeLeft -= 10;
    next();
}

//stops the timer and brings up end game screen 
function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>Thanks for playing!</h2>
    <h3>You got ` + score + ` /5</h3>
    <input type="text" id="name" placeholder="Input Initials"> 
    <button onclick="setScore()">Submit</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

// stores the player's score to the local storage
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    getScore();
}

// retrieves the player's highest score attained and displays it on the screen
function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

    document.getElementById("quizBody").innerHTML = quizContent;
}

// clears score names and values if player clicks reset button
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    resetGame();
}

// resets the game
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizContent = `
    <h1>JavaScript Quiz!</h1>
    <h2>Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</h2>
    <button onclick="start()">Begin</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}