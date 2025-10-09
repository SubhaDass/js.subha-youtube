
const user = {
    username: "subha",
    price: 999,

    welcomeMassege: function(){
        // console.log(`${this.username} , welcome to the website`); // this for current context
        // console.log(this);
        
    }
}
// user.welcomeMassege()
// user.username = "rahul"
// user.welcomeMassege()

// console.log(this);

// const chai = function (){
//     let username = "subha"
//     console.log(this.username);
// }

const chai = () => {
    let username = "subha"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return (no need to return)
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username: "subha"})

console.log(addTwo(3, 8));


