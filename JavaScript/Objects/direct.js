//! Objects : It is a real world entity which have its own states and behaviour .
//! states are properties and behaviour is functionality .
//! Objects are used to store the data in key and value pair.
//! We can create n no. of keys in an object.
//! Object keys can store any type of data.
//! we can create objects in different wayts.

//! 1. Direct literals
//Synatx :
// var/let/const identifire = {
    // key 1: value 1,
    // key 2: value 2,
    // ......
//}
let car={
    color : "red",
    price : 10000000
}
console.log(car);
//? ***************************** Access the keys ***********************************
//? We can access the keys in 2 ways :

//? 1. Dot Operator
//? ObjectName.keyName
console.log(car.color);
console.log(car.price);
console.log(car.milage);

//? 2. Subscript Operator
//? objeName["keyname"]
console.log(car["color"]);
console.log(car["price"]);
console.log(car["milege"]);

//? ****************************** Add the keys ********************************
//? Synatx :
//? ObjectName.keyName = value;
//? Example :
car.milege = 10;
console.log(car);
 car.spec={
    fuel : "petrol",
    seatingCapacity : 7
 }

 console.log(car);

//? ****************************** Modify the keys ********************************
//? Synatx :
//? objectName.keyName = value
//? Example :
car.color="blue";
console.log(car);

car.price=200000;
console.log(car);

//? ***************************** Delete the keys ******************************
//? Synatx :
//? delete objename.keyname
//? Example :
delete car.price;
console.log(car);



let p1={
    name : "johan"
}

// let p2={
//     name : "johan"
// }


let p2=p1;
console.log(p1 === p2);

//? More example of how to access keys 

//? Example 1 : 
let person={
    name : "johan",
    age : 18,
    address : "punjagutaa"
}
console.log(person.name);
console.log(person.age);
console.log(person.address);

//? Example 2 :
person={
    name : "johan",
    age : 18,
    address : {
        area : "punjagutaa",
        pincode : 998754
    }
}
console.log(person.name);
console.log(person.age);
console.log(person.address.area);
console.log(person.address.pincode);

//? Example 3 :
person ={
    name : "johan",
    age : 18,
    address : {
        area : "punjagutaa",
        pincode : {
            old : 123456,
            new : 789634
        }
    }
}
console.log(person.name);
console.log(person.age);
console.log(person.address.area);
console.log(person.address.pincode.old);
console.log(person.address.pincode.new);

//? Example 4 :

person={
    name : "johan",
    age : 18,
    address : {
        area : ()=>{
            console.log("address is punjagutta");
        }
    }
}
console.log(person.name);
console.log(person.age);
console.log(person.address.area());  // address is punjagutta  
                                    //  undefined
person.address.area();             // address is punjagutta
// console.log(person);

//?  how to modify the in function by th key
person.address.area= (landmark)=>{
    console.log("landmark is " +landmark);
}
console.log(person.address.area("sanbag hotel"));

// Constructor function


const person1={
    name : "johan"
}

person1.name="smith";
person1.age= 25;
delete person1.age;
console.log(person1.name);
console.log(person1);
