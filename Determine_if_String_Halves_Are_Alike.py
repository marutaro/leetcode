class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        left = left_vowels = right_vowels = 0
        right = len(s) - 1
        vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}

        while left < right:
            if s[left] in vowels:
                left_vowels += 1
            if s[right] in vowels:
                right_vowels += 1
            
            left += 1
            right -= 1
        
        return left_vowels == right_vowels
