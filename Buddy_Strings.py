class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:

        if len(s) != len(goal):
            return False
        
        if s == goal:
            # Check if there are duplicate characters in s
            if len(set(s)) < len(s):
                return True
            else:
                return False
        
        # Find the indices of the differing characters
        diff = []
        for i in range(len(s)):
            if s[i] != goal[i]:
                diff.append(i)
        
        # Check if there are exactly two differing characters
        if len(diff) != 2:
            return False
        
        # Check if swapping the chracters results in equality
        return s[diff[0]] == goal[diff[1]] and s[diff[1]] == goal[diff[0]]
