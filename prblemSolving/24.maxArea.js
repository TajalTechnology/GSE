var maxArea = function(height) {
    let [lIndex, rIndex, sum] = [0, height.length-1, 0];
    while(lIndex !== rIndex){
        let minIndex = height[lIndex] < height[rIndex] ? lIndex : rIndex;
        if( ((rIndex - lIndex)*height[minIndex]) > sum) sum = ((rIndex - lIndex)*height[minIndex]);
        height[lIndex] < height[rIndex] ? lIndex++ : rIndex--;
    }
    return sum;
};

console.log(maxArea([0,1,1,1]));