class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        idx = [0] * 26
        res = -1

        for i in range(len(s)):
            if idx[ord(s[i]) - ord("a")] == 0:
                idx[ord(s[i]) - ord("a")] = i + 1
            res = max(res, i - idx[ord(s[i]) - ord("a")])
        
        return res
