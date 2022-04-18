let firstSection = document.getElementById('first-section')
let secondSection = document.getElementById('second-section')



function show(tlacitko) {
    firstSection.classList.add('hide')
    secondSection.classList.remove('hide')
    document.getElementById('skryte-btn').value=tlacitko
}


function submit() {

}

function showQ(id){
let par = document.getElementById(id)

par.style.display="block"
par.style.transform="scale(1,1)"
}

function unshowQ(id){
    let par = document.getElementById(id)
    
    par.style.display="block"
    par.style.transform="scale(0,1)"
    
    }
