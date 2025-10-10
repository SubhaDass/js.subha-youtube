
const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce( function (acc, currVal) {
//     console.log(`accumulator = ${acc} , current value = ${currVal}`);
//     return acc + currVal 
// }, 0)  // '0' is acuumulator initialization
// console.log(myTotal);

// const myTotal = myNums.reduce( (acc, curVal) => acc + curVal, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "dsa course",
        price: 1999
    },
    {
        itemName: "web dev course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 4999
    },
    {
        itemName: "data science course",
        price: 9999
    }
]

const myTotal = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(myTotal);
