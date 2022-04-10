let buttons = document.getElementsByClassName("bubble")

let odkazy = [["../Milniky v AI/milniky_prvni_stranka.html","Milníky AI"],              
              ["../AI pro deti/deti_index.html","AI očima dětí"],
              ["../AI v medicine/medicina_index.html","AI v medicíně"],
              ["../AI v pedagogice/pedagogika_first.html","AI v pedagogice"],
              ["../nabozenstvi/nabozenstvi_first.html","AI v náboženství"],
              ["../AI v divadle/divadlo_index.html","AI v kontextu divadla"],
              ["../AI ve fyzice/fyzika_1_stranka.html","AI ve fyzice"],
              ["../neuroscience/neuroscience_index.html","AI v neurovědě (ve fázi příprav)"],
              ["../psychologie/psychologie_index.html","AI v psychologii (ve fázi příprav)"]        
            ]

for (let i = 0; i < buttons.length; i++) {
    buttons.onclick = "location.href='google.com';";
    } 


// let bubbleElement = document.getElementById('test')
// let answerButtonsElement = document.getElementById('bubbles_container')

// const requestAnimationFrame = window.requestAnimationFrame



// function randomColor() {
//     return 'rgb(' + getRandomInt(20, 256) + ',' + getRandomInt(20, 256) + ',' + getRandomInt(20, 256)+ ')'

// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//   }

// setInterval(myTimer, 5000);



// function myTimer() {
//   console.log(randomColor())
//   Array.from(answerButtonsElement.children).forEach(button => {
//     button.style.backgroundColor = randomColor();
//   })
// }
// myTimer();