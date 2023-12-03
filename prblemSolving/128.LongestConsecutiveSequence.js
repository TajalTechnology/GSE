var longestConsecutive = function(nums) {
    let [minValue, count, len] = [nums[0], 0, 0];
    const hash = {};

    for (let index = 1; index < nums.length; index++) {
        if(nums[index] < minValue) minValue = nums[index];
    }
  

    for (let index = 0; index < nums.length; index++) {
        if(minValue < 0) hash[nums[index] - minValue] = nums[index] - minValue;
        else hash[nums[index]] = nums[index];
    }

    nums = [];

    for (const key in hash) {
        if(nums.length === 0 || (nums[nums.length -1] + 1) === hash[key]) count++;
        else count = 1;

        nums.push(hash[key]);
        if(count > len) len = count;
    }
    return len
};
const nums = [100,4,200,1,3,2]
// const nums = [0,3,7,2,5,8,4,6,0,1]
// const nums = [0,-1]
// const nums = [9,1,4,7,3,-1,0,5,8,-1,6]
// 

console.log(longestConsecutive(nums));