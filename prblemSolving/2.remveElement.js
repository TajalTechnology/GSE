var removeElement = function(nums, val) {
    let length = 0;

    for (let index = 0; index < nums.length; index++) {
        if(nums[index] !== val){
            nums[k] = nums[index];
            length --;
        } 
    }
    return length
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));