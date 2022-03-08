let menubtn = document.getElementById("menu-btn")
let menuitems = document.getElementById("menu-items")


function showMenu(){
    if (menuitems.style.display == "none") {
        menuitems.style.display = "flex";
        document.getElementById("next-button").style.display="none";
        document.getElementById("prev-button").style.display="none";
        
      } else {
        menuitems.style.display = "none";
        document.getElementById("next-button").style.display="flex";
        document.getElementById("prev-button").style.display="flex";
        
      }
}