var canJump = function(nums) {
    if(nums.length < 2) return 0;

    let [len, maxI,sum] = [nums[0]+1, 0, 0];
    



    for(let i=0; i<len;i++){
        if(len > nums.length) len = nums.length;

        if(
            (len - 1 - i) < nums[i] &&
            nums[i] - (len - 1 - i) > maxI
            ){ maxI = nums[i] - (len - 1 - i) }

        

        if(
            (len - 1) === i){
            len +=maxI;
            sum +=1;
            maxI = 0;
        }

    }
    
    return sum;
};

console.log(canJump([0]));
// [1,2][2,1]
// [7,0,9,6,9,6,0,7,9,0,1,2,9,0,3]