/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    const n = obstacles.length;
    const res = Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        let left = 0;
        let right = stack.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (stack[mid] <= obstacles[i]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        res[i] = left + 1;

        if (left == stack.length) {
            stack.push(obstacles[i]);
        } else {
            stack[left] = obstacles[i];
        }
    }

    return res;    
};
