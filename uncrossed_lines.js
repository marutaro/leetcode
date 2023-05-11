/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const dp = new Array(n+1).fill(0);

    for (let i = 1; i <= m; i++) {
        let prev = 0;

        for (let j = 1; j <= n; j++) {
            const temp = dp[j];

            if (nums1[i-1] == nums2[j-1]) {
                dp[j] = prev + 1;
            } else {
                dp[j] = Math.max(dp[j], dp[j-1]);
            }
            
            prev = temp;
        }
    }

    return dp[n];    
};
