class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        count = 0
        
        # Start from the top-right corner of the matrix
        row = 0
        col = cols - 1
        
        while row < rows and col >= 0:
            # If the current element is negative
            if grid[row][col] < 0:
                # Increment the count by the number of negative elements in the current column
                count += rows - row
                col -= 1
            else:
                # Move to the next row
                row += 1
        
        return count
