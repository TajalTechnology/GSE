/**
 * A string is good if there are no repeated characters.

 * Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

 * Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

 * A substring is a contiguous sequence of characters in a string.
 */

var countGoodSubstrings = function(s) {
    let goodStrCount = 0;
    let goodStrElements = [];
    for (let index = 0; index < s.length + 2 - s.length; index++) goodStrElements.push(s[index]);

    for (let index = 2; index < s.length; index++) {
        goodStrElements.push(s[index]);
        if(new Set(goodStrElements).size === 3) goodStrCount++;
        goodStrElements.shift();
    }
    return goodStrCount;
};

countGoodSubstrings('xyzzaz');
// N: B: we can solve this problem using hash map also;