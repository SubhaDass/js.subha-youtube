// var c = 300
let a = 200
if(true){
    let a = 20
    const b = 30
    // console.log("INNER", a);
    
}
// console.log(a);
// console.log(a);
// console.log(b);

function one() {
    const username = "subha"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
one()

if(true){
    const username = "subha"
    if(username === "subha"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// *************************************************

console.log(add_one(5))
function add_one(num){
    return num + 1
}

const add_two = function(num){
    return num + 2
}
