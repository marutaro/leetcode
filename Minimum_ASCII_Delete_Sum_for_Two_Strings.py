class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        m, n = len(s1), len(s2)
        dp = [0] * (n + 1)

        for j in range(1, n + 1):
            dp[j] = dp[j - 1] + ord(s2[j - 1])
        
        for i in range(1, m + 1):
            prev = dp[0]
            dp[0] += ord(s1[i - 1])

            for j in range(1, n + 1):
                temp = dp[j]

                if s1[i - 1] == s2[j - 1]:
                    dp[j] = prev
                else:
                    dp[j] = min(dp[j] + ord(s1[i - 1]), dp[j - 1] + ord(s2[j - 1]))
                
                prev = temp
        
        return dp[n]
