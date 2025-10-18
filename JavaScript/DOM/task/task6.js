let btn1 = document.getElementById("btn1");
let para = document.querySelector("p");

btn1.addEventListener("click",()=>{
    if (btn1.innerText === "Hide") {
        para.style.display = "none"
        console.log(btn1.innerText);
        btn1.innerText = "Show";
        console.log(btn1.innerText);
    }
    else
    {
        para.style.display = "block"
        console.log(btn1.innerText);
        btn1.innerText = "Hide";
        console.log(btn1.innerText);
    }
})