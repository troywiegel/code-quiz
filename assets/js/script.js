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
    }
    console.log('function worked')
}

function choiceClicked(event) {

    console.log('choice clicked', event)
    //need to clear previous question content
    questionNumber++
    
    if (questionNumber >= questions.length) {
        alert('The game is over!')
        gameOver()
    } else {
        displayQuestion()
    }

}

function gameOver() {

    console.log('the game ended')
    document.getElementById('title').innerHTML = 'Thanks for playing!'
    document.getElementById('content').innerHTML = 'closing statements'
    //change title to game over message


}

// var questionAnswer = document.createElement('div')
//     questionAnswer.setAttribute('id', 'questionAnswer')

//     if (choiceClicked == questions[questionNumber].correct) {

//         score++
//         questionAnswer.textContent = 'Correct! The answer is: ' + questions[questionNumber].correct
//     } else {

//         questionAnswer.textContent = 'Wrong! The answer is: ' + questions[questionNumber].correct

//     }