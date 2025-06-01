function MaxNum(nums){
    let max = 0;
    for(let i =0; i<nums.length; i++){
        if(nums[i] > max){
            max = arr[i];
        }
    }
    return max;    
}
let arr = [1, 2, 3, 4, 5, 6, 7, 12, 9];
console.log(MaxNum(arr)); // Output: 12
