//! Employee Object array
let employee = [{name : 'johan' , dept : 30 , sal : 1500},
                {name : 'smith' , dept : 40 , sal : 2000},
                {name : 'miller', dept : 30 , sal : 1800},
                {name : 'scott' , dept : 20 , sal : 900}];
let rv1=employee.filter(ele =>{
    return ele.sal>1500;
});
console.log(rv1);
console.log(employee);

//! Student Object Array

let students = [{name : 'johan' , mark : 90 , course : 'JFS'},
                {name : 'smith' , mark : 85, course : 'PFS'},
                {name : 'miller', mark : 76 , course : 'Devops'},
                {name : 'scott' , mark : 89 , course : 'Devops'}];


//? Q1. marks > 85 & devops
//? Ans:
let rv2=students.filter(ele => {
   return  ele.mark >85 && ele.course == "Devops";
})
console.log(rv2);


//? Q2. name -> 's'
//? Ans :

let rv3=students.filter(ele => {
    if(ele.name.startsWith('s'))
    {
        return ele.name;
    }
})
console.log(rv3);


//? Q3. JFS
//? Ans :

let rv4=students.filter(ele => {
    if(ele.course == "JFS")
    {
        return ele.course;
    }
})
console.log(rv4);
//? Q4. PFS
let rv5=students.filter(ele => {
    if(ele.course=="PFS")
    {
        return ele.course;
    }
})
console.log(rv5);
//? Q5. Devops

let rv6=students.filter(ele => {
    if(ele.course=="Devops")
    {
        return ele.course;
    }
})
console.log(rv6);
