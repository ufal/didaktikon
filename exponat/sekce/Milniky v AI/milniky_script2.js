const questionBtns = document.getElementsByClassName('btn')
const answerContainer = document.getElementById("answer-container")
const questionContainer = document.getElementById("question-container")
const nextBtn = document.getElementById("next-btn")
const question = document.getElementById("question")
const questionNote = document.getElementById("question-note")
const questionImage = document.getElementById("question-image")
const answer = document.getElementById("answer")
const answerComment = document.getElementById("answer-comment")
const answerNote = document.getElementById("answer-note")
const answerImage = document.getElementById("answer-image")
let currentQuestionIndex=0  
let correctIndex=0

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

const answers = [
    {
        answer: 'Ve kterém roce vznikl první chatbot?',
        comment: 'chatbot = program, se kterým uživatel komunikuje pomocí krátkých textových zpráv',
        note: ''
    },
]

nextBtn.addEventListener('click',showQuestion)

for (let i = 0; i < questionBtns.length; i++) {
    questionBtns[i].addEventListener('click',function(){
        Evaluate(parseInt(questionBtns[i].id))
    });
} 

function Evaluate(index){
    if(questions[currentQuestionIndex].answers[index].correct){
        document.getElementById(index).style.backgroundColor="rgb(161, 211, 100)"
    }
    else{
        document.getElementById(index).style.backgroundColor="rgb(230, 101, 101)"
        
        for(let i = 0; i < 3; i++) {
            if(questions[currentQuestionIndex].answers[i].correct){
                correctIndex=i
            }
        }
        document.getElementById(correctIndex).style.backgroundColor="rgb(161, 211, 100)"
    }
    setTimeout(showAnswer, 1500)
}

function showAnswer(){
    answerContainer.style.display="grid"
    questionContainer.style.display="none"
    answer.innerHTML=questions[currentQuestionIndex].answers[correctIndex].text
    answerComment.innerHTML="Ahoj"
    answerNote.innerHTML="Jak je?"
}

function showQuestion(){
    currentQuestionIndex++
    alert(currentQuestionIndex)
    answerContainer.style.display="none"
    questionContainer.style.display="grid"
    question.innerHTML=questions[currentQuestionIndex].question
    questionNote.innerHTML=questions[currentQuestionIndex].note
    for(let i = 0; i < 3; i++) {
        let btn = document.getElementById(i)
        btn.innerHTML=questions[currentQuestionIndex].answers[i].text
        btn.style.backgroundColor="rgb(225, 225, 225)"
    }
}
