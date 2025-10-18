//! Function : Set of instruction / block of code used to perform a specific task and an action.  
//! advantages of function is code reuseabilty.
//! Types of functions like : 
//! 1. Named / general / noraml / function decalaration
//! 2. anonymous function
//! 3. Arrow function //* function expression
//! 4. first class function
//! 5. SIF (Self invoking function) / IIFE (Innediately invoking fun expression)
//! 6. Callback function
//! 7. HOF (Higer Order function)
//! 8. Nested function
//! 9. Generator function


//! 1. Named
//! Parameters : Variable which are decleared in the function declaration.
//! To declare parameter we no need to mention any Data Type or keywords (let / const / var) 

//! Return statemnt : Used  to return a vlaue back to the fun calling statement.
//! functions can return any type of value in it.
//! return keyword will stop execution of function.
//! after return statement if we write anu code it will not get executed.
//! if we dont write return statement then it will be added implicitly  and returns undefined.
//! Parameters have local scope (can be accessed only inside the function)

//! Arguments : Values which are passed from the fun calling statement
//! 


//! Note :
//! Without calling 

//? ***************  function with parameters and without return statement.  ****************************

function add(a=0 , b=0)
{
    console.log(a+b);
}
add(1,2);
add(1,2,3,4,5);
add(10,20);
add();

//? **************   function without parameters and with return statement .    **************************

function printName()
{
    return "johan";     //* We can give boolean values also.  (true / false)
}
console.log(printName());
console.log(printName());


//? **************  function without parameters and without return statement .  ***************************

function sayHi()
{
    console.log("Hi");
}
sayHi();

//? ************** function with parameters and with return statement .      ****************************

//? WAF to return the double value of given number

function double(num)
{
    return num*2;
}
console.log(double(10));


function print(from , to)
{
    for(let i=from;i<=to; i++)
    {
        console.log(i);
    }
}
print(1,10);


largestOf3(10 , 20 ,30);

function largestOf3(a , b , c)
{
    if(a>b&&b>c)
    {
        console.log(a);
    }
    else{
        if(b>c)
        {
            console.log(b);
        }
        else
        {
            console.log(c);
        }
    }
}

// power(2,5);
// function power(a,b)
// {
//     for(i=1,i<=b;i++)
//     {
//         console.log(a*b)
//     }
// }





//! 3. Arrow function //* function expression

let x=()=>{
    console.log("Arrow function");
}
x();
x=(a)=>{
    return a+10;
}
let y=x(20);
console.log(y);