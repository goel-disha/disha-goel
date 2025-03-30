// immediately invoked function expression (IIFE)


(function chai(){
    // named IIFE
    console.log(`db connected`);  
})();

// to remove global scope pollution (like variables) we use IIFE 

((name) => {
    console.log(`db connected ${name}`);
}) (`disha`); // un named IIFE 