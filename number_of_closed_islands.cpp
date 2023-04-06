class Solution {
public:
    int closedIsland(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        int islands = 0;

        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                if (grid[row][col] == 0) {
                    if (dfs(row, col, grid)) {
                        islands++;
                    }
                }
            }
        }

        return islands;
    }
private:
    bool dfs(int r, int c, vector<vector<int>>& grid) {
        if (r < 0 || c < 0 || r >= grid.size() || c >= grid[0].size()) {
            return false;
        }

        if (grid[r][c] == 1) {
            return true;
        }

        grid[r][c] = 1;

        bool top = dfs(r + 1, c, grid);
        bool bottom = dfs(r - 1, c, grid);
        bool left = dfs(r, c - 1, grid);
        bool right = dfs(r, c + 1, grid);

        return top && bottom && left && right;
    }
};
