// this is very unique solution by me.

var canJump = function(nums) {
    let len = nums[0];
    let sum = 0

    for (let i = 0; i <= len; i++) {
        sum = sum+1;
        if((i+nums[i]) >= (nums.length-1))return sum
        if((len - i) < nums[i]) len = nums[i]+i;
    }
    return sum
};

console.log(canJump([1,1]));