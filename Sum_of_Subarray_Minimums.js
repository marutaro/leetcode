/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const stack = []; // keep index for the latest smaller values
    const res = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }

        const j = stack.length ? stack[stack.length - 1] : -1;
        if (j == -1) {
            res[i] = 0
        } else {
            res[i] = res[j]
        }

        res[i] += (i - j) * arr[i];

        stack.push(i);
    }

    return res.reduce((sum, val) => sum + val, 0) % (10**9 + 7);    
};
