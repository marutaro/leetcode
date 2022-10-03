class Solution:
    def lengthOfLastWord(self, s: str) -> int:                
        # return len(s.split()[-1])
        
        
        idx, length = len(s) - 1, 0
        
        while s[idx] == " ":
            idx -= 1
            
        while idx >= 0 and s[idx] != " ":
            length += 1
            idx -= 1
        
        return length
