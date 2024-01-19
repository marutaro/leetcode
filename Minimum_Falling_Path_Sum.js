/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(m) {
        const n = m.length;
        for (let r = 1; r < n; ++r) {
            for (let c = 0; c < n; ++c) {
                m[r][c] += Math.min(
                    m[r - 1][Math.max(0, c - 1)],
                    m[r - 1][c],
                    m[r - 1][Math.min(n - 1, c + 1)]
                );
            }
        }
        return Math.min(...m[n - 1]); 
};
