/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const n = nums.length;
    const max_diff = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        max_diff[i] = nums[i];
        for (let j = i + 1; j < n; j++) {
            max_diff[j] = Math.max(nums[i] - max_diff[j], nums[j] - max_diff[j - 1]);
        }
    }

    return max_diff[n - 1] >= 0;    
};
