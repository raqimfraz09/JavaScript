// let n = 5;
// let factorial = 1;
// for(let i = 1; i <= n; i++){
//     factorial *= i;
// }
// console.log(factorial);


function fib(n){
    if(n == 0 || n == 1){
        return n
    }
return fib(n-1) + fib(n-2);
}
console.log(fib(9));