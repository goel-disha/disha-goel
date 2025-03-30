
function saymyname(){
console.log("d");
console.log("i");
console.log("s");
console.log("h");
console.log("a");
}

// saymyname()

// function addtwonumbers(number1, number2 ){
//       console.log(number1 + number2);  
// }

function addtwonumbers(number1, number2 ){
    // let result =  number1+number2
    return number1+number2
}

const result = addtwonumbers(3,4)

// console.log( "result:" ,result);

function loginusermessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} justloogedin`
}

// console.log(loginusermessage("disha"))

function calculatecardprice(val1,val2,...num1){
      return num1
}

// console.log(calculatecardprice(200,400,400,2000))

const user = {
    username: "disha",
    price: 200
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

console.log(handleobject(user));

handleobject({
    username: "sam",
    price: 300
})

const mynewarray = [200,400,100,600]

function returnsecondvalue(getarray){
      return getarray[1]
}

console.log(returnsecondvalue(mynewarray));

