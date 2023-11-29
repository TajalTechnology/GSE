var minSubArrayLen = function(target, nums) {
    let [sum, len, start,min] = [0,0,0,0]

    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        len++;
        if(sum <= target || (sum - nums[i]) < target) min++;

        while(sum >= target){
            if(len < min) min = len;
            if(sum - nums[start] >= target) sum -=nums[start], len--, start++;
            else break;
        }
    }
    return sum >=target? min:0
};
// 7, [2,3,1,2,4,3]
// 4, [1,4,4]
// 11, [1,1,1,1,1,1,1,1]
// 6,[10,2,3]
// 15, [5,1,3,5,10,7,4,9,2,8]
console.log(minSubArrayLen(4, [1,4,4]));