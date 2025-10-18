let hide_btn = document.getElementById("hide");
let show = document.getElementById("show");
let para = document.querySelector("p");


hide_btn.addEventListener("click",()=>{
    para.style.display = "none";
})

show.addEventListener("click",()=>{
    para.style.display = "block";
})