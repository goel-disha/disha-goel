
if(true){
    let a =10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "disha"

    function two(){
        const website = "youtube"
        console.log(username);
        }
        // console.log(website);
        
        two()
}

// one()

if (true){
    const username = "disha"
    if(username=== "disha"){
        const website = "youtube"
        // console.log(username+website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// ********************* interesting *****************

// console.log(addone(5)); // in this way u can use it 

function addone(value){
    return value+1
}

// console.log(addone(5));

addtwo(5) // this syntax is wrong u can not use it before decleration !

const addtwo = function(num){
    return num+2
}

// console.log(addtwo(5));