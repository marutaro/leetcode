/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    const visited = new Set();

    // Find any island and mark its cells as 2 and set starting positions
    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 1) {
            return;
        }
        grid[r][c] = 2;
        queue.push([r, c]);
        visited.add(`${r},${c}`);
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    let found = false;
    for (let r = 0; r < rows; r++) {
        if (found) {
            break;
        }

        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                dfs(r, c);
                found = true;
                break;
            }
        }
    }

    // Perform a BFS starting from the cells marked as 2
    let distance = 0;
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift();

            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            for (const [dx, dy] of directions) {
                const new_row = row + dy;
                const new_col = col + dx;

                if (
                    new_row >= 0 &&
                    new_row < rows &&
                    new_col >= 0 &&
                    new_col < cols &&
                    !visited.has(`${new_row},${new_col}`)
                ) {
                    if (grid[new_row][new_col] === 1) {
                        return distance;
                    }

                    queue.push([new_row, new_col]);
                    visited.add(`${new_row},${new_col}`);
                }
            }   
        }
        distance++;
    }

    return -1;    
};
