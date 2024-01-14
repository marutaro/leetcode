class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False
        
        w1 = {}
        for c in word1:
            w1[c] = 1 + w1.get(c, 0)

        w2 = {}
        for c in word2:
            w2[c] = 1 + w2.get(c, 0)
        
        if w1.keys() != w2.keys():
            return False
        
        return sorted(w1.values()) == sorted(w2.values())
