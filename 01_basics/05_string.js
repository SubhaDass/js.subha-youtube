
const name = "subha"
const age = 23

console.log(`hello my name is ${name} and i am ${age} years old`);

const gameName = new String('subhas-sd-das');
console.log(gameName);

console.log(gameName[0]);
console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    rahul    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://subha.com/subha%20das";
console.log(url.replace("%20", "-"));

// pressent in string or not 
console.log(url.includes("subha"));
console.log(url.includes("subhaaa"));

console.log(gameName.split("-"));

 

