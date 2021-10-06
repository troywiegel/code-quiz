var questions = [

    {
        question: 'whats your fav color',
        choices: ['red', 'greeg', 'blue'],
        correct: 'red'

    },
    {
        question: 'whats your fav color',
        choices: ['red', 'greeg', 'blue'],
        correct: 'red'

    }

]

function displayQuestion() {

    var title = document.createElement('h1')

    title.innerHTML = questions[0].question

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