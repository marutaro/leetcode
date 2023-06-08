/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    
    // Start from the top-right corner of the matrix
    let row = 0;
    let col = cols - 1;
    
    while (row < rows && col >= 0) {
        // If the current element is negative
        if (grid[row][col] < 0) {
            // Increment the count by the number of negative elements in the current column
            count += rows - row;
            col--;
        } else {
            // Move to the next row
            row++;
        }
    }
    
    return count;    
};
