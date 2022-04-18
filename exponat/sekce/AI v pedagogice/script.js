let firstSection = document.getElementById('first-section')
let secondSection = document.getElementById('second-section')
let firstSection2 = document.getElementById('first-section2')
let secondSection2 = document.getElementById('second-section2')



function show(tlacitko) {
    firstSection.classList.add('hide')
    secondSection.classList.remove('hide')
    document.getElementById('skryte-btn').value=tlacitko
}
function show2(tlactiko) {
    firstSection2.classList.add('hide')
    secondSection2.classList.remove('hide')
    document.getElementById('skryte-btn2').value=tlacitko
}


function submit() {

}


