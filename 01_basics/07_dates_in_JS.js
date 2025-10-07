// Dates 

let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString)
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toJSON())
// console.log(myDate.toUTCString())

// let myCreatedDate = new Date(2025, 9, 7)
// let myCreatedDate = new Date(2025, 9, 7, 6, 3)
// let myCreatedDate = new Date("2025-10-07")
let myCreatedDate = new Date("10-07-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // new Date()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // convert to second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString("default", {
    weekday: "long"
})