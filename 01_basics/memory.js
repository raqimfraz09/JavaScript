"use strict";

// Stack (Primitive Data Type use stack memory).
// Heap  (Non-Primitive uses heap memory)

;let myName = "RaqimFraz"

let anotherName = myName
anotherName = "FrazRaqim"

console.log(myName);
console.log(anotherName);

let user1 = {
    email: "raqim20@gmail.com",
    upi: "raqim@ybl"
}

let user2 = user1
user2.email = "fraz@123gmail.com"

console.log(user1.email);
console.log(user2.email);

