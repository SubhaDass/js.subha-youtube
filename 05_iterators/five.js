// For Each

const coding = ["js" , "cpp", "ruby", "python", "java"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe (item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

// 'for each' in  a array with objects
const myCoding = [
    {
        langName : "Javascript",
        langFileNmae : "js"
    },
    {
        langName : "C++",
        langFileNmae : "cpp"
    },
    {
        langName : "Python",
        langFileNmae : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})