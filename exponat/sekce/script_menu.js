
// let menuitems = document.getElementById("menu-items"
let menubtn = document.getElementById("menu-btn")
let menuitems = document.getElementById("menu-items")
let hrefs = document.getElementsByClassName("menu-href")

let display = 'block'

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

