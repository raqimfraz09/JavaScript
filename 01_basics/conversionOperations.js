let score = "33abc"   // 1= 33, 2= "33", 3= "33abc" , if value is null , if undefined 

// console.log(typeof(score));  // String      // for null, output will be object  // output will be undefined

let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // Number    
//console.log(valueInNumber);  // NaN , Not a Number   // 0  // NaN



let isLoggedIn = "Raqim"                              // 1 gives true, "" empty gives false // "Raqim" string gives true 
let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);

let someNumber = 44
let stringNumber = String(someNumber)
console.log(stringNumber); // 44
console.log(typeof stringNumber); // String



