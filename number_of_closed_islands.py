class Solution:
    def closedIsland(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        islands = 0

        def dfs(r, c):
            if r < 0 or c < 0 or r >= rows or c >= cols:
                return False
            
            if grid[r][c] == 1:
                return True
            
            grid[r][c] = 1
            
            top = dfs(r+1, c)
            bottom = dfs(r-1, c)
            left = dfs(r, c-1)
            right = dfs(r, c+1)

            return top and bottom and left and right

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 0:
                    if dfs(row, col):
                        islands += 1
        
        return islands
