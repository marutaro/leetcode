/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) {
        return 0;
    }
    
    const n = matrix[0].length;
    const heights = new Array(n + 1).fill(0);
    let maxArea = 0;
    
    for (let row of matrix) {
        for (let i = 0; i < n; i++) {
            heights[i] = row[i] === '1' ? heights[i] + 1 : 0;
        }
        
        const stack = [-1];
        for (let i = 0; i < n + 1; i++) {
            while (heights[i] < heights[stack[stack.length - 1]]) {
                const h = heights[stack.pop()];
                const w = i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(i);
        }
    }
    
    return maxArea;    
};
