let firstSection = document.getElementById('first-section')

function submit() {

}
function show(tlacitko) {
    firstSection.classList.add('hide')
    document.getElementById('skryte-btn').value=tlacitko
    document.getElementById("form-chatbot").submit(); 
}
