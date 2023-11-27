var convert = function(s, numRows) {

    const result = ['P']

    let loop = 1;
    let indexParams =  numRows + 1;
    let lastIndex = s.length-numRows;
    for (let index = 1; index < s.length; index++) {
        if((index % (numRows + 1)) === 0){

            result[loop] = s[index];
            loop++;
        }else if(( index % (numRows - 1)) === 0 && ( index % ((numRows - 1)*2)) !== 0){
            result[lastIndex] = s[index];
            lastIndex++
        }else {
            result[indexParams] = s[index];
            indexParams++;
        }
    }
    let str = ''
    for (let index = 0; index < result.length; index++) {
        str += result[index];
    }
    return str;
};

console.log(convert("PAYPALISHIRING", 4));
// "PAYPALISHIRING", 3