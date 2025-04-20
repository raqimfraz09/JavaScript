function removeElements(nums, val){
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[j] !== val){
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
let nums = [3, 2, 2, 3];
let k = removeElements(nums, 2); // ✅ Call it once and save the result
console.log(k); // Output: 2
let result = nums.slice(0, k); // ✅ Use the same value of k
console.log(result); // Output: [3, 3]