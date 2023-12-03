var containsNearbyDuplicate = function(nums, k) {
    const obj = {};

    for (let index = 0; index < nums.length; index++) {
        if(index - obj[nums[index]] <= k) return true
        else obj[nums[index]] = index;
    }
    return false;
};

// let  nums = [1,2,3,1], k = 3;
// let nums = [1,0,1,1], k = 1
// let nums = [1,2,3,1,2,3], k = 2
console.log(containsNearbyDuplicate(nums, k));