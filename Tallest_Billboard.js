/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
    const dp = {0:0};

    for (const rod of rods) {
        const dpEntries = Object.entries(dp);

        for (const [diff, highest] of dpEntries) {
            const leftDiff = parseInt(diff) + rod;
            dp[leftDiff] = Math.max(dp[leftDiff] || 0, highest + rod);

            const rightRod = highest - parseInt(diff) + rod;
            const rightDiff = Math.abs(highest - rightRod);
            dp[rightDiff] = Math.max(dp[rightDiff] || 0, Math.max(highest, rightRod));
        }
    }

    return dp[0];    
};
