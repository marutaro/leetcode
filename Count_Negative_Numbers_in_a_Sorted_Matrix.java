class Solution {
    public int countNegatives(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int count = 0;

        // Start from the top-right corner of the matrix
        int row = 0;
        int col = cols - 1;

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
    }
}
