// for of

// 'for of' in array
let arr = [2, 5 , 8, 4, 1]
for (const num of arr) {
    // console.log(`number is ${num}`);
}

// 'for of' in strings
let wish = "happy birthday"
for(const i of wish) {
    // console.log(`wish you ${i}`);
}

// Maps
const map = new Map()
map.set("IN" , "INDIA")
map.set("SL" , "SRILANKA")
map.set("ENG" , "ENGLAND")
// console.log(map);

// 'for of' in Maps
for(const [key, val] of map){
    //console.log(key, ":-", val);
}

// 'for of' in Objects
const myObj = {
    game1: "pes",
    game2: "bgmi"
}
// for (const [key, val] of myObj) {
//     console.log(key, ":-", val);
// } ERROR