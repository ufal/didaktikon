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
let correctAnswers=0

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
        answer:'1966',
        comment: 'První chatbot se jmenoval ELIZA a vznikl v roce 1966',
        note: 'Představoval psychologa, nebyl moc inteligentní, používal jen několik jednoduchých pravidel a vět a hlavně se hodně ptal.'
    },
    {
        answer:'1954',
        comment: 'První automatický překlad byl z ruštiny do angličtiny v rámci Georgetown–IBM experimentu v roce 1954',
        note: 'Byl založený na jednoduchých pravidlech, v podstatě překládal slovo po slově podle slovníku.'
    },
    {
        answer:'1999',
        comment: 'První automatické popisování obrázků: 1999 Mori, Takahashi, Oka',
        note: 'Vygenerovat popisek pomocí pravidel je prakticky nemožné, první systémy proto vznikly až s rozvojem strojového učení. Popisek obrázku generuje na základě popisků podobných obrázků v trénovacích datech.'
    },
    {
        answer:'1949',
        comment: 'Elmer a Elsie',
        note: 'Náhodně se procházeli, reagovali na světlo a dotek, jejich “mozky” měly dvě umělé neuronové buňky'
    },
    {
        answer:'1977',
        comment: 'Tsukuba Mechanical Engineering Laboratory',
        note: '1977 Tsukuba (speciálně upravená silnice, max 30 km/h), 1985 ALV (standardní silnice), 1995 CMU NavLab 5 (od pobřeží k pobřeží, průměrně 100 km/h), 2018 Waymo (samořídící taxi)'
    },
    {
        answer:'1997',
        comment: 'Deep Blue vs Garry Kasparov',
        note: 'Jednoduchý pravidlový systém, těžké je to že možných posloupností tahů je příliš mnoho. Nárůst výkonu počítačů umožnil propočítat více tahů než kolik zvládne člověk.'
    },
    {
        answer:'2016',
        comment: 'AlphaGo vs Lee Sedol',
        note: 'Možných poslopností tahů v go je mnohem víc než v šachách, ani nejvýkonnější počítač jich nezvládne propočítat dost. Proto se AlphaGo nejdřív učí z partií odehraných lidmi, a pak dál zdokonaluje svou strategii zlepšuje hraním sama proti sobě (reinforcement learning). Zvládne tak odehrát miliony zápasů, takže má výrazně větší zkušenosti než může mít člověk.'
    },
    {
        answer:'2018',
        comment: 'Portrét Edmonda Belamy',
        note: 'Strojové učení využívající metodu GAN se učilo malovat z trénovacích dat obsahujících 15 000 portrétů. Obraz (tisk na plátně, 70x70 cm) se vydražil za 432 500 amerických dolarů (asi 10 000 000 Kč).'
    },
    {
        answer:'2016',
        comment: 'Jiří Materna: Poezie umělého světa',
        note: 'Neuronový jazykový model (biLSTM) se učil psát podle amatérských básní na webu pismak.cz'
    },
    {
        answer:'2021',
        comment: 'AI: Když robot píše hru',
        note: 'Systém THEaiTRobot, založený na neuronovém jazykovém modelu GPT-2, který si načetl asi 8 000 000 článků z internetu. Premiéra 26.2.2021 ve Švandově divadle v Praze.'
    }
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
        correctAnswers++
    }
    else{
        document.getElementById(index).style.backgroundColor="rgb(230, 101, 101)"
        let correctIndex=0
        for(let i = 0; i < 3; i++) {
            if(questions[currentQuestionIndex].answers[i].correct){
                correctIndex=i
            }
        }
        document.getElementById(correctIndex).style.backgroundColor="rgb(161, 211, 100)"
    }
    setTimeout(showAnswer, 1000)
}

function showAnswer(){
    answerContainer.style.display="grid"
    questionContainer.style.display="none"
    answerImage.src="answer_images/" + currentQuestionIndex + ".png"
    answer.innerHTML=answers[currentQuestionIndex].answer
    answerComment.innerHTML=answers[currentQuestionIndex].comment
    answerNote.innerHTML=answers[currentQuestionIndex].note
    if(currentQuestionIndex==questions.length-1){
        nextBtn.innerHTML = "Vyhodnocení kvízu"
        nextBtn.style.width="60%"
        nextBtn.style.backgroundColor="rgb(120, 60, 154)"
        
    }
}

function showQuestion(){
    currentQuestionIndex++
    if(currentQuestionIndex==questions.length){
        answerContainer.style.display="none"
        questionContainer.style.display="none"
        document.getElementById("vysledky").style.display="block"
        let vysledek = document.getElementById("vysledek")
        vysledek.innerHTML=correctAnswers + "/" + questions.length
        document.getElementById("next-button").style.display="inline"
        if(correctAnswers>=5){
            vysledek.style.color="rgb(161, 211, 100)"
            document.getElementById("smajlik").src="happier.png"
        }
        else{
            vysledek.style.color="rgb(230, 101, 101)"
            document.getElementById("smajlik").src="super sad.png"
        }
    }
    else{
        answerContainer.style.display="none"
        questionContainer.style.display="grid"
        question.innerHTML=questions[currentQuestionIndex].question
        questionNote.innerHTML=questions[currentQuestionIndex].note
        for(let i = 0; i < 3; i++) {
            let btn = document.getElementById(i)
            btn.innerHTML=questions[currentQuestionIndex].answers[i].text
            btn.style.backgroundColor="rgb(225, 225, 225)"
        }
        questionImage.src="question_images/" + currentQuestionIndex + ".jpg"
    }
}
