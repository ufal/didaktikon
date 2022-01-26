let swipeRightButton = document.getElementById('swipe_right')
let swipeLeftButton = document.getElementById('swipe_left')
let card = document.getElementById('card')
let ourBody = document.getElementById('main')
let contentContainer = document.getElementById('content')

let indeces = [0,1,2]

function updateContent() {
    if (indeces.length > 0) {
        contentContainer.innerHTML = `<p>${statements[indeces[0]].statement}</p>`
        indeces.shift()
    } else {
        contentContainer.innerHTML = '<p>Kartičky došly!</p>'

    }

}

swipeRightButton.onclick = function() {
    card.classList.remove('swipe_to_right');
    card.classList.remove('swipe_to_left');
    ourBody.style.backgroundColor = 'rgb(32, 81, 77)'
    setTimeout( () => { 
        ourBody.style.backgroundColor = 'rgb(32, 53, 81)';
        updateContent();
    }, 500)

    window.requestAnimationFrame(function() {
        card.classList.add('swipe_to_right');
  });
}

swipeLeftButton.onclick = function(){
    card.classList.remove('swipe_to_right');
    card.classList.remove('swipe_to_left');
    ourBody.style.backgroundColor = 'rgb(85, 26, 43)'
    setTimeout( () => { 
        ourBody.style.backgroundColor = 'rgb(32, 53, 81)';
        updateContent();
    }, 500)
    window.requestAnimationFrame(function() {
        card.classList.add('swipe_to_left');
  });
}

const statements = [
    {
        statement: 'Fact#1',
        correct: false
    },

    {
        statement: 'Fact#2',
        correct: false
    },

    {
        statement: 'Fact#3',
        correct: true
    }
    
]


