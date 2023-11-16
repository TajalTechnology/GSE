var rotate = function(nums, k) {
    while(k>nums.length) k=  k - nums.length;
    
    function Reverse(nums, i, j){
        while(i <= j){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    Reverse(nums, 0, nums.length-1);
    Reverse(nums, 0, k-1);
    Reverse(nums, k, nums.length-1)

    return nums

};

console.log(rotate([1,2], 3));