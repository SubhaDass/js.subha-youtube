
const score = 300
console.log(score)

const balance = new Number(400)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const num = 223.8956
console.log(num.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));

//*********************** Maths **************************/

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(6.6));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.9));

console.log(Math.min(3, 6, 7, 9));
console.log(Math.max(3, 6, 7, 9));

// output value is between 0 to 1
console.log(Math.random());
// 1 to 10 and +1 becouse avoid 0
console.log(Math.floor(Math.random()*10) + 1);

const min = 30
const max = 50

// +1 for avoiding zero & +min becouse of minimum range of the output 
console.log(Math.floor(Math.random() * (max - min + 1) + min))

