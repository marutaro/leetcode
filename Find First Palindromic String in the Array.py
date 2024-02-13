
# Solution 1
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:

        for word in words:
            if word == word[::-1]:
                return word

        return ""


# Solution 2
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        
        for word in words:
            left = 0
            right = len(word) - 1

            while word[left] == word[right]:
                left += 1
                right -= 1
                if left >= right:
                    return word

        return ""
