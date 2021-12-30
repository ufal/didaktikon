let  aLetter = document.getElementById('a-letter')
let a = document.getElementById('body')

let alphabet = document.getElementById('alphabet')
let cover = document.getElementById('cover')

let submitEl = document.querySelector('.submit-btn')
submitEl.addEventListener('click', start)

let restartEl = document.querySelector('.restart-btn')
restartEl.addEventListener('click', restart)
let wordArray;

let nameEl = document.getElementById("name_input")
nameEl.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
     event.preventDefault();
     submitEl.click();
    }
});

let count = 7
let counter = 7
let colors = [
    '#F15353', // red
    '#F17553', // orange
    '#F1D953', //yellow
    'rgb(120, 184, 68)', // green
    // '#A0E449', // green
    'rgb(68, 147, 184)', //blue
    'rgb(102, 65, 158)', // violet

    'rgb(202, 111, 146)', //pink
]

let diacritics = {
    'ě': 'e_letter',
    'š': 's_soft_letter',
    'č': 'c_soft_letter',
    'ř': 'r_soft_letter',
    'ž': 'z_soft_letter',
    'ý': 'y_letter',
    'á': 'a_letter',
    'í': 'i_letter',
    'é': 'e_letter',
    'ú': 'u_letter',
    'ů': 'u_letter'
}

let content = {
    a_letter : {text:'Amber', img:'blur1.jpeg'},
    b_letter : {text: "Beetroot, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br><br> Beetroot, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr", img:'blur3.jpeg'},    
    c_letter : {text: "Calculus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ", img:''},   
    d_letter : {text: 'Dedication', img:''},  
    e_letter : {text: 'Epsilon',  img:''},  
    f_letter : {text: 'Figure',   img:''}, 
    g_letter : {text: 'Goose',    img:''},
    h_letter : {text: 'Hectic',   img:''},
    z_soft_letter : {text: 'Žába',   img:''}
    
}
console.log(diacritics)

function start(){
    restart()
    let name = nameEl.value;
    let wordArray = name.split("");
    
    for (let i=0; i<wordArray.length; i++) {
        console.log(wordArray[i])
        if (wordArray[i] === 'ň') {
            wordArray[i] = 'n_soft_letter'
        
        } else if ( wordArray[i] === 'ě') {
            wordArray[i] = 'e_letter'

        } else if (wordArray[i] === 'š') {
            wordArray[i] = 's_soft_letter'

        } else if (wordArray[i] === 'č') {
            wordArray[i] = 'c_soft_letter'

        } else if (wordArray[i] === 'ř') {
            wordArray[i] = 'r_soft_letter'

        } else if (wordArray[i] === 'ž') {
            wordArray[i] = 'z_soft_letter'

        } else if (wordArray[i] === 'ť') {
            wordArray[i] = 't_soft_letter'

        } else if (wordArray[i] === 'ď') {
            wordArray[i] = 'd_soft_letter'

        } else if (wordArray[i] === 'ý') {
            wordArray[i] = 'y_letter'

        } else if (wordArray[i] === 'á') {
            wordArray[i] = 'a_letter'

        } else if (wordArray[i] === 'í') {
            wordArray[i] = 'i_letter'

        } else if (wordArray[i] === 'é') {
            wordArray[i] = 'e_letter'

        } else if (wordArray[i] === 'ú') {
            wordArray[i] = 'u_letter'

        } else if (wordArray[i] === 'ů') {
            wordArray[i] = 'u_letter'

        } else  {
            wordArray[i] += '_letter'
        }
    }
    // console.log(name)
    console.log(wordArray)
    
    Array.from(alphabet.children).forEach( card => {

        card.style.backgroundColor = colors[count % 7]
        card.dataset.ourcolor = colors[count % 7]
        Array.from(card.children).forEach ( child => {
            child.dataset.ourcolor = colors[count % 7]
        })
        count += 1

        if (!(wordArray.includes(card.id))) {
            card.style.display = 'none'
        }

        }
    )
}

function restart() {

    Array.from(alphabet.children).forEach( card => {
        card.style.display = 'flex'
        })

}





function show(e) {
    
    let our_color = window.getComputedStyle(e.target).getPropertyValue("background-color");
    our_color = e.target.dataset.ourcolor
    console.log(e.target)
    if (!(e.target.dataset.ourcolor)) {
        window.getComputedStyle(e.target.parentElement).getPropertyValue("background-color");
    }

    // console.log(our_color)
    // console.log('show', e.target)

    cover.style.backgroundColor = our_color
    cover.style.display = 'flex'

    if (content[e.target.dataset.id].img) {
        cover.innerHTML = `<img src="${content[e.target.dataset.id].img}"> <h3>${content[e.target.dataset.id].text}</h3>`

    } else {
        cover.innerHTML = `<h3>${content[e.target.dataset.id].text}</h3>`
    }

}

function unshow(e) {
    // console.log('Done')
    cover.style.display = 'none'
}

function compoundWord() {
    pass
}


function attachColors() {
    
    Array.from(alphabet.children).forEach( card => {
        card.style.backgroundColor = colors[count % 7]
        card.dataset.ourcolor = colors[count % 7]

        Array.from(card.children).forEach ( child => {
            child.dataset.ourcolor = colors[count % 7]
        })
        // console.log(count, count % 7 - 1)
        count += 1

        card.addEventListener('click', show)
        }
    )
}





attachColors()

