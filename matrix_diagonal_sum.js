/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let last_row = mat.length - 1;
    let total = 0;

    for (let i = 0; i < mat.length; i++) {
        total += mat[i][i];
        total += mat[last_row - i][i];

        if (i == last_row - i) {
            total -= mat[i][i];
        }
    }

    return total;    
};
