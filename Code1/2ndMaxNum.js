function SMax(nums){
    let Max = -Infinity;
    let Smax = -Infinity;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] > Max){
            Smax = Max;
            Max = nums[i];
        }else if(nums[i]>Smax && nums[i] !== Max){
            Smax = nums[i];
        }

    }
    return Smax;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 12, 9];
console.log(SMax(nums)); 