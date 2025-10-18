//! popup methods.
//! alert()
//! prompt()
//! confirm()

//! alert()   
//! It is used to show a warning message to the user.
//! it will create one buttons.
//! unless user click on ok button , user cannot interact with webpage.

//? Example :
// alert("warning...!");  

//! prompt()

//! It is used to collect the input from the user.
//! It will create 2 buttons , ok button and cancel button.
//! if user is clicking on Ok button , then it returns the user input(in form of String) .
//! if user is clicking on Cancel button , then it returns null .

//? Example : 1
// let name = prompt("Enter name");
// console.log(name);

//? Example : 2
// let num1 = Number(prompt("Enter num1"));
// let num2 = Number(prompt("Enter num2"));
// console.log(num1+num2);

//? Example 3 :
// let num1 = Number(prompt("Enter a number"));
// for(let i=1;i<=10;i++)
// {
//     console.log(num1 +" x " + i +" = "+ i*num1);
//     console.log(`${num1} x ${i} = ${num1*i}`);
// }

//? Example : 4

// let num5=prompt("Enter numbers");
// // let newarr=[];
// let rv1=num5.split(',');
// console.log(rv1);
// for(let i=Number(rv1[0]);i<=Number(rv1[1]);i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);    }
// }

//? Example : 5
// let x=prompt("Enter 3 numbers");
// let rv4=x.split(',');
// console.log(rv4);
// if(Number(rv4[0])>Number(rv4[1])&&rv4[0]>rv4[2])
// {
//     console.log("Max " + rv4[0]);
// }
// else{
//     if(rv4[1]>rv4[2])
//     {
//         console.log("max " + rv4[1]);
//     }
//     else{
//         console.log("Max " + rv4[2]);
//     }
// }

//? Exapmle : 5

// let x=prompt("Enter your name ")
// console.log("Number of characters is " +x.length);

//? Example : 6
// let array=[10,4,6,9,23,5];
// let x=prompt("Array elements are 10,4,6,9,23,5. enter no to be removed.");
// let rv1=x.split();
// // console.log(rv1);
// let rv2=array.filter(ele =>{
//     return ele !=Number(rv1);
// })
// console.log(rv2);



//? Example : 7

// let x=prompt("Enter your name");
// console.log(x.trim().slice(-1));

// let technology=[];
// let x=prompt("Enter technolgy");
// let rv1=x.split(',');
// console.log(rv1);
// technology.some(ele =>ele !=rv1[0])

let technologies = [];

const addTech = () => {
  let tech = prompt("Enter a technology name:");

  if (tech !== null && tech.trim() !== "") 
{
    tech = tech.trim().toLowerCase(); // clean input

    // check if already exists using arrow function
    let alreadyAdded = technologies.some(item => item === tech);

    if (alreadyAdded) {
      alert("Already added! Please enter another technology.");
    } else {
      technologies = technologies.concat(tech); // add new tech
      alert(`${tech.toUpperCase()} added successfully!`);
    }

    // recursion to ask again
    addTech();
  }
};

addTech();

console.log("All Technologies:", technologies.map(item => item.toUpperCase()).join(", "));

//! confirm()
//! It is used to take the extra confirmation from the user.
//! if user is click cancel button , then it returns true.
//! if user is click cancel button , then it returns false.

//? Example : 1
// let x=confirm("Are you sure want to exit ?");
// if(x)
// {
//     window.close();
// }
