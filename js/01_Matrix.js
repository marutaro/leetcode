/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }

    while (queue.length > 0) {
        const [row, col] = queue.shift();

        for (const [dr, dc] of directions) {
            const new_row = row + dr;
            const new_col = col + dc;

            if (new_row >= 0 && new_row < rows && new_col >= 0 && new_col < cols && mat[new_row][new_col] > mat[row][col] + 1) {
                mat[new_row][new_col] = mat[row][col] + 1;
                queue.push([new_row, new_col]);
            }
        }
    }

    return mat;    
};
