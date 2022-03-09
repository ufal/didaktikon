// click a button > hide existing image and show another one
// click a button > onclic - pass event target 
//click > expand content pictur rstyqnut na ves ekran

let gallery = {
    '5C003': {'first': '5C003_first', 'second': '5C003_second', 'button': 'button_5C003', 'expand': 'expand_5C003'},
    '2010': {'first': 'first_2010', 'second': 'second_2010', 'button': 'button_2010', 'expand': 'expand_2010'},
    '11': {'first': 'first_11', 'second': 'second_11', 'button': 'button_11', 'expand': 'expand_11'}

}

let cardObject;
let firstCard;
let secondCard;
let turnButton;
let expandButton;

let galleryElem = document.getElementById('gallery')
console.log(galleryElem)

let cover = document.querySelector('.cover_gallery')

cover.addEventListener('click', function(){
    cover.style.display='none'
    cover.innerHTML = ''
})


Array.from(galleryElem.children, (picture) => {
    
    console.log(picture.id, 'hi')

    expandButton = document.getElementById(gallery[picture.id]['expand'])

    expandButton.addEventListener('click', function handler(e) {

        cover.style.display='flex'
        cover.innerHTML= `<div> <img src='${e.target.dataset.img}'> <h3>Click enywhere to return</h3></div>`
    
    })
   
    document.getElementById(gallery[picture.id]['button']).addEventListener('click', 
    
    function helloworld(e) {
        // console.log(e.target.dataset.num)
        cardObject = document.getElementById(e.target.dataset.num)
        firstCard = document.getElementById(gallery[e.target.dataset.num]['first'])
        secondCard = document.getElementById(gallery[e.target.dataset.num]['second'])
        turnButton = document.getElementById(gallery[e.target.dataset.num]['button'])
        expandButton = document.getElementById(gallery[e.target.dataset.num]['expand'])

        if (firstCard.classList.contains('hide')) {

            setTimeout(() => {
                firstCard.classList.remove('hide')
                secondCard.classList.add('hide')
                expandButton.style.display='none'
            }, 500);


            window.requestAnimationFrame(function() {
                cardObject.classList.add('turning_animation');
            })
            cardObject.classList.remove('turning_animation');


        } else { 


            setTimeout(() => {
                firstCard.classList.add('hide')
                secondCard.classList.remove('hide')
                expandButton.style.display='block'
          
            }, 500);

    
            window.requestAnimationFrame(function() {
                cardObject.classList.add('turning_animation');
            })
            cardObject.classList.remove('turning_animation');

        }


    })


})
