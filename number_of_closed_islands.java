class Solution {
    public int closedIsland(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
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

    private boolean dfs(int r, int c, int[][] grid) {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) {
            return false;
        }

        if (grid[r][c] == 1) {
            return true;
        }

        grid[r][c] = 1;

        boolean top = dfs(r + 1, c, grid);
        boolean bottom = dfs(r - 1, c, grid);
        boolean left = dfs(r, c - 1, grid);
        boolean right = dfs(r, c + 1, grid);

        return top && bottom && left && right;
    }
}
