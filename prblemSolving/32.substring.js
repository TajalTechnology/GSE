var lengthOfLongestSubstring = function(s) {
    const chars = {};
    let [ start, end, max] = [0, 0, 0];

    for(let i=0;i<s.length;i++){
        if(chars[s[i]] !== undefined){
            if((end - start + 1) > max) max = (end - start + 1);
            if(chars[s[i]]+1 > start ) start = chars[s[i]]+1;
        } 
        end = i;
        if((end - start + 1) > max) max = (end - start + 1);
        chars[s[i]] = i;
    }
    return max;
};

console.log(lengthOfLongestSubstring("aaaabc      "));
// "abba" =>2