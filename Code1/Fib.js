function fib(n) {
    let first = 0;
    let sec = 1;
    let sum;
    if (n === 0 || n === 1){
        return n;
    }
    for(let i = 2; i <= n; i++){
        sum = first + sec;
        first = sec;
        sec = sum; 
    }
    return sum;
}

console.log(fib(2));  


// RECURSION 

function fib(n){
    if(n == 0 || n == 1){
        return n
    }
return fib(n-1) + fib(n-2);
}
console.log(fib(3));