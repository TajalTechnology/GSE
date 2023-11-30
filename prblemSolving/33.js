var minWindow = function(s, t) {
    if(s.length < t.length) return "";
    const charIndex = {};
    const match = {};

    for(let index = 0; index<t.length; index++) charIndex[index] = t[index];

    for (let index = 0; index < s.length; index++) {
        for (const key in charIndex) {
            if(charIndex[key] === s[index]) match[index] = s[index];
        }
    }

    console.log(match);


    let [startIndex, endIndex] = [undefined, undefined]

    for (const key in match) {
        match[match[key]] = Number(key);
        delete match[key]
    }

    for (const key in match) {
        if(!startIndex || startIndex > match[key]) startIndex = match[key];
        if(!endIndex || endIndex < match[key]) endIndex = match[key]
    }

    let str = "";
    for (let index = startIndex; index < endIndex+1; index++) {
       str += s[index] 
    }

    return str;
};
// let s = "a", t = "aa";
let s = "ADOBECODEBANC", t = "ABC"
// let s="aa",t="aa";

console.log(minWindow(s,t));