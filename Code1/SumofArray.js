function sumArr(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + sumArr(arr.slice(1));
}
let arr = [1, 2, 3, 4, 5];
console.log(sumArr(arr)); 


// Using new function other than slice() or function for slice().

function customeSlice(arr){
    let res = [];
    for(let i = 1; i < arr.length; i++){
        res.push(arr[i]);
    }
    return res;
}