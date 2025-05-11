let n = 1234;
let sum = 0;
while(n>0){
    sum+= n%10;
    n = Math.floor(n/10);
}
console.log(sum); // Output: 10 

// RECURSION

function sumDigits(n){
    if(n === 0){
        return 0;
    }
    return n%10 + sumDigits(Math.floor(n/10));
}
console.log(sumDigits(1234)); // Output: 10