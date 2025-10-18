//! Operator  :  It Used to perform an operation between the operands .
//! a + b
//! a and b are operands , + is operator

//! Types of Operators

// 1.   Arithmetic Operator
// 2.   Assignment Operator
// 3.   Relational Operator
// 4.   Logical Operator
// 5.   Bitwise Operator
// 6.   Unary Operator
// 7.   Ternary Operator
// 8.   Typeof Operator
// 9.   Nullish coelscing Operator


//! 1.  Arithmetic Operator (+ , - , * , / , %)

//? ********************************  +  ***************************************

console.log(10+20);
console.log(true+false);
console.log(10 + "hi");
console.log(10 + undefined);
console.log("hi" + undefined);
console.log("hi" + false);



//? ********************************  -  ***************************************

//Number
console.log(10-10);
console.log(10-"10");
console.log("10"-"10");
console.log(10-"hi");
console.log(10-false);
console.log(10-true);
console.log(10-undefined);
console.log(10-null);

// String
console.log("hi"-10);
console.log("hi"-false);
console.log("hi"-true);
console.log("hi"-"hi");
console.log("hi"-"he;lo");
console.log("hi"-undefined);
console.log("hi"-null);

//Boolean
console.log(true-10);
console.log(true-"hi");
console.log(true-true);
console.log(true-undefined);
console.log(true-null);
console.log(true-10);

//Undefined
console.log(undefined-100);
console.log(undefined-"hi");
console.log(undefined-true);
console.log(undefined-undefined);
console.log(undefined-null);

//Null
console.log(null-10);
console.log(null-"hi");
console.log(null-true);
console.log(null-false);
console.log(null-undefined);
console.log(null-null);

//? ********************************  *  ***************************************

//Number
console.log(10 * 10);
console.log(10 * "10");
console.log("10" * "10");
console.log(10 * "hi");
console.log(10 * false);
console.log(10 *true);
console.log(10 * undefined);
console.log(10 * null);

// String
console.log("hi" * 10);
console.log("hi" * false);
console.log("hi" * true);
console.log("hi" * "hi");
console.log("hi" * "he;lo");
console.log("hi" * undefined);
console.log("hi" * null);

//Boolean
console.log(true * 10);
console.log(true * "hi");
console.log(true * true);
console.log(true * undefined);
console.log(true * null);
console.log(true * 10);

//Undefined
console.log(undefined * 100);
console.log(undefined * "hi");
console.log(undefined * true);
console.log(undefined * undefined);
console.log(undefined * null);

//Null
console.log(null * 10);
console.log(null * "hi");
console.log(null * true);
console.log(null * false);
console.log(null * undefined);
console.log(null * null);

//? ********************************  /  ***************************************

//Number
console.log(10 / 10);
console.log(10 / "10");
console.log("10" / "10");
console.log(10 / "hi");
console.log(10 / false);
console.log(10 / true);
console.log(10 / undefined);
console.log(10 / null);

// String
console.log("hi" / 10);
console.log("hi" / false);
console.log("hi" / true);
console.log("hi" / "hi");
console.log("hi" / "he;lo");
console.log("hi" / undefined);
console.log("hi" / null);

//Boolean
console.log(true / 10);
console.log(true / "hi");
console.log(true / true);
console.log(true / undefined);
console.log(true / null);
console.log(true / 10);

//Undefined
console.log(undefined / 100);
console.log(undefined / "hi");
console.log(undefined / true);
console.log(undefined / undefined);
console.log(undefined / null);

//Null
console.log(null / 10);
console.log(null / "hi");
console.log(null / true);
console.log(null / false);
console.log(null / undefined);
console.log(null / null);


// 2.   Assignment Operator (=)

let a=10;
let b=20;
let c=30;

console.log(a);
console.log(b);
console.log(c);

//! Short hand operator (+= , -= , *= , /= , %=) - combination of arithmetic and assignment operator 

a+=10;
console.log(a);  // a = a + 10 = 20

b+=10;
console.log(b);


// 3.   Relational Operator (< , > , <= , >= , == , === ,!= ,!==)
// Output is a boolean
a=10;
b=20;
c=30;
console.log(a > b > c);
console.log(a < b);
console.log(c >= b);
console.log(10 > 20);
console.log("hi" > "hello");
console.log("hi" > "hello");
console.log("100" < "50");       // 1 < 5 = true

//? ******************************** *V V I M*  Equality Operator(==) - avoid checking of datatype  ***************************************

console.log(10 == 10);
console.log(10n == "10");
console.log("hi" == "hi");
console.log("Hi" == "hi");


//? ******************************** *V V I M* Strictly Equality Operator(==) - avoid checking of datatype  *******************************

// console.log(10 === 10);         // True
// console.log(10 === "10");


// 4.   Logical Operator

//? *********************************  &&  ********************************************
// If both condition are true then it returns true.
// Input and output is boolean

console.log((10 == "10") && (undefined == "undefined") && ("hi" === "hi"));
//              t                       t                       f
//  f

//? *********************************  ||  ********************************************
// If any one  condition is true then it returns true.
// Input and output is boolean

console.log((10 == "10") || (undefined == "undefined") || ("hi" === "hi"));
//              t                       t                       f
//  t


//? *********************************  !  ********************************************
// Input and output is boolean

console.log(!true);
console.log(!false);



// 5.   Bitwise Operator ( &  ,  |)

console.log(20 & 30);
console.log(20 | 30);
console.log(120 & 50);  // 48
console.log(120 | 50);  // 122
console.log(60 & 80);   // 
console.log(60 | 80);

//? 6. Unary Operator

//! Incerement(++)
//! pre-inc(++a)  // inc by 1 and use
//! post-inc(a++) // use and inc by 1
//! Decrement(--)
//! pre-dec(++a)   // dec by 1 and use
//! post-dec(a++)  // use and dec by 1

a=10;
b=9;
console.log(a++ + ++b + ++a + b++);
console.log(a,b);

a=7;
b=9;
console.log(b++ + ++a + --a + --b - a-- + b++ + a++);
console.log(a ,b);

a=12;
b=6;
console.log(--b + --a + a-- - ++b - a-- - b-- - --a);
console.log(a ,b);

a=10;
b=6;
// console.log(a++ + b++ +)

// 7.   Ternary Operator
//! condition ? statement 1 : statement 2

a=10;
b="10";
c= (a == b);
c ? console.log("true") : console.log("false");


// 8.   Typeof Operator

console.log(typeof 100);
console.log(typeof "hi");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof typeof true);
