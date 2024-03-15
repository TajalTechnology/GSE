const nums = [1,2,3];

var subsets = function(nums) {
    const result = [[]];

    let temp = [];
    for (let index = 0; index < nums.length; index++) {
        temp.push(nums[index]);

        // console.log(temp.length > 0);
        // if(temp.length > 1){
        //     for (let j = 0; j < temp.length; j++) {
        //         temp.push([temp[j], nums[index]]);
        //         j++;
        //         console.log('hello');
        //     }
        // }
        
        
        
    }
    return temp;
};

console.log(subsets(nums));