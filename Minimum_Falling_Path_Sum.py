class Solution:
    def minFallingPathSum(self, m: List[List[int]]) -> int:
        n = len(m)
        for r in range(1, n):
            for c in range(n):
                m[r][c] += min(
                    m[r - 1][max(0, c - 1)],
                    m[r - 1][c],
                    m[r - 1][min(n - 1, c + 1)]
                )
        
        return min(m[-1])
