var candy = function(ratings) {
    const result = [1,];
    for (let index = 0; index < ratings.length-1; index++) {
        if(ratings[index] < ratings[index+1]) result[index+1] = result[index]+1;
        else result[index+1] = 1
    }

    let sum = 0;
    for (let index = ratings.length-1; index >=0; index--) {
        sum += result[index]
        if((ratings[index] < ratings[index - 1]) && (result[index] >= result[index - 1])) result[index - 1] = result[index]+1;
    }

    return sum



};

console.log(candy([1,3,4,5,2]));
// [1,3,2,2,1]
//[1,2,2]
// [1,2,87,87,87,2,1]
// [1,3,4,5,2] = 11