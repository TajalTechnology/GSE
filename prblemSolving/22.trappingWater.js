var trap = function(height) {
    let [l, r, sum, lMax, rMax] = [0, height.length-1, 0, 0, height.length-1];

    while(l !== r){
        if(height[l] <= height[r]){
            if(height[l] < height[lMax])sum += height[lMax]-height[l];
            else lMax = l;
            l++;
        }else if (height[r] <= height[l]){
            if(height[r] < height[rMax]) sum += height[rMax] - height[r];
            else rMax = r;
            r--;
        }
    }
    return sum;
};

console.log(trap([4,2,0,3,2,5]));
// [0,1,0,2,1,0,1,3,2,1,2,1]
// [4,2,0,3,2,5]