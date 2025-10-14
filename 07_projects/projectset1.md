# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution code

## Project 1

```javascript 

console.log("subha")
const _button = document.querySelectorAll('.button')
const _body = document.querySelector('body')

_button.forEach( (button) => {
    console.log(button);
    button.addEventListener('click', function (e){
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'grey'){
      _body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      _body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      _body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      _body.style.backgroundColor = e.target.id
    }
    })
});


```

## Project 2

```javascript

const form = document.querySelector('form')
form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === "" || height < 0 || isNaN(height)) {
      results.innerHTML = `Please enter a valid Height ${height}`
    } 
    else if(weight === "" || weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please enter a valid Weight ${weight}`
    }
    else {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters))
.toFixed(2);
      // show the result
      results.innerHTML = `<span>${bmi}</span>`

    let message = "";
    let className = "";
    if (bmi < 18.6) {
      message = `Under Weight`;
      className = '_underWeight'
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = `Normal Weight`;
      className = '_normalWeight'
    } else {
      message = `Overweight`;
      className = '_overWeight'
    }

    results.innerHTML = `Your BMI is <strong>${bmi}</strong><br> <span class = "${className}" >${message}</span>`;
  }
})

```

## Project 3

```javascript

const clock = document.getElementById('clock')
// document.querySelector('clock')

// setInterval is for runs a method in every moment (costomizable)
setInterval( () => {
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```

## Project 4

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numberOfGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numberOfGuesses === 11) {
      cleanUpGuess(guess);
      displayMessage(`Game Over. Number was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Won!!,You gusseed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too high`);
  }
}
function cleanUpGuess(guess) {
  // clean up
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numberOfGuesses++;
  remaining.innerHTML = `${11 - numberOfGuesses}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (e){
  randomNumber = parseInt(Math.random() * 100 + 1)
  prevGuess = []
  numberOfGuesses = 1
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${11 - numberOfGuesses}`
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame = true
  })
}

```