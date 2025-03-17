function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i = 2; i < n; i++ ){
        if(n % i == 0){
            return false;
        }
        
    }
    return true;
}
// console.log(isPrime(81));
// If we want to print all prime numbers between 0 and 100. We have to right below code along with above function.

for(let num=1; num<=100; num++){
    if(isPrime(num)){
        console.log(num);
    }
}

