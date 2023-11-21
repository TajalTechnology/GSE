

var productExceptSelf = function(nums) {

    let zeroCount = 0;
    let sum = 1;

    for (let index = 0; index < nums.length; index++){
        if(nums[index] !== 0) sum *= nums[index]
        else zeroCount++;
    } 

    console.log(sum, zeroCount);
    for (let index = 0; index < nums.length; index++){
        if(zeroCount === 0){
            nums[index] = sum/nums[index];
        }else if(zeroCount === 1){
            if(nums[index] !== 0) nums[index] = 0;
            else nums[index] = sum; 
        }  else if(zeroCount > 1){
            nums[index] = 0
        } 
    }

    return nums;
    
};

console.log(productExceptSelf([0,4,0]));