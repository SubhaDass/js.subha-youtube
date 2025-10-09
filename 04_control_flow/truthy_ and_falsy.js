
// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
// which is not falsy all are truthy and 
// "0", "false", " ", [], {}, function(){}

const userEmail = []

// check array is empty or not 
if(userEmail.length === 0){
    console.log("array is empty");
}

const emptyObject = {}

// check object is empty or not
if (Object.keys(emptyObject).length === 0) { // Object.keys(emptyObject) is convert object into array
    console.log("object is empty");
}

// Nullish Coalescing Operator (??) : null , undefined
// basically its call Null sefty
let val;
// val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 20
val = null ?? 30 ?? 50

console.log(val);

// Ternary Operator
// condition ? true : false (syntax)
const coffePrice = 150
coffePrice <= 100 ? console.log("budget friendly") : console.log("costly");


