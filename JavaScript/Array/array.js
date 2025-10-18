//! Array Helper methods :

//! Push()  :- 
//! pop()   :-
//! unshift()   :-
//! shift() :-
//! indexOf()   :-
//! splice()    :-
//! lastIndex() :-
//! slice() :-
//! concat()    :-
//! reverse()   :-
//! flat()  :-  
//! join()  :-
//! toString()  :-


//! push()
//? It is used to add one or more elements to the end of an array.
//? You pass the elements you want to add as arguments.
//? It returns the new length of the array.
//? It **modifies the original array**.


let arr1=[10,20];
let rv1=arr1.push(30,40);
console.log(rv1);
console.log(arr1);


//! pop()
//? It is used to remove the last element from an array.
//? It does not take any arguments.
//? It returns the removed element.
//? It **modifies the original array**.


let arr2=[10,20];
let rv2=arr2.pop();
console.log(rv2);
console.log(arr2);

//! unshift()
//? It is used to add one or more elements to the beginning of an array.
//? You pass the elements you want to add as arguments.
//? It returns the new length of the array.
//? It **modifies the original array**.


let arr3=[10,20];
let rv3=arr3.unshift(1,5);
console.log(rv3);
console.log(arr3);

//! shift()
//? It is used to remove the first element from an array.
//? It does not take any arguments.
//? It returns the removed element.
//? It /modifies the original array**.


let arr4=[1,5,10,20];
let rv4=arr4.shift();
console.log(rv4);
console.log(arr4);

//! splice()
//? It is used to add or remove elements from an array at a specified index.
//? You pass the start index, number of elements to remove, and optionally the elements to add.
//? It returns an array containing the removed elements (if any).
//? It **modifies the original array**.


let arr5=[10,20];
let rv5=arr5.splice(1,0,30,40);
console.log(rv5);
console.log(arr5);

//! indexOf()
//? It is used to find the position (index) of a specified element in an array.
//? You pass the element you want to search for as an argument.
//? It returns the index of the first occurrence of the element.
//? If the element is not found, it returns -1.
//? It does NOT modify the original array.


let arr6=[10,20,30,40,50,60,70,80];
let rv6=arr6.indexOf(40);
console.log(rv6);
console.log(arr6);

//! lastIndexOf()
//? It is used to find the position (index) of the last occurrence of a specified element in an array.
//? You pass the element you want to search for as an argument.
//? It returns the index of the last occurrence of the element.
//? If the element is not found, it returns -1.
//? It does NOT modify the original array.


let arr7=[10,20,30,40,550,10,70,80];
let rv7=arr7.lastIndexOf(10);
console.log(rv7);
console.log(arr7);

//! slice()
//? It is used to extract a portion of an array into a new array.
//? You pass the start index and optionally the end index (end index not included).
//? It returns a new array containing the extracted elements.
//? It does NOT modify the original array.
//? Negative indices can be used to count from the end of the array.


let arr8=[10,20,30,40,50,60];
let rv8=arr8.slice(0,4);
console.log(rv8);
console.log(arr8);

//! concat()
//? It is used to merge two or more arrays into a new array.
//? You pass the arrays or values you want to merge as arguments.
//? It returns a new array containing elements from all arrays.
//? It does NOT modify the original arrays.


let arr9=[10,20];
let arr10=[30,40];
let arr11=[50,60];
let rv9=arr9.concat(arr10,arr11);
console.log(rv9);
console.log(arr9);

//! reverse()
//? It is used to reverse the order of elements in an array.
//? It does not take any arguments.
//? It returns the reversed array.
//? It **modifies the original array**.


let arr12=[10,20,30];
let rv10=arr12.reverse();
console.log(rv10);
console.log(arr12);

//! flat()
//? It is used to flatten nested arrays into a single-level array.
//? You can pass the depth level as an argument (optional, default is 1).
//? It returns a new flattened array.
//? It does NOT modify the original array.


let arr13=[10,20,[30,40[50,60]]];
let rv11=arr13.flat();
console.log(rv11);
console.log(arr13);

//! join()
//? It is used to join all elements of an array into a single string.
//? You can pass a separator as an argument (optional, default is comma).
//? It returns the resulting string.
//? It does NOT modify the original array.


let arr14=[1,2,3];
let rv12=arr14.join(' & ');
console.log(rv12);
console.log(arr14);

//! toString()
//? It is used to convert an array to a string.
//? It does not take any arguments.
//? It returns a string with all array elements separated by commas.
//? It does NOT modify the original array.


let arr15=[1,2,3];
let rv13=arr15.toString('&');
console.log(rv13);
console.log(arr15);

//! Array.isArray()
//? It is used to check whether a given value is an array or not.
//? You pass the value to check as an argument.
//? It returns a boolean: true if the value is an array, false otherwise.
//? It does NOT modify the original value.


let a=10;
console.log(isArray(a));