var isHappy = function(n) {

    const sumStore = {};
    function sumCalculate(n){

        let sum = 0;
        while(n >=  1){   
            let mod = n % 10;
            sum += (mod * mod);
            n = Math.floor(n/10);
        }

        if(sum === 1) return true;
        else if(sumStore[sum]) return false
        else{
            sumStore[sum] = true;
            return sumCalculate(sum);
        } 
    }
    return sumCalculate(n)
};

let n = 2
console.log(isHappy(n));