class Solution {
public:
    int countPaths(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        int mod = 1000000007;
        std::vector<std::vector<int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        std::vector<std::vector<int>> dp(rows, std::vector<int>(cols, 0));

        int pathCount = 0;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                pathCount = (pathCount + dfs(r, c, grid, dp, directions, mod)) % mod;
            }
        }

        return pathCount;        
    }

private:
    int dfs(int r, int c, std::vector<std::vector<int>>& grid, std::vector<std::vector<int>>& dp,
            std::vector<std::vector<int>>& directions, int mod) {
        int rows = grid.size();
        int cols = grid[0].size();

        if (dp[r][c] > 0) {
            return dp[r][c];
        }

        int paths = 1;
        for (const auto& dir : directions) {
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
};
