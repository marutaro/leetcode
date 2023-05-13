/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    let dp = new Array(high+1).fill(0);
    dp[0] = 1;
    let mod = 1000000007;

    for (let i = 1; i <= high; i++) {
        if (i - zero >= 0) {
            dp[i] += dp[i-zero];
        }
        
        if (i - one >= 0) {
            dp[i] += dp[i-one];
        }
        
        dp[i] %= mod;
    }
    
    let res = 0;
    for (let i = low; i <= high; i++) {
        res += dp[i];
        res %= mod;
    }
    
    return res;    
};
