function RevString(str){
    return str.split("").reverse().join("");
}
console.log(RevString("Hello World"));


function RevString(str){
    let reverse = '';

    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
} 
console.log(RevString("RAQIM"));


// String Reverse Using Array Method:-

function RevString(str) {
    let strArray = []; // Manually creating an array
    let reverse = '';

    // Storing characters in an array
    for (let i = 0; i < str.length; i++) {
        strArray.push(str[i]);
    }

    // Reversing the string using the array
    for (let i = strArray.length - 1; i >= 0; i--) {
        reverse += strArray[i];
    }

    return reverse;
}

console.log(RevString("RAQIM")); // Output: "MIQAR"

// USING TWO POINTER APPROACH
function Reverse(n){
    let first = 0;
    let last = n.length - 1;
    while(first < last){
        [n[first], n[last]] = [n[last], n[first]];
        first++;
        last--;
    }
    return n;
}
let rev = Reverse(["R","a","q","i","m","F","r","a","z"])
console.log(rev);


// REURSUION
let str = "Hello"
function reverse (str){
    if(str === ""){
        return str;
    }
    return reverse(str.substr(1)) + str[0]
}
console.log(reverse(str)); // Output: "olleH"
