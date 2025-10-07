const marvel = ["thor", "hulk", "ironman"]
const dc = ["superman", "batman", "joker"]

// marvel.push(dc);

// console.log(marvel);
// console.log(marvel[3][2]);

// const allHeros = marvel.concat(dc)
// console.log(allHeros);

const allNewHeros = [...marvel, ...dc] // spread operation 
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_Array = anotherArray.flat(Infinity) // infinity denotes the depth of the array 
console.log(real_Array);

// string to array 
console.log(Array.isArray("subha"));
console.log(Array.from("subha"));

console.log(Array.from({name: "subha"})); // intersting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
