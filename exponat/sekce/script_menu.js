
// let menuitems = document.getElementById("menu-items"
let menubtn = document.getElementById("menu-btn")
let menuitems = document.getElementById("menu-items")

let display = 'block'



function showMenu(){
    if (menuitems.classList.contains('hide')) {
      menuitems.classList.remove('hide')
      menuitems.classList.add('show-menu')
      } else {
      
        menuitems.classList.remove('show-menu')
        menuitems.classList.add('hide')
      }
}