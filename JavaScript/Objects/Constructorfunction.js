//! 2. Constructor function

//? Example 1
function car(brand,price)
{
    this.Brand=brand;
    this.Price=price;
}

let car1=new car("BMW",100000000);
console.log(car1);


//? Example 1
function pen(color,price)
{
    this.color=color;
    this.price=price;
}
let pen1=new pen("red",10);
console.log(pen1);

//? Example 3
function book(author,page,price)
{
    this.author=author;
    this.page=page;
    this.price=price;
}
let book1=new book("ANSI",500,650);
console.log(book1);

//? 4. By using class keyword (Inetrnally)
class Bike
{
    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }
}
let bike1=new Bike("apache",75000);
console.log(bike1);


//!  3. By using Object() method
let obj=new Object();
obj.name="karan";
obj.surname="kumar";
console.log(obj);

//! 4. By using without new keyword in Object() method

let obj2=Object();
console.log(obj2);
obj2.laptop_name="lenovo";
obj2.price=65000;
console.log(obj2);