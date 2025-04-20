function duplicateArray(num){
    let j=0;
    for(let i=0; i<num.length; i++){
        if(num[j] !== num[i]){
            j++;
            num[j] = num[i];
        }
    }
    return j+1;
}

let num = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9];
console.log(duplicateArray(num));
let uniqueArray = num.slice(0, duplicateArray(num));
console.log(uniqueArray);