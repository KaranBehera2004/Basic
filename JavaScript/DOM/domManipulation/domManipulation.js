//! Change the content
//? innerText
let h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.innerText);
h1.innerText = "BOM";

//? innerHTML
let h2 = document.querySelector("h2");
h2.innerHTML = "<u>World</u>";

let ul = document.querySelector("ul");
ul.innerHTML = `
<li>Apple</li>
<li>Mango</li>
<li>Banana</li>
<li>Pinaplle</li>`;

//? textContent
let h3 = document.querySelector('h3');
console.log(h3.innerText);
console.log(h3.innerHTML);
console.log(h3.textContent);


//! Add the styles
// Synatx :  
//? targetedEle.style.cssPropName ="value";

h1 = document.querySelector("h1");
//  h1.style.color = "red";
//  h1.style.backgroundColor = 'green';
//  h1.style.textAlign = "center";

//? targetedEle.style.cssText = " css properties...";

h1.style.cssText = " color : red ; background-color : green ; text-Align : center";

//! Add the attributes
//? targetedEle.setAttribute("attributeName" , "attributeValue");
h1.setAttribute("title", "Document Object Model");
document.links[0].setAttribute("target", "_blank");

//! Remove the attributes
//? targetedEle.removeAttribute("attributeName");
h1.removeAttribute("title");

//! Add the classes
//? targetedEle.className = "";
// h1.className = "demo";
// h1.className = "test";

//? targetedEle.classList.add(.....);

h1.classList.add("demo", "text");


//? targetedEle.classList.remove(.....);
h1.classList.remove("text");

//? targetedEle.classList.toggle("cn");
h1.classList.toggle("text");
h1.classList.toggle("text");

//? targetedEle.classList.contains("cn");
console.log(h1.classList.contains("text"));

//! Create an element
//? dou=cument.createElement("tagName");
let table = document.createElement("table");
console.log(table);
document.body.append(table);

// table.innerHTML=(`
//     <tbody>
//         <tr>
//             <td>Child</td>
//             <td>Child</td>
//             <td>Child</td>
//         </tr>
//         <tr>
//             <td>Child</td>
//             <td>Child</td>
//             <td>child</td>
//         </tr>
//         <tr>
//             <td>Child</td>
//             <td>Child</td>
//             <td>Child</td>
//         </tr>
//     </tbody>`);
table.setAttribute("border","5");
table.setAttribute("cellpadding","20px");
// document.body.append(table);
// document.body.append(table);

let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
let td5 = document.createElement("td");
let td6 = document.createElement("td");

td1.innerText ="1";
td2.innerText = "Johan";
td3.innerText = "10000";
td4.innerText = "2";
td5.innerText = "Smith";
td6.innerText = "20000";

tr1.append(td1,td2,td3);
tr2.append(td4,td5,td6);
table.append(tr1,tr2);