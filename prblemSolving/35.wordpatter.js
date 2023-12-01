var wordPattern = function(pattern, s) {
    let [store, str, patternIndex] = [{},"",0 ];

    for(let i=0; i<s.length; i++){

        if(s[i] === ' '){
            if(!store[str]){
                for (const key in store) {  
                    if(key !== str && store[key] === pattern[patternIndex]) return false
                } store[str] = pattern[patternIndex];
            }else if(store[str] !== pattern[patternIndex]) return false
            patternIndex++;
            str = '';
        }else str += s[i];

    }
    console.log(store[str]);
    return true;
};
// let pattern = "abba", s = "dog cat cat dog";
let pattern = "abba", s = "dog cat cat fish"
// let pattern = "aaaa", s = "dog cat cat dog"
// let pattern = "a", s = "a"
// let  pattern = "abc", s = "b c a"

console.log(wordPattern(pattern, s));