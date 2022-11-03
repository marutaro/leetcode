class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
    
        res = 0
        uniq = set(s)
        
        for c in uniq:
            start = s.find(c) # search a character from the beginning
            end = s.rfind(c) # search a character from the last index
            
            if start < end:
                res += len(set(s[start+1:end]))
        
        return res
