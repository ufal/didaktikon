let menubtn = document.getElementById("menu-btn")
let menuitems = document.getElementById("menu-items")
let bar = document.getElementById("bar")
var x = window.matchMedia("(max-width: 500px)")
if(menuitems.style.display == "none"){
  if(x.matches){
    bar.style.display="block";
  }
  else{
    bar.style.display="flex";
  }
}


function showMenu(){
    if (menuitems.style.display == "none") {
        menuitems.style.display = "flex";
        bar.style.display="none";
      } else {
        menuitems.style.display = "none";
        if(x.matches){
          bar.style.display="block";
        }
        else{
          bar.style.display="flex";
        }
        
      }
}