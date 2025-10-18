//! SIF/IIFE :
//! function calling itslef is known as self invoking function.
//! it executes only once.
//! Syntax :    ()()
//! we cannot store the sif in a varibale.
//! it is uesd to avoid global namespace pollution.
//! while writing SIF , the previous line of code must be terminated with ;  .

console.log("john");
(function named(a){
    console.log("named function executed");
    console.log(a);
})(10);

console.log("object");
(function(a){
    console.log("anynomous function executed");
    console.log(a);
})(20);

((a)=>{
    console.log("arrow function executed");
    console.log(a);
})(30);


// Q.1)
//? Write a self-invoking function that prints "Hello World".
// Ans :

(function(){
    console.log("Hello world");
})();

// Q.2)
//? Write a self-invoking function that takes two numbers and prints their sum.
// Ans:

(function(a,b){
    console.log(a+b);
})(5,20);

// Q.3)
//? Write a self-invoking function that prints whether a number is even or odd.
// Ans :

(function(a){
    if(a%2==0)
    {
        console.log(a + " is an even");
    }
    else{
        console.log(a + " is an odd");
    }
})(10)

// // Q.4)
// //? Write a self-invoking function that prints the first 10 natural numbers.
// // Ans :

// (function(){
//     for(let p=1;p<=10;p++)
//     {
//         console.log(p);
//     }
// })(); 