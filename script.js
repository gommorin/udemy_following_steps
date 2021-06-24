const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  console.log(currentActive) // --> para comprobar que el evento llega hasta el límite de la longitud de los círculos

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  // este método activa los círculos según avancemos el índice con cada click en el botón next
  circles.forEach((circle, idx) => { // hacer un barrido de todos los circulos usando variable (circle) y el index (idx)
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  // para comprobar y mostrar cuántos círculos activos hay y cuántos círculos son en total
  console.log(actives.length, circles.length)
  console.log(actives.length / circles.length)

  // con esto vamos a alargar la línea según la proporción de los círculos
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  // para habilitar y deshabilitar los botónes según el avance
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}