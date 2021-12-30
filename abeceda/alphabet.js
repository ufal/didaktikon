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
    a_letter : {text:'Abeceda', img:'blur1.jpeg'},
    b_letter : {text: "Babička", img:''},    
    c_letter : {text: "Celnice", img:''},
    c_soft_letter : {text: "Či Či", img:''},   
    d_letter : {text: 'Dům', img:''},  
    e_letter : {text: 'Echo',  img:''},  
    f_letter : {text: 'Fiasko',   img:''}, 
    g_letter : {text: 'Galoše',    img:''},
    h_letter : {text: 'Háj',   img:''},
    i_letter : {text: 'Iniciála',   img:''},
    ch_letter : {text: "Chorvatsko", img:''},
    j_letter : {text:"Jablko", img:''}, 
    k_letter : {text:"Kaše", img:''}, 
    l_letter : {text:"Líbánky", img:''}, 
    m_letter : {text:"Most", img:''}, 
    n_letter : {text:"Nákaza", img:''}, 
    n_soft_letter : {text:"", img:''}, 
    o_letter : {text:"Opice", img:''}, 
    p_letter : {text:"Park", img:''}, 
    q_letter : {text:"", img:''}, 
    r_letter : {text:"Radost", img:''}, 
    r_soft_letter : {text:"Řeka", img:''}, 
    s_letter : {text:"Seno", img:''}, 
    s_soft_letter : {text:"Šablona", img:''}, 
    t_letter : {text:"Tábor", img:''}, 
    t_soft_letter : {text:"", img:''}, 
    u_letter : {text:"Úprava", img:''}, 
    v_letter : {text:"Vrstva", img:''}, 
    w_letter : {text:"Waltz", img:''}, 
    x_letter : {text:"Xylofon", img:''}, 
    y_letter : {text:"Ypsilon", img:''}, 
    z_letter : {text:"Zebra", img:''}, 
    z_soft_letter : {text: 'Žába',   img:''},

}
console.log(diacritics)

function start(){
    restart()
    let name = nameEl.value;
    let wordArray = name.split("");
    
    for (let i=0; i<wordArray.length; i++) {
        console.log(wordArray[i])
        if (wordArray[i] === 'ň') {
            wordArray[i] = 'n_letter'
        
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

        } 
        // else if (wordArray[i] === 'ť') {
        //     wordArray[i] = 't_soft_letter'

        // } else if (wordArray[i] === 'ď') {
        //     wordArray[i] = 'd_soft_letter'

        // } 

        else if (wordArray[i] === 'ť') {
            wordArray[i] = 't_letter'

        } else if (wordArray[i] === 'ď') {
            wordArray[i] = 'd_letter'

        } 

        else if (wordArray[i] === 'ý') {
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

        } else if (wordArray[i] === 'ó') {
            wordArray[i] = 'o_letter'

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

