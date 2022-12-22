function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  const randomNumber = Math.floor(Math.random() * 10)

  console.log(inputNumber.value)
  console.log(randomNumber)
}