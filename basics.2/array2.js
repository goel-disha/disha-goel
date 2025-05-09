const marvel_heros =["thor", "ironman", "spiderman"]
const dc = ["superman"]

marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allheros = marvel_heros.concat(dc)
// console.log(allheros);

const allnewheros = [...marvel_heros,...dc]

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherheros =anotherarray.flat(Infinity)
console.log(realanotherheros);

console.log(Array.isArray("disha"))
console.log(Array.from("disha"))
console.log(Array.from({name:"disha"})); // interesting

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));
