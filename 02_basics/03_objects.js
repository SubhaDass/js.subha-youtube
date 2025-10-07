// singleton 
// Object.create

// objects literals

const mySym = Symbol("key1")

const jsUser = {
    name: "subha",
    "full name": "subha das",
    [mySym]: "myKey1", // syntax for symbol in a object
    age: 23,
    location: "kolkata",
    email: "subha123@gmail.com",
    isLoggedIn: false,
    loginDays: ["monday", "sunday", "friday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "subha999@gmail.com"
//console.log(jsUser.email);


//Object.freeze(jsUser)
jsUser.email = "ssssubha9999999@gmail.com"
//console.log(jsUser);

jsUser.greeting = function(){
    return "Hello JS user"; // console.log("Hello JS user");
    // use return for avoiding undifined in output
    
}
jsUser.greetingTwo = function(){
    return `Hello JS user, ${this.name}`;
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
