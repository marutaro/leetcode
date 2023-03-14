class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        row = len(triangle)
        memo = triangle[row-1].copy()

        for r in range(row-2, -1, -1):
            for c in range(r+1):
                memo[c] = min(memo[c], memo[c+1]) + triangle[r][c]
        
        return memo[0]
                
