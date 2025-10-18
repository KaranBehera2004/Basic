let btn = document.getElementsByTagName("button");
let sup = document.getElementById("sup");
let card = document.querySelector(".card");
let main = document.querySelector("main");
// for( let i =0 ; i <= btn.length ;i++)
// {
//     btn[i].addEventListener("click",()=>{
//         sup.innerText++;
//     })
// }

main.addEventListener("click",(e)=>{
    if (e.target.innerText === "Add to cart") {
        let num = Number(sup.innerText);
        num++;
        sup.innerText = num;
    }
    // console.log(e.target);
})