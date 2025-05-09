const name = "disha"
const repocount = 50

// console.log(name+ repocount +"value");
// this syntax is not recommended 

const gamename = new String('disha goel')

console.log(`hello my name is ${name} and my repo is ${repocount}`);


// console.log(gamename[0]);
// console.log(gamename._proto_);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('i'));

const newstring = gamename.substring(0,4)
// you can not give negative value in this string it will ignore that values

console.log(newstring);

const anothrstring = gamename.slice(-8,4)
console.log(anothrstring);

const newstringone = "   disha   "
console.log(newstringone);
console.log(newstringone.trim());
// trim delete all the spaces present in the string

const url = "https://disha.com/disha%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(gamename.split(' '));
