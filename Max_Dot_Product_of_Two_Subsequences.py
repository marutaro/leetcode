class Solution:
    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:
        m, n = len(nums1), len(nums2)

        if m < n:
            return self.maxDotProduct(nums2, nums1)
        
        # dp[j] represents the maximum dot product obtained using the current element of nums1
        # and the first j elements of nums2
        dp = [float("-inf")] * (n + 1)

        for i in range(m):
            prev = 0
            for j in range(n):
                tmp = dp[j + 1]
                dp[j + 1] = max(prev + nums1[i] * nums2[j], nums1[i] * nums2[j], dp[j], dp[j + 1])
                prev = tmp
        
        return dp[-1]
