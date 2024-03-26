/**
 * You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

 * To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

 * If k > 0, replace the ith number with the sum of the next k numbers.
 * If k < 0, replace the ith number with the sum of the previous k numbers.
 * If k == 0, replace the ith number with 0.
 * As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

 * Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
 */

var decrypt = function(code, k) {
    const result = [];
    for (let index = 0; index < code.length; index++) {
        let [count, sum] = [0, 0];

        if (k === 0) result.push(0);
        else {
            let kIndex, loops
            if(k > 0){
                kIndex = index + 1;
                loops = kIndex + k;
            } 
            else if (k < 0){
                kIndex = code.length - (k * -1) + index;
                loops = kIndex + (k * -1);
            }
            for (let j = kIndex; j < loops; j++) {
                console.log(kIndex, j, j % (code.length));
                count ++;
                sum += code[j % (code.length)]
            }
            result.push(sum)
            sum=0;
            count=0;
        }
    }
    return result;
};

// let code = [5,7,1,4], k = 3;
let code = [2,4,9,3], k = -2 // [12,5,6,13]
// let code = [1,2,3,4], k = 0; // [0,0,0,0]
// let code = [10,5,7,7,3,2,10,3,6,9,1,6], k=-4 // [22,26,22,28,29,22,19,22,18,21,28,19]
decrypt(code, k);