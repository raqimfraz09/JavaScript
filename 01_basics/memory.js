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

// When we are creating an object in JavaScript like 'user1' we are creating reference to that object in memory.
// At this point 'user1' points to an object in memory with properties 'email' and 'upi'.
// When we  assign "user1 to user2" we are not creating a new object, instead we are copying the reference stored in 'user1' to 'user2", Now both points to the same object.
// Both points to same object. After changing 'user2.email' the 'email' property is updated, that's why any changes made through one reference visible through other reference as well.
// The value of user2.email overrides the value of user1.email because user1 and user2 are both references to the same object. Modifying the object through either reference affects the object itself, and thus both references reflect the updated state of the object.