let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click",(e)=>{
    e.stopPropagation();    // e is called one Object
    console.log("BTN 1");
})

btn2.addEventListener("click",(e)=>{
    e.stopPropagation();    // e is called one Object
    console.log("BTN 2");
})

let div1 = document.getElementById("div1");

div1.addEventListener("click",(e)=>{
    e.stopPropagation();    // e is called one Object
    console.log("div clicked");
})