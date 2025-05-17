let arr = [3444, 42, 1, 9, 6, 325]

for(let i = 0; i<arr.length; i++){
    for(j = 0; j<arr.length-i-1; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;            
        }
    }
}
console.log(arr);