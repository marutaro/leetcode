class Solution {
    public int countPaths(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int mod = (int) Math.pow(10, 9) + 7;
        int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        int[][] dp = new int[rows][cols];
        for (int[] row : dp) {
            Arrays.fill(row, 0);
        }

        int pathCount = 0;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                pathCount = (pathCount + dfs(r, c, grid, dp, directions, mod)) % mod;
            }
        }

        return pathCount;        
    }

    private int dfs(int r, int c, int[][] grid, int[][] dp, int[][] directions, int mod) {
        int rows = grid.length;
        int cols = grid[0].length;

        if (dp[r][c] > 0) {
            return dp[r][c];
        }

        int paths = 1;
        for (int[] dir : directions) {
            int dr = dir[0];
            int dc = dir[1];
            int prevR = r + dr;
            int prevC = c + dc;

            if (prevR >= 0 && prevR < rows && prevC >= 0 && prevC < cols && grid[prevR][prevC] < grid[r][c]) {
                paths = (paths + dfs(prevR, prevC, grid, dp, directions, mod)) % mod;
            }
        }

        dp[r][c] = paths;
        return paths;
    }    
}
