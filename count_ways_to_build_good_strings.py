class Solution:
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        dp = [1] + [0] * high
        mod = 10 ** 9 + 7

        for i in range(1, high + 1):
            if i - zero >= 0:
                dp[i] += dp[i-zero]
            
            if i - one >= 0:
                dp[i] += dp[i-one]
            
            dp[i] %= mod
        
        return sum(dp[low:high+1]) % mod
