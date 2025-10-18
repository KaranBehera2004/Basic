//! Methods of Strings

//! toUpperCase()
//! toLowerCase()
//! startWith()
//! endsWith()
//! charAt()
//! charCodeAt()
//! indexOf()
//! lastIndexOf()
//! subString()
//! slice()
//! split()
//! repeate()
//! replace()
//! replaceAll()
//! trim()

//! toUpperCase()
//? It is used to convert a string to uppercase.
//? This method does not take any arguments.
//? It returns a new uppercase string.
//? It does NOT change the original string.


//? Example :

let str1="Hello";
let rv1=str1.toUpperCase();
console.log(rv1);
console.log(str1);

//! toLowerCase()
//? It is used to convert a string to lowercase.
//? This method does not take any arguments.
//? It returns a new lowercase string.
//? It does NOT change the original string.

//? Example :

let str2="Hello";
let rv2=str2.toLowerCase();
console.log(rv2);
console.log(str2);

//! startsWith()
//? It is used to check whether a string starts with the given character(s).
//? You pass the character(s) to check if they are present at the starting position.
//? It returns a boolean value (true or false).
//? It does NOT change the original string.


let str3="Hello";
let rv3=str3.startsWith('H');
console.log(rv3);
console.log(str3);

//! endsWith()
//? It is used to check whether a string ends with the given character(s).
//? You pass the character(s) to check if they are present at the ending position.
//? It returns a boolean value (true or false).
//? It does NOT change the original string.


let str4="Hello";
let rv4=str4.endsWith('o');
console.log(rv4);
console.log(str4);

//! charAt()
//? It is used to find the character at a specific index in a string.
//? You pass the index value of the character you want to get.
//? It returns the character present at the given index.
//? It does NOT change the original string.


//? Example:
let str5="Hello";
let rv5=str5.charAt(1);
console.log(rv5);

//! charCodeAt()
//? It is used to find the ASCII (Unicode) value of the character at a given index.
//? You pass the index value of the character you want.
//? It returns the ASCII (Unicode) value of the character at that index.
//? It does NOT change the original string.


//? Example:

let str6="hello";
let rv6=str6.charCodeAt(1);
console.log(rv6);
console.log(str6);    

//! indexOf()
//? It is used to find the position (index) of a specified character or substring in a string.
//? You pass the character or substring you want to search for.
//? It returns the index of the first occurrence of the specified value.
//? If the value is not found, it returns -1.
//? It does NOT change the original string.


let str7="Hello";
let rv7=str7.indexOf('o');
console.log(rv7);

//! lastIndexOf()
//? It is used to find the position (index) of the last occurrence of a specified character or substring in a string.
//? You pass the character or substring you want to search for.
//? It returns the index of the last occurrence of the specified value.
//? If the value is not found, it returns -1.
//? It does NOT change the original string.


let str8="Hello";
let rv8=str8.lastIndexOf('e');
console.log(rv8);

//! substring()
//? It is used to extract a part of a string between two specified indices.
//? You pass the start index and optionally the end index (end index is not included).
//? It returns the extracted part as a new string.
//? It does NOT change the original string.


let str9="Hello";
let rv9=str9.substring(0,3);
console.log(rv9);

//! slice()
//? It is used to extract a part of a string between two specified indices.
//? You pass the start index and optionally the end index (end index is not included).
//? It returns the extracted part as a new string.
//? It does NOT change the original string.
//? It can also accept negative indices to count from the end of the string.


let str10="Hello";
let rv10=str10.slice(0,-1);
console.log(rv10);

//! split()
//? It is used to split a string into an array of substrings based on a specified separator.
//? You pass the separator (like a character, substring, or regex) to decide where to split.
//? It returns a new array containing the substrings.
//? It does NOT change the original string.
//? Optionally, you can pass a limit to restrict the number of splits.


let str11="Hello";
let rv11=str11.split('e');
console.log(rv11);

//! repeat()
//? It is used to repeat a string a specified number of times.
//? You pass the number of times you want the string to be repeated.
//? It returns a new string containing the repeated string.
//? It does NOT change the original string.


let str12="Hello";
let rv12=str12.repeat(2);
console.log(rv12);

//! replace()
//? It is used to replace a specified value or substring in a string with another value.
//? You pass the value/substring to be replaced and the new value.
//? It returns a new string with the replacement done.
//? It does NOT change the original string.
//? By default, it replaces only the first occurrence. Use regex with global flag (g) to replace all occurrences.


let str13="Hello";
let rv13=str13.replace('H','m');
console.log(rv13);

//! replaceAll()
//? It is used to replace all occurrences of a specified value or substring in a string with another value.
//? You pass the value/substring to be replaced and the new value.
//? It returns a new string with all replacements done.
//? It does NOT change the original string.
//? Unlike replace(), it replaces all occurrences without needing a regex with global flag.


let str14="js is javascript ,js is jspisedr";
let rv14=str14.replaceAll('js','ms');
console.log(rv14);

//! trim()
//? It is used to remove whitespace from both ends of a string.
//? It does NOT take any arguments.
//? It returns a new string with leading and trailing whitespace removed.
//? It does NOT change the original string.


let str15="  Hello  ";
console.log(str15.length);
let rv15=str15.trim();
console.log(rv15.length);
console.log(rv15);


