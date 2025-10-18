//! callback function : The function which is passed as an argument to another function is known as callback function.

//! HOF  - The function which is accepting another function as an arguments is known as Higher Order Function.
//!                                             OR
//! HOF -  The function which is accepting callback function is known as higher order function.
//! The advantage of callback and HOF is to perform a generic task.


function add(a,callback){
    console.log(a+callback());
}
add(10,()=>{
    return 20;
});

// **************************************************************************************************************
// Q.2)

//? Make a function calculate that will take two numbers and one callback. The callback will perform the work of:
//? finding the sum
//? finding the product
//? finding the difference

//Ans :

function calculate(a,b,callback)
{
    return callback(a,b);
}

function add(a,b)
{
    return a+b;
}

function product(a,b)
{
    return a*b;
}

function sub(a,b)
{
    return a-b;
}

console.log("sum " + calculate(10 , 20 ,add));
console.log("sub " + calculate(10 , 20 ,sub));
console.log("multiply " + calculate(10 , 20 ,product));

// *******************************************************************************************************
// Q.2)
//? Ek function banao checkAge jo user ki age lega aur callback ko result bhejega:
//? agar age < 18 → "Not eligible"
//? agar age >= 18 → "Eligible"

//Ans :

function checkAge(age , callback)
{
     callback(age);
}

function age(age)
{
    if(age<18)
    {
        console.log("Not eligible");
    }
    else{
        console.log("Eligible");
    }
}
checkAge(30,age);

// Q.3)
//? Ek function banao greet jo user ka naam lega aur callback se alag-alag greeting messages print kare (Good Morning, Good Evening, etc.).

//Ans :

function greet(name,callback)
{
    callback(name);
}

function greeting(name)
{
    console.log(name + " Good morning");
}

greet("karan" , greeting);

// Q.4)
//? Ek function banao isEven jo ek number lega aur callback ko true/false return kare.

// Ans :
 
function isEven(a , callback)
{
    return callback(a);
}

function checkEvenorNot(a)
{
    if(a%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(20 , checkEvenorNot));