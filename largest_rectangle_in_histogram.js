/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
        const stack = [-1];
        let max_area = 0;

        for (let i = 0; i < heights.length; i++) {
            while (stack[stack.length - 1] !== -1 && heights[i] <= heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()];
                const width = i - stack[stack.length - 1] - 1;
                max_area = Math.max(max_area, height * width);
            }
            stack.push(i);
        }

        while (stack[stack.length - 1] !== -1) {
            const height = heights[stack.pop()];
            const width = heights.length - stack[stack.length - 1] - 1;
            max_area = Math.max(max_area, height * width);
        }

        return max_area;
};
