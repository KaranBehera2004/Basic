let btn1 = document.getElementById("btn1");
btn1.onclick=()=>{
    console.log("hii");
}

let btn2 = document.getElementById("btn2");
btn2.onclick = ()=>{
    let name = prompt("Enter your name");
    console.log(name);}


let img1 = document.getElementById("img1");
img1.onmouseover = ()=>{
    img1.src = "../images/images.jpg";
}

img1.onmouseout = ()=>{
    img1.src = "../images/51ASBMekOYL._AC_UF350,350_QL80_.jpg";
}