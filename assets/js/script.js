// Declaring variables
var titleEl = document.querySelector('#title')
var contentEl = document.querySelector('#content')
var scoresEl = document.querySelector('#scores')
var timerEl = document.querySelector('#timer')
var startEl = document.querySelector('#startBtn')
var finalScoreEl = document.querySelector('#finalScore')
var initialsEl = document.querySelector('#initials')
var submitEl = document.querySelector('#submit')
var questionNumber = 0
var score = 0
var timeLeft = 50

document.getElementById('title').innerHTML = 'Coding Quiz Challenge!'
document.getElementById('content').innerHTML = 'Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!'

startEl.addEventListener('click', function () {

    console.log('start button clicked!');
    displayQuestion();

})

function displayQuestion() {
    // clears text from main screen and hides begin button
    document.getElementById('title').innerHTML = questions[questionNumber].question
    document.getElementById('content').innerHTML = ''
    startEl.classList.add('hide')

    // loop to display answers
    for (let j = 0; j < questions[questionNumber].choices.length; j++) {
        let quizAnswer = document.createElement('li')
        quizAnswer.textContent = questions[questionNumber].choices[j]
        quizAnswer.addEventListener('click', function () {

            choiceClicked(questions[questionNumber].choices[j])

        })
        contentEl.appendChild(quizAnswer)

        function compare() {

            var questionAnswer = document.createElement('div')
            questionAnswer.setAttribute('id', 'questionAnswer')
            contentEl.appendChild(questionAnswer)

            if (choiceClicked == questions[questionNumber].correct) {

                score++
                console.log(score)
                questionAnswer.textContent = 'Correct! The answer is: ' + questions[questionNumber].correct
            } else {

                questionAnswer.textContent = 'Wrong! The answer is: ' + questions[questionNumber].correct

            }

        }
    }
    console.log('function worked')

    function choiceClicked(event) {

        console.log('choice clicked', event)
        compare()
        questionNumber++

        if (questionNumber >= questions.length) {
            alert('The game is over!')
            gameOver()
        } else {
            displayQuestion()
        }
    }

}

function gameOver() {

    console.log('the game ended')
    document.getElementById('title').innerHTML = 'Thanks for playing!'
    document.getElementById('content').innerHTML = 'closing statements'
    //change title to game over message


}

document.getElementById('startBtn').addEventListener('click', function () {

    var clockStart = setInterval(function function1() {

        document.getElementById('time').innerHTML = timeLeft + '' + ' seconds remaining'

        timeLeft -= 1
        if (timeLeft <= -1) {

            clearInterval(clockStart)
            document.getElementById('time').innerHTML = 'Time is up, you lose!'

        } else if (questionNumber >= 5 && timeLeft > 0) {

            clearInterval(clockStart)
            document.getElementById('time').innerHTML = 'You win!'
        }

    }, 1000)
})