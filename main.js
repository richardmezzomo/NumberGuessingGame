const randomNumber = Math.floor(Math.random() * 10)
let xAttempts = 1

function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value ) == randomNumber) {
    document.querySelector('.screen1').classList.add('hide')
    document.querySelector('.screen2').classList.remove('hide')

    document.querySelector('.text-result').innerHTML = `Got it right in ${xAttempts} tries! `
  }
  xAttempts++ 

}