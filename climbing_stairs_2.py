class Solution:
    def climbStairs(self, n: int) -> int:
        # space O(1)
        if n <= 3: return n
        
        prev1 = 3 # previous 1 step back
        prev2 = 2 # previous 2 steps back
        cur = 0
        
        for i in range(3, n):
            cur = prev1 + prev2
            # update possible range to reach next stair one by one
            prev2 = prev1
            prev1 = cur
        return cur
