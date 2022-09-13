class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = res = 0
        freq = 0
        chars = {}
        
        for right in range(len(s)):
            chars[s[right]] = 1 + chars.get(s[right], 0)
            freq = max(freq, chars[s[right]])
            
            while right - left + 1 - freq > k:
                chars[s[left]] -= 1
                left += 1
            
            res = max(res, right - left + 1)
        
        return res
