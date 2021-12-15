const answerButtonsElement = document.getElementById('answer-buttons')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let endElement = document.getElementById('end-game')
let correctAnswersNumberElement = document.getElementById('number-of-correct-answers')
let emojiEvaluatorElement = document.getElementById('emoji-evaluator')
let againElement = document.getElementById('new-btn')
let headerElement = document.getElementById('name')
let inputElement = document.getElementById('name-input')


let numberOfQuestions = 3
let correctAnswersNumber = 0
let questionsIndeces = [0,1,2]

let correctAnswersNumberSOURCE = 0
let questionsIndecesSOURCE = [0,1,2]
const questions = [
    {
        question: '2+2?',
        answers: [
            { text: '4', correct: true},
            { text: '2', correct: false},
            { text: '3', correct: false},
            { text: '1', correct: false}
        ]
    },

    {
        question: '2+3?',
        answers: [
            { text: '4', correct: false},
            { text: '2', correct: false},
            { text: '5', correct: true}
        ]
    },

    {
        question: '2+4?',
        answers: [
            { text: '3', correct: false},
            { text: '20', correct: false},
            { text: '6', correct: true},
            { text: '5', correct: false},
            { text: '2', correct: false}
        ]
    }
    

]


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', nextQuestion)
againElement.addEventListener('click', function() {
    window.location.reload()
    return false
})


function removeIndex() {
    if (questionsIndeces.length !== 0) {
        questionsIndeces.shift()
    }

}


function startGame() {
    endElement.classList.add('hide')
    console.log('Started')

    startButton.classList.add('hide')
    headerElement.classList.add('hide')
    inputElement.classList.add('hide')

    addContent(questions[0])

    questionContainerElement.classList.remove('hide')
    nextButton.classList.remove('hide')


}

function endGame() {
    correctAnswersNumberElement.innerHTML = `${correctAnswersNumber}/${numberOfQuestions}`

    endElement.classList.remove('hide')
    nextButton.classList.add('hide')
    answerButtonsElement.classList.add('hide')

    if (correctAnswersNumber === numberOfQuestions) {
        emojiEvaluatorElement.innerHTML = '&#128512;'
    } else {
        emojiEvaluatorElement.innerHTML = '&#128064;'
    }

  
    againElement.classList.remove('hide')

}

function resetState() {

    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
   questionElement.classList.add('hide')
}


function nextQuestion() {
    // resetState()
    removeIndex()
    console.log(questionsIndeces)
    if (questionsIndeces.length !== 0) {
        
        
        console.log(questionsIndeces, 'if')
        addContent(questions[questionsIndeces[0]])

    } else {
        console.log('finish!')
        resetState()
        endGame()
    }
}

function addContent(questions_object) {
    resetState()

    questionElement.innerHTML=questions_object.question
    questionElement.classList.remove('hide')
    
    for (let i in questions_object.answers) {
        let button = document.createElement("button")
        
        button.innerHTML = questions_object.answers[i].text
        button.classList.add('btn')

        if (questions_object.answers[i].correct) {
            button.dataset.correct = true
        } else { 
            button.dataset.correct = false
        }

        button.addEventListener('click', showCorrectness, { once: true })
        answerButtonsElement.appendChild(button)
    }
}

function showCorrectness(e) {
    
    
    if (e.target.dataset.correct === 'true') {
        correctAnswersNumber += 1
        console.log(correctAnswersNumber)

    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (e.target.dataset.correct === 'true' && button.dataset.correct === 'false') {
            e.target.style.backgroundColor = 'rgb(161, 211, 100)' //correct color

            button.removeEventListener('click', showCorrectness, { once: true })
        } else {

            e.target.style.backgroundColor = 'rgb(230, 101, 101)' //wrong color
            let a = Array.from(answerButtonsElement.children)

            for (const element in a) {
   
                if (a[element].dataset.correct === 'true') {
                    a[element].style.backgroundColor = 'rgb(161, 211, 100)' //correct color
                }
              }
            
            button.removeEventListener('click', showCorrectness, { once: true })

        }
    })
}


