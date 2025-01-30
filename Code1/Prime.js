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
// console.log(isPrime(2));

for(let num=1; num<=100; num++){
    if(isPrime(num)){
        console.log(num);
    }
}