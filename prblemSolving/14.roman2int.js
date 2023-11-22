var romanToInt = function(s) {

    const value = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }
    let [sum, minus] = [0, false];

    for (let index = s.length-1; index >= 0; index--) {
        if(!minus)sum += value[s[index]]
        else sum -= value[s[index]]
        if(value[s[index]] > value[s[index - 1]]) minus = true
        else minus = false;
    }

    return sum;
    
};

console.log(romanToInt("III"));