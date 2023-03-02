class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        s_idx = t_idx = 0

        while s_idx < len(s) and t_idx < len(t):
            if s[s_idx] == t[t_idx]:
                s_idx += 1
            t_idx += 1
        
        return s_idx == len(s)
