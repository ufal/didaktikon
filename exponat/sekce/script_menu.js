
// let menuitems = document.getElementById("menu-items"
let menubtn = document.getElementById("menu-btn")
let menuitems = document.getElementById("menu-items")
let hrefs = document.getElementsByClassName("menu-href")

let display = 'block'

let items = {
  deti : {href:"../AI pro deti/aiprodeti.html",text:"AI očima dětí"},
  medicina : {href:"../AI v medicine/index.html",text:"AI v medicíně"},
  pedagogika : {href:"../AI v pedagogice/first.html",text:"AI v pedagogice"},
  nabozenstvi : {href:"../nabozenstvi/first.html",text:"AI v náboženství"},
  neuroscince : {href:"",text:"AI v neurovědě"},
  divadlo : {href:"",text:"AI v kontextu divadla"},
  fyzika : {href:"",text:""}
}


function showMenu(){
  for (let i = 0; i < hrefs.length; i++) { 
    hrefs[i].href = items[i].href;
    hrefs[i].innerHTML = items[i].text;
  }
    if (menuitems.classList.contains('hide')) {
      menuitems.classList.remove('hide')
      menuitems.classList.add('show-menu')
      } else {
      
        menuitems.classList.remove('show-menu')
        menuitems.classList.add('hide')
      }
}

