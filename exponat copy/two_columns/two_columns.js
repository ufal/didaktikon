let proButton = document.getElementById('pro')
let conButton = document.getElementById('con')
let statementContainer = document.getElementById('char_container')

let firstColumn = document.getElementById('container_correct')
let secondColumn = document.getElementById('container_incorrect')
let myTextElement = document.getElementById('my_text')
let woopElement =document.querySelector('.woop')
let finalElement = document.querySelector('#final')


proButton.addEventListener('click', function () {
    console.log('works')

    if (statementContainer.dataset.correct === 'true') {
        console.log('works2')
        

        let node = document.createElement("DIV");
        node.classList.add('char_container')
        let node_text = document.createElement("P")         
        let textnode = document.createTextNode(statementContainer.firstChild.innerHTML)      
        node_text.appendChild(textnode)
        node.appendChild(node_text)                    
        firstColumn.appendChild(node)     

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

        let node = document.createElement("DIV");
        node.classList.add('char_container')
        let node_text = document.createElement("P")         
        let textnode = document.createTextNode(statementContainer.firstChild.innerHTML)      
        node_text.appendChild(textnode)
        node.appendChild(node_text)                    
        secondColumn.appendChild(node) 

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
        statement: 'Dostupnost pro každého uživatele s chytrým telefonem, tabletem',
        correct: false
    },

    {
        statement: 'Nenahrazuje terapiii, krizovou intervenci či poradenství v plném rozsahu',
        correct: false
    },

    {
        statement: 'Může být aplikováno v místech, kde není klasická psychologická pomoc dostupná',
        correct: true
    }
    

]

let indeces = [0,1,2]


function updateContent() {
    if (indeces.length > 0) {
        statementContainer.innerHTML = `<p>${statements[indeces[0]].statement}</p>`
        statementContainer.dataset.correct = statements[indeces[0]].correct
        indeces.shift()
    } else {
        woopElement.classList.add('hide')
        finalElement.classList.remove('hide')

    }

}
updateContent()

