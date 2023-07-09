/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let first_row_has_zero = false;
    let first_col_has_zero = false;

    // Check if the first row contains zero
    for (let c = 0; c < cols; c++) {
        if (matrix[0][c] === 0) {
            first_row_has_zero = true;
            break;
        }
    }

    // Check if the first column contains zero
    for (let r = 0; r < rows; r++) {
        if (matrix[r][0] === 0) {
            first_col_has_zero = true;
            break;
        }
    }

    // Use the first row and column as markers
    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (matrix[r][c] === 0) {
                matrix[r][0] = 0;
                matrix[0][c] = 0;
            }
        }
    }

    // Set the marked rows to zero
    for (let r = 1; r < rows; r++) {
        if (matrix[r][0] === 0) {
            for (let c = 1; c < cols; c++) {
                matrix[r][c] = 0;
            }
        }
    }

    // Set the marked columns to zero
    for (let c = 1; c < cols; c++) {
        if (matrix[0][c] === 0) {
            for (let r = 1; r < rows; r++) {
                matrix[r][c] = 0;
            }
        }
    }

    // Set the first row to zero if needed
    if (first_row_has_zero) {
        for (let c = 0; c < cols; c++) {
            matrix[0][c] = 0;
        }
    }

    // Set the first column to zero if needed
    if (first_col_has_zero) {
        for (let r = 0; r < rows; r++) {
            matrix[r][0] = 0;
        }
    }

    return matrix;    
};
