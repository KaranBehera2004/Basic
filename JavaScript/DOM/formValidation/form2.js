let form = document.forms[0];
let usernameInput = document.getElementById("usernameInput");
let passowrdInput = document.getElementById("passworInput");

form.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(usernameInput.value, passowrdInput.value);
})