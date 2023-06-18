/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const mod = 10 ** 9 + 7;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    function dfs(r, c) {
        if (dp[r][c]) {
            return dp[r][c];
        }

        let paths = 1;

        for (const [dr, dc] of directions) {
            const prev_r = r + dr;
            const prev_c = c + dc;
            if (
                prev_r >= 0 && prev_r < rows &&
                prev_c >= 0 && prev_c < cols &&
                grid[prev_r][prev_c] < grid[r][c]
            ) {
                paths += dfs(prev_r, prev_c) % mod;
            }
        }

        dp[r][c] = paths;

        return paths;
    }

    let path_count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            path_count += dfs(r, c);
        }
    }

    return path_count % mod;    
};
