"use strict";

const name = "raqim"
const repoCount = 15

// console.log(name + repoCount +"value");  // To cncatenate  , but it is not agood practice.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is modern way to concatenate strings, this is called String Interpolation.
//  String interpolation using template literals ( ' ) in JavaScript allows you to easily create dynamic strings by embedding variables or expressions inside ${}`. This makes your code cleaner and easier to read.

// Deaclaration of string , which is stores key value pair.
const gameName = new String('Raqim')

console.log(gameName[0]); // It gives "R"
console.log(gameName.__proto__);

console.log(gameName.length); // to find length of the string "5"
console.log(gameName.toUpperCase()); // to convert string into UpperCase , "RAQIM"
// To find, which character is at which index.
console.log(gameName.charAt(2)); //  "q"

console.log(gameName.indexOf('m'));  // to find index of a character

const newsString = gameName.substring(0, 4) // last value not included // output will be "Raqi"
console.log(newsString);  // In JavaScript, the "substring" method is used to extract a portion of a string and return it as a new string, without modifying the original string. This method is useful when you need to retrieve specific parts of a string based on their positions.

const anotherString = gameName.slice(-5, 4) // 
console.log(anotherString);   // The "slice" method in JavaScript is used to extract a portion of an array or a string and return it as a new array or string, without modifying the original array or string. It's a versatile method that provides more flexibility compared to "substring" because it supports negative indices, which count from the end of the array or string

const newsString1 = "     hitesh    "
console.log(newsString1);
console.log(newsString1.trim());  // to remove starting and ending space.
//  The ".trim()" method in JavaScript is used to remove whitespace from both ends of a string. This includes spaces, tabs, and newline characters. It does not modify the original string but returns a new string with the leading and trailing whitespace removed.
const url = "hhtps://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))


const gameName = new String('hitesh-hc-com');

console.log(gameName.split('-'))  // ['hitesh', 'hc', 'com']

//  In JavaScript, the "split" method is used to divide a string into an array of substrings, based on a specified separator. When you call "split('-')" on a string, it splits the string at each occurrence of the hyphen (-) and returns an array of the resulting substrings.