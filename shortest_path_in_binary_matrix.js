/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    // Check if the starting or ending cell is blocked
    if (grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) {
        return -1;
    }
    
    const n = grid.length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];

    // Use a queue for BFS
    const queue = [[0, 0, 1]]; // [row, column, distance]
    grid[0][0] = 1; // Mark the starting cell as visited

    // BFS
    while (queue.length) {
        const [row, col, distance] = queue.shift();

        if (row === n - 1 && col === n - 1) {
            return distance; // Reached the ending cell
        }
        
        // Explore all possible neighbors
        for (const [dx, dy] of directions) {
            const new_row = row + dx;
            const new_col = col + dy;

            // Check if the neighbor is within the grid and not blocked
            if (new_row >= 0 && new_row < n && new_col >= 0 && new_col < n && grid[new_row][new_col] === 0) {
                queue.push([new_row, new_col, distance + 1]);
                grid[new_row][new_col] = 1;
            }
        }
    }
    
    return -1;    
};
