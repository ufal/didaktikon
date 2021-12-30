let  aLetter = document.getElementById('a-letter')
let a = document.getElementById('body')

let alphabet = document.getElementById('alphabet')
let cover = document.getElementById('cover')

let nameEl = document.getElementById("name_input")
nameEl.addEventListener('click', hello)


let count = 7
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

let content = {
    a_letter : {text:'Amber', img:'blur1.jpeg'},
    
    
    b_letter : {text: "Beetroot, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br><br> Beetroot, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr", img:'blur3.jpeg'},    
    
    
    c_letter : {text: "Calculus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ", img:''},   
    
    
    d_letter : {text: 'Dedication', img:''},  
    
    
    e_letter : {text: 'Epsilon',  img:''},  
    
    
    f_letter : {text: 'Figure',   img:''}, 
    
    
    g_letter : {text: 'Goose',    img:''},
    
    
    h_letter : {text: 'Hectic',   img:''}
    
}

function hello(){
    var name = document.getElementById("name_input").value;
    console.log(name)
  }

function show(e) {
    

    let our_color = window.getComputedStyle(e.target).getPropertyValue("background-color");
    our_color = e.target.dataset.ourcolor
    console.log(e.target)
    if (!(e.target.dataset.ourcolor)) {
        window.getComputedStyle(e.target.parentElement).getPropertyValue("background-color");
    }
    console.log(our_color)

    console.log('show', e.target)
    cover.style.backgroundColor = our_color
    cover.style.display = 'flex'
    // document.getElementById(e.target.id).style.display = 'none'

    if (content[e.target.dataset.id].img) {
        cover.innerHTML = `<img src="${content[e.target.dataset.id].img}"> <h3>${content[e.target.dataset.id].text}</h3>`

    } else {
        cover.innerHTML = `<h3>${content[e.target.dataset.id].text}</h3>`
    }
    
        
    // e.target.style.backgroundColor = 'white'
}

function unshow(e) {
    console.log('Done')
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
        console.log(count, count % 7 - 1)
        count += 1

        card.addEventListener('click', show)

        }
    )

}





attachColors()

