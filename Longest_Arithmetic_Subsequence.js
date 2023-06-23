/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const n = nums.length;
    if (n <= 2) {
        return n;
    }

    const dp = {};
    let longest = 1;

    for (let i = 0; i < n; i++) {
        dp[i] = {};

        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            dp[i][diff] = (dp[j][diff] || 1) + 1;
            longest = Math.max(longest, dp[i][diff]);
        }
    }

    return longest;    
};
