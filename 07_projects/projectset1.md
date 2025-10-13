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