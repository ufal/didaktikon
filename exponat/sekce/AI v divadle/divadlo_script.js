let vyhodnoceni = document.getElementById("vyhodnoceni")
let formular = document.getElementById("form") 

function check(vystup){
    if(vystup=="A"){ /*správně*/
        vyhodnoceni.innerHTML="Výborně :)"
        vyhodnoceni.style.color = "rgb(161, 211, 100)"

    }
    else if(vystup=="B"){
        vyhodnoceni.innerHTML="Bohužel :("
        vyhodnoceni.style.color="rgb(230, 101, 101)"
    }
    document.getElementById("pie-chart").style.display="block"
    formular.submit()
}

let btns = document.getElementsByClassName("btn")
btns[0].addEventListener("click", () => {
 
    // Fetching Button value
    let btnValue = btns[0].value;
 
    // jQuery Ajax Post Request
    $.post('action.php', {
        btnValue: btnValue
    }, (response) => {
        // response from PHP back-end
        console.log(response);
    });
});

btns[1].addEventListener("click", () => {
 
    // Fetching Button value
    let btnValue = btns[1].value;
 
    // jQuery Ajax Post Request
    $.post('action.php', {
        btnValue: btnValue
    }, (response) => {
        // response from PHP back-end
        console.log(response);
    });
});