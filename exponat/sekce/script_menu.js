
// let menuitems = document.getElementById("menu-items"
let menubtn = document.getElementById("menu-btn")
let menuitems = document.getElementById("menu-items")
let hrefs = document.getElementsByClassName("menu-href")

let display = 'block'

let odkazy = [["../AI pro deti/aiprodeti.html","AI očima dětí"],
              ["../AI v medicine/index.html","AI v medicíně"],
              ["../AI v pedagogice/first.html","AI v pedagogice"],
              ["../nabozenstvi/first.html","AI v náboženství"],
              ["","AI v neurovědě"],
              ["","AI v kontextu divadla"],
              ["","AI ve fyzice"],
              ["","Milníky AI"],
              ["","AI v psychologii"]
            ]


function showMenu(){
  for (let i = 0; i < hrefs.length; i++) { 
    hrefs[i].href = odkazy[i][0];
    hrefs[i].innerHTML = odkazy[i][1];
  }
    if (menuitems.classList.contains('hide')) {
      menuitems.classList.remove('hide')
      menuitems.classList.add('show-menu')
      } else {
      
        menuitems.classList.remove('show-menu')
        menuitems.classList.add('hide')
      }
}

