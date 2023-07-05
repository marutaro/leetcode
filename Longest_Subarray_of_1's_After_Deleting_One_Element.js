/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let max_length = 0;
    let last_zero = -1;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            left = last_zero + 1;
            last_zero = right;
        }

        max_length = Math.max(max_length, right - left);
    }

    return max_length;    
};
