/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {

    if (!heights.length) {
        return [];
    }
    
    const rows = heights.length;
    const cols = heights[0].length;

    function bfs(queue, matrix) {
        const visited = Array.from({length: rows}, () => Array(cols).fill(false));
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        while (queue.length) {
            const [row, col] = queue.shift();
            visited[row][col] = true;

            // check all adjacent points
            for (const [dx, dy] of directions) {
                const newRow = row + dx;
                const newCol = col + dy;

                // if the adjacent point is not visited and is higher or at the same height, add the new position to the queue
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited[newRow][newCol] && matrix[newRow][newCol] >= matrix[row][col]) {
                    queue.push([newRow, newCol]);
                    visited[newRow][newCol] = true;
                }
            }
        }
        
        return visited;
    }        

    // Initialize the Pacific and Atlantic BFS queues with border points
    const pacificQueue = Array.from({length: rows}, (_, i) => [i, 0]).concat(Array.from({length: cols - 1}, (_, i) => [0, i + 1]));
    const atlanticQueue = Array.from({length: rows}, (_, i) => [i, cols - 1]).concat(Array.from({length: cols - 1}, (_, i) => [rows - 1, i]));

    // Use BFS to mark all points reachable from the Pacific and Atlantic Oceans
    const pacificReachable = bfs(pacificQueue, heights);
    const atlanticReachable = bfs(atlanticQueue, heights);

    // Find the intersection of the two reachable sets
    const res = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacificReachable[i][j] && atlanticReachable[i][j]) {
                res.push([i, j]);
            }
        }
    }
    
    return res;
};
