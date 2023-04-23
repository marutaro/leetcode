class Solution:
    def minInsertions(self, s: str) -> int:
        n = len(s)
        dp = [0] * n

        for i in range(n - 2, -1, -1):
            prev = 0

            for j in range(i + 1, n):
                temp = dp[j]

                if s[i] == s[j]:
                    dp[j] = prev
                else:
                    dp[j] = min(dp[j], dp[j-1]) + 1
            
                prev = temp
        
        return dp[n-1]
