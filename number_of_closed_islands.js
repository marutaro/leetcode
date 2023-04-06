/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols) {
            return false;
        }

        if (grid[r][c] === 1) {
            return true;
        }

        grid[r][c] = 1;

        const top = dfs(r + 1, c);
        const bottom = dfs(r - 1, c);
        const left = dfs(r, c - 1);
        const right = dfs(r, c + 1);

        return top && bottom && left && right;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 0) {
                if (dfs(row, col)) {
                    islands++;
                }
            }
        }
    }

    return islands;    
};
