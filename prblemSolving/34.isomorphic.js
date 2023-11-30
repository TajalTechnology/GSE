var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    const hash={}

    for(let i=0; i<s.length; i++){

        if(!hash[s[i]]){
            for (const key in hash) if( t[i] === hash[key] && key !== s[i]) return false
            hash[s[i]] = t[i]
        }  else if(hash[s[i]] !== t[i]) return false;
    }
    return true
};
let s = "badc", t="baba";
// let s = "paper", t="title"
console.log(isIsomorphic(s,t));