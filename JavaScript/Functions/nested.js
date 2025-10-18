//! Nested function : One function inside the another function is known as nested function.
//! here closure is creared.
//! closure - binding between the parent and its child function.
//! in a nested function , if we try to access the outer function parameters or variables inside the inner function the closure scope is created.
//! All nested function are not closure but all closures are nested functions.


function outer()
{
    console.log("Outer function is executed");
    let num=100;
    function inner()
    {
        console.log("inner function is executed");
        console.log(num);
    }
    inner();
}
outer();
