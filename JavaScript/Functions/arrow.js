//! Arrow function
//! Arrow function doesn't have any function name and function keyword also.
//! It is having very easy and simple synatx.
//! Arrow function is introduced in ES- 6 version.
//! To call arrow function , we have to store it in a variable.
//! using that variable , we can call the arrow function.
//! Synatx :  () => {}
//! if we have 0 parameters the , instead of () we can use _.                   Syntax:   => {}
//! if we have 1 parameter , () are optional.                                   Syntax:   a => {}
//! if there is only return statement , return keyword and {} are optional .    Syntax:   a => a

let arrfun1= () => {
    console.log("arr fun is executed");
}
arrfun1();
console.log(arrfun1);
console.log(typeof arrfun1);

let demo = a => {
    console.log(a);
}
demo(10);
demo("hi");
console.log(demo);
console.log(typeof demo);

// Q.1)
//? Write an arrow function add that takes two numbers and returns their sum.

// Ans :

let x=(a ,b)=>{
    return a+b;
}

// y=x(10,5);
console.log(x(10,10));

// Q.2)
//? Write an arrow function square that takes a number and returns its square.

// Ans :

let square=(a)=>{
    return a*a;
}

console.log(square(6));


// Q.3)
//? Write an arrow function isEven that checks whether a number is even or odd.
// Ans :

isEven=(a)=>{
    if(a%2==0)
    {
        console.log(a + " is a even");
    }
    else{
        console.log(a + " is an odd");
    }
}

isEven(6);

// Q.4)
//? Write an arrow function maxOfTwo that returns the maximum of two numbers.
// Ans :

let maxOfTwo=(a,b)=>{
    if(a>b)
    {
        return max;
    }
    else{
        return min;
    }
}

console.log(maxOfTwo(10 ,20));

