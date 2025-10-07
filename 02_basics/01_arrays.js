// Array in javascript

// array is a object.
// in js arrays are resizeble.
// diffrent datatype possible.
// js array-copy operations create shallow copies.(share the same reference)

const myArr = [2, 4, 6, 8, 3]
// console.log( myArr[0]);

const animal = ["dog", "goat", "cat", "tiger"]
const myArr2 = new Array(3, 4, 5, 11, 8)
// console.log(myArr2[3]);

// myArr.push(23)
// myArr.push(45)
// myArr.pop()

// like push and pop
// myArr.unshift(99)
// myArr.shift()

// console.log(myArr.includes(88));
// console.log(myArr.indexOf(6));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

console.log("A", myArr);

const myN1 = myArr.slice(1, 3)
console.log(myN1);

console.log("B", myArr);

const myN2 = myArr.splice(1, 3)
console.log(myN2);

console.log("C", myArr);






