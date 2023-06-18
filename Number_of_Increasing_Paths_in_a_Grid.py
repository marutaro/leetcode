class Solution:
    def countPaths(self, grid):
        rows, cols = len(grid), len(grid[0])
        mod = 10 ** 9 + 7
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        dp = [[0] * cols for _ in range(rows)]

        def dfs(r, c):
            if dp[r][c]:
                return dp[r][c]
            
            paths = 1

            for dr, dc in directions:
                prev_r, prev_c = r + dr, c + dc
                if (0 <= prev_r < rows and
                0 <= prev_c < cols and
                grid[prev_r][prev_c] < grid[r][c]):

                    paths += dfs(prev_r, prev_c) % mod
            
            dp[r][c] = paths

            return paths

        path_count = 0
        for r in range(rows):
            for c in range(cols):
                path_count += dfs(r, c)
        
        return path_count % mod
