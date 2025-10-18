// *************************************  1st **************************************
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{console.log("Hi");});


//?  **************************** 2nd ****************************
let img1 = document.images[0];
img1.addEventListener("mouseover",()=>{
    img1.src = "../images/51ASBMekOYL._AC_UF350,350_QL80_.jpg";
})

img1.addEventListener("mouseout",()=>{
    img1.src = "../images/images.jpg";
})

//? ******************************* 3rd ***************************
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",()=>{console.log("Helo")});

//? ******************************* 4th ***************************
let btn3 = document.getElementById("printname");
btn3.addEventListener("click",()=>{
    let name = prompt("Enter yoour name");
    console.log(name);
})

//? ******************************* 5th ***************************
let btn4 = document.getElementById("logout");
btn4.addEventListener("click",()=>{close();});

//? ******************************* 6th ***************************
// let para1 = document.getElementsByTagName("p");
// para1.addEventListener("mousedown",()=>{
//     para1.style.background-color 
// })

//? ******************************* 7th ***************************

let input1 = document.getElementById("keydown");
input1.addEventListener("keydown",()=>{console.log("key pressed")});

let input2 = document.getElementById("keyup");
input2.addEventListener("keyup",()=>{console.log("key uped")});

//? ************************** 8th **********************************

let btn5 = document.getElementById("btn3");
btn5.addEventListener("dblclick",()=>{console.log("double clicked")});