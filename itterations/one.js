// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
} 

for (let i = 0; i < 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        //  console.log(`inner loop value ${j} and outer loop value ${i}`);
        //  console.log(i + '*' + j + '='+ i*j);   
    }
    
}

let myarray = ["flash", "batman", "superman"]
console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
    // const element = myarray[i];
    console.log(myarray[i]);
    
}

// break and continue

for (let m = 0; m < 20; m++) {
    if (m==5) {
        // console.log(`detected 5`);
        continue
    }
//    console.log(`value of m is ${m}`);
    
}