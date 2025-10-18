//! Higher Order Function (HOF) methods:

//! map():
//! forEach():
//! filter():
//! reduce():
//! some():
//! every():


//! map()

let arr=[10,20,30];
let x=  arr.map(ele => {
    return ele+5;
});

console.log(x);
console.log(arr);

//! forEach()

let arr2=[10,20,30];
x=arr2.forEach(ele => {
    return ele+5;
})
console.log(x);
console.log(arr2);

//! filter()

let arr3=[10,21,30];
x=arr3.filter(ele => {
    return ele%2==0;
})
console.log(x);
console.log(arr3);

//! reduce()

let arr4=[10,20,30,40,50];
x=arr4.reduce((prev,next) => {
       return prev+next;
})
console.log(x);
console.log(arr4);

//! some()

let arr5=[2,10,9,5,12,13];
x=arr5.some(ele =>{
    return ele%2==0;
})
console.log(x);
console.log(arr5);

//! every()

let arr6=[2,4,6,8,10,12];
x=arr6.every(ele =>{
    return ele%2==0;
})
console.log(x);
console.log(arr6);