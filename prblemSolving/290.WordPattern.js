var wordPattern = function(pattern, s) {
    let [str, count, store] = ['', 0, Object.create(null)]

    for (let index = 0; index < s.length; index++) {

        if(s[index] === ' ' || index === s.length-1){
            if(index === s.length-1) str += s[index];
            if(!store[str]){
                for (const key in store) if(store[key] === pattern[count]) return false;
                store[str] = pattern[count]; 
            } else if(store[str] && store[str] !== pattern[count]) return false;
            count++;
            str = '';
        }else str += s[index]

        // push last string
        if(index === s.length-1 && store[str] !== pattern[count]) return false;
    }

    return true;
};

// let pattern = "abba", s = "dog cat cat dog";
// let pattern = "abba", s = "dog cat cat fish";
// let pattern = "aaaa", s = "dog cat cat dog"
// let pattern = "a", s = "a"
let pattern = "abba", s = "dog constructor constructor dog"


console.log(wordPattern(pattern, s));