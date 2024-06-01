// "use strict";

// const name = "raqim"
// const repoCount = 15

// // console.log(name + repoCount +"value");  // To cncatenate  , but it is not agood practice.

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is modern way to concatenate strings.

// // Deaclaration of string , which is stores key value pair.
// const gameName = new String('Raqim')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// // To find, which character is at which index.
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('m'));  // to find index of a character

// const newsString = gameName.substring(0, 4) // last value not included // output will be "Raqi"
// console.log(newsString);

// const anotherString = gameName.slice(-5, 4)
// console.log(anotherString);  

// const newsString1 = "     hitesh    "
// console.log(newsString1);
// console.log(newsString1.trim());  // to remove starting and ending space.

// const url = "hhtps://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))


const gameName = new String('hitesh-hc-com')

console.log(gameName.split('-'))  // ['hitesh', 'hc', 'com']