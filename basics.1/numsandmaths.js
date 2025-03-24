const score =400
// console.log(score);

const balance = new Number(100)
console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const othernumber = 23.8966

console.log(othernumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// *************************maths***********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // ceil will round off every point value to its next value
// console.log(Math.floor(4.9)); // floor will convert every point value to its preceding value

// console.log(Math.min(4,5,3,0));
// console.log(Math.max(4,5,3,0));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max =20

console.log(Math.floor(Math.random()*(max-min+1))+min)