class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])

        def dfs(r, c):
            if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != 1:
                return
            
            grid[r][c] = 2
            for dr, dc in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                dfs(r + dr, c + dc)

        for row in range(rows):
            dfs(row, 0) # start from first column
            dfs(row, cols - 1) # start from last column
        
        for col in range(cols):
            dfs(0, col) # start from first row
            dfs(rows - 1, col) # start from last row
        
        return sum(grid[r][c] == 1 for r in range(rows) for c in range(cols))
