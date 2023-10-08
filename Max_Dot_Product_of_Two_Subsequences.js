/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
        const m = nums1.length;
        const n = nums2.length;

        if (m < n) {
            return maxDotProduct(nums2, nums1);
        }

        const dp = new Array(n + 1).fill(Number.NEGATIVE_INFINITY);

        for (let i = 0; i < m; i++) {
            let prev = 0;
            for (let j = 0; j < n; j++) {
                const tmp = dp[j + 1];
                dp[j + 1] = Math.max(prev + nums1[i] * nums2[j], nums1[i] * nums2[j], dp[j], dp[j + 1]);
                prev = tmp;
            }
        }

        return dp[n];    
};
