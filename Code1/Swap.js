let a = 30;
let b = 60;

console.log("Before Swapping: a = " + a + ", b = " + b);

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("After Swapping: a = " + a + ", b = " + b);

// [a, b] = [b, a];
// console.log("After Swapping: a = " + a + ", b = " + b);

// let temp = 0;

// temp = a;
// a = b;
// b = temp;

// console.log("After Swapping: a = " + a + ", b = " + b);

a = a^b;
b = a^b;
a = a^b;

console.log("After Swapping: a = " + a + ", b = " + b);


