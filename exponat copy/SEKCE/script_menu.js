
let menuitems = document.getElementById("menu-items")


function showMenu(){
    if (menuitems.style.display == "none") {
        menuitems.style.display = "flex";
      } else {
        menuitems.style.display = "none";
      }
}