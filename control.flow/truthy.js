const useremail = ""

if (useremail){
    console.log("go to user email");
}else{
    console.log("dont got the email");   
}

// false values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(useremail.length===0){
//     console.log("array is emplty");   
// }

const emptyobj = {}

if(Object.keys(emptyobj).length===0){
    console.log("a");  
}

// nullish coalescing operator (??): null undefined *

let vall;
// vall = 5 ?? 10
vall = null??10

console.log(vall); 

// terniary operator

// condition ? true: false

const price =100

price<80 ? console.log("less than 80") : console.log("more than 80");


