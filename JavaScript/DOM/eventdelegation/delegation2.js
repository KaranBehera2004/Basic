let td = document.getElementsByTagName("td");

for(let i =0 ; i<= td.length ; i++)
{
    td[i].addEventListener("click",()=>{
        td[i].style.backgroundColor = td[i].innerText;
    })
}