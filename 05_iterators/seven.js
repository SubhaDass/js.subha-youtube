
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const _myNums = myNums.map( (nums) => {
//     return nums + 10
// })

const _myNums = myNumbers
            .map( (num) => num * 10)
            .map( (num) => num + 1 )
            .filter( (num) => num >= 40)

console.log(_myNums);
