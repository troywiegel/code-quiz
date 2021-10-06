// Declaring variables
var scoresEl = document.querySelector('#scores');
var timerEl = document.querySelector('#timer');
var questionsEl = document.querySelector('#questionOptions');
var startEl = document.querySelector('#startBtn');
var endEl = document.querySelector('#end');
var finalScoreEl = document.querySelector('#finalScore');
var initialsEl = document.querySelector('#initials');
var submitEl = document.querySelector('#submit');

startEl.addEventListener('click', function () {

    console.log('Start Button Clicked!');
    displayQuestion()

});

function displayQuestion () {

    var title = document.createElement('h1')

    title.innerHTML = questions[0].questions

    document.getElementById('title').appendChild(title)

    for (let i = 0; i < questions[0].choices.length; i++) {

        var choice = document.createElement('button')

        choice.innerHTML = choice[0].choices[i]

        choice.addEventListener('click', choiceClicked)

        document.getElementById('choices').appendChild(choice)

    }

}

displayQuestion();

function choiceClicked () {

    console.log('choice got clicked')

}