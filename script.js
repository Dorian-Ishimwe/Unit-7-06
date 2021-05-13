var myAge = 15
let guess = 0
document.getElementById('enter').addEventListener('click', findAge)

function findAge () { {
    myAge = document.getElementById('age').value
    guess = parseInt(myAge)
  if (myAge = guess) {
     document.getElementById('answer').innerHTML = 'You got it right!'
    } else if (guess < myAge); {
     document.getElementById('answer').innerHTML = 'Your guess is too small, try again'
    } else (guess < myAge); {
     document.getElementById('answer').innerHTML = 'Your guess is too big, try again'
   } 
  }
}

