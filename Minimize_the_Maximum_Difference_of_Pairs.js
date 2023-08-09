/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((a, b) => a - b);

    function isFeasible(diff) {
        let count = 0;
        let i = 0;
        while (i < nums.length - 1 && count < p) {
            if (nums[i + 1] - nums[i] <= diff) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }
        return count >= p;
    }

    let left = 0;
    let right = nums[nums.length - 1] - nums[0];

    while (left < right) {
        let midDiff = Math.floor((left + right) / 2);
        if (isFeasible(midDiff)) {
            right = midDiff;
        } else {
            left = midDiff + 1;
        }
    }

    return left;    
};
