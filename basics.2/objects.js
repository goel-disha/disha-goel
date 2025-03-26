// singleton
// constructor se singleton banta hai

// object literals

const jsuser = {
    name: "disha",
    age: 18,
    location: "jaipur",
    email: "disha@google.com",
    isloogedin: false
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);

// const tinderuser = new Object() // singleton
const tinderuser ={} // non singletom 

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

// console.log(tinderuser);

const regularuser  ={
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "disha",
            lastname: "goel"
        }
    }
}

console.log(regularuser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1,...obj2} // most used syntax 
// console.log(obj3);

// object assign is a static method.

// expected output: object{a:1,b:2,c:3}
// returnedtarget ===target

const users = [
    {
        id: 1,
        email: "d2@gmail.com"
    },
    {
        id: 1,
        email: "d2@gmail.com"
    },
    {
        id: 1,
        email: "d2@gmail.com"
    },
    {
        id: 1,
        email: "d2@gmail.com"
    },
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


const course = {
    coursename: "js in hindi",
    courseprice: "999",
    courseinstructor: "disha"
}

// course.courseinstructor

const{courseinstructor :instructor}= course

console.log(instructor);

// {
//     "name": "disha",
//     "coursename": "js in hindi",
//     "price": "free"
// }