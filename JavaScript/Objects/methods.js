//! Object methods :

//! 1. Object.keys()   - It will return all the keys of the given object in form of an array.
//! 2. Object.values() - it will return all the values of the given object in form of an array.
//! 3. Object.seal()   - if we use seal any object then we cannot add the keys but we can modify
//! 4. Object.isSealed() - used to check wheather an object is sealed or not.
//! 5. Object.freeze() - if we freeze seal any object then we cannot add the keys and modify.
//! 6. Object.isFrozen()- used to check wheather an object is freezed or not.
//! 7. Object.entries() - converts object into array.(nested array).
//! 8. Object.fromEntries()- converts array into object.
//! 9. Object.

//!  1. Object.keys()

let emp={
    name : "johan",
    id : 101,
    address : {
        area : "punjagutta",
        pincode : 65154891654
    }
}
let x = Object.keys(emp);
console.log(x);

//! 2. Object.values()

let y=Object.values(emp);
console.log(y);

//! 3. Object.seal()

Object.seal(emp);
emp.design="developer";         // add not possible 
console.log(emp);

emp.id=102;
console.log(emp);               //? modify is possible

delete emp.id;
console.log(emp);               // delete not possible

//! 4. Object.isSealed()

console.log(Object.isSealed(emp));


let student={
    name : "smith",
    id : 11,
    course : "JFS"
}

//! 5. Object.freeze()

console.log(Object.isSealed(student));

Object.freeze(student);

student.mobile=21256165;           // add not possible
console.log(student);

student.id=15;                    // modify not possible
console.log(student);

delete student.course;           // delete not possible
console.log(student);

//! 6. Object.isFrozen()

console.log(Object.isFrozen(student));
console.log(Object.isFrozen(emp));

//! Object.entries()

let arr1=Object.entries(student);
console.log(arr1);

//! 8. Object.fromEntries()
let obj1=Object.fromEntries(arr1);
console.log(obj1);

let obj2=Object.fromEntries([["name","karan"],["age","22"]]);
console.log(obj2);

// let arr2=Object.entries(obj2);
// console.log(arr2);
// console.log(arr2[1]);