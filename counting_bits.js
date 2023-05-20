/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var dp = new Array(n + 1).fill(0);
    var sub = 1;

    for (var i = 1; i <= n; i++) {
        if (sub * 2 === i) {
            sub = i;
        }

        dp[i] = dp[i - sub] + 1;
    }

    return dp;    
};
