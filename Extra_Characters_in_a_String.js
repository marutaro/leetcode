/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const maxLen = s.length + 1;
    const dp = new Array(maxLen).fill(maxLen);
    
    dp[0] = 0;
    const wordSet = new Set(dictionary);
    
    for (let i = 1; i < maxLen; i++) {
        dp[i] = dp[i - 1] + 1;
        
        for (let length = 1; length <= i; length++) {
            const substring = s.substring(i - length, i);
            if (wordSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[i - length]);
            }
        }
    }
    
    return dp[maxLen - 1];    
};
