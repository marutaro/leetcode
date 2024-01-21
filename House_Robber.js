// O(n) time, O(n) space
var rob = function(nums) {
    const n = nums.length;

    if (n === 1) {
        return nums[0];
    }

    const dp = Array(n).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[n - 1];    
};

// O(n) time, O(1) space
var rob = function(nums) {
    let prevRob = 0;
    let maxRob = 0;

    for (const curValue of nums) {
        const temp = Math.max(maxRob, prevRob + curValue);
        prevRob = maxRob;
        maxRob = temp;
    }

    return maxRob;    
};
