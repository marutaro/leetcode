class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        dp = {}
        max_length = 0

        for n in arr:
            if n - difference in dp:
                dp[n] = dp[n - difference] + 1
            else:
                dp[n] = 1
            
            max_length = max(max_length, dp[n])
        
        return max_length
