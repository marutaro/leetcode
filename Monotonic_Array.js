/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const n = nums.length;
    if (n === 1) return true;

    let isInc = true;
    let isDec = true;

    for (let i = 1; i < n; i++) {
        if (!isInc && !isDec) {
            return false;
        }

        if (nums[i] < nums[i - 1]) {
            isInc = false;
        }
        if (nums[i] > nums[i - 1]) {
            isDec = false;
        }
    }

    return isInc || isDec;    
};
