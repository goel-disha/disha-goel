"use strict ";// treat all js code as newer version

// alert(3+4) // we are using node js not browser

console.log(3+3)

console.log("disha")

let name ="disha"
let age = 18;
let isloogedin = false
let state;

// number=> 2 to powe of 53
// bigint 
// string => ""
// boolean => true/false
// null => standalone value 
// undefined => no value defined 
// symbol => uniqueness

// object

console.log(typeof "disha");

console.log(typeof null); // obejct

// primitive

// 7 types: string,number,boolean,null,undefined,symbol,BigInt

const score=100
const scorevalue=100.3

const isloggedin =false
const outsidetemp =null
let useremail;

const id =Symbol('123')
const anotherid = Symbol('123')

const bignumber = 25475246532654n


// reference(non primitive)
// array,objects,funtions 

const heros =["shaktiman","naagraj","doga"]
let myobj ={
    name: "disha",
    age: 22,
}

const myfunction = function(){
    console.assertlog("hello world");
}

console.log(typeof bignumber);

// ******************************
// stack(primitive), heap(non-primitive)

let myname = "dishagoel"

let anothername = myname

anothername="priyanshi"

console.log(anothername);
console.log(myname);

let user ={
    email : "user@google.com",
    upi: "user@ybl"
}

let usertwo =user



console.log(user.email);
console.log(usertwo.email);