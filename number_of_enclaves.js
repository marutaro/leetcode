/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 1) {
            return;
        }

        grid[r][c] = 2;
        const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (const [dr, dc] of neighbors) {
            dfs(r + dr, c + dc);
        }
    }

    for (let row = 0; row < rows; row++) {
        dfs(row, 0); // start from first column
        dfs(row, cols - 1); // start from last column
    }

    for (let col = 0; col < cols; col++) {
        dfs(0, col); // start from first row
        dfs(rows - 1, col); // start from last row
    }

    return grid.flat().filter(val => val === 1).length;    
};
