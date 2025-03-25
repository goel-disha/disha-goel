// arrays

const myarr =[0,1,2,3,4,5]
const myheros = ["shaktiman","spiderman","ironman"]
// arrays are resizable
// they are not associative 
// it creates shallow copy (creates same refernece point-change in original array too)
console.log(myarr[1]);

// array methods

//myarr.push(6)
// myarr.pop()
// myarr.push(7) 

// 

// const newarr = myarr.join()

// console.log(myarr);
// console.log(typeof newarr);

// slice,spice

console.log("a ", myarr);

const myn1 =myarr.slice(1,3)

console.log(myn1);

console.log("b",myarr);

const myn2 =myarr.splice(1,3)

console.log("c",myarr);
console.log(myn2);