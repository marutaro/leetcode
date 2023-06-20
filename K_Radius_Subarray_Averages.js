/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    const n = nums.length;
    const avgs = new Array(n).fill(-1);
    const target_length = k * 2 + 1;
    let total = nums.slice(0, target_length).reduce((acc, val) => acc + val, 0);

    for (let c = k; c < n; c++) {
        if (c + k < n) {
            avgs[c] = Math.floor(total / target_length);
            if (c + k + 1 >= n) {
                break;
            }
            total -= nums[c - k];
            total += nums[c + k + 1];
        }
    }

    return avgs;    
};
