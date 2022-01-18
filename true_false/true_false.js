let proButton = document.getElementById('pro')
let conButton = document.getElementById('con')
let statementContainer = document.getElementById('char_container')

let firstColumn = document.getElementById('container_correct')
let secondColumn = document.getElementById('container_incorrect')
let myTextElement = document.getElementById('my_text')
let woopElement =document.querySelector('.woop')
let finalElement = document.getElementById('final')


proButton.addEventListener('click', function () {
    console.log('works')

    if (statementContainer.dataset.correct === 'true') {
        console.log('works2')
        

 

        if (!('hide' in myTextElement.classList)) {
            myTextElement.classList.add('hide')
        }
        updateContent()
        

    } else {

        myTextElement.classList.remove('hide')

    }
    
})
conButton.addEventListener('click', function () {

    if (statementContainer.dataset.correct === 'false') {

  

        if (!('hide' in myTextElement.classList)) {
            myTextElement.classList.add('hide')
        }

        updateContent()

    } else {
        myTextElement.classList.remove('hide')
    }

})

const statements = [
    {
        statement: 'My question 1',
        correct: false
    },

    {
        statement: 'My question 2',
        correct: false
    },

    {
        statement: 'My question 3',
        correct: true
    }
    

]

let indeces = [0,1,2]


function updateContent() {
    if (indeces.length > 0) {
        statementContainer.innerHTML = `<h1>${statements[indeces[0]].statement}</h1>`
        statementContainer.dataset.correct = statements[indeces[0]].correct
        indeces.shift()
    } else {
        woopElement.classList.add('hide')
        finalElement.classList.remove('hide')

    }

    

}
updateContent()

