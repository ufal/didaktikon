const [red, green, blue] = [42, 70, 78]

const section1 = document.querySelector('.section1')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 350
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})


let people = {
  'alisa': 'Design, front end',
  'vika': 'Back end',
  'misa': 'Front end, back end, design',
  'tereza': ' Sociologie/informatika, AI v kontextu sociálních věd',
  'rosa': 'Informatika, AI v kontextu divadelních her',
  'jindrich': 'Informatika, AI v kontextu přirozeného jazyka',
  'kajzar': 'Lékař, AI v medicíně',
  'nikol': 'Psycholožka, AI v psychologii',
  'frantisek': 'Teolog, AI v teologii a náboženství',
  'helena': 'Pedagožka, AI pro děti',
  'veronika': 'žurnalistka, AI v žurnalistice',
  'dita': 'AI v umění',
  'petr': 'AI v medicíně',
  'we-want-you': 'Hledáme odborníky na AI v kontextech: práva, architektury, dopravy, ekologie, ekonomie, markentigu, hudby, bezpečnosti, atd.'
}

let description = document.querySelector('.description')

Array.from(document.querySelector('.wow').children).forEach(item => {
  item.addEventListener('mouseover', event => {
    // console.log(item.id)
    description.innerHTML = ` <h5>${people[item.id]}</h5>`
    description.classList.remove('hide')
  })

  item.addEventListener('mouseout', event => {
    // console.log(item.id)
    description.classList.add('hide')

  })
})

Array.from(document.querySelector('.wow1').children).forEach(item => {
  item.addEventListener('mouseover', event => {
    // console.log(item.id)
    description.innerHTML = ` <h5>${people[item.id]}</h5>`
    description.classList.remove('hide')
  })

  item.addEventListener('mouseout', event => {
    // console.log(item.id)
    description.classList.add('hide')

  })
})

Array.from(document.querySelector('.wow2').children).forEach(item => {
  item.addEventListener('mouseover', event => {
    // console.log(item.id)
    description.innerHTML = ` <h5>${people[item.id]}</h5>`
    description.classList.remove('hide')
  })

  item.addEventListener('mouseout', event => {
    // console.log(item.id)
    description.classList.add('hide')

  })
})
