//! Scope : -   It  is the place or the area where the variable can be accessed.
//! var has global scope
//! let and const have loacal scope 
//! if we decalre a variable with var keyword inside any block (except function) , then we can access it outside the block also.
//if we declare a variable with let . const keyword inside any block , then we cannot access it outside the block.

//? ************************************  Example 1 *****************************************

// if we declare the variable outisde the block then it can be accessed throughout the program.
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a,b,c);
// }
// console.log(a);         //10
// console.log(b);      // Error
// console.log(c);      // Error

//? *********************************** Example 2 ********************************************

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a,b,c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

//? *********************************** Example 3 *********************************************

// We can have two variables with same name in different scope (same scope not possible ).
// In such cases ,
// If we try to access locally , first prefernce is given to local varibale .
// if we try to access globally , first preference is given to global varibales .

// var a=10;
// let b=20;
// const c=30;
// console.log(a,b,c);  // 10 20 30 
// {
//     var a=100;
//     let b=200;
//     const c=300;
//     console.log(a,b,c);  // 100 200 300
// }
 
// console.log(a,b,c);  // 100 20 30

//? **************************************** Example 3 **********************************************

// var a=10;
// console.log(a);     // 10
// {
//     let b=20;
//     console.log(a,b,c); // 10 20 Error
//     {
//         const c=30;
//         console.log(a,b,c); // 10 20 30
//     }
//     console.log(a,b,c);     // 10 20 Error
// }
// console.log(a,b,c);         // 10 Erro Error 


//? **************************************** Example 4 **********************************************


// console.log(a);     // Undefined
// console.log(b);    //  Error
// console.log(c);    //  Error
// var a=10;
// console.log(a);     // 10 
// console.log(b);     // Error
// console.log(c);     // Error
// let b=20;
// console.log(a);     // 10
// console.log(b);    //  20
// console.log(c);     // Error
// {
//     console.log(a);     // 10 
//     console.log(b);     // 20
//     console.log(c);     // Error
//     const c=30;
//     console.log(a);     // 10 
//     console.log(b);     // 20
//     console.log(c);     // 30
// }
// console.log(a);     // 10
// console.log(b);     // 20 
// console.log(c);     // Error

//? **************************************** Example 5 **********************************************

console.log(a);     // Undefined
// console.log(b);  // Error
// console.log(c);  // Error
{
    console.log(a);  // Undefined
    // console.log(b);  // Error
    // console.log(c);  // Error
    var a=10;
    let b=20;
    const c=30;
    console.log(a);     // 10
    console.log(b);     // 20
    console.log(c);     // 30
}
console.log(a);      // 10
// console.log(b);  // Error
// console.log(c);  // Error