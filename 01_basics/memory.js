"use strict";

// Stack (Primitive Data Type use stack memory).
// Heap  (Non-Primitive uses heap memory)

let myName = "RaqimFraz"

let anotherName = myName
anotherName = "FrazRaqim"

console.log(myName);
console.log(anotherName);

//  In the above code "anotherName" takes the value of "myName" but it will not give you the actual value it will gives you a copy of itself.
// When assigning a primitive value (like a string) to another variable, a copy is made. Changing the new variable does not affect the original one.

let user1 = {
    email: "raqim20@gmail.com",
    upi: "raqim@ybl"
}

let user2 = user1
user2.email = "fraz@123gmail.com"

console.log(user1.email);
console.log(user2.email);

