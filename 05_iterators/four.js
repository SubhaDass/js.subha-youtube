// 'for in' in objects 

const myObject = {
    js : "Javascript",
    cpp : "C++",
    py : "Python",
    rb : "Ruby"
}
for (const key in myObject) {
    console.log(key);
}
for (const key in myObject) {
    console.log(myObject[key]);
}
for (const key in myObject) {
    console.log(`${key} is shortcut of ${myObject[key]}`);
}

// 'for in' in Arrays 
const lang = ["cpp", "py", "java", "rb", "js"]

for (const key in lang) {
    console.log(key);
}
for (const key in lang) {
    console.log(lang[key]);
}

// 'for in' in Maps (Not possible)