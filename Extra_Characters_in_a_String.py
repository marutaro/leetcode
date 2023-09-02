class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        max_len = len(s) + 1
        dp = [max_len] * max_len
        dp[0] = 0
        word_set = set(dictionary)

        for i in range(1, max_len):
            dp[i] = dp[i - 1] + 1

            for j in range(1, i + 1):
                if s[i-j:i] in word_set:
                    dp[i] = min(dp[i], dp[i-j])
        
        return dp[-1]
