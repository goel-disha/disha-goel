const user = {
    username: "disha",
    price: 999,

    welcomemessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username = "disha"
//     console.log(this.username);
// }

// const chai = function(){
    // let username = "disha"
//     console.log(this.username);    
// }

// const chai = () => {
//     let username = "disha"
//    console.log(this);
// }

// chai()

// const addtwo = (num1,num2) => {
//     return num1+num2
// } // explicit return !

// const addtwo = (num1,num2) => num1+num2

// const addtwo = (num1,num2) => (num1+num2) // implicit return

const addtwo = (num1,num2) => ({username: "disha"})

console.log(addtwo(3,4));


// const myarray = [1,2,3,4,5]

// myarray.forEach(() => ())