/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    const MOD = 1000000007;
    let totalWays = 1;
    for (let orderNumber = 2; orderNumber <= n; orderNumber++) {
        totalWays = (totalWays * (2 * orderNumber - 1) * orderNumber) % MOD;
    }
    return totalWays;    
};
