// declaring global variables
var questionIndex = -1;
var timeLeft = 0;
var score = 0;
var timer;

// starts timer once begin button is clicked
function start() {

    timeLeft = 70;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        // goes to gameOver screen if timer reach less than or equal to 0
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);

    question();
}
// function to loop through questions and answers
function question() {

    questionIndex++;

    // if the player answers the last question in the array it transitions to gameOver screen
    if (questionIndex > questions.length - 1) {
        gameOver();
        return;
    }

    var quizContent = "<h2>" + questions[questionIndex].title + "</h2>"

    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        var quizAnswer = "<button onclick=\"[answer]\">[choice]</button>";
        quizAnswer = quizAnswer.replace("[choice]", questions[questionIndex].choices[i]);
        if (questions[questionIndex].choices[i] == questions[questionIndex].answer) {
            quizAnswer = quizAnswer.replace("[answer]", "correct()");
        } else {
            quizAnswer = quizAnswer.replace("[answer]", "incorrect()");
        }
        quizContent += quizAnswer
    }
    document.getElementById("quizContent").innerHTML = quizContent;
}
// if answer is right this increases score by 1
function correct() {
    score += 1;
    question();
}
// if answer is wrong this decreases time by 10 seconds
function incorrect() {
    timeLeft -= 10;
    question();
}

//stops the timer and brings up game over screen 
function gameOver() {
    clearInterval(timer);

    var quizContent = `
    <h2>Thanks for playing!</h2>
    <h3>You got ` + score + ` /5</h3>
    <input type="text" id="name" placeholder="Input Initials"> 
    <button onclick="setScore()">Submit</button>`;

    document.getElementById("quizContent").innerHTML = quizContent;
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
    
    <button onclick="clearScore()">Clear score</button><button onclick="resetGame()">Play Again</button>
    
    `;

    document.getElementById("quizContent").innerHTML = quizContent;
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
    questionIndex = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizContent = `
    <h1> Coding Quiz Challenge!</h1>
    <h2>Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</h2>
    <button onclick="start()">Begin</button>`;

    document.getElementById("quizContent").innerHTML = quizContent;
}