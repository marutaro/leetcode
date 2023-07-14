/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let dp = {};
    let max_length = 0;

    for (let n of arr) {
        if (n - difference in dp) {
            dp[n] = dp[n - difference] + 1;
        } else {
            dp[n] = 1;
        }
        
        max_length = Math.max(max_length, dp[n]);
    }
    
    return max_length;    
};
