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
        contentContainer.innerHTML = '<p>Kartičky došly!</p><form class="align"><button class="btn" type="button" onclick="window.location.reload()"><svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px"><path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"/></svg></button></form>'

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


