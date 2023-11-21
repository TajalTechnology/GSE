var hIndex = function(citations) {
    citations.sort((a,b)=>b-a);
    const len = citations.length;
    let result = 0;

    for (let index = 0; index < len; index++) {
        if((citations[index]) >= (index+1) ) result = index+1;
        else break;
    }
    return result;
};

console.log(hIndex([11,15]));