var majorityElement = function(nums) {
    if(nums.length < 1) return null;
    let [lergest, lergestKey] = [0, ''];
    const count = {};

    for(let i=0; i<nums.length; i++ ){
        if(count[nums[i]]) count[nums[i]] = count[nums[i]]+1;
        else count[nums[i]] = 1;
    }

    for (const key in count) {
        if(count[key] > lergest){
            lergest = count[key];
            lergestKey = key;
        }
    }
    return Number(lergestKey);
};

console.log(majorityElement([3,3,4]));
