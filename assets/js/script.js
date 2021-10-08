// Declaring variables
var mainEl = document.querySelector('#mainBox')
var h1El = document.querySelector('#h1')
var p1El = document.querySelector('#p1')
var scoresEl = document.querySelector('#scores')
var timerEl = document.querySelector('#timer')
var questionsEl = document.querySelector('#questionOptions')
var startEl = document.querySelector('#startBtn')
var endEl = document.querySelector('#end')
var finalScoreEl = document.querySelector('#finalScore')
var initialsEl = document.querySelector('#initials')
var submitEl = document.querySelector('#submit')
var questionNumber = 0


startEl.addEventListener('click', function () {

    console.log('start button clicked!');
    displayQuestion();

})

function displayQuestion() {
    // clears text from main screen and hides begin button
    h1El.innerHTML = ''
    p1El.innerHTML = ''
    startEl.classList.add('hide')
    // loop to display questions
    let quizQuestion = document.createElement('h1')
        quizQuestion.textContent = questions[questionNumber].question
        mainEl.appendChild(quizQuestion)
    
        // loop to display answers
        for (let j = 0; j < questions[questionNumber].choices.length; j++) {
            let quizAnswer = document.createElement('li')
            quizAnswer.textContent = questions[questionNumber].choices[j]
            quizAnswer.addEventListener('click', function() {

                choiceClicked(questions[questionNumber].choices[j])

            })
            quizQuestion.appendChild(quizAnswer)
        }
    // }
    console.log('function worked')
}

function choiceClicked(event) {

    console.log('choice clicked', event)
    //need to clear previous question content
    questionNumber++
    displayQuestion()

}