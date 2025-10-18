let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let male = document.getElementsByTagName("male");
let female = document.getElementById("female");
let btn = document.getElementById("btn");
let table = document.querySelector("table");
let select = document.getElementById("select");

btn.addEventListener("click",()=>{
    table.document.createElement(`<td>${input1.value}</td>
                                  <td>${input2.value}</td>
                                  <td>${male.value}</td>
                                  <td>${select.value}</td>`);
})
