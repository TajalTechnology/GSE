function canCompleteCircuit(gas, cost) {
    let [sum, count, start, loop] = [0,0,0,0];
    for(let i = 0; i<gas.length; i++){
        if(count === gas.length) return start;

        if((gas[i]+sum) >= cost[i]){
            sum = gas[i]+sum - cost[i];
            count++;
        }else {
            start = i+1;
            sum = 0;
            count = 0;
        } 
        if(i === gas.length -1){
            i = -1;
            loop++;

            if(loop > 1) break;
           
        } 
    }
    return -1;
};

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));

// [1,2,3,4,5], [3,4,5,1,2]
// [2,3,4], [3,4,3]