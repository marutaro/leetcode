class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set("aeiou")
        max_vowels = cur_vowels = 0

        for right in range(len(s)):
            if s[right] in vowels:
                cur_vowels += 1
            
            if right >= k and s[right - k] in vowels:
                cur_vowels -= 1
            
            max_vowels = max(max_vowels, cur_vowels)

            if max_vowels == k:
                return k
        
        return max_vowels
