class Solution:
    def longestArithSeqLength(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 2:
            return n
        
        dp = {}
        longest = 1

        for i in range(n):
            dp[i] = {}

            for j in range(i):
                diff = nums[i] - nums[j]
                dp[i][diff] = dp[j].get(diff, 1) + 1
                longest = max(longest, dp[i][diff])
        
        return longest
