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
  'tereza': ' Sociology/informatics, AI in the context of social sciences',
  'rosa': 'Informatics, in the context of plays',
  'jindrich': 'Informatics, AI in the context of natural language',
  'kajzar': 'Doctor, AI in medicine',
  'nikol': 'Psychologist, AI in psychology',
  'frantisek': 'Theologian, AI in theology and religion',
  'helena': 'Teacher, AI for children',
  'veronika':'journalist, AI in journalism'
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