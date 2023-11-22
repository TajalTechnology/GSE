var reverseWords = function(s) {
    const stringArray = [];
    let len = s.length-1;

    while(len >=0){
        if((s[len] === ' ' && stringArray.length != 0 && stringArray[stringArray.length-1] !== ' ') || (s[len] !== ' ')){
             stringArray.push(s[len]); 
        }
        len--;
    }

    let [start, str] = [0,'']
    for (let index = 0; index < stringArray.length; index++) {
        if(stringArray[index] === ' '){
            reverse(start, index-1, stringArray);
            start = index+1;
        }
        if(index === stringArray.length-1){
            reverse(start, index, stringArray)
            console.log();
        } 
    }

    for (let index = 0; index < stringArray.length; index++) {
        str += stringArray[index];
    }

    function reverse(start, end, stringArray){
        while(start < end){
            let tem = stringArray[start];
            stringArray[start] = stringArray[end]
            stringArray[end] = tem;
            start++;
            end--;
        }
        return stringArray
    }
    
    return str.trim();
};

// console.log(reverse(0, 4, ["h","e","l","l","o"]));
console.log(reverseWords("       the sky          is       blue      "));