
// premitive
// 7 types: number, string, bool, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 98.7
const name = "subhaa"
const isLoggedIn = false
const outSideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id === anotherId);

const bigNumber = 8987879231311n


// non-premitive (reference)
// 3 types: array, object, function

const animals = ["dog", "cat", "tiger"]

let myOdj = {
    name : "subha",
    age : 23,
}

const myFunction = function(){
    console.log("hello subha");
}

console.log(typeof myFunction)