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


let numberOfQuestions = 10
let correctAnswersNumber = 0
let questionsIndeces = [0,1,2]

let correctAnswersNumberSOURCE = 0
let questionsIndecesSOURCE = [0,1,2]
const questions = [
    {
        question: 'Ve kterém roce vznikl první chatbot?',
        note: 'chatbot = program, se kterým uživatel komunikuje pomocí krátkých textových zpráv',
        answers: [
            { text: '1966', correct: true},
            { text: '1976', correct: false},
            { text: '1986', correct: false}
        ]
    },

    {
        question: 'Ve kterém roce vnikl první automatický překlad?',
        note: 'Dnes například Google Translate nebo DeepL, překládá text z jednoho jazyka do jiného.',
        answers: [
            { text: '1944', correct: false},
            { text: '1954', correct: true},
            { text: '1964', correct: false}
        ]
    },

    {
        question: 'První automatické popisování obrázků?',
        note: 'Vygenerovat textový popisek k obrázku',
        answers: [
            { text: '1979', correct: false},
            { text: '1989', correct: false},
            { text: '1999', correct: true}
        ]
    },

    {
        question: 'První autonomní roboti?',
        note: '',
        answers: [
            { text: '1949', correct: true},
            { text: '1959', correct: false},
            { text: '1969', correct: false}
        ]
    },

    {
        question: 'První samořídící auto?',
        note: '',
        answers: [
            { text: '1977', correct: true},
            { text: '1987', correct: false},
            { text: '1997', correct: false}
        ]
    },

    {
        question: 'AI vítězí v mistrovství v šachách?',
        note: '',
        answers: [
            { text: '1987', correct: false},
            { text: '1997', correct: true},
            { text: '2007', correct: false}
        ]
    },

    {
        question: 'AI vítězí v mistrovství v go?',
        note: '',
        answers: [
            { text: '1996', correct: false},
            { text: '2006', correct: false},
            { text: '2016', correct: true}
        ]
    },
    
    {
        question: 'Umělá inteligence maluje a prodává obraz?',
        note: '',
        answers: [
            { text: '1998', correct: false},
            { text: '2008', correct: false},
            { text: '2018', correct: true}
        ]
    },

    {
        question: 'Knižní vydání českých básní napsaných umělou inteligencí?',
        note: '',
        answers: [
            { text: '1996', correct: false},
            { text: '2006', correct: false},
            { text: '2016', correct: true}
        ]
    },

    {
        question: 'Uvedení celovečerní divadelní hry, kde 90% scénáře napsala AI?',
        note: '',
        answers: [
            { text: '2001', correct: false},
            { text: '2011', correct: false},
            { text: '2021', correct: true}
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


