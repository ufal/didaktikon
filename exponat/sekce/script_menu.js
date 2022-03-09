
// let menuitems = document.getElementById("menu-items")


// function showMenu(){
//     if (menuitems.style.display == "none") {
//         menuitems.style.display = "fixed";
//       } else {
//         menuitems.style.display = "none";
//       }
// }

let menubtn = document.getElementById("menu-btn")
let menuitems = document.getElementById("menu-items")
// let bar = document.getElementById("bar")
var x = window.matchMedia("(max-width: 500px)")

let display = 'fixed'



function showMenu(){
    if (menuitems.style.display == "none") {
        menuitems.style.display = display;

      } else {
        menuitems.style.display = "none";
        if(x.matches){
  
        }
        else {
 
        }
        
      }
}