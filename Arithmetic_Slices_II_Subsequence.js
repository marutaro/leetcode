/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    let total = 0;

    const dp = new Array(n).fill().map(() => new Map());

    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            const diff = nums[i] - nums[j];

            if (dp[j].has(diff)) {
                dp[i].set(diff, (dp[i].get(diff) || 0) + dp[j].get(diff));
                total += dp[j].get(diff);
            }

            dp[i].set(diff, (dp[i].get(diff) || 0) + 1);
        }
    }

    return total;    
};
