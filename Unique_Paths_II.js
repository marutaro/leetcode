/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (!obstacleGrid || obstacleGrid[0][0] === 1) {
        return 0;
    }

    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    const dp = new Array(cols).fill(0);
    dp[0] = 1;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (obstacleGrid[r][c] === 1) {
                dp[c] = 0;
            } else {
                if (c > 0) {
                    dp[c] += dp[c - 1];
                }
            }
        }
    }

    return dp[cols - 1];    
};
