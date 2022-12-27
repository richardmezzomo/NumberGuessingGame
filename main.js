// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2= document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.floor(Math.random() * 10)

let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keydownReset)

// Functions
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector('.text-result').innerHTML = `Got it right in ${xAttempts} tries! `
  }
  inputNumber.value = ""
  xAttempts++ 
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.floor(Math.random() * 10)
} 

function toggleScreen() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
}

function keydownReset(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}