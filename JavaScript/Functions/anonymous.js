//! Anonymous function
//! A function without any name is known as anonymous function.
//! To call anonymous function , we have to store it in a variable.
//! using that variable , we can call the anonymous function.

//! Synatx:
// var/let/const variable = function (){
    //set of instruction....
    //return value
// }

//? function with parameters with return statement.

let mult = function (a,b){
    return a*b;
}
let rv1=mult(10 ,20);
console.log(rv1);

//? function without parameters with return statement.
