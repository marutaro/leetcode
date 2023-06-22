/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const n = prices.length;
    if (n < 2) {
        return 0;
    }

    let buy = -prices[0];
    let sell = 0;

    for (let i = 1; i < n; i++) {
        const temp = buy;
        buy = Math.max(buy, sell - prices[i]);
        sell = Math.max(sell, temp + prices[i] - fee);
    }

    return sell;    
};
