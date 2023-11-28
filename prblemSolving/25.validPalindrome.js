var isPalindrome = function(s) {
    s = s.replace(/[\W_]/g, "").toLowerCase();
    if(s.length < 2) return true;
    let [left,right] = [0, s.length-1]
    console.log(left,right);

    while(left < right){
        console.log('hello', left, right);
        if(s[left] !== s[right]) return false
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome("aa"));
// "race a car"