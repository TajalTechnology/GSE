var strStr = function(haystack, needle) {
    for(let i = 0; i< haystack.length; i++){
        if(haystack[i] === needle[0]){
            let result = true;

            for(let j=1; j<needle.length; j++){
                if(needle[j] !== haystack[i+j]){
                    result = false;
                    break;
                }
            }
            if(result) return i;
        }
    }
    return -1;
};          

console.log(strStr("leetcode", "leeto"));
// haystack = "sadbutsad", needle = "sad"
// haystack = "leetcode", needle = "leeto"