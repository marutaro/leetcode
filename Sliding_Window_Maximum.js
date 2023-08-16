/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = [];
    let left = 0;
    let right = 0;
    const q = [];

    while (right < nums.length) {
        while (q.length > 0 && nums[right] > nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(right);

        if (left > q[0]) {
            q.shift();
        }

        if (right + 1 >= k) {
            res.push(nums[q[0]]);
            left++;
        }
        right++;
    }

    return res;    
};
