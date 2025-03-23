function MissingNum(n){
    let expectedSum = n.length*(n.length+1)/2;
    let actualSum = 0;
    for(let i = 0; i < n.length; i++){
        actualSum += n[i];
    }
    return expectedSum - actualSum
}
console.log(MissingNum([3, 0, 1]));
console.log(MissingNum([9, 6, 4, 2, 3, 5, 7, 0, 1]));