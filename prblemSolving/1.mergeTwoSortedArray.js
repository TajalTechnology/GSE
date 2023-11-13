const nums1 = [4,5,6,0,0,0]
const m = 3; 
const nums2 = [];
const n = 3;

var merge = function(nums1, m, nums2, n) {
    let [i, j, length] = [m-1, n-1, m+n-1];

    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[length] = nums1[i];
            i--;
        }else{
            nums1[length] = nums2[j];
            j--;
        } 
        length--;
    }

    while (j >= 0) {
        nums1[length] = nums2[j];
        j--;
        length--;
    }

    return nums1;
};

console.log(merge(nums1, m, nums2, n));