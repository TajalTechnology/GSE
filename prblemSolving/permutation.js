var permute = function(nums) {
    const result = [];
    backtarcking = (nums, paths) =>{

        if(nums.length === 0){
            result.push(paths);
            return;
        }

        for (let index = 0; index < nums.length; index++) {
            backtarcking([...nums.slice(0,index), ...nums.slice(index+1)], [...paths, nums[index]]);
        }
    }
    backtarcking(nums, []);
    return result;

}

console.log(permute([1,2,3]));

























// var permute = function(nums) {
//     const result = [];

//     const backtrack = (nums, path) => {
//         if (nums.length === 0) {
//             result.push(path);
//             return;
//         }
//         for (let i = 0; i < nums.length; i++) {
//             backtrack([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]]);
//         }
//     };

//     backtrack(nums, []);
//     return result;
// };
