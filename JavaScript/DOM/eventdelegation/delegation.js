// let red = document.getElementById("red");
// let green = document.getElementById("green");
// let blue = document.getElementById("blue");
// let orange = document.getElementById("orange");
// let yellow = document.getElementById("yellow");
// let ul = document.querySelector("ul");

// // ul.addEventListener("click",(e)=>{
// //     e.stopPropagation();
// //     red.style.backgroundColor = "red";
// // })

// red.addEventListener("click",()=>{
//     // e.stopPropagation();
//     red.style.backgroundColor = "red";
// })

// green.addEventListener("click",()=>{
//     // e.stopPropagation();
//     red.style.backgroundColor = "green";
// })

// blue.addEventListener("click",()=>{
//     // e.stopPropagation();
//     red.style.backgroundColor = "blue";
// })

// orange.addEventListener("click",()=>{
//     // e.stopPropagation();
//     red.style.backgroundColor = "orange";
// })


// yellow.addEventListener("click",()=>{
//     // e.stopPropagation();
//     red.style.backgroundColor = "yellow";
// })


//? ******************************************************************************

// let list = document.getElementsByTagName("li");

// list[0].addEventListener("click",()=>{
//     list[0].style.backgroundColor = "red";
// })

// list[1].addEventListener("click",()=>{
//     list[1].style.backgroundColor = "green";
// })

// list[2].addEventListener("click",()=>{
//     list[2].style.backgroundColor = "blue";
// })
// list[3].addEventListener("click",()=>{
//     list[3].style.backgroundColor = "orange";
// })
// list[4].addEventListener("click",()=>{
//     list[4].style.backgroundColor = "yellow";
// })

// list[5].addEventListener("click",()=>{
//     list[5].style.backgroundColor = "red";
// })

//? **********************************************************************************************

let list = document.getElementsByTagName("li");

for(let i = 0 ; i <= list.length ;i++)
{
    list[i].addEventListener("click",()=>{
        list[i].style.backgroundColor = list[i].innerText;
    })
}
