//! Generator function : 

function* demo()
{
    console.log("hello");
    yield 100;
    console.log("hi");
    yield 200;
    console.log("third");
    yield 300;
}

let x=demo();
console.log(x);
let rv1=x.next();
console.log(rv1);
let rv2=x.next();
console.log(rv2);
let rv3=x.next();
console.log(rv3);
let rv4=x.next();
console.log(rv4);