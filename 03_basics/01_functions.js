
// function sayMyName() {
//     console.log("s");
//     console.log("u");
//     console.log("b");
//     console.log("h");
//     console.log("a");
// }
// sayMyName()

// function addTwoNums (num1, num2){
//     console.log(num1 + num2);  
// }
// addTwoNums(2, 5)
// addTwoNums(2, "5")
// addTwoNums(2, "a")

function addTwoNums (num1, num2){
    return num1 + num2  
}
const result = addTwoNums(3, 6)
// console.log("Result ", result);

function loginUserMassege(username = "sam"){
    if(username === undefined){
        console.log("plese enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMassege("subha"))
// console.log(loginUserMassege())

function calculateCartPrice(...num1){ // ... is a Rest opretor (and another use is spread operator)
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 700));

function _calculateCartPrice(val1, val2, ...num1){ 
    return num1
}
// console.log(_calculateCartPrice(200, 400, 500, 700));

// Pass Objects in Funtion
const user = {
    userName: "amit",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and Price is ${anyObject.price}`); 
}
handleObject(user)

// Pass Object directly
handleObject({
    userName: "ram",
    price: 499
})

// Pass Array in Function
const myNewArray = [30, 50, 90, 10]

function returnSecondElement (getArray){
    return getArray[1]
}
// console.log(returnSecondElement(myNewArray));

// Pass Array directly
 console.log(returnSecondElement([45, 65, 99, 23]));

