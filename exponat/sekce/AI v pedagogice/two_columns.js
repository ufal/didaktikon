let proButton = document.getElementById('pro')
let conButton = document.getElementById('con')
let statementContainer = document.getElementById('char_container')

let firstColumn = document.getElementById('container_correct')
let secondColumn = document.getElementById('container_incorrect')
let myTextElement = document.getElementById('my_text')
let woopElement =document.querySelector('.woop')
let finalElement = document.querySelector('#final')
const odpovedi = []
let i = 0
let odpoved = document.getElementById("skryte-btn")

proButton.addEventListener('click', function () {
    console.log('works')
        let node = document.createElement("DIV");
        node.classList.add('char_container')
        let node_text = document.createElement("P")         
        let textnode = document.createTextNode(statementContainer.firstChild.innerHTML)      
        node_text.appendChild(textnode)
        node.appendChild(node_text)                    
        firstColumn.appendChild(node)   
        odpovedi[i]=1
        i++

        if (!('hide' in myTextElement.classList)) {
            myTextElement.classList.add('hide')
        }
        updateContent()

    
})
conButton.addEventListener('click', function () {

        let node = document.createElement("DIV");
        node.classList.add('char_container')
        let node_text = document.createElement("P")         
        let textnode = document.createTextNode(statementContainer.firstChild.innerHTML)      
        node_text.appendChild(textnode)
        node.appendChild(node_text)                    
        secondColumn.appendChild(node) 
        odpovedi[i]=0
        i++

        if (!('hide' in myTextElement.classList)) {
            myTextElement.classList.add('hide')
        }

        updateContent()


})

const statements = [
    {
        statement: 'Učitel může lépe rozpoznat jaké emoce při učení děti/studenti mají.'
    },

    {
        statement: 'Data o tom, jak „se děti mají“ bude zpracovávat vzdálený server.'
    },

    {
        statement: 'Učitel může přizpůsobit výuku, když bude vědět, co děti baví nebo naopak stresuje.'
    },

    {
        statement: 'Děti si samy díky programu budou moci uvědomit, jaké emoce prožívají.'
    },

    {
        statement: 'Program ne vždy rozpozná emoce správně, protože dělá jako každý chyby.'
    },

    {
        statement: 'Program nerozpozná dobře, jestli jsme smutní, protože nám nejde matematika nebo proto, že jsme se pohádali s někým blízkým.'
    }
    

]


let index=statements.length

function updateContent() {
    if (index > 0) {
        statementContainer.innerHTML = `<p>${statements[index-1].statement}</p>`
        index--
        /*if(index==0){
            proButton.type="submit"
            conButton.type="submit"
        }*/
    } else {
        //odpoved.value=getOdpovedi()
        odpoved.value=getOdpovedi()
        woopElement.classList.add('hide')
        finalElement.classList.remove('hide')
        document.getElementById('submit2').classList.remove("hide")
        //document.getElementById("next-button").classList.remove("hide")
        
    }

}
updateContent()

function getOdpovedi(){
    let text =""
    for (let i = 0; i < odpovedi.length; i++) {
        text += odpovedi[i];
      } 
    return text
}