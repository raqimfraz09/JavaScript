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

//  Using While Loop

function MissingNum(n){
    let expectedSum = n.length*(n.length+1)/2;
    let actualSum = 0;

    let i = 0;
    while(i < n.length){
        actualSum += n[i];
        i++;
    }
    return expectedSum - actualSum
}
console.log(MissingNum([3, 0, 1])); 
console.log(MissingNum([9, 6, 4, 2, 3, 5, 7, 0, 1]));
 
//  Using XOR Operator 

function missingNum(n){
    let missing = n.length;
    for(let i = 0; i < n.length; i++){
        missing = missing ^ i ^ n[i];
    }
    return missing;
}
console.log(missingNum([3, 0, 1, 4, 6, 2, 7, 8]));