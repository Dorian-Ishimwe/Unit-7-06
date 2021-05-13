const myAge = 15
let userInput = 0
document.getElementById('button').addEventListener('click', gameAge)

function gameAge () {
  userInput = document.getElementById('age').value
  userInput = parseInt(userInput)
  while (userInput === myAge) {
    userInput = prompt('guess my age')
    if (userInput === myAge) {
      document.getElementById('answer').innerHTML = 'You are right'
    } else {
      if (userInput < myAge) {
        document.getElemenyById('answer').innerHTML = 'answer is too small'
      } else {
        if (userInput > myAge) {
          document.getElementById('answer').innerHTML = 'answer is too big'
        } else {
          document.getElemenyById('answer').innerHTML = 'invalid answer'
        }
      }
    }
  }
}
