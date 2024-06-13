"use strict";

let value = 3 
let negValue = -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/3)
console.log(2%3)



// String Operations on Numbers 
let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2
console.log(str3)
// This topic is called Type Coercion.
console.log("1" + 2)     // 12  
console.log(1 + "2")     // 12   // JavaScript must decide whether to convert the string to a number or the number to a string. For the + operator, JavaScript prefers string concatenation when one of the operands is a string.
console.log("1" + 2 + 2) // 122
console.log("1" + 2)     // 12
console.log(1 + 2 + "2") // 32

// When the + operator is used between two numbers, it performs addition.
// When the + operator is used between a number and a string, it converts the number to a string and concatenates.
// TYPE COERCION:- A process in which language automatically converts value from one data type to another.
// This can happen implicitly(automatically) or explicitly(manually).

