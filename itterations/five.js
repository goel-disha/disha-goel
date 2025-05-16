const coding =["js", "ruby","java","python","c++"]

//  coding.forEach( function (item) {
//     console.log(item);
//  } )

coding.forEach( (item) =>{
    // console.log(item);
    
} )

function printme(item){
    // console.log(item);
}

// coding.forEach(printme)

const values =coding.forEach((item) => {
    // console.log(item);
    return item
}
)
console.log(values);
