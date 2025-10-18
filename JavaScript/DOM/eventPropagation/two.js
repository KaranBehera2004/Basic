let grand_parent = document.getElementById("grand_parent");
let parent = document.getElementById('parent');
let child = document.getElementById("child");

grand_parent.addEventListener("click",(e)=>{
    e.stopPropagation();
    grand_parent.style.backgroundColor = "red";
})

parent.addEventListener("click",(e)=>{
    e.stopPropagation();
    parent.style.backgroundColor ='green';
})

child.addEventListener("click",(e)=>{
    e.stopPropagation();
    child.style.backgroundColor ="blue";
})