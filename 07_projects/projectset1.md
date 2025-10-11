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