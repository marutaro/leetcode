class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:

        count = 0
        n = len(grid)

        row = {}

        for i in range(n):
            row[tuple(grid[i])] = 1 + row.get(tuple(grid[i]), 0)
        
        for c in range(n):
            col = [grid[i][c] for i in range(n)]
            if tuple(col) in row:
                count += row[tuple(col)]
        
        return count
        
        

        
