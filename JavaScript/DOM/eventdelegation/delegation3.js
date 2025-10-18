let btn = document.getElementsByTagName("button");

for( let i=0 ; i<= btn.length;i++)
{
    btn[i].addEventListener("click",()=>{
        console.log(btn[i].innerText);
    })
}