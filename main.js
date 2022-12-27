// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2= document.querySelector('.screen2')
const randomNumber = Math.floor(Math.random() * 10)
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let xAttempts = 1

// Function call back
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) === randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector('.text-result').innerHTML = `Got it right in ${xAttempts} tries! `
  }
  inputNumber.value = ""
  xAttempts++ 
}

function handleResetClick() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')

  xAttempts = 1
} 

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
