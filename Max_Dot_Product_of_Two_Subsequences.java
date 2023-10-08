class Solution {
    public int maxDotProduct(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;

        if (m < n) {
            return maxDotProduct(nums2, nums1);
        }

        long[] dp = new long[n + 1];
        Arrays.fill(dp, Integer.MIN_VALUE);

        for (int i = 0; i < m; i++) {
            long prev = 0;
            for (int j = 0; j < n; j++) {
                long tmp = dp[j + 1];
                dp[j + 1] = Math.max(prev + nums1[i] * nums2[j], Math.max(nums1[i] * nums2[j], Math.max(dp[j], dp[j + 1])));
                prev = tmp;
            }
        }

        return (int)dp[n];
    }
}
