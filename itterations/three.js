// for of

// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

const greetings = "hello world"

for (const greet of greetings) {
    //  console.log(`each char is ${greet}`);
}

// maps

const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of america")

// console.log(map);

for (const [keys,value] of map) {
    console.log(keys, ':-', value);
}

const myobject ={
    'game1': 'nfs',
    'game2': 'spiderman'
}

// for (const [key,value] of myobject) {
//     console.log(key ,':-', value);
    
// } 
// this code is not working
