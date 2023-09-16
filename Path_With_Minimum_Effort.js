/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const rows = heights.length, cols = heights[0].length;
    const curEffort = Array.from(Array(rows), () => Array(cols).fill(Infinity));
    const minHeap = [[0, 0, 0]];  // [effort, row, col]
    
    curEffort[0][0] = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    while (minHeap.length > 0) {
        const [effort, row, col] = minHeap.shift();
        
        if (effort > curEffort[row][col]) continue;
        
        if (row === rows - 1 && col === cols - 1) return effort;
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr, newCol = col + dc;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                const newEffort = Math.max(effort, Math.abs(heights[row][col] - heights[newRow][newCol]));
                if (newEffort < curEffort[newRow][newCol]) {
                    curEffort[newRow][newCol] = newEffort;
                    minHeap.push([newEffort, newRow, newCol]);
                    minHeap.sort((a, b) => a[0] - b[0]);
                }
            }
        }
    }
    return -1;
};
