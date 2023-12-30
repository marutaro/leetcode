class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        chars = {}

        for word in words:
            for i in range(len(word)):
                chars[word[i]] = 1 + chars.get(word[i], 0)
        
        divider = len(words)

        for freq in chars.values():
            if freq % divider != 0:
                return False
        
        return True