var maxProfit = function(prices) {
    let profit = 0;
    for(let i =0; i< prices.length; i++){
        if(prices[i] < prices[i+1]){
            console.log('hello');
            profit = profit + (prices[i+1] - prices[i]);
            i++;
        }
    }
    return profit;
 };

 console.log(maxProfit([7,1,5,3,6,4]));