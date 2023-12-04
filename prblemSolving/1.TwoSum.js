var twoSum = function(nums, target) {
    const obj = {};
    for(let i=0; i<nums.length; i++) {
        const find = target - nums[i];
        if(find in obj) return [obj[find], i]
        obj[nums[i]] = i;
    }
};

// let nums = [3,2,4], target = 6
let nums = [3,3], target = 6
// let nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target));