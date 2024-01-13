class Solution:
    def minSteps(self, s: str, t: str) -> int:
        s_count = {}

        for c in s:
            s_count[c] = 1 + s_count.get(c, 0)
        
        change = 0
        for c in t:
            if c not in s_count or s_count[c] == 0:
                change += 1
            else:
                s_count[c] -= 1
        
        return change
