function showMenu() {
    var x = document.getElementById("itemsDiv");
    if (x.className === "nav-items") {
      x.className += " responsive";
    } else {
      x.className = "nav-items";
    }
  }