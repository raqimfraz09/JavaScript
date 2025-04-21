function SmaxNum(nums){
    let max = 0;
    let secmax = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] > max && nums[i] !== secmax){
            secmax = nums[i];
        }

    }
    return secmax;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 12, 9, 10];
console.log(SmaxNum(arr)); // Output: 9